import OctoMark from './OctoMark'

export default function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <div className="brand" aria-label="Octo home">
      <div className="brand-mark"><OctoMark /></div>
      {!compact && <div className="brand-word">octo<span>.</span></div>}
    </div>
  )
}
