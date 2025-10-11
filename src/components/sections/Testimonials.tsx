import React from "react";

const TestimonialsSection = () => {
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
    <section className="bg-gray-50 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 animate-bounce-in">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up delay-300">
            What our clients say
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed animate-fade-in-up delay-500">
            From government agencies to growing enterprises, our clients trust
            IntarVAS to deliver reliable telecom solutions that keep their teams
            connected.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up ${
                index >= 3 ? "opacity-40" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-8">
                {testimonial.text}
              </p>

              {/* Author Info */}
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
    </section>
  );
};

export default TestimonialsSection;
