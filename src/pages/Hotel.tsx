import Carousel from '@/components/Hotel/Carousel'
import Contents from '@/components/Hotel/Contents'
import useHotel from '@/components/Hotel/hooks/useHotel'
import Rooms from '@/components/Hotel/Rooms'
import Top from '@/components/shared/Top'
import { useParams } from 'react-router-dom'

const HotelPage = () => {
  const { id } = useParams() as { id: string }

  const { data, isLoading } = useHotel({ id })

  if (!data || isLoading) {
    return <div>Loading</div>
  }

  const { name, comment, images, contents } = data

  return (
    <div>
      <Top title={name} subTitle={comment} />
      <Carousel images={images} />
      <Rooms hotelId={id} />
      <Contents contents={contents} />
    </div>
  )
}

export default HotelPage
