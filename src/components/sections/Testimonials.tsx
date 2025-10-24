import React, { useState, useEffect, useRef } from "react";

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationRefs = useRef<{
    mobileRow1: HTMLDivElement | null;
    mobileRow2: HTMLDivElement | null;
    desktopCol1: HTMLDivElement | null;
    desktopCol2: HTMLDivElement | null;
    desktopCol3: HTMLDivElement | null;
  }>({
    mobileRow1: null,
    mobileRow2: null,
    desktopCol1: null,
    desktopCol2: null,
    desktopCol3: null,
  });

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animation control
  useEffect(() => {
    if (!isVisible) return;

    const animateElement = (
      element: HTMLDivElement | null,
      direction: "left" | "right" | "up" | "down",
      speed: number
    ) => {
      if (!element) return;
      if (direction === "down") {
        element.style.transform = `translateY(-${element.scrollHeight / 2}px)`;
      }

      let startTime: number | null = null;
      let pausedTime = 0;
      let isAnimating = true;

      const animate = (currentTime: number) => {
        if (!isAnimating) return;

        if (startTime === null) {
          startTime = currentTime;
        }

        if (isPaused) {
          pausedTime = currentTime - startTime;
          requestAnimationFrame(animate);
          return;
        }

        const elapsed = currentTime - startTime - pausedTime;

        if (direction === "left") {
          const translateX = -(elapsed * speed) % (element.scrollWidth / 2);
          element.style.transform = `translateX(${translateX}px)`;
        } else if (direction === "right") {
          const translateX = (elapsed * speed) % (element.scrollWidth / 2);
          element.style.transform = `translateX(${translateX}px)`;
        } else if (direction === "up") {
          const translateY = -(elapsed * speed) % (element.scrollHeight / 2);
          element.style.transform = `translateY(${translateY}px)`;
        } else if (direction === "down") {
          const offset = -element.scrollHeight / 2;
          const translateY =
            offset + ((elapsed * speed) % (element.scrollHeight / 2));
          element.style.transform = `translateY(${translateY}px)`;
        }

        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);

      return () => {
        isAnimating = false;
      };
    };

    const cleanupFunctions: (() => void)[] = [];

    if (isMobile) {
      cleanupFunctions.push(
        animateElement(animationRefs.current.mobileRow1, "left", 0.1)
      );
      cleanupFunctions.push(
        animateElement(animationRefs.current.mobileRow2, "right", 0.1)
      );
    } else {
      cleanupFunctions.push(
        animateElement(animationRefs.current.desktopCol1, "up", 0.05)
      );
      cleanupFunctions.push(
        animateElement(animationRefs.current.desktopCol2, "down", 0.05)
      );
      cleanupFunctions.push(
        animateElement(animationRefs.current.desktopCol3, "up", 0.05)
      );
    }

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, [isVisible, isPaused, isMobile]);

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Touch/Pause handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsPaused(false);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const testimonials = [
    {
      text: "Switching to IntarVAS completely transformed how we handle customer calls. Our 0700 Vanity Number gave us instant brand recognition, and the cloud call centre dashboard makes it easy to track performance.",
      name: "Chika Adewale",
      company: "BrightPath Logistics",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chika1",
    },
    {
      text: "The bulk messaging service has been a game-changer for our marketing campaigns. We can now reach thousands of customers instantly with personalized messages, and the delivery rates are outstanding.",
      name: "Adebayo Ogunlesi",
      company: "TechStart Nigeria",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adebayo1",
    },
    {
      text: "IntarVAS PBX system has streamlined our internal communications significantly. The call quality is crystal clear, and the admin dashboard gives us complete control over our phone system.",
      name: "Fatima Ibrahim",
      company: "Lagos State Ministry",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima1",
    },
    {
      text: "Our toll-free number has increased customer trust and accessibility. Customers feel more confident calling us, and we've seen a 40% increase in customer inquiries since implementation.",
      name: "Emeka Nwosu",
      company: "FirstBank Nigeria",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emeka1",
    },
    {
      text: "The all-in-one solution has simplified our operations tremendously. Having calling, messaging, and CRM in one platform saves us time and reduces costs. Highly recommended!",
      name: "Aisha Mohammed",
      company: "GreenTech Solutions",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha1",
    },
    {
      text: "IntarVAS has been instrumental in scaling our customer support. The call recording feature helps us train our team better, and the analytics provide valuable insights into customer behavior.",
      name: "David Okonkwo",
      company: "HealthPlus Pharmacy",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David1",
    },
    {
      text: "The reliability of IntarVAS services is unmatched. We've never experienced downtime, and their customer support team is always available to help. Truly professional service.",
      name: "Grace Okafor",
      company: "EduTech Academy",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Grace1",
    },
    {
      text: "Our vanity number has become synonymous with our brand. Customers remember it easily, and it has significantly improved our brand recognition across Nigeria.",
      name: "Musa Abdullahi",
      company: "Northern Logistics Ltd",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Musa1",
    },
    {
      text: "The cloud-based system means we can manage our communications from anywhere. This flexibility has been crucial for our remote work setup during the pandemic.",
      name: "Jennifer Uche",
      company: "FinTech Innovations",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer1",
    },
    {
      text: "IntarVAS helped us transition from traditional phone systems to modern cloud solutions seamlessly. The migration was smooth, and the new features have boosted our productivity.",
      name: "Ahmed Hassan",
      company: "Kano State Government",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed1",
    },
    {
      text: "The bulk SMS service has revolutionized our customer engagement. We can send appointment reminders, promotional offers, and important updates instantly to our entire customer base.",
      name: "Blessing Okafor",
      company: "MediCare Hospital",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Blessing1",
    },
    {
      text: "Cost-effective and reliable - that's what IntarVAS delivers. We've reduced our communication costs by 60% while improving service quality. The ROI has been incredible.",
      name: "Samuel Adebayo",
      company: "AgroTech Solutions",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Samuel1",
    },
    {
      text: "The integration with our existing CRM was seamless. Now we have a complete view of customer interactions across all channels, making our sales process much more efficient.",
      name: "Patience Okwu",
      company: "RetailMax Stores",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Patience1",
    },
    {
      text: "IntarVAS has been our trusted partner for over 3 years. Their technical support is excellent, and they're always quick to implement new features we request.",
      name: "Ibrahim Tanko",
      company: "Kaduna State University",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ibrahim1",
    },
    {
      text: "The call forwarding feature has been perfect for our multi-location business. Customers can reach us anywhere, and calls are routed intelligently to the right department.",
      name: "Victoria Nkem",
      company: "Legal Associates Ltd",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Victoria1",
    },
    {
      text: "We've been able to expand our customer base significantly with IntarVAS services. The toll-free number gives us national reach, and customers trust us more.",
      name: "Mohammed Sani",
      company: "Northern Bank PLC",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mohammed1",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-gray-50 py-16 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
          }`}
        >
          <div className="inline-block mb-4 animate-bounce-in">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What our clients say
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            From government agencies to growing enterprises, our clients trust
            IntarVAS to deliver reliable telecom solutions that keep their teams
            connected.
          </p>
        </div>

        {/* Moving Testimonials */}
        <div
          className="relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {isMobile ? (
            /* Mobile: 2 Rows - Left/Right Animation */
            <>
              {/* Row 1 - Moving Left */}
              <div
                className={`flex gap-4 mb-4 transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 transform translate-x-0"
                    : "opacity-0 transform translate-x-8"
                }`}
              >
                <div
                  ref={(el) => (animationRefs.current.mobileRow1 = el)}
                  className="flex gap-4"
                >
                  {testimonials.slice(0, 3).map((testimonial, index) => (
                    <div
                      key={`mobile-row1-${index}`}
                      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex-shrink-0 w-72"
                    >
                      <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full bg-gray-200"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {testimonials.slice(0, 3).map((testimonial, index) => (
                    <div
                      key={`mobile-row1-dup-${index}`}
                      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex-shrink-0 w-72"
                    >
                      <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full bg-gray-200"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2 - Moving Right */}
              <div
                className={`flex gap-4 transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "opacity-100 transform translate-x-0"
                    : "opacity-0 transform -translate-x-8"
                }`}
              >
                <div
                  ref={(el) => (animationRefs.current.mobileRow2 = el)}
                  className="flex gap-4"
                >
                  {testimonials.slice(3, 6).map((testimonial, index) => (
                    <div
                      key={`mobile-row2-${index}`}
                      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex-shrink-0 w-72"
                    >
                      <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full bg-gray-200"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {testimonials.slice(3, 6).map((testimonial, index) => (
                    <div
                      key={`mobile-row2-dup-${index}`}
                      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex-shrink-0 w-72"
                    >
                      <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full bg-gray-200"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* Desktop: 3 Columns - Up/Down Wave Animation */
            <div className="grid grid-cols-3 gap-8">
              {/* Column 1 - Scrolls Up */}
              <div
                className={`transition-all duration-2000 overflow-hidden h-[500px] ${
                  isVisible
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-8"
                }`}
              >
                <div
                  ref={(el) => (animationRefs.current.desktopCol1 = el)}
                  className="space-y-6"
                >
                  {/* First set of testimonials */}
                  {testimonials.slice(0, 2).map((testimonial, index) => (
                    <div
                      key={`desktop-col1-${index}`}
                      className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <p className="text-gray-700 leading-relaxed mb-8">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full bg-gray-200"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {testimonials.slice(0, 2).map((testimonial, index) => (
                    <div
                      key={`desktop-col1-dup-${index}`}
                      className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <p className="text-gray-700 leading-relaxed mb-8">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full bg-gray-200"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2 - Scrolls Down */}
              <div
                className={`transition-all duration-1000 delay-300 overflow-hidden h-[500px] ${
                  isVisible
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform -translate-y-8"
                }`}
              >
                <div
                  ref={(el) => (animationRefs.current.desktopCol2 = el)}
                  className="space-y-6"
                >
                  {/* First set of testimonials */}
                  {testimonials.slice(2, 4).map((testimonial, index) => (
                    <div
                      key={`desktop-col2-dup-${index}`}
                      className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <p className="text-gray-700 leading-relaxed mb-8">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full bg-gray-200"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {testimonials.slice(2, 4).map((testimonial, index) => (
                    <div
                      key={`desktop-col2-dup-${index}`}
                      className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <p className="text-gray-700 leading-relaxed mb-8">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full bg-gray-200"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 3 - Scrolls Up */}
              <div
                className={`transition-all duration-1000 delay-600 overflow-hidden h-[500px] ${
                  isVisible
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-8"
                }`}
              >
                <div
                  ref={(el) => (animationRefs.current.desktopCol3 = el)}
                  className="space-y-6"
                >
                  {/* First set of testimonials */}
                  {testimonials.slice(4, 6).map((testimonial, index) => (
                    <div
                      key={`desktop-col3-${index}`}
                      className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <p className="text-gray-700 leading-relaxed mb-8">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full bg-gray-200"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {testimonials.slice(4, 6).map((testimonial, index) => (
                    <div
                      key={`desktop-col3-dup-${index}`}
                      className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <p className="text-gray-700 leading-relaxed mb-8">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full bg-gray-200"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
