import ActionButtons from '@/components/Hotel/ActionButtons'
import Carousel from '@/components/Hotel/Carousel'
import Contents from '@/components/Hotel/Contents'
import useHotel from '@/components/Hotel/hooks/useHotel'
import Map from '@/components/Hotel/Map'
import RecommendHotels from '@/components/Hotel/RecommendHotels'
import Review from '@/components/Hotel/Review'
import Rooms from '@/components/Hotel/Rooms'
import ScrollProgressBar from '@/components/shared/ScrollProgressBar'
import SEO from '@/components/shared/SEO'
import Top from '@/components/shared/Top'
import { css } from '@emotion/react'
import { useParams } from 'react-router-dom'

const HotelPage = () => {
  const { id } = useParams() as { id: string }

  const { data, isLoading } = useHotel({ id })

  if (!data || isLoading) {
    return <div>Loading</div>
  }

  const { name, comment, images, contents, location, recommendHotels } = data

  return (
    <div>
      <SEO title={name} description={comment} image={images[0]} />
      <ScrollProgressBar style={scrollProgressBarStyles} />
      <Top title={name} subTitle={comment} />
      <Carousel images={images} />
      <ActionButtons hotel={data} />
      <Rooms hotelId={id} />
      <Contents contents={contents} />
      <Map location={location} />
      <RecommendHotels recommendHotels={recommendHotels} />
      <Review hotelId={id} />
    </div>
  )
}

const scrollProgressBarStyles = css`
  position: sticky;
  top: 48px;
  z-index: 2;
`

export default HotelPage
