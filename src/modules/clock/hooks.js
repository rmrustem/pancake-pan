import { useState, useEffect } from 'react';


export default function useDate(delay=1000) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const ticker = setInterval(
      () => { setDate(new Date()) },
      delay
    );

    return () => clearInterval(ticker);
  }, [delay]);

  return date;
}
