import Link from "next/link"
import { Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 glass">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">★</span>
              </div>
              <h3 className="text-lg font-bold gradient-text">Star Gate</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              بوابتك إلى عالم الذكاء الاصطناعي - حيث تبدأ رحلتك نحو التحول الذكي
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">الخدمات</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  برمجة التطبيقات
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  برمجة المواقع
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  حلول الذكاء الاصطناعي
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  الاستشارات التقنية
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">الشركة</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#about" className="hover:text-cyan-400 transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-cyan-400 transition-colors">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link href="#packages" className="hover:text-cyan-400 transition-colors">
                  الباقات
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-cyan-400 transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">تواصل معنا</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <a href="tel:+967736272845" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <Phone className="h-4 w-4" />
                <span dir="ltr">+967 736 272 845</span>
              </a>
              <a
                href="mailto:info@najmgate.com"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@najmgate.com
              </a>
              <a
                href="mailto:Nagmimoha2020@gmail.com"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Nagmimoha2020@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Star Gate. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  )
}
