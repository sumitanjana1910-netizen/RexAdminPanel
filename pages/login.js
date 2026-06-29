import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert(error.message);
    } else {
      window.location.href = '/dashboard';
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] w-full max-w-md">
        <h1 className="text-3xl font-black text-white mb-6 uppercase text-center tracking-widest text-purple-500">Admin Login</h1>
        <input 
          type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 mb-4 bg-gray-950 rounded-lg border border-gray-700 text-white outline-none focus:border-purple-500"
        />
        <input 
          type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 mb-6 bg-gray-950 rounded-lg border border-gray-700 text-white outline-none focus:border-purple-500"
        />
        <button onClick={handleLogin} className="w-full bg-purple-600 hover:bg-purple-500 py-4 rounded-lg font-black uppercase tracking-widest text-white transition">
          Enter System
        </button>
      </div>
    </div>
  );
}
