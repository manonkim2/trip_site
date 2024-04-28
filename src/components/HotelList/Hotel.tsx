import { IHotel } from '@/models/hotel'
import { addDelimiter } from '@/utils/addDelimiter'
import formatTime from '@/utils/formatTime'
import { css } from '@emotion/react'
import { differenceInMilliseconds, parseISO } from 'date-fns'
import { useEffect, useState } from 'react'
import Flex from '../shared/Flex'
import ListRow from '../shared/ListRow'
import Spacing from '../shared/Spacing'
import Tag from '../shared/Tag'
import Text from '../shared/Text'

const Hotel = ({ hotel }: { hotel: IHotel }) => {
  const [remainedTime, setRemainedTime] = useState(0)

  useEffect(() => {
    if (hotel.events == null || hotel.events.promoEndTime == null) {
      return
    }

    const promoEndTime = hotel.events.promoEndTime

    const timer = setInterval(() => {
      const remainSec = differenceInMilliseconds(
        parseISO(promoEndTime),
        new Date(),
      )

      console.log(remainSec)

      if (remainSec < 0) {
        clearInterval(timer)
        return
      }

      setRemainedTime(remainSec)
    }, 1_000)

    return () => {
      clearInterval(timer)
    }
  }, [hotel.events])

  const renderTag = () => {
    if (!hotel.events) return null

    const { name, tagThemeStyle } = hotel.events

    const promotaionText =
      remainedTime > 0 ? ` - ${formatTime(remainedTime)} 남음` : ''

    return (
      <div>
        <Tag
          color={tagThemeStyle.fontColor}
          backgroundColor={tagThemeStyle.backgroundColor}
        >
          {name.concat(promotaionText)}
        </Tag>
        <Spacing size={6} />
      </div>
    )
  }

  return (
    <ListRow
      contents={
        <Flex direction="column">
          {renderTag()}
          <ListRow.Texts title={hotel.name} subTitle={hotel.comment} />
          <Spacing size={4} />
          <Text typography="t7" color="gray600">
            {hotel.starRating}
          </Text>
        </Flex>
      }
      right={
        <Flex direction="column" align={'flex-end'}>
          <img src={hotel.mainImageUrl} alt="hotel-img" css={imageStyles} />
          <Spacing size={8} />
          <Text typography="t6" bold>
            {addDelimiter(hotel.price)}원
          </Text>
        </Flex>
      }
      style={containerStyles}
    />
  )
}

const containerStyles = css`
  align-items: flex-start;
`

const imageStyles = css`
  width: 150px;
  height: 110px;
  border-radius: 4px;
  object-fit: cover;
  margin-left: 16px;
`

export default Hotel
