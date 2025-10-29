"use client"

import { Button } from "@/components/ui/button"
import { Lightbulb, Users, Zap, TrendingUp, Sparkles, Cpu, Network, Rocket, Brain, Code } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/967736272845", "_blank")
  }

  const floatingIcons = [
    { Icon: Brain, delay: 0, x: "10%", y: "20%" },
    { Icon: Cpu, delay: 0.5, x: "80%", y: "15%" },
    { Icon: Network, delay: 1, x: "15%", y: "70%" },
    { Icon: Rocket, delay: 1.5, x: "85%", y: "75%" },
    { Icon: Code, delay: 2, x: "50%", y: "85%" },
    { Icon: Sparkles, delay: 2.5, x: "90%", y: "40%" },
  ]

  return (
    <section className="relative py-12 sm:py-20 md:py-32 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-blue-950 to-cyan-950">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-10 w-96 h-96 bg-purple-500/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-3xl"
        />
      </div>

      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-none"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0.3, 0.6, 0],
            scale: [0, 1.2, 1, 1.2, 0],
            y: [0, -30, 0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-purple-500/30 to-cyan-500/30 backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <item.Icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-300" />
          </div>
        </motion.div>
      ))}

      {/* Particle effect lines */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"
          style={{
            left: `${Math.random() * 100}%`,
            height: `${Math.random() * 200 + 100}px`,
          }}
          initial={{ top: "-200px", opacity: 0 }}
          animate={{
            top: "100%",
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6 sm:space-y-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full glass border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              نفتح لك بوابة المستقبل الرقمي
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-balance"
            >
              <span className="gradient-text inline-block">Star Gate</span>
              <br />
              للتحول الرقمي والذكاء الاصطناعي
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
            >
              ستار جيت هي شركة تقنية متخصصة في التحول الرقمي، والذكاء الاصطناعي، وتطوير البرمجيات الذكية. نعمل على تمكين
              المؤسسات من الانتقال إلى مستقبل رقمي متكامل من خلال حلول مبتكرة في مجالات الأتمتة، تحليل البيانات، وتطوير
              الأنظمة الذكية التي ترفع الكفاءة وتزيد من القدرة التنافسية.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="gap-2 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 border-0 text-base sm:text-lg px-6 sm:px-8 transition-all hover:scale-105"
              >
                عرض الباقات
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleWhatsAppClick}
                className="glass-hover border-white/20 text-base sm:text-lg px-6 sm:px-8 bg-transparent hover:bg-white/10"
              >
                تواصل معنا
              </Button>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-16">
              {[
                {
                  icon: Lightbulb,
                  title: "لا حدود لأفكارك",
                  subtitle: "ولا حدود لبرمجتنا",
                },
                {
                  icon: Users,
                  title: "فريق عمل",
                  subtitle: "ومبرمجين محترفين",
                },
                {
                  icon: Zap,
                  title: "دعم فني",
                  subtitle: "لخدمتك دائماً",
                },
                {
                  icon: TrendingUp,
                  title: "جودة وإتقان",
                  subtitle: "وسرعة بالتنفيذ",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.8 + index * 0.15,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className="p-4 sm:p-6 rounded-2xl glass glass-hover border border-purple-500/20 text-center group cursor-pointer relative overflow-hidden"
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mb-2 sm:mb-3 relative z-10"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </motion.div>
                  <h3 className="font-bold text-xs sm:text-sm mb-1 text-white relative z-10">{feature.title}</h3>
                  <p className="text-[10px] sm:text-xs text-gray-400 relative z-10">{feature.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
