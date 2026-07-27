import { ChevronDown, LayoutGrid, ListFilter, SlidersHorizontal, Sparkles } from 'lucide-react'
import { categories, products } from '../data/mock'
import type { Product } from '../types'
import { ProductCard } from '../components/Cards'
import PixelOcto from '../components/PixelOcto'

export default function ExplorePage({ saved, toggleSave, addCompare, openProduct, query }: { saved:string[]; toggleSave:(id:string)=>void; addCompare:(p:Product)=>void; openProduct:(p:Product)=>void; query:string }) {
  const filtered = query ? products.filter(p => `${p.title} ${p.category}`.toLowerCase().includes(query.toLowerCase())) : products
  return <div className="page-shell">
    <div className="page-hero page-hero--compact"><div><span className="eyebrow"><Sparkles size={15}/> Discover across categories</span><h1>{query ? `Results for “${query}”` : 'Explore everything.'}</h1><p>One clean view of products, sellers, ideas and signals from across the consumer web.</p></div><PixelOcto size="md" mode={query ? 'searching' : 'idle'}/></div>
    <div className="explore-categories">{categories.map(([name,,icon]) => <button key={name}><span>{icon}</span>{name}</button>)}</div>
    <div className="results-toolbar"><div><strong>{filtered.length * 128 + 34} results</strong><span>from 214 trusted sources</span></div><div><button><ListFilter size={16}/>All filters</button><button>Best match<ChevronDown size={15}/></button><button className="square-btn"><LayoutGrid size={17}/></button></div></div>
    <div className="filter-pills"><button className="active">Recommended</button><button>Price drop</button><button>Highly rated</button><button>Fast delivery</button><button>Verified sellers</button><button><SlidersHorizontal size={14}/>More</button></div>
    <div className="product-grid product-grid--wide">{filtered.map(p => <ProductCard key={p.id} product={p} saved={saved.includes(p.id)} onSave={() => toggleSave(p.id)} onOpen={() => openProduct(p)} onCompare={() => addCompare(p)}/>)}</div>
  </div>
}
