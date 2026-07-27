import { useCallback, useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import BottomNav from './components/BottomNav'
import CompareDock from './components/CompareDock'
import CommandPalette from './components/CommandPalette'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import DealsPage from './pages/DealsPage'
import ServicesPage from './pages/ServicesPage'
import SavedPage from './pages/SavedPage'
import ProductPage from './pages/ProductPage'
import { products } from './data/mock'
import type { Product } from './types'
import { useRoute } from './hooks/useRoute'
import { useLocalStorage } from './hooks/useLocalStorage'

export default function App() {
  const { page, navigate } = useRoute()
  const [query, setQuery] = useState('')
  const [searching, setSearching] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [commandOpen, setCommandOpen] = useState(false)
  const [saved, setSaved] = useLocalStorage<string[]>('octo:saved', ['p1'])
  const [compareIds, setCompareIds] = useState<string[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0])
  const [toast, setToast] = useState('')

  const compareProducts = useMemo(() => products.filter(p => compareIds.includes(p.id)), [compareIds])
  const flash = (message: string) => { setToast(message); window.setTimeout(() => setToast(''), 2200) }
  const toggleSave = (id: string) => setSaved(prev => { const exists = prev.includes(id); flash(exists ? 'Removed from saved' : 'Saved — Octo will keep watching it'); return exists ? prev.filter(x => x !== id) : [...prev, id] })
  const addCompare = (product: Product) => setCompareIds(prev => { if (prev.includes(product.id)) return prev; if (prev.length >= 3) { flash('Compare up to 3 items at a time'); return prev } flash('Added to compare'); return [...prev, product.id] })
  const openProduct = (product: Product) => { setSelectedProduct(product); navigate('product') }
  const onSearch = () => { if (!query.trim()) { setCommandOpen(true); return } setSearching(true); setCommandOpen(false); window.setTimeout(() => { setSearching(false); navigate('explore') }, 900) }

  const closeCommand = useCallback(() => setCommandOpen(false), [])
  useEffect(() => {
    const open = () => setCommandOpen(true)
    document.addEventListener('octo:open-command', open)
    return () => document.removeEventListener('octo:open-command', open)
  }, [])

  const content = (() => {
    if (page === 'explore') return <ExplorePage saved={saved} toggleSave={toggleSave} addCompare={addCompare} openProduct={openProduct} query={query}/>
    if (page === 'deals') return <DealsPage saved={saved} toggleSave={toggleSave} addCompare={addCompare} openProduct={openProduct}/>
    if (page === 'services') return <ServicesPage saved={saved} toggleSave={toggleSave}/>
    if (page === 'saved') return <SavedPage saved={saved} toggleSave={toggleSave} addCompare={addCompare} openProduct={openProduct}/>
    if (page === 'product') return <ProductPage product={selectedProduct} saved={saved} toggleSave={toggleSave} addCompare={addCompare} back={() => navigate('explore')}/>
    return <HomePage query={query} setQuery={setQuery} onSearch={onSearch} searching={searching} saved={saved} toggleSave={toggleSave} addCompare={addCompare} openProduct={openProduct} navigate={navigate}/>
  })()

  return <div className="app-shell">
    <Header page={page} navigate={navigate} query={query} setQuery={setQuery} onSearch={onSearch} onMenu={() => setMenuOpen(true)}/>
    <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} navigate={navigate}/>
    <main className="main-content">{content}<footer className="site-footer"><div><strong>octo<span>.</span></strong><p>Everything, intelligently together.</p></div><div><b>Discover</b><a>Products</a><a>Services</a><a>Local businesses</a><a>Price drops</a></div><div><b>Company</b><a>About Octo</a><a>Trust & ranking</a><a>Careers</a><a>Press</a></div><div><b>Legal</b><a>Privacy</a><a>Terms</a><a>Consumer policy</a><a>Seller policy</a></div><small>© 2026 Octo Labs · Made with eight arms and good judgement.</small></footer></main>
    <BottomNav page={page} navigate={navigate}/>
    <CompareDock products={compareProducts} onRemove={id => setCompareIds(p => p.filter(x => x !== id))} onClear={() => setCompareIds([])} onCompare={() => { setSelectedProduct(compareProducts[0] || products[0]); navigate('product'); flash('Comparison view opened') }}/>
    <CommandPalette open={commandOpen} query={query} setQuery={setQuery} onClose={closeCommand} onSubmit={onSearch}/>
    {toast && <div className="toast">{toast}</div>}
  </div>
}
