export default function Index() {
  const posts = [];

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Welcome</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <a key={post.slug} href={`/posts/${post.slug}`} className="block group">
            <h2 className="text-xl font-medium group-hover:underline">{post.title}</h2>
            <p className="text-gray-500 text-sm mt-1">{post.excerpt}</p>
            <time className="text-xs text-gray-400">{post.date}</time>
          </a>
        ))}
      </div>
    </div>
  );
}
