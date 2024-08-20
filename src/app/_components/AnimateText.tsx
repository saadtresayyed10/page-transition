"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const AnimateText = () => {
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const paragraph = paragraphRef.current;
    if (paragraph) {
      gsap.fromTo(
        paragraph,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: paragraph,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <p className="text-center text-xl p-10" ref={paragraphRef}>
      Use the Component: You can now use the AnimatedText component in any page
      or other component in your Next.js project.
    </p>
  );
};

export default AnimateText;
