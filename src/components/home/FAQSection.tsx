"use client";

import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How can I book a consultation call with Astro Manish Aggarwal?",
      answer:
        "You can easily book a consultation call with Astro Manish Aggarwal by visiting our booking page and selecting a convenient time slot. Alternatively, you can contact us directly through WhatsApp or call our support team. We offer both online and in-person consultation options.",
    },
    {
      id: 2,
      question: "Does Astro Manish Aggarwal provide astrology courses?",
      answer:
        "Yes, Astro Manish Aggarwal offers comprehensive astrology courses for beginners and advanced learners. Our courses cover Vedic Astrology, Numerology, Palmistry, Lal Kitab, and more. Each course includes live sessions, recorded content, and certification upon completion.",
    },
    {
      id: 3,
      question: 'What is "The Manish Aggarwal Show"?',
      answer:
        '"The Manish Aggarwal Show" is a weekly educational program where Astro Manish Aggarwal shares astrological insights, answers viewer questions, and discusses planetary transits and their effects. The show is broadcast live on YouTube every week and covers topics like career predictions, relationship advice, and remedial measures.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 md:px-8 lg:px-12 bg-[#FCF3E4]">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B4513] mb-3">
            FAQ's
          </h2>
          <div className="w-20 h-1 bg-[#FF7B60] mx-auto rounded-full"></div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl shadow-md border border-[#8B4513]/20 overflow-hidden transition-all duration-300"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#FCF3E4]/50 transition-colors"
              >
                <span className="text-base md:text-lg font-semibold text-[#8B4513] pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-[#8B4513] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer Content */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-sm md:text-base text-[#333355]/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

