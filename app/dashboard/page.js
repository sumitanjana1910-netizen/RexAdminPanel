export default function Dashboard() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
      
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-900 border border-cyan-500/50 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          <h3 className="text-gray-400">Total Keys</h3>
          <p className="text-3xl font-bold text-cyan-400">1,284</p>
        </div>
        
        <div className="p-6 bg-gray-900 border border-purple-500/50 rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.3)]">
          <h3 className="text-gray-400">Active Resellers</h3>
          <p className="text-3xl font-bold text-purple-400">24</p>
        </div>
        
        <div className="p-6 bg-gray-900 border border-emerald-500/50 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.3)]">
          <h3 className="text-gray-400">Available Credits</h3>
          <p className="text-3xl font-bold text-emerald-400">8,500</p>
        </div>
      </div>

      {/* Quick Action Button */}
      <div className="mt-8">
        <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold transition">
          + Generate New Key
        </button>
      </div>
    </div>
  );
}
