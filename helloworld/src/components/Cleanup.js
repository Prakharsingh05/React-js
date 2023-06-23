import React, { useEffect, useState } from 'react';

export default function Cleanup() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    
    console.log('Cleanup component mounted');
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Increment count
      </button>
    </div>
  );
}