import React, { useState, useCallback, useContext, createContext } from 'react';

// Create a context
const CountContext = createContext();

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount(count > 0 ? count - 1 : 0);
  }, [count]);

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      <div>
        <h1>hello</h1>
        <h1>{count}</h1>
        <button onClick={increment}>Click</button>
        <button onClick={decrement}>Click Neg</button>
        <ChildComponent />
      </div>
    </CountContext.Provider>
  );
};

const ChildComponent = () => {
  const { count, increment, decrement } = useContext(CountContext);

  return (
    <div>
      <h2>Child Component</h2>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default ParentComponent;
