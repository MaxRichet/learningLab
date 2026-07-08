import { useState } from 'react'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="section bg-white">
      <div className="container-lg mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — info */}
          <div>
            <span className="badge mb-4">Contact</span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Let's talk</h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Whether you have a question about features, pricing, or just want to say hi —
              our team is ready to answer all your questions.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: '📍',
                  title: 'Office',
                  detail: '12 Rue du Faubourg Saint-Antoine, 75012 Paris',
                },
                {
                  icon: '✉️',
                  title: 'Email',
                  detail: 'hello@nexus.io',
                },
                {
                  icon: '💬',
                  title: 'Live chat',
                  detail: 'Available Mon – Fri, 9am – 6pm CET',
                },
              ].map(({ icon, title, detail }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="text-2xl">{icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
                    <p className="text-gray-500 text-sm">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="card shadow-md">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✅</div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Message sent!</h2>
                <p className="text-gray-500 text-sm">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  className="mt-6 text-primary-500 text-sm font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-lg font-bold text-gray-900 mb-2">Send a message</h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Doe"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@company.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 transition bg-white"
                  >
                    <option value="">Select a topic…</option>
                    <option value="sales">Sales & Pricing</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us how we can help…"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 transition resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  Send message
                </button>

                <p className="text-xs text-gray-400 text-center">
                  We'll reply within 24 hours on business days.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
