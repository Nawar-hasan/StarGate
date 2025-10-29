"use client"

import { Button } from "@/components/ui/button"
import { Check, Sparkles, Star } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

const appPackages = [
  {
    name: "باقة المبتدئ",
    level: "Starter",
    duration: "3 أسابيع",
    description: "موقع/تطبيق صغير بميزات أساسية مثالي للمشاريع الناشئة",
    features: [
      "تصميم واجهة مستخدم احترافية",
      "تطوير تطبيق أو موقع أساسي",
      "تحديثات أمان بسيطة",
      "مراقبة وقت التشغيل اليومي",
      "دعم التذاكر (استجابة 48 ساعة)",
      "شهر واحد دعم مجاني",
    ],
    highlight: "مثالي للمشاريع الصغيرة والشركات الناشئة",
    buttonColor: "from-cyan-500 to-blue-600",
    borderColor: "border-cyan-500/30",
  },
  {
    name: "باقة المتوسط",
    level: "Intermediate",
    duration: "6-8 أسابيع",
    description: "نظام متكامل مع لوحة إدارة وتكاملات خارجية",
    features: [
      "نظام CRUD كامل",
      "لوحة إدارة متقدمة",
      "تكامل 1-2 API خارجي",
      "اختبارات آلية أساسية",
      "خط أنابيب النشر (CI/CD)",
      "شهرين دعم مجاني",
    ],
    highlight: "الأنسب للشركات المتوسطة والمشاريع المتنامية",
    popular: true,
    buttonColor: "from-purple-500 to-pink-600",
    borderColor: "border-purple-500/30",
  },
  {
    name: "باقة المتقدم",
    level: "Advanced",
    duration: "10-16 أسبوع",
    description: "منتج SaaS مؤسسي مع أمان عالي وأداء متميز",
    features: [
      "منصة SaaS كاملة",
      "تكاملات متعددة ومتقدمة",
      "خط أنابيب CI/CD كامل",
      "مراقبة واختبار الحمل",
      "تحليلات متقدمة",
      "3 أشهر دعم مجاني",
    ],
    highlight: "للمؤسسات الكبيرة والمشاريع المعقدة",
    buttonColor: "from-cyan-500 to-teal-600",
    borderColor: "border-cyan-500/30",
  },
]

const aiPackages = [
  {
    name: "AI مبتدئ",
    level: "Starter",
    duration: "2-3 أسابيع",
    description: "روبوت محادثة بسيط أو نموذج نصي أساسي",
    features: ["روبوت محادثة MVP", "نموذج تصنيف بسيط", "اختبار API", "بيانات تدريب صغيرة", "توثيق أساسي"],
    highlight: "مثالي لتجربة تقنيات الذكاء الاصطناعي",
    buttonColor: "from-cyan-500 to-blue-600",
    borderColor: "border-cyan-500/30",
  },
  {
    name: "AI متوسط",
    level: "Intermediate",
    duration: "6-8 أسابيع",
    description: "روبوت ذكي مدعوم بـ LLM مع تكاملات متقدمة",
    features: [
      "تكامل/ضبط دقيق LLM",
      "هندسة المطالبات المتقدمة",
      "تكامل API متعدد",
      "لوحة تحكم التحليلات",
      "التحقق البشري",
      "تقارير الجودة",
    ],
    highlight: "الأنسب للأعمال التي تحتاج ذكاء اصطناعي متقدم",
    popular: true,
    buttonColor: "from-teal-500 to-green-600",
    borderColor: "border-teal-500/30",
  },
  {
    name: "AI متقدم",
    level: "Advanced",
    duration: "10-14 أسبوع",
    description: "نظام AI مخصص مع MLOps ومراقبة شاملة",
    features: [
      "نموذج مدرب مخصص",
      "خط أنابيب البيانات",
      "API الإنتاج",
      "خط أنابيب إعادة التدريب",
      "توثيق الأداء والتحيز",
      "مجموعة بيانات كبيرة",
    ],
    highlight: "للمؤسسات التي تحتاج حلول AI مخصصة",
    buttonColor: "from-cyan-500 to-teal-600",
    borderColor: "border-cyan-500/30",
  },
]

export default function PackagesPricing() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/967736272845", "_blank")
  }

  return (
    <section id="packages" className="py-12 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">باقاتنا</h2>
          <p className="text-base sm:text-lg text-gray-400 px-4">
            من المشاريع الصغيرة إلى حلول المؤسسات - باقات مرنة مصممة لتناسب احتياجات مشروعك
          </p>
          <p className="text-sm sm:text-base text-cyan-400 font-medium">
            الأسعار تحدد بعد التواصل معنا ومناقشة متطلبات مشروعك
          </p>
        </motion.div>

        <Tabs defaultValue="app" className="max-w-7xl mx-auto">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 glass border border-white/10 p-2 mb-8">
            <TabsTrigger
              value="app"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600 text-xs sm:text-sm"
            >
              تطوير التطبيقات
            </TabsTrigger>
            <TabsTrigger
              value="ai"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-green-600 text-xs sm:text-sm"
            >
              الذكاء الاصطناعي
            </TabsTrigger>
          </TabsList>

          <TabsContent value="app" className="mt-8 sm:mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {appPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`relative p-6 sm:p-8 rounded-3xl glass border-2 ${pkg.borderColor} ${pkg.popular ? "ring-2 ring-purple-500/50" : ""}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs sm:text-sm font-bold flex items-center gap-2">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-white" />
                      الأكثر شعبية
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-3">
                      <span className="text-cyan-400 text-xs sm:text-sm font-semibold">{pkg.level}</span>
                    </div>
                    <div className="text-cyan-400 text-xs sm:text-sm mb-3">{pkg.duration}</div>
                    <p className="text-gray-400 text-sm">{pkg.description}</p>
                  </div>

                  <div className="space-y-3 sm:space-y-4 mb-6">
                    <div className="text-white font-semibold text-sm">يتضمن:</div>
                    {pkg.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 sm:gap-3">
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-xs sm:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {pkg.highlight && (
                    <div className="p-3 sm:p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 mb-4 sm:mb-6">
                      <p className="text-blue-300 text-xs sm:text-sm">{pkg.highlight}</p>
                    </div>
                  )}

                  <Button
                    onClick={handleWhatsAppClick}
                    className={`w-full bg-gradient-to-r ${pkg.buttonColor} hover:opacity-90 border-0 text-white font-bold text-sm sm:text-base`}
                  >
                    تواصل معنا للأسعار
                  </Button>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ai" className="mt-8 sm:mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {aiPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`relative p-6 sm:p-8 rounded-3xl glass border-2 ${pkg.borderColor} ${pkg.popular ? "ring-2 ring-teal-500/50" : ""}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-teal-500 to-green-600 text-white text-xs sm:text-sm font-bold flex items-center gap-2">
                      <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                      الأكثر شعبية
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-teal-500/20 to-green-500/20 border border-teal-500/30 mb-3">
                      <span className="text-teal-400 text-xs sm:text-sm font-semibold">{pkg.level}</span>
                    </div>
                    <div className="text-cyan-400 text-xs sm:text-sm mb-3">{pkg.duration}</div>
                    <p className="text-gray-400 text-sm">{pkg.description}</p>
                  </div>

                  <div className="space-y-3 sm:space-y-4 mb-6">
                    <div className="text-white font-semibold text-sm">التسليمات:</div>
                    {pkg.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 sm:gap-3">
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 text-teal-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-xs sm:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {pkg.highlight && (
                    <div className="p-3 sm:p-4 rounded-xl bg-teal-500/10 border border-teal-500/20 mb-4 sm:mb-6">
                      <p className="text-teal-300 text-xs sm:text-sm">{pkg.highlight}</p>
                    </div>
                  )}

                  <Button
                    onClick={handleWhatsAppClick}
                    className={`w-full bg-gradient-to-r ${pkg.buttonColor} hover:opacity-90 border-0 text-white font-bold text-sm sm:text-base`}
                  >
                    تواصل معنا للأسعار
                  </Button>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl glass border border-white/10">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">هل تحتاج حلاً مخصصاً؟</h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 px-4">
              دعنا نناقش متطلباتك المحددة ونبني حلاً مثالياً لعملك
            </p>
            <Button
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 border-0 text-white font-bold px-6 sm:px-8 text-sm sm:text-base"
            >
              جدولة استشارة
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
