"use client";

import React, { useState, useEffect } from "react";
import scrollTo from "../utils/scrollTo";
import Image from "next/image";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {show && (
        <Image
          onClick={() => scrollTo("hero")}
          src="/finger.webp"
          className="fixed bottom-4 right-2 z-[100] flex cursor-pointer items-center justify-center lg:bottom-6 lg:right-6"
          alt="Scroll to top"
          width={48}
          height={48}
        />
      )}
    </div>
  );
};

export default ScrollToTop;
