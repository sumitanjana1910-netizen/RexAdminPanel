import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else window.location.href = '/dashboard';
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-blue-500 w-96">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-400 uppercase tracking-widest">RexAdmin</h1>
        <input className="w-full p-3 mb-4 bg-gray-700 rounded-lg outline-none border border-gray-600" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full p-3 mb-6 bg-gray-700 rounded-lg outline-none border border-gray-600" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin} className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-lg font-bold transition">LOGIN</button>
      </div>
    </div>
  );
}
