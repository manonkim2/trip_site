import { addDelimiter } from '@/utils/addDelimiter'
import { css } from '@emotion/react'
import { useState } from 'react'
import Button from '../shared/Button'
import ListRow from '../shared/ListRow'
import Spacing from '../shared/Spacing'
import Text from '../shared/Text'
import useRecommendHotels from './hooks/useRecommendHotels'

const RecommendHotels = ({
  recommendHotels,
}: {
  recommendHotels: string[]
}) => {
  const { data, isLoading } = useRecommendHotels({ hotelIds: recommendHotels })

  const [showMore, setshowMore] = useState(false)

  if (!data || isLoading) {
    return null
  }

  const hotelList = data.length < 3 || showMore ? data : data.slice(0, 3)

  return (
    <div style={{ margin: '24px 0' }}>
      <Text typography="t4" bold style={{ padding: '0 24px' }}>
        추천 호텔
      </Text>

      <ul>
        {hotelList.map((hotel) => (
          <ListRow
            key={hotel.id}
            left={
              <img
                src={hotel.mainImageUrl}
                alt={`${hotel.id} img`}
                css={imageStyle}
              />
            }
            contents={
              <ListRow.Texts
                title={hotel.name}
                subTitle={`${addDelimiter(hotel.price)}원`}
              />
            }
          />
        ))}
      </ul>

      {data.length > 3 && !showMore && (
        <div style={{ padding: '0 24px', marginTop: 8 }}>
          <Button full weak onClick={() => setshowMore(true)}>
            더보기
          </Button>
        </div>
      )}
    </div>
  )
}

const imageStyle = css`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
`

export default RecommendHotels
