import React, { useState, useEffect, useRef } from "react";

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const testimonials = [
    {
      text: "Switching to IntarVAS completely transformed how we handle customer calls. Our 0700 Vanity Number gave us instant brand recognition, and the cloud call centre dashboard makes it easy to track performance.",
      name: "Chika Adewale",
      company: "BrightPath Logistics",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chika1",
    },
    {
      text: "Switching to IntarVAS completely transformed how we handle customer calls. Our 0700 Vanity Number gave us instant brand recognition, and the cloud call centre dashboard makes it easy to track performance.",
      name: "Chika Adewale",
      company: "BrightPath Logistics",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chika2",
    },
    {
      text: "Switching to IntarVAS completely transformed how we handle customer calls. Our 0700 Vanity Number gave us instant brand recognition, and the cloud call centre dashboard makes it easy to track performance.",
      name: "Chika Adewale",
      company: "BrightPath Logistics",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chika3",
    },
    {
      text: "Switching to IntarVAS completely transformed how we handle customer calls. Our 0700 Vanity Number gave us instant brand recognition, and the cloud call centre dashboard makes it easy to track performance.",
      name: "Chika Adewale",
      company: "BrightPath Logistics",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chika4",
    },
    {
      text: "Switching to IntarVAS completely transformed how we handle customer calls. Our 0700 Vanity Number gave us instant brand recognition, and the cloud call centre dashboard makes it easy to track performance.",
      name: "Chika Adewale",
      company: "BrightPath Logistics",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chika5",
    },
    {
      text: "Switching to IntarVAS completely transformed how we handle customer calls. Our 0700 Vanity Number gave us instant brand recognition, and the cloud call centre dashboard makes it easy to track performance.",
      name: "Chika Adewale",
      company: "BrightPath Logistics",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chika6",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-gray-50 py-16 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`}>
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
        <div className="relative">
          {/* Upper Row - Moving Left */}
          <div className={`flex gap-6 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-8'
          }`}>
            <div className="flex gap-6 animate-scroll-left">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <div
                  key={`upper-${index}`}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex-shrink-0 w-80"
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
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <div
                  key={`upper-duplicate-${index}`}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex-shrink-0 w-80"
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
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lower Row - Moving Right */}
          <div className={`flex gap-6 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-8'
          }`}>
            <div className="flex gap-6 animate-scroll-right">
              {testimonials.slice(3, 6).map((testimonial, index) => (
                <div
                  key={`lower-${index}`}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex-shrink-0 w-80"
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
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {testimonials.slice(3, 6).map((testimonial, index) => (
                <div
                  key={`lower-duplicate-${index}`}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex-shrink-0 w-80"
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
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
