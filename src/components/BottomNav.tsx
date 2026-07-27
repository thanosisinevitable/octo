import { Compass, Heart, Home, Percent, Wrench } from 'lucide-react'
import type { Page } from '../types'

const items: [Page, string, typeof Home][] = [['home','Home',Home],['explore','Explore',Compass],['deals','Deals',Percent],['services','Services',Wrench],['saved','Saved',Heart]]
export default function BottomNav({ page, navigate }: { page: Page; navigate: (p: Page) => void }) {
  return <nav className="bottom-nav mobile-only">{items.map(([key,label,Icon]) => <button key={key} className={page===key?'active':''} onClick={() => navigate(key)}><Icon size={19}/><span>{label}</span></button>)}</nav>
}
