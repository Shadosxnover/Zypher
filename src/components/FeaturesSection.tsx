import { motion } from "framer-motion"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { Gamepad2, Rocket, Users } from "lucide-react"
import ParticlesBg from "./ParticlesBg"

interface Feature {
  title: string
  description: string
  icon: React.ElementType
}

const features: Feature[] = [
  {
    title: "Unleash Your Potential",
    description:
      "Immerse yourself in the dynamic world of gaming, where creativity, innovation, and community converge",
    icon: Gamepad2,
  },
  {
    title: "Elevate Your Gaming",
    description:
      "Discover cutting-edge technologies, engage in thought-provoking discussions, and forge meaningful connections with fellow gaming enthusiasts",
    icon: Rocket,
  },
  {
    title: "Redefine the Gaming Experience",
    description:
      "Be part of the revolution that's shaping the future of interactive entertainment and pushing the boundaries of what's possible",
    icon: Users,
  },
]

export default function FeaturesSection() {
  const { elementRef, opacity, y } = useScrollAnimation()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section ref={elementRef as React.RefObject<HTMLElement>} className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <ParticlesBg />
      {/* Background decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            Connecting the Gaming Community
          </span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-[#000033]/50 backdrop-blur-sm rounded-lg p-8 hover:bg-[#000044]/70 transition-all"
            >
              <div className="rounded-full bg-cyan-400/20 w-12 h-12 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

