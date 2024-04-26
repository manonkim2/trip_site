import { COLLECTIONS } from '@/constants'
import { Hotel } from '@/models/hotel'
import {
  collection,
  getDocs,
  limit,
  query,
  QuerySnapshot,
  startAfter,
} from 'firebase/firestore'
import { store } from './firebase'

const getHotels = async (pageParams?: QuerySnapshot<Hotel>) => {
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
      }) as Hotel,
  )

  const lastVisible = hotelSnapshot.docs[hotelSnapshot.docs.length - 1]

  return { items, lastVisible }
}

export default getHotels
