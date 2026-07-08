import { Link } from 'react-router-dom'
import { features, clients } from '../data/features'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-primary-700 to-primary-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=60')] bg-cover bg-center opacity-10" />
        <div className="relative container-lg mx-auto px-4 py-28 text-center">
          <span className="badge bg-white/10 text-white border border-white/20 mb-6 inline-block">
            🎉 Nexus 3.0 is live — read the announcement
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
            Ship faster.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              Break nothing. QA
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Nexus is the all-in-one platform for modern engineering teams — deployments,
            monitoring, collaboration, and analytics in a single beautiful workspace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing" className="btn-primary text-base px-8 py-4">
              Start for free
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="#features"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-base"
            >
              See how it works
            </a>
          </div>
          <p className="text-blue-200 text-sm mt-8">No credit card required · Free forever plan</p>
        </div>
      </section>

      {/* Client logos */}
      <section className="border-b border-gray-100 py-12 bg-gray-50">
        <div className="container-lg mx-auto px-4">
          <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">
            Trusted by teams at the world's best companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 grayscale opacity-60">
            {clients.map((client) => (
              <img
                key={client.name}
                src={client.logo}
                alt={client.name}
                className="h-7 object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section bg-white">
        <div className="container-lg mx-auto">
          <div className="text-center mb-16">
            <span className="badge mb-4">Features</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything your team needs
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Stop stitching together 10 different tools. Nexus brings it all under one roof.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.id} className="card hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof / stats */}
      <section className="section bg-primary-500 text-white">
        <div className="container-lg mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '12,000+', label: 'Teams using Nexus' },
              { value: '99.99%', label: 'Uptime SLA' },
              { value: '<50ms', label: 'Global p99 latency' },
              { value: '4.9/5', label: 'G2 rating' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-4xl font-extrabold mb-1">{value}</div>
                <div className="text-blue-100 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white text-center">
        <div className="container-lg mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to ship smarter?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Join 12,000+ engineering teams who've made Nexus their home base.
          </p>
          <Link to="/pricing" className="btn-primary text-base px-10 py-4">
            View pricing plans
          </Link>
        </div>
      </section>
    </>
  )
}
