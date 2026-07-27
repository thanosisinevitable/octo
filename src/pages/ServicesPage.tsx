import { CalendarCheck, ChevronRight, MapPin, Search, ShieldCheck, Sparkles } from 'lucide-react'
import { services } from '../data/mock'
import { ServiceCard } from '../components/Cards'
import SectionHeader from '../components/SectionHeader'

const serviceCats = [['Home cleaning','🧹'],['Repairs','🔧'],['Beauty','✂️'],['Transport','🚕'],['Professional','💼'],['Events','🎉'],['Health & fitness','🧘'],['Lessons','🎓']]

export default function ServicesPage({ saved, toggleSave }: { saved:string[]; toggleSave:(id:string)=>void }) {
  return <div className="page-shell">
    <div className="service-hero"><div><span className="eyebrow"><Sparkles size={15}/> Local services, intelligently sorted</span><h1>Get it done.<br/><em>Without chasing people.</em></h1><p>Compare trusted providers, transparent starting prices and real availability near you.</p><div className="service-search"><Search size={19}/><input placeholder="What do you need help with?"/><span><MapPin size={15}/>Chennai</span><button>Find help</button></div></div><div className="service-promise"><div><ShieldCheck size={22}/><span><strong>Octo Assured</strong>Identity and business checks</span></div><div><CalendarCheck size={22}/><span><strong>Live availability</strong>Book real open slots</span></div><div><span className="refund-icon">↺</span><span><strong>Service support</strong>Help if things go wrong</span></div></div></div>
    <section className="content-section no-pad"><SectionHeader title="What do you need?" copy="Browse popular service categories near you."/><div className="service-cat-grid">{serviceCats.map(([name,icon]) => <button key={name}><span>{icon}</span><strong>{name}</strong><ChevronRight size={15}/></button>)}</div></section>
    <section className="content-section no-pad"><SectionHeader eyebrow="Available soon" title="Top providers near Chennai" action="View on map"/><div className="service-grid service-grid--wide">{services.map(s => <ServiceCard key={s.id} service={s} saved={saved.includes(s.id)} onSave={() => toggleSave(s.id)}/>)}</div></section>
  </div>
}
