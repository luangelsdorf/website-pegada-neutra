import { useEffect, useState } from 'react';
import { breakpoints } from 'src/utils/breakpoints';

export default function useMediaQuery(breakpoint) {
  const [matches, setMatches] = useState(true);

  useEffect(() => {
    function handleChange(event) {
      setMatches(event.matches);
    }

    const query = `(max-width: ${breakpoints[breakpoint]})`;
    const queryResult = window.matchMedia(query);
    setMatches(queryResult.matches);

    queryResult.addEventListener('change', handleChange);
    return () => queryResult.removeEventListener('change', handleChange);
  }, [breakpoint]);

  return matches;
}