type Props = { size?: 'sm' | 'md' | 'lg'; mode?: 'idle' | 'searching' | 'happy'; label?: string }

export default function PixelOcto({ size = 'md', mode = 'idle', label }: Props) {
  const showSignals = size !== 'sm'
  const mouth = mode === 'happy' ? 'M94 110 Q110 126 126 110' : 'M96 110 Q110 118 124 110'

  return (
    <div className={`pixel-octo pixel-octo--${size} pixel-octo--${mode}`} aria-label={label || 'Octo assistant'}>
      {showSignals && <>
        <div className="octo-orbit octo-orbit--one"><span>₹</span></div>
        <div className="octo-orbit octo-orbit--two"><span>✓</span></div>
        <div className="octo-link octo-link--one"/>
        <div className="octo-link octo-link--two"/>
      </>}
      <svg viewBox="0 0 220 190" role="img" aria-hidden="true" shapeRendering="geometricPrecision">
        <g className="octo-shadow"><ellipse cx="110" cy="171" rx="58" ry="8" /></g>

        <g className="tentacles tentacles--back">
          <path className="tentacle t1" d="M72 116C58 119 55 132 45 134c-10 2-18-7-12-15 4-6 11-5 15-2" />
          <path className="tentacle t2" d="M88 122c-8 11-9 28-20 32-10 4-17-6-11-14 3-4 8-5 12-3" />
          <path className="tentacle t7" d="M132 122c8 11 9 28 20 32 10 4 17-6 11-14-3-4-8-5-12-3" />
          <path className="tentacle t8" d="M148 116c14 3 17 16 27 18 10 2 18-7 12-15-4-6-11-5-15-2" />
        </g>

        <g className="octo-body">
          <path d="M55 103V88c0-39 21-64 55-64s55 25 55 64v15c0 10-8 18-18 18H73c-10 0-18-8-18-18Z" />
          <path className="mantle-base" d="M58 100h104v13c0 8-6 14-14 14H72c-8 0-14-6-14-14v-13Z" />
          <rect x="67" y="56" width="11" height="11" rx="2" className="pixel-highlight" />
          <rect x="78" y="42" width="8" height="8" rx="2" className="pixel-highlight pixel-highlight--dim" />
          <rect x="146" y="70" width="6" height="6" rx="1.5" className="pixel-highlight pixel-highlight--soft" />
        </g>

        <g className="tentacles tentacles--front">
          <path className="tentacle t3" d="M76 115v24c0 12-8 20-17 16-8-3-8-13-1-17 4-2 8-1 10 1" />
          <path className="tentacle t4" d="M96 119v32c0 10-13 15-19 7-4-5-1-12 5-13" />
          <path className="tentacle t5" d="M124 119v32c0 10 13 15 19 7 4-5 1-12-5-13" />
          <path className="tentacle t6" d="M144 115v24c0 12 8 20 17 16 8-3 8-13 1-17-4-2-8-1-10 1" />
        </g>

        <g className="octo-face">
          <rect className="eye eye-left" x="82" y="83" width="17" height="21" rx="4" />
          <rect className="eye eye-right" x="121" y="83" width="17" height="21" rx="4" />
          <rect className="eye-glint" x="86" y="87" width="5" height="5" rx="1.2" />
          <rect className="eye-glint" x="125" y="87" width="5" height="5" rx="1.2" />
          <path className="octo-brow brow-left" d="M81 77h19" />
          <path className="octo-brow brow-right" d="M120 77h19" />
          <path className="octo-mouth" d={mouth} />
          <rect className="cheek cheek-left" x="70" y="108" width="10" height="5" rx="2" />
          <rect className="cheek cheek-right" x="140" y="108" width="10" height="5" rx="2" />
        </g>

        <g className="sucker-pixels">
          <rect x="63" y="143" width="5" height="5" rx="1"/>
          <rect x="84" y="153" width="5" height="5" rx="1"/>
          <rect x="131" y="153" width="5" height="5" rx="1"/>
          <rect x="152" y="143" width="5" height="5" rx="1"/>
        </g>

        <g className="scan-lines">
          <path d="M28 58h27"/><path d="M165 64h29"/><path d="M24 105h19"/><path d="M177 111h20"/>
          <circle cx="28" cy="58" r="3"/><circle cx="194" cy="64" r="3"/>
        </g>
      </svg>
      {label && <div className="octo-label"><span className="octo-label-dot"/>{label}</div>}
    </div>
  )
}
