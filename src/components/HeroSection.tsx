"use client"
import { motion } from "framer-motion"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import ParticlesBg from "./ParticlesBg"

export default function HeroSection() {
  const { elementRef, opacity, y } = useScrollAnimation()

  return (
    <section ref={elementRef as React.RefObject<HTMLElement>} className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <ParticlesBg />
      {/* Enhanced background with parallax effect */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.75 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#000022]/50 via-[#000044]/50 to-purple-900/30 z-10 mix-blend-multiply" />
        <motion.img
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          src="/hero.jpg"
          alt="Background"
          className="object-cover w-full h-full scale-105"
        />
      </motion.div>

      {/* Animated particles overlay */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000022_100%)] opacity-70" />
      
      {/* Glowing line decorations */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-0 w-64 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30" />
        <div className="absolute bottom-1/4 right-0 w-64 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center space-y-8 px-4"
          >
            {/* Modern geometric accent */}
            <div className="relative inline-block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 border border-cyan-500/20 rounded-full"
              />
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                  Next Level
                </span>
                <br className="hidden sm:block" />
                <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  Gaming Zone
                </span>
              </h1>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8"
            >
              <button className="group relative px-8 py-4 rounded-full overflow-hidden w-full sm:w-auto">
                <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:opacity-90" />
                <span className="relative z-10 text-white text-lg font-medium tracking-wider">
                  Get Started
                </span>
              </button>
              
              <button className="group relative px-8 py-4 rounded-full overflow-hidden w-full sm:w-auto">
                <div className="absolute inset-0 w-0 h-full transition-all duration-300 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-50 group-hover:w-full" />
                <span className="relative z-10 text-white text-lg font-medium tracking-wider">
                  Watch Demo
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000022] to-transparent z-10" />
    </section>
  )
}

