import React, { useState, useCallback, useContext, createContext, useEffect } from 'react';
import Layout from './useLayout';

const CountContext = createContext();

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  },[count]);

  const decrement = useCallback(() => {
    setCount(count > 0 ? count - 1 : 0);
  }, [count]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log('Data fetched!');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Cleanup function to cancel the operation when the component unmounts
    return () => {
      console.log('Cleanup: Operation canceled');
    };
  },[]); // Empty dependency array means the effect runs once after the initial render

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      <div>
        <h1>hello</h1>
        <h1>{count}</h1>
        <button onClick={increment}>Click</button>
        <button onClick={decrement}>Click Neg</button>
        <ChildComponent />
        <Layout />
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
