import { useScroll, useTransform, type MotionValue } from "framer-motion"
import { useRef } from "react"

export const useScrollAnimation = () => {
  const elementRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start end", "end start"]
  })

  const opacity: MotionValue<number> = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const y: MotionValue<number> = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, 100])
  const scale: MotionValue<number> = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.8, 1, 1, 0.8])

  return { elementRef, opacity, y, scale, scrollYProgress }
}
