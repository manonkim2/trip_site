import { IHotel } from '@/models/hotel'
import { addDelimiter } from '@/utils/addDelimiter'
import { css } from '@emotion/react'
import Flex from '../shared/Flex'
import ListRow from '../shared/ListRow'
import Spacing from '../shared/Spacing'
import Text from '../shared/Text'

const Hotel = ({ hotel }: { hotel: IHotel }) => {
  return (
    <ListRow
      contents={
        <Flex direction="column">
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
