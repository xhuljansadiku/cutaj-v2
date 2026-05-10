'use client'

import { useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt?: string
  afterAlt?: string
  className?: string
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = 'Before renovation',
  afterAlt = 'After renovation',
  className,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setDragging(true)
    updatePosition(e.clientX)

    const onMove = (e: MouseEvent) => updatePosition(e.clientX)
    const onUp = () => {
      setDragging(false)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    setDragging(true)
    updatePosition(e.touches[0].clientX)

    const onMove = (e: TouchEvent) => updatePosition(e.touches[0].clientX)
    const onEnd = () => {
      setDragging(false)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onEnd)
    }
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('touchend', onEnd)
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative overflow-hidden rounded-[var(--radius-card)] select-none cursor-ew-resize',
        className
      )}
      style={{ touchAction: 'none' }}
    >
      {/* After image (full width, bottom layer) */}
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        {/* AFTER label */}
        <div className="absolute top-4 right-4 bg-[var(--color-gold)] text-white text-xs font-bold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full">
          After
        </div>
      </div>

      {/* Before image (clipped, top layer) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <div className="relative w-full h-full">
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        {/* BEFORE label */}
        <div className="absolute top-4 left-4 bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full">
          Before
        </div>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 z-10 flex items-center justify-center"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-white/90" />

        {/* Handle circle */}
        <div
          className={cn(
            'relative z-10 w-11 h-11 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center transition-transform duration-150',
            dragging && 'scale-110'
          )}
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path
              d="M6 7H1M1 7L4 4M1 7L4 10M14 7H19M19 7L16 4M19 7L16 10"
              stroke="#1A1A1A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Drag hint (fades out on first interaction) */}
      {!dragging && position === 50 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm pointer-events-none">
          Drag to compare
        </div>
      )}
    </div>
  )
}
