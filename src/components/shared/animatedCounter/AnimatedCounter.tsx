import { useState, useEffect } from 'react';

const AnimatedCounter = ({ end }: {end: number}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = Math.min(5000, (end / 50000) * 5000); // max duration of 5 seconds
    const increment = Math.ceil(end / (duration / 10)); // calculate increment based on duration and end value

    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < end) {
          return Math.min(prevCount + increment, end);
        } else {
          clearInterval(timer);
          return end;
        }
      });
    }, 10); // update the count every 10 ms

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count.toLocaleString()}
    </span>
  );
};

export default AnimatedCounter;
