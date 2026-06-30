import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        <div className="flex h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-gray-900 border-r border-cyan-500/30 p-5">
            <h1 className="text-2xl font-bold text-cyan-400 mb-8">REX ADMIN</h1>
            <nav className="space-y-4">
              <a href="/dashboard" className="block p-3 rounded-lg hover:bg-cyan-500/20 text-cyan-100">Dashboard</a>
              <a href="/keys" className="block p-3 rounded-lg hover:bg-cyan-500/20 text-cyan-100">Key Manager</a>
              <a href="/resellers" className="block p-3 rounded-lg hover:bg-cyan-500/20 text-cyan-100">Resellers</a>
            </nav>
          </aside>
          
          {/* Main Content */}
          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
