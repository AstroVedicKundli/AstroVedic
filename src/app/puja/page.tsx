import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Puja Services - Vedic Rituals | Astro Vedic Kundli",
  description: "Book personalized puja services performed by expert pandits. Traditional Vedic rituals for peace, prosperity, and spiritual growth.",
};

export default function PujaPage() {
  return (
    <div className="min-h-screen bg-[#FCF3E4] flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#333355] mb-3">
            Coming Soon
          </h1>
          
          <h2 className="text-lg md:text-xl font-semibold text-[#8B4513] mb-6">
            Vedic Puja Services
          </h2>

          <p className="text-sm md:text-base text-[#333355]/80 mb-8 max-w-xl mx-auto leading-relaxed">
            Experience the power of Vedic rituals! Our puja services will connect you with ancient traditions, performed by expert pandits to bring peace, prosperity, and positive energy into your life.
          </p>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-4 shadow-md border border-[#333355]/10">
              <h3 className="font-semibold text-[#333355] mb-1 text-sm">Authentic Rituals</h3>
              <p className="text-xs text-[#333355]/70">Traditional Vedic ceremonies by qualified pandits</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md border border-[#333355]/10">
              <h3 className="font-semibold text-[#333355] mb-1 text-sm">Customized Pujas</h3>
              <p className="text-xs text-[#333355]/70">Personalized rituals based on your needs and kundli</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md border border-[#333355]/10">
              <h3 className="font-semibold text-[#333355] mb-1 text-sm">Remote Options</h3>
              <p className="text-xs text-[#333355]/70">Online and on-location puja services available</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-[#333355] to-[#4a4a6a] text-white px-6 py-3 rounded-full font-semibold text-sm hover:from-[#4a4a6a] hover:to-[#333355] transition-all shadow-lg hover:shadow-xl"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-[#FF7B60] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#ff6a4d] transition-all shadow-lg hover:shadow-xl"
            >
              Notify Me When Ready
            </Link>
          </div>

          {/* Subtitle */}
          <p className="text-xs text-[#333355]/60">
            Stay tuned! We&apos;re preparing sacred rituals for you.
          </p>
        </div>
      </div>
    </div>
  );
}

