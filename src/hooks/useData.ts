import { useEffect, useState } from 'react';

type UseEffectReturn = () => void;
type UseDataReturnType<DataType> = {
  data: DataType | null;
  isLoading: boolean;
  isError: boolean;
};

export const useData = <DataType>(url: string): UseDataReturnType<DataType> => {
  const [data, setData] = useState<DataType | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

    if (url.length) {
      fetchData();
    }

    return (): boolean => (ignore = true);
  }, [url]);

  return { data, isLoading, isError };
};
