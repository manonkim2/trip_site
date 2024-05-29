import { css } from '@emotion/react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Carousel = ({ images }: { images: string[] }) => {
  return (
    <div>
      <Swiper spaceBetween={8} css={containerStyles}>
        {images.map((imageUrl, idx) => (
          <SwiperSlide key={imageUrl}>
            <LazyLoadImage
              src={imageUrl}
              alt={`${idx + 1}번째 호텔 이미지`}
              css={imageStyles}
              height={300}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const containerStyles = css`
  padding: 0 24px;
  height: 300px;
`

const imageStyles = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`

export default Carousel
