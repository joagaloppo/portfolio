"use client";

import React, { useState, useEffect } from "react";
import scrollTo from "../utils/scrollTo";
import Image from "next/image";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <Image
        onClick={() => scrollTo("hero")}
        src="/scroll.png"    
        className="fixed lg:bottom-6 lg:right-6 bottom-4 right-2 flex cursor-pointer items-center justify-center z-[100]"
        alt="Scroll to top"
        width={48}
        height={48}
        />
      )}
    </div>
  );
};

export default ScrollToTop;
