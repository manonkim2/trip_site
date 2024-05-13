// 1. 전체호텔 데이터 불러옴
// 2. 전체 호텔 루프
// 3. 호텔 + 추천호텔 아이디 5개

import Button from '@/components/shared/Button'
import { COLLECTIONS } from '@/constants'
import { store } from '@/remote/firebase'
import { collection, getDocs, writeBatch } from 'firebase/firestore'

const RECOMMEND_HOTEL = 5

const RecommendHotelButton = () => {
  const handleButtonClick = async () => {
    const batch = writeBatch(store)

    //전체 호텔 데이터
    const snapshot = await getDocs(collection(store, COLLECTIONS.HOTEL))

    snapshot.docs.forEach((hotel) => {
      const recommendHotelList = []

      for (let doc of snapshot.docs) {
        if (recommendHotelList.length === RECOMMEND_HOTEL) {
          break
        }

        if (doc.id !== hotel.id) {
          recommendHotelList.push(doc.id)
        }
      }

      batch.update(hotel.ref, {
        recommendHotels: recommendHotelList,
      })
    })

    await batch.commit()

    alert('update success')
  }

  return <Button onClick={handleButtonClick}>추천호텔 데이터 추가</Button>
}

export default RecommendHotelButton
