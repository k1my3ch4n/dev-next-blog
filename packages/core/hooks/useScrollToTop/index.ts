import { useEffect, useState } from 'react';

export const useScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    isVisible,
    scrollToTop,
  };
};
