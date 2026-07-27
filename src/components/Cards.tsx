import { ArrowUpRight, BadgeCheck, Bookmark, Clock3, Heart, MapPin, ShieldCheck, Star } from 'lucide-react'
import type { Merchant, Product, Service } from '../types'

export function ProductCard({ product, saved, onSave, onOpen, onCompare }: { product: Product; saved: boolean; onSave: () => void; onOpen: () => void; onCompare: () => void }) {
  return (
    <article className="product-card">
      <div className="product-media" onClick={onOpen} role="button" tabIndex={0}>
        <img src={product.image} alt=""/>
        {product.badge && <span className="media-badge">{product.badge}</span>}
        <button className={`save-btn ${saved ? 'saved' : ''}`} onClick={e => { e.stopPropagation(); onSave() }} aria-label="Save item"><Heart size={18} fill={saved ? 'currentColor' : 'none'}/></button>
      </div>
      <div className="product-body">
        <div className="source-line"><span>{product.seller}</span><BadgeCheck size={14}/></div>
        <h3 onClick={onOpen}>{product.title}</h3>
        <div className="rating-line"><Star size={14} fill="currentColor"/> {product.rating} <span>({product.reviews})</span></div>
        <div className="price-line"><strong>₹{product.price.toLocaleString('en-IN')}</strong>{product.oldPrice && <del>₹{product.oldPrice.toLocaleString('en-IN')}</del>}</div>
        {product.signal && <div className="smart-signal"><span>↘</span>{product.signal}</div>}
        <div className="delivery-line">{product.delivery}</div>
        <div className="card-actions"><button onClick={onOpen}>View sources</button><button className="compare-link" onClick={onCompare}>+ Compare</button></div>
      </div>
    </article>
  )
}

export function MerchantCard({ merchant }: { merchant: Merchant }) {
  return (
    <article className="merchant-card">
      <img src={merchant.image} alt=""/>
      <div className="merchant-info">
        <div className="merchant-title"><h3>{merchant.name}</h3>{merchant.verified && <BadgeCheck size={17}/>}</div>
        <p>{merchant.category}</p>
        <div className="merchant-meta"><span><Star size={14} fill="currentColor"/>{merchant.rating} ({merchant.reviews})</span><span><MapPin size={14}/>{merchant.location}</span></div>
        <div className="merchant-foot"><span><Clock3 size={14}/>{merchant.response}</span><button>View store <ArrowUpRight size={14}/></button></div>
      </div>
    </article>
  )
}

export function ServiceCard({ service, saved, onSave }: { service: Service; saved: boolean; onSave: () => void }) {
  return (
    <article className="service-card">
      <div className="service-media"><img src={service.image} alt=""/><button className={`save-btn ${saved ? 'saved' : ''}`} onClick={onSave}><Bookmark size={17} fill={saved ? 'currentColor' : 'none'}/></button>{service.badge && <span className="service-badge"><ShieldCheck size={13}/>{service.badge}</span>}</div>
      <div className="service-body"><small>{service.provider}</small><h3>{service.title}</h3><div className="service-rating"><Star size={14} fill="currentColor"/>{service.rating} <span>({service.reviews})</span></div><div className="service-bottom"><div><strong>{service.price}</strong><span>{service.availability}</span></div><button>Book</button></div></div>
    </article>
  )
}
