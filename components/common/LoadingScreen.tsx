"use client";

import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Minimum loading time - 4 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 800); // Wait for fade out animation
    }, 4000);

    // Also check if page is fully loaded
    const handleLoad = () => {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setIsLoading(false), 800);
      }, 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-800 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{
        backgroundImage: "url(/images/herosectionbg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        pointerEvents: isLoading ? "auto" : "none",
      }}
    >
      {/* Animated Logo */}
      <div className="flex flex-col items-center justify-center">
        <img
          src="/images/Logo.svg"
          alt="IntarVAS Logo"
          className="w-64 md:w-96 lg:w-[500px] h-auto animate-logo-loading"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;

