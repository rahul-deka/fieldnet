import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  format?: (n: number) => string;
}

export function AnimatedCounter({ end, duration = 1200, suffix = "", format }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const start = 0;
  const ref = useRef<number>(start);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      ref.current = Math.floor(progress * (end - start) + start);
      setCount(ref.current);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
    // eslint-disable-next-line
  }, [end, duration]);

  return <span>{format ? format(count) : count}{suffix}</span>;
}
