import { BellRing, ChevronRight, Clock3, Flame, Sparkles, TrendingDown } from 'lucide-react'
import { products } from '../data/mock'
import type { Product } from '../types'
import { ProductCard } from '../components/Cards'

export default function DealsPage({ saved, toggleSave, addCompare, openProduct }: { saved:string[]; toggleSave:(id:string)=>void; addCompare:(p:Product)=>void; openProduct:(p:Product)=>void }) {
  return <div className="page-shell">
    <div className="deal-hero"><div className="deal-hero-copy"><span className="eyebrow light"><Flame size={15}/> Live deal intelligence</span><h1>Real drops.<br/>No discount theatre.</h1><p>Octo tracks price history and seller quality so a “deal” actually means something.</p><button><BellRing size={17}/>Create a price alert</button></div><div className="deal-meter"><div className="meter-orbit"><TrendingDown size={40}/></div><strong>14,280</strong><span>verified drops today</span><div className="meter-stats"><span><b>₹4.2 Cr</b> potential savings</span><span><b>2,406</b> sources scanned</span></div></div></div>
    <div className="deal-tabs"><button className="active">For you</button><button>Tech</button><button>Home</button><button>Fashion</button><button>Travel</button><button>Local</button></div>
    <div className="deal-callout"><Sparkles size={18}/><div><strong>Octo’s deal of the hour</strong><span>Sony WH-1000XM5 at ₹26,990 — lowest verified price in 90 days.</span></div><button onClick={() => openProduct(products[0])}>See why it’s good<ChevronRight size={15}/></button><span className="deal-time"><Clock3 size={14}/>47:18 left</span></div>
    <div className="product-grid product-grid--wide">{products.map(p => <ProductCard key={p.id} product={p} saved={saved.includes(p.id)} onSave={() => toggleSave(p.id)} onOpen={() => openProduct(p)} onCompare={() => addCompare(p)}/>)}</div>
  </div>
}
