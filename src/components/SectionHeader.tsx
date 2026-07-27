import { ArrowRight } from 'lucide-react'

export default function SectionHeader({ eyebrow, title, copy, action, onAction }: { eyebrow?: string; title: string; copy?: string; action?: string; onAction?: () => void }) {
  return <div className="section-head"><div>{eyebrow && <span className="section-eyebrow">{eyebrow}</span>}<h2>{title}</h2>{copy && <p>{copy}</p>}</div>{action && <button onClick={onAction}>{action}<ArrowRight size={16}/></button>}</div>
}
