import { useEffect, useState } from 'react'


function useScrollPositon() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    }
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.addEventListener("scroll", handleScroll);
    }
  }, []);

  return scrollPosition;
}

export default useScrollPositon;