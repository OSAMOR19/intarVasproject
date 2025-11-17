"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you sell Nigerian Phone numbers?",
      answer:
        "Yes, we provide Nigerian phone numbers including 0700 and 0800 numbers. These vanity numbers help businesses establish a professional presence and are easy for customers to remember. Contact us to learn more about available numbers and pricing.",
    },
    {
      question: "Do you sell Nigerian Phone numbers?",
      answer:
        "Yes, we provide Nigerian phone numbers including 0700 and 0800 numbers. These vanity numbers help businesses establish a professional presence and are easy for customers to remember. Contact us to learn more about available numbers and pricing.",
    },
    {
      question: "Do you sell Nigerian Phone numbers?",
      answer:
        "Yes, we provide Nigerian phone numbers including 0700 and 0800 numbers. These vanity numbers help businesses establish a professional presence and are easy for customers to remember. Contact us to learn more about available numbers and pricing.",
    },
    {
      question: "Do you sell Nigerian Phone numbers?",
      answer:
        "Yes, we provide Nigerian phone numbers including 0700 and 0800 numbers. These vanity numbers help businesses establish a professional presence and are easy for customers to remember. Contact us to learn more about available numbers and pricing.",
    },
    {
      question: "Do you sell Nigerian Phone numbers?",
      answer:
        "Yes, we provide Nigerian phone numbers including 0700 and 0800 numbers. These vanity numbers help businesses establish a professional presence and are easy for customers to remember. Contact us to learn more about available numbers and pricing.",
    },
    {
      question: "Do you sell Nigerian Phone numbers?",
      answer:
        "Yes, we provide Nigerian phone numbers including 0700 and 0800 numbers. These vanity numbers help businesses establish a professional presence and are easy for customers to remember. Contact us to learn more about available numbers and pricing.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
              Questions
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Find answers to <span className="text-gray-400">common</span>
            <br />
            <span className="text-gray-400">questions</span> about our platform
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-gray-600" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-600" />
                  )}
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
