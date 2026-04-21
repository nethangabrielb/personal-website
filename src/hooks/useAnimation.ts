import { useInView } from 'motion/react'
import { useRef } from 'react'

/** Returns a ref and whether the element has entered the viewport */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })
  return { ref, isInView }
}
