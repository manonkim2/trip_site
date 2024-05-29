import useRooms from '@/hooks/useRooms'
import { addDelimiter } from '@/utils/addDelimiter'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Button from '../shared/Button'
import Flex from '../shared/Flex'
import withSuspense from '../shared/hocs/withSuspense'
import ListRow from '../shared/ListRow'
import Spacing from '../shared/Spacing'
import Tag from '../shared/Tag'
import Text from '../shared/Text'

const Rooms = ({ hotelId }: { hotelId: string }) => {
  const { data } = useRooms({ hotelId })

  return (
    <Container>
      <Header justify={'space-between'}>
        <Text bold typography="t4">
          객실정보
        </Text>
        <Text typography="t6" color="gray400">
          1박, 세금 포함
        </Text>
      </Header>

      <ul>
        {data?.map((room) => {
          const 마감임박 = room.avaliableCount === 1
          const 매진 = room.avaliableCount === 0

          return (
            <ListRow
              key={`${room.roomName}`}
              left={
                <img
                  src={room.imageUrl}
                  alt={`${room.roomName}객실 이미지`}
                  css={imagesStyle}
                />
              }
              contents={
                <ListRow.Texts
                  title={
                    <Flex>
                      {room.roomName}
                      {마감임박 && (
                        <>
                          <Spacing size={8} direction="horizontal" />
                          <Tag backgroundColor="red">마감임박</Tag>
                        </>
                      )}
                    </Flex>
                  }
                  subTitle={`${addDelimiter(room.price)}원 / `.concat(
                    room.refundable ? '환불가능' : '환불불가',
                  )}
                ></ListRow.Texts>
              }
              right={<Button disabled={매진}>{매진 ? '매진' : '선택'}</Button>}
            ></ListRow>
          )
        })}
      </ul>
    </Container>
  )
}

const Container = styled.div`
  margin: 40px 0;
`
const Header = styled(Flex)`
  padding: 0 24px;
`

const imagesStyle = css`
  width: 100px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
`

export default withSuspense(Rooms, {
  fallback: <div>룸 불러오는중........</div>,
})
