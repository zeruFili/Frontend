import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  let status = 'Neutral number';
  if (count > 0) {
    status = 'Positive number';
  } else if (count < 0) {
    status = 'Negative number';
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Number Counter</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleDecrement}>Decrease</button>
      <p>{status}</p>
    </div>
  );
}

export default Counter;