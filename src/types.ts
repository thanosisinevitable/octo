export type Page = 'home' | 'explore' | 'deals' | 'services' | 'saved' | 'product'

export type Product = {
  id: string
  title: string
  category: string
  image: string
  price: number
  oldPrice?: number
  rating: number
  reviews: string
  seller: string
  delivery: string
  badge?: string
  signal?: string
  location?: string
}

export type Merchant = {
  id: string
  name: string
  category: string
  location: string
  rating: number
  reviews: string
  response: string
  verified: boolean
  image: string
}

export type Service = {
  id: string
  title: string
  provider: string
  image: string
  rating: number
  reviews: string
  price: string
  availability: string
  badge?: string
}
