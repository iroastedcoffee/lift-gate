export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="border-b px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <a href="/" className="font-semibold text-lg">My Site</a>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="/" className="hover:text-gray-900">Home</a>
            <a href="/posts" className="hover:text-gray-900">Blog</a>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}
