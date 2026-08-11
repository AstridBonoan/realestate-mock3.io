const logoSrc = `${import.meta.env.BASE_URL}bc-logo.png`

/** Soft tiled watermark — non-interactive, screenshot ownership mark */
export function BrandWatermark() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="bc-watermark absolute inset-0"
        style={{
          backgroundImage: `url(${logoSrc})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px auto',
          backgroundPosition: '24px 24px',
        }}
      />
    </div>
  )
}

/** Bottom-right corner badge — visible but restrained */
export function BrandBadge() {
  return (
    <div
      className="pointer-events-none fixed bottom-4 right-4 z-[70] sm:bottom-5 sm:right-5"
      aria-hidden="true"
    >
      <div className="border border-navy/10 bg-white/92 px-2.5 py-2 shadow-[0_4px_18px_rgba(11,31,58,0.1)] backdrop-blur-[2px] sm:px-3 sm:py-2.5">
        <img
          src={logoSrc}
          alt=""
          className="h-6 w-auto opacity-95 sm:h-7"
          width={110}
          height={36}
        />
      </div>
    </div>
  )
}
