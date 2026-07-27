import { Bookmark, Sparkles } from 'lucide-react'
import { products, services } from '../data/mock'
import type { Product } from '../types'
import { ProductCard, ServiceCard } from '../components/Cards'
import PixelOcto from '../components/PixelOcto'

export default function SavedPage({ saved, toggleSave, addCompare, openProduct }: { saved:string[]; toggleSave:(id:string)=>void; addCompare:(p:Product)=>void; openProduct:(p:Product)=>void }) {
  const savedProducts = products.filter(p => saved.includes(p.id)); const savedServices = services.filter(s => saved.includes(s.id))
  return <div className="page-shell"><div className="saved-head"><div><span className="eyebrow"><Bookmark size={15}/> Your shortlist</span><h1>Saved for later.</h1><p>Price signals and availability keep updating while items stay here.</p></div><div className="saved-stat"><strong>{saved.length}</strong><span>saved items</span></div></div>
    {!saved.length ? <div className="empty-state"><PixelOcto size="lg" mode="idle"/><h2>Your Octo collection is empty.</h2><p>Tap the heart or bookmark on anything worth keeping. Octo will watch it from there.</p><button onClick={() => location.hash='/explore'}><Sparkles size={16}/>Start exploring</button></div> : <><div className="saved-section"><h2>Products <span>{savedProducts.length}</span></h2><div className="product-grid product-grid--wide">{savedProducts.map(p => <ProductCard key={p.id} product={p} saved onSave={() => toggleSave(p.id)} onOpen={() => openProduct(p)} onCompare={() => addCompare(p)}/>)}</div></div>{savedServices.length > 0 && <div className="saved-section"><h2>Services <span>{savedServices.length}</span></h2><div className="service-grid">{savedServices.map(s => <ServiceCard key={s.id} service={s} saved onSave={() => toggleSave(s.id)}/>)}</div></div>}</>}
  </div>
}
