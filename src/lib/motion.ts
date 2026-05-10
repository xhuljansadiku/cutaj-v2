import type { Transition, Variants } from 'framer-motion'

// Bezier tuple typed as [number,number,number,number] so Framer Motion v12 resolves it as BezierDefinition
export const easeOutExpo = [0.16, 1, 0.3, 1] as [number, number, number, number]

export const fadeUpTransition = (delay = 0): Transition => ({
  duration: 0.65,
  delay,
  ease: easeOutExpo,
})

export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: fadeUpTransition(delay),
})

export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, delay },
})

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: easeOutExpo },
  }),
}

export const viewport = { once: true, margin: '-60px' as const }
