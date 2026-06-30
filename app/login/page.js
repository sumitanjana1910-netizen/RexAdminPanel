'use client';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else window.location.href = '/dashboard';
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 p-4">
      <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Admin Login</h1>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="w-full p-3 mb-4 bg-gray-950 border border-gray-700 rounded text-white" />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="w-full p-3 mb-6 bg-gray-950 border border-gray-700 rounded text-white" />
        <button onClick={handleLogin} className="w-full bg-purple-600 py-3 rounded text-white font-bold">Login</button>
      </div>
    </div>
  );
}
