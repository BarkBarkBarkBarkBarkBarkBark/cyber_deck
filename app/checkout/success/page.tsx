import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, Package, Mail, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Order Confirmed",
  description: "Your Hosaka order has been confirmed.",
}

const steps = [
  {
    icon: Mail,
    title: "Check your email",
    description:
      "A confirmation receipt has been sent to the email address you provided at checkout.",
  },
  {
    icon: Package,
    title: "Production begins",
    description:
      "Your deck is built to order. Current lead time is 4–6 weeks from order confirmation. We'll email you tracking when it ships.",
  },
]

export default function CheckoutSuccessPage() {
  return (
    <div className="bg-slate-950 min-h-screen pt-24 flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Success icon */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-emerald-400" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight mb-4">
          Order confirmed.
        </h1>
        <p className="text-slate-400 leading-relaxed mb-12 max-w-md mx-auto">
          Thank you for your order. Here&apos;s what happens next.
        </p>

        {/* Steps */}
        <div className="space-y-4 mb-12 text-left">
          {steps.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex items-start gap-4 p-5 rounded-xl border border-slate-800 bg-slate-900/40"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-200 mb-1">
                  {title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Questions */}
        <p className="text-sm text-slate-500 mb-8">
          Questions?{" "}
          <Link
            href="/contact"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Contact us
          </Link>{" "}
          and reference your order confirmation email.
        </p>

        {/* CTA */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
        >
          Browse other products
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
