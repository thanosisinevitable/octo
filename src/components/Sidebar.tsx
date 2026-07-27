import { BadgePercent, Bookmark, Building2, Car, ChevronRight, Home, Laptop, Plane, Shirt, Smartphone, Sparkles, Store, Wrench, X } from 'lucide-react'
import type { Page } from '../types'

type Props = { open: boolean; onClose: () => void; navigate: (page: Page) => void }

const items = [
  ['Mobiles & tablets', Smartphone], ['Electronics', Laptop], ['Home & living', Home], ['Vehicles', Car],
  ['Fashion', Shirt], ['Travel', Plane], ['Local services', Wrench], ['Property', Building2], ['Stores & sellers', Store],
] as const

export default function Sidebar({ open, onClose, navigate }: Props) {
  return (
    <>
      <div className={`mobile-scrim ${open ? 'show' : ''}`} onClick={onClose}/>
      <aside className={`sidebar ${open ? 'sidebar--open' : ''}`}>
        <div className="sidebar-mobile-head mobile-only"><strong>Browse Octo</strong><button className="icon-btn" onClick={onClose}><X size={20}/></button></div>
        <button className="side-feature" onClick={() => { navigate('home'); onClose() }}><span><Sparkles size={18}/> For you</span><ChevronRight size={16}/></button>
        <div className="side-label">Shop & discover</div>
        <div className="side-list">
          {items.map(([label, Icon]) => <button key={label} onClick={() => { navigate(label === 'Local services' ? 'services' : 'explore'); onClose() }}><Icon size={18}/><span>{label}</span><ChevronRight size={15}/></button>)}
        </div>
        <div className="side-divider"/>
        <button className="side-basic" onClick={() => { navigate('deals'); onClose() }}><BadgePercent size={18}/>Deals & price drops</button>
        <button className="side-basic" onClick={() => { navigate('saved'); onClose() }}><Bookmark size={18}/>Saved items</button>
        <div className="sidebar-card">
          <div className="mini-orb">O</div>
          <strong>Octo Pro</strong>
          <p>Unlimited alerts, deeper comparisons and zero sponsored results.</p>
          <button>See what’s included</button>
        </div>
        <div className="side-footer">About · Trust · Privacy<br/>© 2026 Octo Labs</div>
      </aside>
    </>
  )
}
