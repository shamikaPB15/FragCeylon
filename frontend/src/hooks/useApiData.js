import { useEffect, useState } from 'react';

/**
 * Shows the local fallback data immediately, then swaps in the
 * live data from the API. If the API is down, the fallback stays.
 */
export default function useApiData(fetcher, fallback) {
  const [data, setData] = useState(fallback);

  useEffect(() => {
    let cancelled = false;
    fetcher()
      .then((result) => {
        if (!cancelled && Array.isArray(result)) setData(result);
      })
      .catch(() => {
        /* API not reachable – keep fallback data */
      });
    return () => {
      cancelled = true;
    };
  }, [fetcher]);

  return data;
}
