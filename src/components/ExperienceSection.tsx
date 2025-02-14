import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Globe, Laptop, Joystick, Cpu, Code2, Radio, Sparkles } from "lucide-react"
import ParticlesBg from "./ParticlesBg"

const mainFeatures = [
  {
    icon: Globe,
    title: "Global Tournaments",
    description: "Compete in international tournaments with real-time matchmaking",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Laptop,
    title: "Tech Workshops",
    description: "Learn from industry experts about game development and design",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Joystick,
    title: "Retro Gaming",
    description: "Experience classic games in our dedicated retro gaming lounge",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Cpu,
    title: "Advanced Processing",
    description: "Discover the power of next-gen computing technology",
    color: "from-blue-500 to-indigo-500"
  }
]

const highlights = [
  {
    icon: Code2,
    title: "Developer Sessions",
    items: ["Game Engine Tutorials", "Asset Creation", "Level Design"]
  },
  {
    icon: Radio,
    title: "Live Streaming",
    items: ["Pro Gaming Tips", "Industry Interviews", "Live Events"]
  }
]

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={containerRef} className="min-h-screen relative py-32 overflow-hidden">
        <ParticlesBg />
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-30">
          <motion.div
            animate={{
              backgroundPosition: ["0px 0px", "100px 100px"],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.15) 2px, transparent 0)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          style={{ y }}
          className="max-w-7xl mx-auto space-y-24"
        >
          {/* Header Section */}
          <div className="text-center space-y-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 blur-xl opacity-30" />
                <span className="relative px-6 py-2 bg-purple-500/10 rounded-full text-purple-400 text-sm font-medium">
                  Gaming Evolution
                </span>
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 animate-gradient-x">
                Experience Next-Gen Gaming
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Step into the future of gaming with cutting-edge technology and immersive experiences.
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000" />
                <div className="relative bg-gradient-to-br from-[#000033]/40 to-[#000044]/40 p-8 rounded-xl border border-cyan-500/10">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-6`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Highlights Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <highlight.icon className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">{highlight.title}</h3>
                </div>
                <div className="space-y-4">
                  {highlight.items.map((item, itemIndex) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: itemIndex * 0.2 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
                      <p className="text-gray-300">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animated Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-20 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-20 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"
      />
    </section>
  )
}
