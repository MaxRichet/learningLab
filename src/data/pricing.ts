export type Plan = {
  id: string
  name: string
  price: number
  period: string
  description: string
  popular: boolean
  cta: string
  features: string[]
}

export const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 0,
    period: 'month',
    description: 'Perfect for indie developers and side projects.',
    popular: false,
    cta: 'Start for free',
    features: [
      'Up to 3 projects',
      '5 GB storage',
      'Community support',
      'Basic analytics',
      '1 team member',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 49,
    period: 'month',
    description: 'Everything you need to ship production-grade products.',
    popular: true,
    cta: 'Start 14-day trial',
    features: [
      'Unlimited projects',
      '100 GB storage',
      'Priority support (< 4h)',
      'Advanced analytics',
      'Up to 10 team members',
      'Custom domains',
      'CI/CD integrations',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 199,
    period: 'month',
    description: 'Dedicated infrastructure and compliance for large teams.',
    popular: false,
    cta: 'Contact sales',
    features: [
      'Everything in Pro',
      'Unlimited storage',
      'Dedicated SLA (99.99%)',
      'SSO & SAML',
      'Unlimited members',
      'Custom contracts',
      'On-premise option',
    ],
  },
]
