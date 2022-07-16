// put The JS media hook Here
import { useEffect, useState } from 'react';

const WindowMatchMedia = (media: string): boolean => {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    const handleMatch = () => {
      setMatch(window.matchMedia(media).matches);
    };

    window.addEventListener('resize', handleMatch);

    handleMatch();

    return () => window.removeEventListener('resize', handleMatch);
  }, [media]);

  return match;
};

export default WindowMatchMedia;
