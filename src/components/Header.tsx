import { Bell, ChevronDown, MapPin, Menu, Search, UserRound, X } from 'lucide-react'
import type { Page } from '../types'
import Brand from './Brand'

const nav: { key: Page; label: string }[] = [
  { key: 'home', label: 'For you' },
  { key: 'explore', label: 'Explore' },
  { key: 'deals', label: 'Deals' },
  { key: 'services', label: 'Services' },
]

type Props = {
  page: Page
  navigate: (page: Page) => void
  query: string
  setQuery: (value: string) => void
  onSearch: () => void
  onMenu: () => void
}

export default function Header({ page, navigate, query, setQuery, onSearch, onMenu }: Props) {
  return (
    <>
      <div className="pulse-bar"><span className="live-dot"/> Octo Pulse: 14,280 verified price drops detected today <button onClick={() => navigate('deals')}>View drops</button></div>
      <header className="topbar">
        <div className="topbar-left">
          <button className="icon-btn mobile-only" onClick={onMenu} aria-label="Open menu"><Menu size={20}/></button>
          <button className="brand-button" onClick={() => navigate('home')}><Brand /></button>
        </div>
        <nav className="primary-nav" aria-label="Primary navigation">
          {nav.map(item => <button key={item.key} className={page === item.key ? 'active' : ''} onClick={() => navigate(item.key)}>{item.label}</button>)}
        </nav>
        <div className="top-search">
          <Search size={18}/>
          <input value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => e.key === 'Enter' && onSearch()} placeholder="Search products, services, ideas…" />
          {query && <button className="input-clear" onClick={() => setQuery('')}><X size={16}/></button>}
          <kbd>⌘ K</kbd>
        </div>
        <div className="top-actions">
          <button className="location-btn"><MapPin size={17}/><span>Chennai</span><ChevronDown size={14}/></button>
          <button className="icon-btn" aria-label="Notifications"><Bell size={19}/><i/></button>
          <button className="avatar-btn" aria-label="Profile"><UserRound size={18}/></button>
        </div>
      </header>
    </>
  )
}
