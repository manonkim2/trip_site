export interface IHotel {
  comment: string
  contents: string
  id: string
  images: string[]
  location: { directions: string; pointGeolocation: { x: number; y: number } }
  mainImageUrl: string
  name: string
  price: number
  starRating: number
  events?: {
    promoEndTime?: string
    name: string
    tagThemeStyle: {
      backgroundColor: string
      fontColor: string
    }
  }
}
