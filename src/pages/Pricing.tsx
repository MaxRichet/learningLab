import { Link } from 'react-router-dom'
import { plans } from '../data/pricing'

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <div className="section bg-white">
      <div className="container-lg mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge mb-4">Pricing</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            No hidden fees. No surprises. Start free and upgrade when you're ready.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl border-2 p-8 flex flex-col gap-6 ${
                plan.popular
                  ? 'border-primary-500 shadow-xl shadow-primary-100'
                  : 'border-gray-200'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Name & price */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h2>
                <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-extrabold text-gray-900">
                    {plan.price === 0 ? 'Free' : `$${plan.price}`}
                  </span>
                  {plan.price > 0 && (
                    <span className="text-gray-400 mb-2">/ {plan.period}</span>
                  )}
                </div>
              </div>

              {/* CTA */}
              <Link
                to="/contact"
                className={
                  plan.popular
                    ? 'btn-primary justify-center'
                    : 'btn-secondary justify-center'
                }
              >
                {plan.cta}
              </Link>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckIcon />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ teaser */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm">
            Questions? We're happy to help.{' '}
            <Link to="/contact" className="text-primary-500 font-medium hover:underline">
              Talk to our team →
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
