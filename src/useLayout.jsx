import React, { useState, useEffect, useLayoutEffect } from 'react';

const LayoutEffectExample = () => {
  const [width, setWidth] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    console.log('Async Effect: Width is', width);
    setLoading(false); // Update loading state when width is available
  }, [width]);

  useLayoutEffect(() => {
    console.log('Sync Layout Effect: Width is', width);
  }, [width]);

  return (
    <div>
      {loading ? (
        // Render loading skeleton or any loading indicator here
        <h1>Loading...</h1>
      ) : (
        // Render content when not loading
        <div>
          <h1>Window Width: {width}</h1>
        </div>
      )}
    </div>
  );
};

export default LayoutEffectExample;
