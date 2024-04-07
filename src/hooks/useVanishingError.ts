import { useEffect, useState } from 'react';

export const useVanishingError = (duration = 3000) => {
  const [isError, setIsError] = useState(false);

  const throwError = () => {
    setIsError(true);
  };

  // reset error
  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        setIsError(false);
      }, duration);
    }
  }, [isError, duration]);

  return { isError, throwError };
};
