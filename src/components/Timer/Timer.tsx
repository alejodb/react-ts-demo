import React, { useState, useRef, useEffect } from "react";

const Timer: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => { 
    if (isRunning) {
      console.log('Starting timer...');
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else if (intervalRef.current) {
      console.log('Pausing timer...');
      clearInterval(intervalRef.current);
    }

    return () =>  {
      if (intervalRef.current) {
        console.log('cleanup');
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      <h1>Time: {time}s</h1>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;