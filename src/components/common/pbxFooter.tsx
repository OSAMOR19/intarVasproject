import React, { useState, useEffect } from "react";

import { Button } from "../ui/button";

const PbxFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stagger animations
            setTimeout(() => setShowImage(true), 200);
            setTimeout(() => setShowContent(true), 400);
            setTimeout(() => setShowButtons(true), 600);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("pbx-footer-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      id="pbx-footer-section"
      className="md:h-[80vh] p-20 md:p-36 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="container justify-between md:flex h-fit items-center relative z-10">
        {/* Image Section */}
        <div
          className={`h-fit hidden md:block relative transition-all duration-1000 ${
            showImage
              ? "opacity-100 transform translate-x-0"
              : "opacity-0 transform -translate-x-8"
          }`}
        >
          <div className="md:w-[556px] md:h-[430px] bg-[#F6F6F6] overflow-visible rounded-[30px] hover:shadow-lg transition-shadow duration-300"></div>

          <img
            src="/images/pbx_img.png"
            alt="PBX Illustration"
            width={250}
            className="absolute bottom-0 left-28 z-30 hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content Section */}
        <div
          className={`max-w-lg transition-all duration-1000 ${
            showContent
              ? "opacity-100 transform translate-x-0"
              : "opacity-0 transform translate-x-8"
          }`}
        >
          <h2 className="md:text-[48px] font-inter leading-[1.1] font-[800] mb-2 hover:scale-105 transition-transform duration-300 cursor-default">
            Your PBX, everywhere you work
          </h2>
          <p className="hover:text-gray-700 transition-colors duration-300">
            Access guides and APIs to set up, manage, and scale your virtual PBX
            across any device
          </p>
          <div
            className={`mt-8 flex flex-wrap gap-3 transition-all duration-1000 ${
              showButtons
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-4"
            }`}
          >
            <Button
              variant="hero"
              className="hover:scale-105 transition-transform duration-300 hover:shadow-lg"
            >
              <a
                href="https://wiki.ccaas.intarvas.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                User Guides
              </a>
            </Button>
            <Button
              variant="outline"
              className="hover:scale-105 transition-transform duration-300 hover:shadow-lg"
            >
              <a
                href="https://api.ccaas.intarvas.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                API Docs
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PbxFooter;
