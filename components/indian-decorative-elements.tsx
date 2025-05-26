interface IndianDecorativeProps {
  size?: number
  className?: string
  variant?: "lotus" | "paisley" | "mandala" | "rangoli" | "diya"
}

export function IndianDecorative({ size = 60, className = "", variant = "lotus" }: IndianDecorativeProps) {
  const baseClasses = `text-periwinkle2-400 opacity-20 ${className}`

  if (variant === "lotus") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={baseClasses}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Lotus petals */}
        {Array.from({ length: 8 }).map((_, i) => (
          <path key={i} d="M50 20 Q60 35 50 50 Q40 35 50 20" transform={`rotate(${i * 45} 50 50)`} opacity="0.6" />
        ))}
        <circle cx="50" cy="50" r="8" opacity="0.8" />
      </svg>
    )
  }

  if (variant === "paisley") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={baseClasses}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M30 70 Q20 50 30 30 Q50 20 70 30 Q80 50 70 70 Q50 80 30 70 Z" opacity="0.6" />
        <path d="M40 60 Q35 50 40 40 Q50 35 60 40 Q65 50 60 60 Q50 65 40 60 Z" opacity="0.4" />
        <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.8" />
      </svg>
    )
  }

  if (variant === "mandala") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={baseClasses}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="40" opacity="0.3" />
        <circle cx="50" cy="50" r="30" opacity="0.4" />
        <circle cx="50" cy="50" r="20" opacity="0.5" />
        <circle cx="50" cy="50" r="10" opacity="0.6" />
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={i} x1="50" y1="10" x2="50" y2="25" transform={`rotate(${i * 30} 50 50)`} opacity="0.4" />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <circle
            key={i}
            cx="50"
            cy="20"
            r="2"
            fill="currentColor"
            transform={`rotate(${i * 45} 50 50)`}
            opacity="0.6"
          />
        ))}
      </svg>
    )
  }

  if (variant === "rangoli") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={baseClasses}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Diamond pattern */}
        <path d="M50 10 L70 30 L50 50 L30 30 Z" opacity="0.3" />
        <path d="M50 50 L70 70 L50 90 L30 70 Z" opacity="0.3" />
        <path d="M10 50 L30 30 L50 50 L30 70 Z" opacity="0.3" />
        <path d="M50 50 L70 30 L90 50 L70 70 Z" opacity="0.3" />
        {/* Center decoration */}
        <circle cx="50" cy="50" r="8" opacity="0.6" />
        <circle cx="50" cy="50" r="4" opacity="0.8" />
      </svg>
    )
  }

  if (variant === "diya") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={baseClasses}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Diya base */}
        <ellipse cx="50" cy="70" rx="25" ry="8" opacity="0.6" />
        <path d="M25 70 Q25 55 50 55 Q75 55 75 70" opacity="0.5" />
        {/* Flame */}
        <path d="M50 55 Q45 45 50 35 Q55 45 50 55" opacity="0.7" />
        <circle cx="50" cy="40" r="2" opacity="0.9" />
        {/* Decorative dots */}
        <circle cx="35" cy="65" r="1.5" opacity="0.4" />
        <circle cx="50" cy="62" r="1.5" opacity="0.4" />
        <circle cx="65" cy="65" r="1.5" opacity="0.4" />
      </svg>
    )
  }

  return null
}
