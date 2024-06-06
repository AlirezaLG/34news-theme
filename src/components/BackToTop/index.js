"use client";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const visibilityToggle = () => {
    if (document.documentElement.scrollTop > 900) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", visibilityToggle);
    return () => {
      window.removeEventListener("scroll", visibilityToggle);
    };
  }, []);

  return (
    <React.Fragment>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed left-5 bottom-20 bg-primary p-2.5  rounded border-2 border-white"
        >
          <FaArrowUp color="white" size={15} />
        </button>
      )}
    </React.Fragment>
  );
}
