import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapFadeIn = (stagger = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll(".gsap-fade");
    gsap.fromTo(
      els,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          once: true,
        },
      }
    );
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, [stagger]);

  return ref;
};

export const useGsapSlideIn = (direction: "left" | "right" = "left") => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll(".gsap-slide");
    gsap.fromTo(
      els,
      { opacity: 0, x: direction === "left" ? -60 : 60 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, [direction]);

  return ref;
};
