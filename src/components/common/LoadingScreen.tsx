import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Minimum loading time - 4 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
        // THIS LINE IS CRITICAL — fires when loading screen is fully gone
        window.dispatchEvent(new CustomEvent("logo-animation-complete"));
      }, 800); // Wait for fade-out animation to finish
    }, 4000);

    // Also respect real page load (in case assets load faster)
    const handleLoad = () => {
      clearTimeout(timer); // Cancel the 4s timer
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
        window.dispatchEvent(new CustomEvent("logo-animation-complete"));
      }, 800);
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
