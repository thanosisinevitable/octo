import { ArrowUpRight, BadgeCheck, Bolt, ChevronRight, Clock3, MapPin, Radar, ShieldCheck, Sparkles, TrendingDown } from 'lucide-react'
import { categories, merchants, products, services } from '../data/mock'
import type { Page, Product } from '../types'
import HeroSearch from '../components/HeroSearch'
import SectionHeader from '../components/SectionHeader'
import { MerchantCard, ProductCard, ServiceCard } from '../components/Cards'
import PixelOcto from '../components/PixelOcto'

export default function HomePage({ query, setQuery, onSearch, searching, saved, toggleSave, addCompare, openProduct, navigate }: { query: string; setQuery: (v:string)=>void; onSearch:()=>void; searching:boolean; saved:string[]; toggleSave:(id:string)=>void; addCompare:(p:Product)=>void; openProduct:(p:Product)=>void; navigate:(p:Page)=>void }) {
  return <>
    <HeroSearch query={query} setQuery={setQuery} onSearch={onSearch} searching={searching}/>

    <section className="signal-strip">
      <div className="signal-strip-title"><Radar size={18}/><strong>Live consumer signals</strong><span>Updated 34 sec ago</span></div>
      <div className="signal-ticker"><button><TrendingDown size={16}/><span>iPhone 16</span><b>↓ 8%</b></button><button><Bolt size={16}/><span>EV searches</span><b>↑ 24%</b></button><button><MapPin size={16}/><span>Hotels in Mahabalipuram</span><b>Trending</b></button><button><Clock3 size={16}/><span>AC service</span><b>Slots open</b></button></div>
    </section>

    <section className="content-section">
      <SectionHeader eyebrow="Octo picks" title="Worth your attention" copy="High-signal finds selected from across the market." action="See all recommendations" onAction={() => navigate('explore')}/>
      <div className="editorial-grid">
        <article className="lead-story" onClick={() => openProduct(products[0])}><img src={products[0].image} alt=""/><div className="lead-overlay"/><div className="lead-content"><span className="story-kicker">Price intelligence</span><h2>Premium headphones just hit their lowest price in 90 days.</h2><p>Octo compared 18 sources. This deal is 17% below the usual market price.</p><button>See the comparison <ArrowUpRight size={16}/></button></div></article>
        <article className="brief-card brief-card--red"><div className="brief-icon"><Sparkles size={21}/></div><span>Octo brief</span><h3>Strong hybrids are now the most researched family cars in Tamil Nadu.</h3><p>What’s driving the shift—and the 5 models shoppers keep comparing.</p><button>Read the 2 min brief <ChevronRight size={15}/></button></article>
        <article className="brief-card"><div className="brief-top"><span className="story-kicker dark">Local pulse</span><span className="tiny-live"><i/>Live</span></div><h3>Home services with same-day slots near you.</h3><div className="mini-list"><span><b>AC service</b><em>42 providers</em></span><span><b>Deep cleaning</b><em>28 providers</em></span><span><b>Electrician</b><em>19 providers</em></span></div><button onClick={() => navigate('services')}>Browse local services <ChevronRight size={15}/></button></article>
      </div>
    </section>

    <section className="content-section">
      <SectionHeader eyebrow="Explore the market" title="Everything has a place" copy="Start broad. Octo will narrow the noise."/>
      <div className="category-grid">{categories.map(([name,copy,icon], i) => <button key={name} className="category-tile" style={{'--delay': `${i*35}ms`} as React.CSSProperties} onClick={() => navigate(name === 'Services' ? 'services' : 'explore')}><span className="category-icon">{icon}</span><div><strong>{name}</strong><small>{copy}</small></div><ChevronRight size={17}/></button>)}</div>
    </section>

    <section className="content-section product-section">
      <SectionHeader eyebrow="Price drops" title="Good timing, right now" copy="Products with meaningful price movement—not fake crossed-out prices." action="View all deals" onAction={() => navigate('deals')}/>
      <div className="product-grid">{products.slice(0,4).map(p => <ProductCard key={p.id} product={p} saved={saved.includes(p.id)} onSave={() => toggleSave(p.id)} onOpen={() => openProduct(p)} onCompare={() => addCompare(p)}/>)}</div>
    </section>

    <section className="ask-octo-band">
      <div className="ask-octo-art"><PixelOcto size="md" mode="happy"/></div><div className="ask-octo-copy"><span><Sparkles size={15}/> Octo concierge</span><h2>Describe the outcome.<br/>Octo will find the options.</h2><p>“I need a reliable 7-seater for long trips, under ₹35 lakh, with good service in Chennai.”</p></div><button onClick={() => { setQuery('I need a reliable 7-seater for long trips, under ₹35 lakh, with good service in Chennai'); onSearch() }}>Ask Octo <ArrowUpRight size={17}/></button>
    </section>

    <section className="content-section">
      <SectionHeader eyebrow="Near you" title="Verified local businesses" copy="Real businesses, response times and trust signals—before you contact them." action="Explore sellers" onAction={() => navigate('explore')}/>
      <div className="merchant-grid">{merchants.map(m => <MerchantCard merchant={m} key={m.id}/>)}</div>
    </section>

    <section className="content-section">
      <SectionHeader eyebrow="Book without the back-and-forth" title="Services available soon" action="All services" onAction={() => navigate('services')}/>
      <div className="service-grid">{services.slice(0,3).map(s => <ServiceCard key={s.id} service={s} saved={saved.includes(s.id)} onSave={() => toggleSave(s.id)}/>)}</div>
    </section>

    <section className="trust-banner"><div><ShieldCheck size={30}/><div><strong>Built for better decisions, not more clicks.</strong><p>Octo labels sponsored placements, checks seller signals and separates real price drops from marketing theatre.</p></div></div><button>How Octo earns your trust <ArrowUpRight size={16}/></button></section>
  </>
}
