export default function OctoMark({ size = 38 }: { size?: number }) {
  return (
    <svg
      className="octo-mark"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role="img"
      aria-label="Octo"
      shapeRendering="geometricPrecision"
    >
      <path
        className="octo-mark-body"
        d="M12 25.5C12 15.4 16.8 9 24 9s12 6.4 12 16.5v4.2c0 2.4-1.9 4.3-4.3 4.3H16.3A4.3 4.3 0 0 1 12 29.7v-4.2Z"
      />
      <path className="octo-mark-arm" d="M15.5 31.2v3.4c0 3-3.9 4.6-6 2.3-1.4-1.6-.5-4.2 1.7-4.2" />
      <path className="octo-mark-arm" d="M20.8 32v5c0 2.7-3.7 3.7-5 1.5" />
      <path className="octo-mark-arm" d="M27.2 32v5c0 2.7 3.7 3.7 5 1.5" />
      <path className="octo-mark-arm" d="M32.5 31.2v3.4c0 3 3.9 4.6 6 2.3 1.4-1.6.5-4.2-1.7-4.2" />
      <rect x="17.7" y="22" width="4.5" height="5.6" rx="1.2" className="octo-mark-eye" />
      <rect x="25.8" y="22" width="4.5" height="5.6" rx="1.2" className="octo-mark-eye" />
      <rect x="18.7" y="22.8" width="1.4" height="1.4" rx=".4" className="octo-mark-glint" />
      <rect x="26.8" y="22.8" width="1.4" height="1.4" rx=".4" className="octo-mark-glint" />
      <path d="M20.5 30h7" className="octo-mark-mouth" />
      <rect x="15.5" y="16.5" width="3" height="3" rx=".7" className="octo-mark-highlight" />
    </svg>
  )
}
