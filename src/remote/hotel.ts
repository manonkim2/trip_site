import { COLLECTIONS } from '@/constants'
import { IHotel } from '@/models/hotel'
import {
  collection,
  doc,
  documentId,
  getDoc,
  getDocs,
  limit,
  query,
  QuerySnapshot,
  startAfter,
  where,
} from 'firebase/firestore'
import { store } from './firebase'

export const getHotels = async (pageParams?: QuerySnapshot<IHotel>) => {
  const hotelsQuery =
    pageParams == null
      ? query(collection(store, COLLECTIONS.HOTEL), limit(10))
      : query(
          collection(store, COLLECTIONS.HOTEL),
          startAfter(pageParams),
          limit(10),
        )

  const hotelSnapshot = await getDocs(hotelsQuery)

  const items = hotelSnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as IHotel,
  )

  const lastVisible = hotelSnapshot.docs[hotelSnapshot.docs.length - 1]

  return { items, lastVisible }
}

export const getHotel = async (id: string) => {
  const snapshot = await getDoc(doc(store, COLLECTIONS.HOTEL, id))

  return {
    id,
    ...snapshot.data(),
  } as IHotel
}

export const getRecommentHotels = async (hotelIds: string[]) => {
  const recommendQuery = query(
    collection(store, COLLECTIONS.HOTEL),
    where(documentId(), 'in', hotelIds),
  )

  const snapshot = await getDocs(recommendQuery)

  return snapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as IHotel,
  )
}
