import { GitCompareArrows, X } from 'lucide-react'
import type { Product } from '../types'

export default function CompareDock({ products, onRemove, onClear, onCompare }: { products: Product[]; onRemove: (id: string) => void; onClear: () => void; onCompare: () => void }) {
  if (!products.length) return null
  return <div className="compare-dock"><div className="compare-title"><GitCompareArrows size={18}/><span>Compare</span><b>{products.length}/3</b></div><div className="compare-items">{products.map(p => <div className="compare-item" key={p.id}><img src={p.image} alt=""/><span>{p.title}</span><button onClick={() => onRemove(p.id)}><X size={14}/></button></div>)}{products.length < 3 && <div className="compare-empty">Add another item</div>}</div><button className="dock-clear" onClick={onClear}>Clear</button><button className="dock-action" onClick={onCompare}>Compare now</button></div>
}
