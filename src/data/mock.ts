import type { Merchant, Product, Service } from '../types'

export const categories = [
  ['Mobiles', 'Smartphones, wearables & accessories', '📱'],
  ['Electronics', 'Laptops, TVs, cameras & audio', '💻'],
  ['Home', 'Furniture, decor & appliances', '🛋️'],
  ['Vehicles', 'Cars, bikes, EVs & accessories', '🚙'],
  ['Fashion', 'Clothing, footwear & personal style', '👟'],
  ['Travel', 'Hotels, flights & experiences', '✈️'],
  ['Services', 'Home, professional & local help', '🧰'],
  ['Property', 'Homes, plots & commercial spaces', '🏠'],
] as const

export const products: Product[] = [
  {
    id: 'p1', title: 'Sony WH-1000XM5 Wireless Headphones', category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=900&q=82',
    price: 26990, oldPrice: 34990, rating: 4.7, reviews: '12.8k', seller: 'Amazon India', delivery: 'Free delivery tomorrow', badge: '23% off', signal: 'Lowest in 90 days',
  },
  {
    id: 'p2', title: 'MacBook Air 13-inch · M3 · 16GB', category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=82',
    price: 104900, oldPrice: 114900, rating: 4.8, reviews: '4.2k', seller: 'Croma', delivery: 'Pickup in 2 hours', badge: 'Bank offer', signal: 'Great value',
  },
  {
    id: 'p3', title: 'Minimal Oak Work Desk with Cable Tray', category: 'Home',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=900&q=82',
    price: 12999, oldPrice: 17999, rating: 4.5, reviews: '899', seller: 'Pepperfry', delivery: 'Delivery by Friday', badge: '28% off', signal: 'Trending in Chennai',
  },
  {
    id: 'p4', title: 'New Balance 9060 Sea Salt', category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=82',
    price: 14999, rating: 4.6, reviews: '2.1k', seller: 'Superkicks', delivery: 'Free delivery in 3 days', badge: 'Popular', signal: 'Only 6 left',
  },
  {
    id: 'p5', title: 'Dyson V12 Detect Slim Absolute', category: 'Home',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=900&q=82',
    price: 44900, oldPrice: 58900, rating: 4.6, reviews: '1.7k', seller: 'Reliance Digital', delivery: 'Free installation', badge: '24% off', signal: 'Price dropped ₹4,000',
  },
  {
    id: 'p6', title: 'Fujifilm X-S20 Mirrorless Camera', category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=82',
    price: 118999, oldPrice: 129999, rating: 4.8, reviews: '731', seller: 'Foto Centre India', delivery: 'Insured shipping', badge: 'Creator pick', signal: 'Best seller match',
  },
]

export const merchants: Merchant[] = [
  { id: 'm1', name: 'Nexa Digital Hub', category: 'Electronics wholesaler', location: 'Chennai · ships India-wide', rating: 4.8, reviews: '2.4k', response: 'Replies in 12 min', verified: true, image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=82' },
  { id: 'm2', name: 'Form & Function', category: 'Custom furniture studio', location: 'Chennai · 8 km away', rating: 4.7, reviews: '614', response: 'Replies in 25 min', verified: true, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=82' },
  { id: 'm3', name: 'GreenDrive Motors', category: 'Pre-owned EV specialist', location: 'Chennai · 5 km away', rating: 4.9, reviews: '328', response: 'Replies in 8 min', verified: true, image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=900&q=82' },
]

export const services: Service[] = [
  { id: 's1', title: 'AC deep cleaning & service', provider: 'CoolCare Pro', image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=82', rating: 4.8, reviews: '3.9k', price: 'From ₹599', availability: 'Today, 4:30 PM', badge: 'Octo Assured' },
  { id: 's2', title: 'Interior design consultation', provider: 'Studio Kora', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=82', rating: 4.9, reviews: '486', price: 'From ₹1,499', availability: 'Tomorrow', badge: 'Top rated' },
  { id: 's3', title: 'Laptop repair at home', provider: 'FixByte', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=900&q=82', rating: 4.7, reviews: '1.2k', price: 'Visit ₹299', availability: 'In 60–90 min', badge: 'Fast response' },
  { id: 's4', title: 'Airport cab · premium sedan', provider: 'GoMile', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=82', rating: 4.8, reviews: '8.7k', price: 'From ₹899', availability: 'Instant booking', badge: 'Price locked' },
]

export const sources = [
  { seller: 'Amazon India', price: 26990, delivery: 'Tomorrow', trust: 94, note: 'Easy returns' },
  { seller: 'Croma', price: 27490, delivery: 'Today pickup', trust: 96, note: 'Store support' },
  { seller: 'Reliance Digital', price: 27990, delivery: '2 days', trust: 93, note: 'Card cashback' },
  { seller: 'Vijay Sales', price: 28499, delivery: '2–3 days', trust: 91, note: 'Bundle available' },
]
