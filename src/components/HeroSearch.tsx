import { ArrowRight, Camera, Mic, Search, Sparkles } from 'lucide-react'
import PixelOcto from './PixelOcto'

const suggestions = ['Best phone under ₹30k', '3BHK apartments near me', 'Compare EVs', 'Book AC service']

type Props = { query: string; setQuery: (value: string) => void; onSearch: () => void; searching: boolean }

export default function HeroSearch({ query, setQuery, onSearch, searching }: Props) {
  return (
    <section className="hero-shell">
      <div className="hero-copy">
        <div className="eyebrow"><Sparkles size={15}/> One search. The whole market.</div>
        <h1>The internet,<br/><em>gathered for you.</em></h1>
        <div className="hero-search">
          <Search size={22}/>
          <input value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => e.key === 'Enter' && onSearch()} placeholder="What are you looking for today?" autoComplete="off" />
          <button className="search-tool" aria-label="Search by image"><Camera size={19}/></button>
          <button className="search-tool" aria-label="Voice search"><Mic size={19}/></button>
          <button className="search-submit" onClick={onSearch}>Gather <ArrowRight size={17}/></button>
        </div>
        <div className="suggestion-row"><span>Try</span>{suggestions.map(s => <button key={s} onClick={() => setQuery(s)}>{s}</button>)}</div>
        <div className="trust-row"><span><i className="trust-dot"/> 2,400+ trusted sources</span><span>•</span><span>Neutral results</span><span>•</span><span>Updated every minute</span></div>
      </div>
      <div className="hero-visual">
        <div className="signal-card signal-card--left"><span className="signal-icon">↓</span><div><small>Price signal</small><strong>₹4,000 drop</strong></div></div>
        <div className="signal-card signal-card--right"><span className="signal-icon">✓</span><div><small>Source checked</small><strong>Verified seller</strong></div></div>
        <div className="octo-stage"><div className="stage-grid"/><PixelOcto size="lg" mode={searching ? 'searching' : 'idle'} label={searching ? 'Gathering the best matches…' : 'Meet Octo. It does the legwork.'}/></div>
      </div>
    </section>
  )
}
