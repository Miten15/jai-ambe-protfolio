interface IndianPatternProps {
  size?: number
  className?: string
}

export function IndianPattern({ size = 80, className = "" }: IndianPatternProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Mandala-style pattern */}
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
      <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
      <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Petals */}
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={i} transform={`rotate(${i * 45} 50 50)`}>
          <path d="M50 15 Q60 25 50 35 Q40 25 50 15" fill="currentColor" opacity="0.2" />
        </g>
      ))}

      {/* Center dot */}
      <circle cx="50" cy="50" r="5" fill="currentColor" opacity="0.6" />
    </svg>
  )
}
