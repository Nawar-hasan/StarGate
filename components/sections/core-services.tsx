"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Globe, Brain, LineChart, Settings, Shield } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

const services = [
  {
    icon: Smartphone,
    title: "برمجة تطبيقات",
    description:
      "برمجة و تصميم تطبيقات الجوال لمشروعك، متعددين (Android ،iOS) في برمجة التطبيقات لتحويل مشروعك وأفكارك إلى تطبيقات بجودة عالية ومستدامة",
    color: "text-purple-600",
  },
  {
    icon: Globe,
    title: "برمجة مواقع إلكترونية",
    description:
      "برمجة و تصميم موقع يتناسب مع احتياجات ومحتواك سواء كانت واجهة تعريفية، متجر إلكتروني، إدارة موارد بشرية، إدارة عملاء وغيره من المشاريع",
    color: "text-cyan-600",
  },
  {
    icon: LineChart,
    title: "دراسة وتخطيط تقني",
    description:
      "الكثير يحتاج دراسات وخطط تقنية لمعرفة تفاصيل أكثر عن فكرتهم وتحمل العقبات، لذلك نحن نقدم لك أجود الدراسات لتتمكن من معرفة كافة جوانب مشروعك",
    color: "text-purple-600",
  },
  {
    icon: Settings,
    title: "إدارة مشاريع تقنية",
    description:
      "إدارة مشروعك التقني بشكل متكامل ويشمل التطوير المستمر، إدارة الخوادم والتشبيكات وغيره من الإدارة التقنية",
    color: "text-cyan-600",
  },
  {
    icon: Brain,
    title: "استشارات تقنية",
    description:
      "تدرج في رحلتك في الاستشارات ونصائح تقنية كمؤول لدينا لتكون في المسار الصحيح وهذا من أهم أهدافنا، التوجيه والإرشاد",
    color: "text-purple-600",
  },
  {
    icon: Shield,
    title: "دعم فني وصيانة",
    description: "نسعى بأن نوفرلك خلال رحلتك إلى النجاح نوفير لك دعم في وجهة عملاء وصيانة متكاملة لمشروعك التقني",
    color: "text-cyan-600",
  },
]

export default function CoreServices() {
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = servicesRef.current?.querySelectorAll(".service-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="gradient-text">خدماتنا</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            حلول تقنية شاملة لتمكين مؤسستك من التحول الرقمي
          </p>
        </motion.div>

        <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="service-card"
            >
              <Card className="hover:shadow-lg transition-all hover:scale-105 glass glass-hover border-purple-500/20 h-full">
                <CardHeader>
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mb-4`}
                  >
                    <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
