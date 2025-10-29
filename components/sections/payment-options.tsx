"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Wallet, Bitcoin, DollarSign } from "lucide-react"

const paymentMethods = [
  {
    icon: CreditCard,
    title: "Credit/Debit Cards",
    description: "Visa, Mastercard, American Express",
    color: "text-blue-600",
  },
  {
    icon: Wallet,
    title: "Digital Wallets",
    description: "PayPal, Apple Pay, Google Pay",
    color: "text-purple-600",
  },
  {
    icon: Bitcoin,
    title: "Cryptocurrency",
    description: "Bitcoin, Ethereum, USDT",
    color: "text-orange-600",
  },
  {
    icon: DollarSign,
    title: "Bank Transfer",
    description: "Direct bank transfers accepted",
    color: "text-green-600",
  },
]

export default function PaymentOptions() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Flexible Payment Options</h2>
          <p className="text-lg text-muted-foreground">We accept multiple payment methods for your convenience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {paymentMethods.map((method) => (
            <Card key={method.title} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted">
                    <method.icon className={`h-8 w-8 ${method.color}`} />
                  </div>
                </div>
                <CardTitle className="text-lg">{method.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
