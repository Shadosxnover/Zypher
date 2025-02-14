"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Globe, Twitter, Youtube, Users, MessageSquare, Trophy } from "lucide-react"
import ParticlesBg from "./ParticlesBg"

const stats = [
  { icon: Users, value: "50K+", label: "Community Members" },
  { icon: MessageSquare, value: "100K+", label: "Daily Messages" },
  { icon: Trophy, value: "1000+", label: "Events Hosted" },
]

const platforms = [
  { name: "Twitter", icon: Twitter, color: "from-[#1DA1F2] to-[#0D8BD9]" },
  { name: "YouTube", icon: Youtube, color: "from-[#FF0000] to-[#CC0000]" },
]

export default function CommunitySection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10])

  return (
    <section ref={ref} className="min-h-screen relative py-20 overflow-hidden">
        <ParticlesBg />
      {/* Animated background elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl -z-10"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl -z-10"
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Join Our Growing Community
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with passionate gamers, developers, and creators from around the globe.
            Be part of the next gaming revolution.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl blur-xl transform group-hover:scale-105 transition-transform duration-500" />
              <div className="relative bg-[#000033]/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all">
                <stat.icon className="w-8 h-8 text-cyan-400 mb-4 mx-auto" />
                <h3 className="text-3xl font-bold text-white mb-2 text-center">{stat.value}</h3>
                <p className="text-gray-400 text-center">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white">Connect With Us</h3>
            <p className="text-gray-300 text-lg">
              Join our vibrant community platforms and stay updated with the latest gaming trends,
              events, and exclusive content.
            </p>
            
            <div className="space-y-4">
              {platforms.map((platform) => (
                <motion.button
                  key={platform.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full group relative overflow-hidden rounded-xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative py-4 px-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <platform.icon className="w-6 h-6 text-white" />
                      <span className="text-white font-medium">Join on {platform.name}</span>
                    </div>
                    <Globe className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{ rotate }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-2xl transform group-hover:scale-105 transition-transform duration-500" />
            <div className="relative aspect-square bg-[#000033]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070"
                alt="Community"
                className="w-full h-full object-cover rounded-xl opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-xl" />
              <div className="absolute bottom-8 left-8 right-8">
                <h4 className="text-2xl font-bold text-white mb-2">Monthly Meetups</h4>
                <p className="text-gray-300">Join our virtual and in-person gaming events</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
