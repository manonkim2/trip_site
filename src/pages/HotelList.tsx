import HotelItem from '@/components/HotelList/HotelItem'
import Spacing from '@/components/shared/Spacing'
import Top from '@/components/shared/Top'
import useHotels from '@/hooks/useHotels'
import { Fragment } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

const HotelListPage = () => {
  const { data: hotels, hasNextPage, loadMore } = useHotels()

  return (
    <>
      <Top title="인기 호텔" subTitle="호텔부터 펜션까지 최저가" />

      <InfiniteScroll
        hasMore={hasNextPage}
        loader={<></>}
        next={loadMore}
        dataLength={hotels?.length ?? 0}
      >
        {hotels?.map((hotel, idx) => (
          <Fragment key={hotel.id}>
            <HotelItem hotel={hotel} />
            {hotels.length - 1 === idx ? null : (
              <Spacing
                size={2}
                backgroundColor="gray100"
                style={{ margin: '10px 0' }}
              />
            )}
          </Fragment>
        ))}
      </InfiniteScroll>
    </>
  )
}

export default HotelListPage
