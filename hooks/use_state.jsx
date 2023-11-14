import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

//Provided by GPT-4