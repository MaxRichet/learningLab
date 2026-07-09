import { team } from '../data/team'

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white section text-center">
        <div className="container-lg mx-auto px-4">
          <span className="badge bg-white/10 text-white border border-white/20 mb-6">About us</span>
          <h1 className="text-5xl font-bold mb-6">
            We build tools for<br />builders.
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Nexus was founded in 2021 by engineers who were tired of context-switching between
            a dozen SaaS tools just to ship a feature. We've been there. We built the escape hatch.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section bg-white">
        <div className="container-lg mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge mb-4">Our mission</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 mr-30">
                Radically reduce the cognitive overhead of shipping software.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                The average engineering team uses 14 different tools to build and deploy a product.
                Each one has its own login, its own billing, its own learning curve. Nexus collapses
                all of that into a single cohesive workspace.
              </p>
              <p className="text-gray-500 leading-relaxed">
                We're a remote-first company of 38 people, headquartered in Paris with teammates
                across San Francisco, London, and Singapore.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-video shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop"
                alt="Team collaborating"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-gray-50">
        <div className="container-lg mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge mb-4">Values</span>
            <h2 className="text-3xl font-bold text-gray-900">What we stand for</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Clarity over cleverness', desc: 'Simple solutions that anyone on the team can understand and maintain.' },
              { icon: '🚀', title: 'Bias for action', desc: 'Ship fast, gather feedback, iterate. Perfection is the enemy of progress.' },
              { icon: '🤝', title: 'Default to trust', desc: 'We hire great people and trust them to do great work without micromanagement.' },
              { icon: '📣', title: 'Radical transparency', desc: 'We share metrics, decisions, and roadmaps openly with our team and customers.' },
              { icon: '🌍', title: 'Async first', desc: 'We respect time zones and protect deep work by defaulting to written communication.' },
              { icon: '💚', title: 'Sustainability', desc: 'We run on 100% renewable energy and offset our cloud carbon footprint monthly.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-white">
        <div className="container-lg mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge mb-4">Team</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Meet the team</h2>
            <p className="text-gray-500">The people building Nexus every day.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.id} className="flex flex-col items-center text-center card gap-4">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover ring-4 ring-primary-50"
                />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                  <p className="text-primary-500 text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
                <a href="#" className="text-gray-400 hover:text-gray-700 text-xs transition-colors">
                  {member.twitter}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
