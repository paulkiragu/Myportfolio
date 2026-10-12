import { useEffect, useRef } from 'react';

// Adds the "in" class to every .reveal element inside the ref'd node
// once it scrolls into view. Replaces the old scroll-listener approach.
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current ? ref.current.querySelectorAll('.reveal') : [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return ref;
}
