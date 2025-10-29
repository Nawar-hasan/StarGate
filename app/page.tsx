import Hero from "@/components/sections/hero"
import WhyWeStarted from "@/components/sections/why-we-started"
import CoreServices from "@/components/sections/core-services"
import PackagesPricing from "@/components/sections/packages-pricing"
import PaymentOptions from "@/components/sections/payment-options"
import CryptoDashboard from "@/components/sections/crypto-dashboard"
import ContactSection from "@/components/sections/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyWeStarted />
      <CoreServices />
      <PackagesPricing />
      <PaymentOptions />
      <CryptoDashboard />
      <ContactSection />
    </main>
  )
}
