import { useEffect, useState } from 'react';

export const useApi = <T>(
  api: () => Promise<T>,
  refreshTags: unknown[] = []
) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<T>();
  const [hasError, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    api()
      .then(response => {
        setData(response);
        setError(false);
      })
      .catch(() => {
        setData(undefined);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, refreshTags);

  return { data, isLoading, hasError };
};
