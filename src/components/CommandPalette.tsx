import { ArrowRight, Clock3, Search, Sparkles, X } from 'lucide-react'
import { useEffect } from 'react'

const recent = ['Sony headphones price', 'Premium hotels in Chennai', 'Best strong hybrid SUV']

export default function CommandPalette({ open, query, setQuery, onClose, onSubmit }: { open: boolean; query: string; setQuery: (v: string) => void; onClose: () => void; onSubmit: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); open ? onClose() : document.dispatchEvent(new CustomEvent('octo:open-command')) }
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])
  if (!open) return null
  return <div className="command-scrim" onMouseDown={onClose}><div className="command-panel" onMouseDown={e => e.stopPropagation()}><div className="command-input"><Search size={20}/><input autoFocus value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => e.key === 'Enter' && onSubmit()} placeholder="Search everything with Octo…"/><button onClick={onClose}><X size={18}/></button></div><div className="command-label">Recent searches</div>{recent.map(item => <button className="command-row" key={item} onClick={() => { setQuery(item); onSubmit() }}><Clock3 size={17}/><span>{item}</span><ArrowRight size={15}/></button>)}<div className="command-ai"><Sparkles size={18}/><div><strong>Ask Octo in plain English</strong><p>Try “find a quiet hotel under ₹5k near the airport”.</p></div></div><div className="command-footer"><span><kbd>↑</kbd><kbd>↓</kbd> Navigate</span><span><kbd>↵</kbd> Search</span><span><kbd>esc</kbd> Close</span></div></div></div>
}
