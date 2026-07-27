import { useEffect, useState } from 'react'
import type { Page } from '../types'

const valid: Page[] = ['home', 'explore', 'deals', 'services', 'saved', 'product']

export function useRoute() {
  const getRoute = (): Page => {
    const route = window.location.hash.replace('#/', '') as Page
    return valid.includes(route) ? route : 'home'
  }
  const [page, setPage] = useState<Page>(getRoute)

  useEffect(() => {
    const onHash = () => setPage(getRoute())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const navigate = (next: Page) => {
    window.location.hash = `/${next}`
    setPage(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return { page, navigate }
}
