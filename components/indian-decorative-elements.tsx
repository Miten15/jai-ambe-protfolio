interface IndianDecorativeProps {
  size?: number
  className?: string
  variant?: "lotus" | "paisley" | "mandala" | "rangoli" | "diya" | "peacock" | "elephant" | "sun" | "kalash" | "hamsa" | "om" | "swastika" | "floral" | "border" | "vine"
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

  if (variant === "peacock") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={baseClasses}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Peacock body */}
        <ellipse cx="50" cy="75" rx="8" ry="15" opacity="0.6" />
        {/* Peacock neck */}
        <path d="M50 60 Q55 45 60 30" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.7" />
        {/* Peacock head */}
        <circle cx="60" cy="30" r="4" opacity="0.8" />
        {/* Crown feathers */}
        <path d="M58 26 L56 20 M60 25 L60 18 M62 26 L64 20" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
        {/* Tail feathers */}
        <path d="M40 65 Q25 45 20 25 Q25 35 35 50" opacity="0.5" />
        <path d="M45 70 Q30 50 25 30 Q30 40 40 55" opacity="0.5" />
        <path d="M55 70 Q70 50 75 30 Q70 40 60 55" opacity="0.5" />
        <path d="M60 65 Q75 45 80 25 Q75 35 65 50" opacity="0.5" />
        {/* Eye patterns on feathers */}
        <circle cx="22" cy="28" r="3" opacity="0.4" />
        <circle cx="27" cy="33" r="3" opacity="0.4" />
        <circle cx="73" cy="33" r="3" opacity="0.4" />
        <circle cx="78" cy="28" r="3" opacity="0.4" />
      </svg>
    )
  }

  if (variant === "elephant") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={baseClasses}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Elephant body */}
        <ellipse cx="55" cy="65" rx="20" ry="15" opacity="0.6" />
        {/* Elephant head */}
        <circle cx="45" cy="45" r="15" opacity="0.7" />
        {/* Trunk */}
        <path d="M35 50 Q25 55 20 65 Q25 70 30 65 Q35 60 40 55" opacity="0.6" />
        {/* Ears */}
        <path d="M35 35 Q25 30 20 40 Q25 50 35 45" opacity="0.5" />
        <path d="M55 35 Q65 30 70 40 Q65 50 55 45" opacity="0.5" />
        {/* Eye */}
        <circle cx="42" cy="42" r="2" opacity="0.8" />
        {/* Tusks */}
        <path d="M40 52 L38 58" stroke="currentColor" strokeWidth="2" opacity="0.7" />
        <path d="M50 52 L52 58" stroke="currentColor" strokeWidth="2" opacity="0.7" />
        {/* Decorative patterns */}
        <circle cx="45" cy="40" r="1" opacity="0.4" />
        <circle cx="50" cy="45" r="1" opacity="0.4" />
        <circle cx="40" cy="48" r="1" opacity="0.4" />
      </svg>
    )
  }

  if (variant === "sun") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={baseClasses}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sun center */}
        <circle cx="50" cy="50" r="15" opacity="0.7" />
        {/* Inner rays */}
        <circle cx="50" cy="50" r="8" opacity="0.9" />
        {/* Outer rays */}
        <path d="M50 20 L50 10 M50 80 L50 90 M20 50 L10 50 M80 50 L90 50" stroke="currentColor" strokeWidth="3" opacity="0.6" />
        <path d="M29.3 29.3 L22.9 22.9 M70.7 70.7 L77.1 77.1 M70.7 29.3 L77.1 22.9 M29.3 70.7 L22.9 77.1" stroke="currentColor" strokeWidth="3" opacity="0.6" />
        {/* Medium rays */}
        <path d="M50 25 L50 15 M50 75 L50 85 M25 50 L15 50 M75 50 L85 50" stroke="currentColor" strokeWidth="2" opacity="0.5" />
        <path d="M32.3 32.3 L26.6 26.6 M67.7 67.7 L73.4 73.4 M67.7 32.3 L73.4 26.6 M32.3 67.7 L26.6 73.4" stroke="currentColor" strokeWidth="2" opacity="0.5" />
        {/* Face */}
        <circle cx="45" cy="45" r="1.5" opacity="0.8" />
        <circle cx="55" cy="45" r="1.5" opacity="0.8" />
        <path d="M45 55 Q50 60 55 55" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.8" />
      </svg>
    )
  }

  if (variant === "kalash") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={baseClasses}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Kalash base */}
        <ellipse cx="50" cy="85" rx="15" ry="5" opacity="0.6" />
        {/* Kalash body */}
        <path d="M35 85 Q35 70 40 55 Q45 50 50 50 Q55 50 60 55 Q65 70 65 85" opacity="0.7" />
        {/* Kalash neck */}
        <rect x="45" y="45" width="10" height="15" opacity="0.6" />
        {/* Kalash mouth */}
        <ellipse cx="50" cy="45" rx="8" ry="3" opacity="0.8" />
        {/* Coconut */}
        <circle cx="50" cy="35" r="8" opacity="0.6" />
        {/* Coconut texture */}
        <path d="M45 30 Q50 25 55 30 M45 35 Q50 30 55 35 M45 40 Q50 35 55 40" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
        {/* Mango leaves */}
        <path d="M42 42 Q35 35 30 40 Q35 45 42 38" opacity="0.5" />
        <path d="M58 42 Q65 35 70 40 Q65 45 58 38" opacity="0.5" />
        <path d="M45 40 Q40 30 35 35 Q40 40 45 35" opacity="0.5" />
        <path d="M55 40 Q60 30 65 35 Q60 40 55 35" opacity="0.5" />
        {/* Decorative patterns */}
        <circle cx="45" cy="65" r="1" opacity="0.4" />
        <circle cx="55" cy="65" r="1" opacity="0.4" />
        <circle cx="50" cy="70" r="1" opacity="0.4" />
      </svg>
    )
  }

  if (variant === "hamsa") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={baseClasses}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Palm */}
        <path d="M30 40 Q30 80 50 80 Q70 80 70 40" opacity="0.7" />
        {/* Fingers */}
        <path d="M30 40 Q25 20 30 15 Q35 20 30 40" opacity="0.6" />
        <path d="M40 35 Q35 10 40 5 Q45 10 40 35" opacity="0.6" />
        <path d="M50 35 Q45 8 50 3 Q55 8 50 35" opacity="0.6" />
        <path d="M60 35 Q55 10 60 5 Q65 10 60 35" opacity="0.6" />
        <path d="M70 40 Q75 20 70 15 Q65 20 70 40" opacity="0.6" />
        {/* Central eye */}
        <circle cx="50" cy="55" r="8" opacity="0.8" />
        <circle cx="50" cy="55" r="4" opacity="0.9" />
        <circle cx="50" cy="55" r="2" opacity="1" />
        {/* Decorative patterns */}
        <circle cx="40" cy="50" r="2" opacity="0.4" />
        <circle cx="60" cy="50" r="2" opacity="0.4" />
        <path d="M45 65 Q50 70 55 65" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
        <circle cx="50" cy="40" r="1" opacity="0.4" />
      </svg>
    )
  }

  if (variant === "om") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={baseClasses}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Om symbol main curve */}
        <path d="M20 60 Q30 40 50 50 Q70 60 80 45" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.8" />
        {/* Om upper curve */}
        <path d="M50 50 Q60 35 70 40 Q75 45 70 50" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.7" />
        {/* Om lower part */}
        <path d="M30 65 Q40 75 50 70 Q60 65 70 70" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.7" />
        {/* Om dot */}
        <circle cx="55" cy="25" r="3" opacity="0.8" />
        {/* Om crescent */}
        <path d="M50 30 Q60 25 65 30" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />
        {/* Decorative elements */}
        <circle cx="25" cy="55" r="1.5" opacity="0.4" />
        <circle cx="75" cy="55" r="1.5" opacity="0.4" />
      </svg>
    )
  }

  if (variant === "swastika") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={baseClasses}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Swastika arms */}
        <path d="M20 50 L80 50" stroke="currentColor" strokeWidth="4" opacity="0.8" />
        <path d="M50 20 L50 80" stroke="currentColor" strokeWidth="4" opacity="0.8" />
        {/* Swastika ends */}
        <path d="M80 50 L80 35 M20 50 L20 65 M50 20 L65 20 M50 80 L35 80" stroke="currentColor" strokeWidth="4" opacity="0.7" />
        {/* Center decoration */}
        <circle cx="50" cy="50" r="6" opacity="0.6" />
        <circle cx="50" cy="50" r="3" opacity="0.8" />
        {/* Corner dots */}
        <circle cx="30" cy="30" r="2" opacity="0.4" />
        <circle cx="70" cy="30" r="2" opacity="0.4" />
        <circle cx="30" cy="70" r="2" opacity="0.4" />
        <circle cx="70" cy="70" r="2" opacity="0.4" />
      </svg>
    )
  }

  if (variant === "floral") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={baseClasses}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Central flower */}
        <circle cx="50" cy="50" r="8" opacity="0.7" />
        {/* Petals */}
        <path d="M50 35 Q45 25 50 20 Q55 25 50 35" opacity="0.6" />
        <path d="M65 50 Q75 45 80 50 Q75 55 65 50" opacity="0.6" />
        <path d="M50 65 Q55 75 50 80 Q45 75 50 65" opacity="0.6" />
        <path d="M35 50 Q25 55 20 50 Q25 45 35 50" opacity="0.6" />
        <path d="M59 41 Q69 31 74 36 Q69 41 59 41" opacity="0.5" />
        <path d="M59 59 Q69 69 74 64 Q69 59 59 59" opacity="0.5" />
        <path d="M41 59 Q31 69 26 64 Q31 59 41 59" opacity="0.5" />
        <path d="M41 41 Q31 31 26 36 Q31 41 41 41" opacity="0.5" />
        {/* Leaves */}
        <path d="M50 15 Q40 10 35 20 Q45 25 50 15" opacity="0.4" />
        <path d="M85 50 Q90 40 80 35 Q75 45 85 50" opacity="0.4" />
        <path d="M50 85 Q60 90 65 80 Q55 75 50 85" opacity="0.4" />
        <path d="M15 50 Q10 60 20 65 Q25 55 15 50" opacity="0.4" />
      </svg>
    )
  }

  if (variant === "border") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={baseClasses}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Border pattern */}
        <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />
        {/* Corner decorations */}
        <circle cx="20" cy="20" r="3" opacity="0.7" />
        <circle cx="80" cy="20" r="3" opacity="0.7" />
        <circle cx="20" cy="80" r="3" opacity="0.7" />
        <circle cx="80" cy="80" r="3" opacity="0.7" />
        {/* Side decorations */}
        <circle cx="35" cy="10" r="2" opacity="0.5" />
        <circle cx="50" cy="10" r="2" opacity="0.5" />
        <circle cx="65" cy="10" r="2" opacity="0.5" />
        <circle cx="35" cy="90" r="2" opacity="0.5" />
        <circle cx="50" cy="90" r="2" opacity="0.5" />
        <circle cx="65" cy="90" r="2" opacity="0.5" />
        <circle cx="10" cy="35" r="2" opacity="0.5" />
        <circle cx="10" cy="50" r="2" opacity="0.5" />
        <circle cx="10" cy="65" r="2" opacity="0.5" />
        <circle cx="90" cy="35" r="2" opacity="0.5" />
        <circle cx="90" cy="50" r="2" opacity="0.5" />
        <circle cx="90" cy="65" r="2" opacity="0.5" />
        {/* Inner pattern */}
        <path d="M30 30 Q50 25 70 30 Q75 50 70 70 Q50 75 30 70 Q25 50 30 30" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
      </svg>
    )
  }

  if (variant === "vine") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={baseClasses}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main vine */}
        <path d="M20 80 Q30 60 40 70 Q50 50 60 60 Q70 40 80 50" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.7" />
        {/* Leaves */}
        <path d="M25 70 Q20 65 25 60 Q30 65 25 70" opacity="0.6" />
        <path d="M35 75 Q30 70 35 65 Q40 70 35 75" opacity="0.6" />
        <path d="M45 65 Q40 60 45 55 Q50 60 45 65" opacity="0.6" />
        <path d="M55 70 Q50 65 55 60 Q60 65 55 70" opacity="0.6" />
        <path d="M65 55 Q60 50 65 45 Q70 50 65 55" opacity="0.6" />
        <path d="M75 60 Q70 55 75 50 Q80 55 75 60" opacity="0.6" />
        {/* Small flowers */}
        <circle cx="30" cy="75" r="2" opacity="0.5" />
        <circle cx="50" cy="65" r="2" opacity="0.5" />
        <circle cx="70" cy="55" r="2" opacity="0.5" />
        {/* Tendrils */}
        <path d="M28 68 Q25 65 28 62" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M48 62 Q45 59 48 56" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M68 52 Q65 49 68 46" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
      </svg>
    )
  }

  return null
}
