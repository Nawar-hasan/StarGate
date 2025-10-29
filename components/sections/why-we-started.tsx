"use client"
import { motion } from "framer-motion"
import { Target, TrendingUp, Users, Award } from "lucide-react"

export default function WhyWeStarted() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">من نحن؟</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 mx-auto"></div>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-purple-400"
          >
            أهدافك هي أهدافنا
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            ستار جيت تجمع مختصين بمجالات عدة لتمكين قدراتهم على أن تحقق نجاح مشاريع العملاء وجعل مشاريعهم متصدرة بين
            المنافسين لتكون الأفضل. نسعى لتكون رحلتك نحو التحول الرقمي سلسة ومثمرة، حيث نفتح لك بوابة المستقبل الرقمي
            بحلول ذكية ومبتكرة.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
          >
            {[
              { icon: Target, label: "رؤية واضحة" },
              { icon: TrendingUp, label: "نمو مستدام" },
              { icon: Users, label: "فريق محترف" },
              { icon: Award, label: "جودة عالية" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex flex-col items-center gap-3 p-6 rounded-xl glass border border-purple-500/20 hover:border-purple-500/40 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium text-white">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
