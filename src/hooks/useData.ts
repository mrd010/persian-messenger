import { useEffect, useRef, useState } from 'react';

type UseEffectReturn = () => void;
type UseDataReturnType<DataType> = {
  data: DataType | null;
  isLoading: boolean;
  isError: boolean;
};

export const useData = <DataType>(
  url: string,
  triggerString: string = ''
): UseDataReturnType<DataType> => {
  const [data, setData] = useState<DataType | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const resetTimer = useRef<number | null>(null);

  useEffect((): UseEffectReturn => {
    let ignore = false;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        if (response.ok && response.status < 400) {
          const resJSON = await response.json();
          setIsLoading(false);
          if (!ignore) {
            setData(resJSON);
          }
          return;
        }
        throw new Error('Bad Request');
      } catch (error) {
        setIsError(true);
      }
    };

    if (url.length && triggerString) {
      fetchData();
    }

    return (): boolean => (ignore = true);
  }, [url, triggerString]);

  //   reset error after a while
  useEffect(() => {
    if (isError) {
      resetTimer.current = setTimeout(() => {
        setIsError(false);
      }, 3000);
    }

    // cleaner
    return () => {
      if (resetTimer.current) {
        clearTimeout(resetTimer.current);
      }
    };
  }, [isError]);

  return { data, isLoading, isError };
};
