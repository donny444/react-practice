import React, { useCallback } from 'react';

function Example({ onIncrement }) {
  const increment = useCallback(() => {
    onIncrement();
  }, [onIncrement]);

  return <button onClick={increment}>Increment</button>;
}

//Provided by GPT-4