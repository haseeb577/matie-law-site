'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Logo({ className = '' }: { className?: string }) {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return <LogoSVG className={className} />
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Image - User will need to add logo.png to public folder */}
      <div className="relative w-12 h-12">
        <Image
          src="/logo.png"
          alt="Gavel Legal Services"
          width={48}
          height={48}
          className="object-contain"
          priority
          onError={() => setImgError(true)}
        />
      </div>
      <div className="hidden sm:block">
        <div className="text-xl font-bold text-gray-900">GAVEL LEGAL</div>
        <div className="text-xs text-gold-600 font-medium">LEGAL SERVICES</div>
      </div>
    </div>
  )
}

// Fallback SVG Logo if image not available
export function LogoSVG({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="w-12 h-12 bg-gradient-to-br from-gold-600 to-gold-700 rounded-lg flex items-center justify-center shadow-md">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      </div>
      <div className="hidden sm:block">
        <div className="text-xl font-bold text-gray-900">GAVEL LEGAL</div>
        <div className="text-xs text-gold-600 font-medium">LEGAL SERVICES</div>
      </div>
    </div>
  )
}

