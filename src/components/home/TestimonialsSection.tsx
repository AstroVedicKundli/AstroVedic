export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "The kundli reading was incredibly accurate and insightful. It helped me understand my life's purpose and make important career decisions with confidence.",
      service: "Kundli Reading",
    },
    {
      id: 2,
      name: "Rahul Verma",
      location: "Delhi, NCR",
      rating: 5,
      text: "Kundli matching service was perfect for our marriage. The detailed compatibility report gave us and our families great peace of mind.",
      service: "Kundli Matching",
    },
    {
      id: 3,
      name: "Anjali Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      text: "Daily horoscope predictions are spot on! I check it every morning before starting my day. The guidance has been truly helpful.",
      service: "Daily Horoscope",
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Jaipur, Rajasthan",
      rating: 5,
      text: "The numerology consultation changed my perspective on life. The insights about my destiny number were remarkably accurate.",
      service: "Numerology",
    },
    {
      id: 5,
      name: "Kavita Desai",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "Excellent astrology consultation! The predictions were detailed and the remedies suggested have brought positive changes in my life.",
      service: "Astrology Consultation",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-8 lg:px-12 bg-[#FCF3E4]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B4513] mb-3">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-[#FF7B60] mx-auto rounded-full"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow border border-[#333355]/10"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-[#FF7B60]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#333355]/80 text-xs leading-relaxed mb-4 line-clamp-4 italic">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Service Badge */}
              <div className="mb-3">
                <span className="inline-block bg-[#333355]/10 text-[#333355] text-xs font-semibold px-2 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-3 pt-3 border-t border-[#333355]/10">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#FF7B60] to-[#ff6a4d] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[#333355] font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-[#333355]/60 text-xs">
                    {testimonial.location}
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

