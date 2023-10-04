import { useEffect, useState, useRef, useMemo } from 'react';

const useTimer = secondsValue => {
  const [timeInSeconds, setTimeInSeconds] = useState(secondsValue);
  let timerRef = useRef(null);

  const decrementCount = () => {
    timerRef.current = setInterval(() => {
      setTimeInSeconds(prev => prev - 1);
    }, 1 * 1000);
  };
  useEffect(() => {
    decrementCount();
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (timeInSeconds <= 0) {
      clearInterval(timerRef.current);
    }
  }, [timeInSeconds]);

  const handleResetCounter = () => {
    setTimeInSeconds(secondsValue);
    decrementCount();
  };

  const formatTime = timerValue => {
    return timerValue.toString().padStart(2, '0');
  };

  const countDown = useMemo(() => {
    const hours = formatTime(Math.floor(timeInSeconds / (60 * 60)));
    const minutes = formatTime(Math.floor((timeInSeconds % (60 * 60)) / 60));
    const seconds = formatTime(timeInSeconds % 60);
    return `${hours}:${minutes}:${seconds}`;
  }, [timeInSeconds]);

  return { timeInSeconds, countDown, handleResetCounter };
};

export default useTimer;
