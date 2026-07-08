import { posts, tagColor } from '../data/blog'

export default function Blog() {
  const [featured, ...rest] = posts

  return (
    <div className="section bg-white">
      <div className="container-lg mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge mb-4">Blog</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stories from the team
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Deep dives, product updates, and lessons learned from building Nexus.
          </p>
        </div>

        {/* Featured post */}
        <article className="card p-0 overflow-hidden mb-12 group">
          <div className="grid md:grid-cols-2">
            <div className="aspect-video md:aspect-auto overflow-hidden">
              <img
                src={featured.cover}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col justify-center gap-4">
              <span className={`badge self-start ${tagColor(featured.tag)}`}>
                {featured.tag}
              </span>
              <h2 className="text-2xl font-bold text-gray-900 leading-snug group-hover:text-primary-600 transition-colors">
                {featured.title}
              </h2>
              <p className="text-gray-500 leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center gap-3 text-sm text-gray-400 pt-2 border-t border-gray-100">
                <span className="font-medium text-gray-600">{featured.author}</span>
                <span>·</span>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
            </div>
          </div>
        </article>

        {/* Post grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <article key={post.id} className="card p-0 overflow-hidden group flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <span className={`badge self-start ${tagColor(post.tag)}`}>
                  {post.tag}
                </span>
                <h2 className="font-bold text-gray-900 leading-snug group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-xs text-gray-400 pt-2 border-t border-gray-100">
                  <span className="font-medium text-gray-600">{post.author}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-primary-50 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Stay in the loop
          </h2>
          <p className="text-gray-500 mb-6">
            New articles every two weeks. No spam, ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
            <input
              type="email"
              placeholder="you@example.com"
              className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
            <button className="btn-primary py-2.5 text-sm whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
