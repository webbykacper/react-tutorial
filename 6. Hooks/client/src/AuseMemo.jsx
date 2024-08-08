import React, { useMemo, useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const [condition, setCondition] = useState(false); // poprawiona nazwa stanu

  // Funkcja obliczeniowa, która zwraca kosztowny wynik
  const expensiveCalculation = (num) => {
    console.log('Computing...');
    return num * 2;
  };

  // Używamy useMemo, aby zapamiętać wynik obliczeń
  const memoizedValue = useMemo(() => expensiveCalculation(count), [condition]);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>Count: {count}</p>
      <p>Memoized Value: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCondition(!condition)}>Change Condition</button> {/* Poprawione */}
    </div>
  );
}

export default Example;
