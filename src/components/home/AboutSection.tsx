import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  const features = [
    "Great travel experiences",
    "Competitive pricing offers",
    "Flexible itinerary options",
    "Leading industry reputation",
  ];

  return (
    <section className="py-16 px-6 md:px-8 lg:px-12 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            {/* Vertical Text */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 hidden lg:block">
              <div className="flex flex-col items-center gap-2">
                <p
                  className="text-xs font-bold text-[#8B4414] tracking-widest"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                  }}
                >
                  SINCE 1993 - 31 YEARS OF EXPERIENCE
                </p>
                <div className="w-px h-16 bg-[#8B4414]"></div>
              </div>
            </div>

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop&q=80"
                alt="Astrology Services"
                width={800}
                height={600}
                className="object-cover w-full h-[500px]"
                unoptimized
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Small Heading */}
            <p className="text-sm font-bold text-[#8B4414] uppercase tracking-wide">
              Welcome to Astro Vedic Kundli
            </p>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333355] leading-tight">
              Astro Vedic Kundli
            </h2>

            {/* Description */}
            <p className="text-base text-[#333355]/70 leading-relaxed">
              We believe astrology is pure science, and we aim to create such a
              social impact of the organization on you that science and
              astrology through its resources of the astrology chart, kundali,
              etc. As we dive into our 50th year, we strive to build a
              community where we are a part of your daily routine right from our
              astrology by date of birth, name, time, palm reading, and face
              reading, to all other online astrology, numerology, palmistry
              services.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-[#FF7B60]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-[#333355] font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 bg-[#8B4414] text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-[#723A0F] transition-all shadow-md hover:shadow-lg transform hover:scale-105"
              >
                ENQUIRY NOW
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
