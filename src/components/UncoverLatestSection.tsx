import { motion } from "framer-motion"
import { ArrowRight, Calendar, Globe, Trophy, Users } from "lucide-react"
import ParticlesBg from "./ParticlesBg"

const stats = [
  { icon: Users, value: "10K+", label: "Attendees" },
  { icon: Globe, value: "50+", label: "Countries" },
  { icon: Trophy, value: "100+", label: "Events" },
  { icon: Calendar, value: "3", label: "Days" },
]

export default function UncoverLatestSection() {
  return (
    <section className="min-h-screen relative py-20 overflow-hidden px-4 sm:px-6 lg:px-8">
        <ParticlesBg />
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Uncover the Latest
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the curve with exclusive first looks at upcoming releases and revolutionary gaming concepts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#000033]/40 to-[#000044]/40 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 text-center">{stat.value}</h3>
                <p className="text-gray-400 text-center">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-[#000033]/40 to-[#000044]/40 backdrop-blur-sm rounded-xl p-8 border border-purple-500/10 hover:border-purple-500/30 transition-all">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Upcoming Highlights</h3>
                {["Virtual Reality Showcase", "eSports Tournament Finals", "Industry Panel Discussions"].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center space-x-4 mb-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    <p className="text-gray-300">{item}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-lg py-4 px-8 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                >
                  View Schedule <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-[#000033]/40 to-[#000044]/40 backdrop-blur-sm border border-cyan-500/30 text-white text-lg py-4 px-8 rounded-xl hover:border-cyan-500/60 transition-all"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 backdrop-blur-sm" />
                <img
                  src="hologram.jpg"
                  alt="Gaming Event"
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-6 bg-black/50 backdrop-blur-md rounded-lg">
                <h4 className="text-xl font-bold text-cyan-400 mb-2">Next Big Reveal</h4>
                <p className="text-gray-300">Join us for the exclusive unveiling of groundbreaking gaming technology</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

