import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        window.location.href = '/login';
      } else {
        setUser(session.user);
      }
    };
    checkUser();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = '/login';
  }

  if (!user) return <div className="min-h-screen bg-black text-green-500 flex items-center justify-center font-mono text-2xl animate-pulse">SYSTEM LOADING...</div>;

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Top Navbar */}
      <nav className="bg-gray-900 p-5 shadow-lg border-b-2 border-purple-600 flex justify-between items-center">
        <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 uppercase tracking-widest">
          RexAdmin <span className="text-sm text-gray-400 align-top">v1.0</span>
        </h1>
        <button onClick={handleLogout} className="bg-red-600 hover:bg-red-500 px-5 py-2 rounded-md font-bold transition shadow-[0_0_15px_rgba(220,38,38,0.5)] uppercase tracking-wider text-sm">
          Logout
        </button>
      </nav>

      {/* Main Dashboard Content */}
      <div className="p-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Generate Key Section */}
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-[0_0_20px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <h2 className="text-2xl font-bold text-green-400 mb-6 uppercase flex items-center gap-2">
              <span className="bg-green-400 w-2 h-6 block"></span> Generate Key
            </h2>
            <input 
              className="w-full p-4 mb-4 bg-gray-950 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none text-green-300 font-mono" 
              placeholder="Enter Days (e.g., 7, 30)" 
            />
            <button className="w-full bg-green-600 hover:bg-green-500 py-4 rounded-lg font-black uppercase transition shadow-[0_0_15px_rgba(22,163,74,0.4)] tracking-widest">
              CREATE NEW KEY
            </button>
          </div>

          {/* Stats Section */}
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex flex-col justify-center items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
            <h2 className="text-xl font-bold text-blue-400 mb-2 uppercase tracking-widest">Active Keys</h2>
            <p className="text-7xl font-black text-white drop-shadow-[0_0_20px_rgba(96,165,250,0.8)]">0</p>
          </div>
        </div>

        {/* Keys Table Section */}
        <div className="mt-8 bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <h2 className="text-2xl font-bold text-purple-400 mb-6 uppercase flex items-center gap-2">
            <span className="bg-purple-400 w-2 h-6 block"></span> Key Database
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-800 bg-gray-950">
                  <th className="p-4 text-gray-400 font-bold uppercase tracking-wider text-sm">Key String</th>
                  <th className="p-4 text-gray-400 font-bold uppercase tracking-wider text-sm">Duration</th>
                  <th className="p-4 text-gray-400 font-bold uppercase tracking-wider text-sm">Status</th>
                  <th className="p-4 text-gray-400 font-bold uppercase tracking-wider text-sm">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-6 text-gray-600 italic text-center font-mono" colSpan="4">No keys generated yet. The database is empty.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
          }
