import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-8 px-6 md:px-8 lg:px-12 bg-[#FCF3E4]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image with Overlay */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[400px]">
              <Image
                src="/about_home.png"
                alt="Astrology Consultation"
                width={800}
                height={600}
                className="object-cover w-full h-full"
                priority
              />

              {/* Text Overlay */}
              <div className="absolute inset-0 bg-[#333355]/60 flex flex-col justify-center items-center text-center p-8">
                <div className="mb-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                    BOOK YOUR CALL
                  </h3>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                    CONSULTATION
                  </h3>
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    NOW
                  </h3>
                </div>

                {/* Play Button */}
                <Link
                  href="/consultation"
                  className="flex flex-col items-center gap-4 group"
                >
                  <div className="w-16 h-16 bg-[#FF7B60] rounded-full flex items-center justify-center shadow-xl hover:bg-[#ff6a4d] transition-all transform hover:scale-110">
                    <svg
                      className="w-7 h-7 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-xs group-hover:text-[#FF7B60] transition-colors">
                    CLICK HERE TO WATCH
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-[#333355] leading-tight">
              Astrology: Your Guide To Life&apos;s Journey & Path To Success!
            </h2>

            <p className="text-sm md:text-base text-[#333355]/80 leading-relaxed">
              We believe astrology is pure science, and we aim to create such a
              social impact of the organization on you that science and
              astrology through its resources of the astrology chart, kundali,
              etc,. As we dive into our 50th year, we strive to build a
              community where we are a part of your daily routine right from our
              astrology by date of birth, name, time, palm reading, and face
              reading, to all other online astrology, numerology, palmistry
              services.
            </p>

            {/* Legacy Badge */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-[#FF7B60] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-[10px] font-bold">
                    LEGACY
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#333355]">
                  50+ Years Of Legacy
                </h3>
                <p className="text-sm md:text-base text-[#333355]/70">
                  With Horoscope, Kundali, And Predictions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
