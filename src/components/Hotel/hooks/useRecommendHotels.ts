import { getRecommentHotels } from '@/remote/hotel'
import { useQuery } from 'react-query'

const useRecommendHotels = ({ hotelIds }: { hotelIds: string[] }) => {
  return useQuery(
    ['recommendHotels', JSON.stringify(hotelIds)],
    () => getRecommentHotels(hotelIds),
    {
      enabled: hotelIds.length > 0,
    },
  )
}

export default useRecommendHotels
