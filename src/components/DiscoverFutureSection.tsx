import { motion } from "framer-motion"
import { ArrowUpRight, Brain, Cpu, Gamepad } from "lucide-react"
import ParticlesBg from "./ParticlesBg"

const technologies = [
  {
    icon: Brain,
    title: "AI Gaming",
    description: "Advanced AI systems that adapt to your playstyle"
  },
  {
    icon: Cpu,
    title: "Quantum Processing",
    description: "Next-gen computing power for realistic simulations"
  },
  {
    icon: Gamepad,
    title: "Neural Interface",
    description: "Direct mind-to-game control systems"
  }
]

export default function DiscoverFutureSection() {
  return (
    <section className="min-h-screen relative py-32 overflow-hidden">
        <ParticlesBg />
      {/* Floating Background Elements */}
      <motion.div
        animate={{
          y: [0, 50, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          y: [0, -50, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl -z-10"
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-2xl transform group-hover:scale-105 transition-transform duration-500" />
            <div className="relative bg-[#000033]/40 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
              <div className="aspect-[16/9]">
                <img
                  src="future.jpg"
                  alt="Future of Gaming"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Floating Stats with new positioning */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="absolute left-4 top-4 bg-black/50 backdrop-blur-md rounded-lg p-4 border border-purple-500/20"
              >
                <p className="text-2xl font-bold text-purple-400">2.5M+</p>
                <p className="text-sm text-gray-400">Active Players</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="absolute right-4 bottom-4 bg-black/50 backdrop-blur-md rounded-lg p-4 border border-cyan-500/20"
              >
                <p className="text-2xl font-bold text-cyan-400">95%</p>
                <p className="text-sm text-gray-400">Satisfaction Rate</p>
              </motion.div>
            </div>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-6xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  Discover the Future
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Step into a world where imagination meets innovation. Our platform bridges
                the gap between contemporary gaming and future technologies, creating
                experiences that were once thought impossible.
              </p>
            </motion.div>

            {/* Technology Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="group bg-gradient-to-br from-[#000033]/40 to-[#000044]/40 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all"
                >
                  <tech.icon className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{tech.title}</h3>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2 text-white font-medium">
                  Join the Revolution <ArrowUpRight className="w-5 h-5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
              
              <button className="px-8 py-4 border border-white/20 hover:border-cyan-500/50 rounded-xl text-white transition-colors">
                View Roadmap
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

