'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [status, setStatus] = useState<string>('Loading...');
  const [dbStatus, setDbStatus] = useState<string>('Loading...');

  useEffect(() => {
    fetch('http://localhost:8000/health')
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setDbStatus(data.database);
      })
      .catch(() => {
        setStatus('Error connecting to backend');
        setDbStatus('N/A');
      });
  }, []);

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Health App</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
        Backend Status: <strong style={{ color: status === 'healthy' ? 'green' : 'red' }}>{status}</strong>
      </p>
      <p style={{ fontSize: '1.25rem' }}>
        Database Status: <strong style={{ color: dbStatus === 'connected' ? 'green' : 'red' }}>{dbStatus}</strong>
      </p>
    </main>
  );
}