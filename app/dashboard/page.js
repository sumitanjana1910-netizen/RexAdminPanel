'use client';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [key, setKey] = useState('');

  const generateKey = () => {
    const randomKey = 'REX-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    setKey(randomKey);
  };

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">Gaming Admin Dashboard</h1>
      <button onClick={generateKey} className="bg-green-600 px-6 py-3 rounded text-white font-bold mb-4">
        Generate New Key
      </button>
      {key && <div className="mt-4 p-4 bg-gray-800 rounded text-xl font-mono">{key}</div>}
    </div>
  );
      }
  
