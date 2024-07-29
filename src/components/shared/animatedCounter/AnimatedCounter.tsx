import { useState, useEffect } from 'react';

const AnimatedCounter = ({ end, increment, timerInterval = 10 }: {end: number, increment?: number, timerInterval?: number}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = Math.min(5000, (end / 50000) * 5000); // max duration of 5 seconds
    const incrementVal = increment || Math.ceil(end / (duration / 10)); // calculate increment based on duration and end value

    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < end) {
          return Math.min(prevCount + incrementVal, end);
        } else {
          clearInterval(timer);
          return end;
        }
      });
    }, timerInterval); // update the count every 10 ms

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count.toLocaleString()}
    </span>
  );
};

export default AnimatedCounter;
