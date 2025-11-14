import Link from "next/link";
import HeroCarousel from "@/components/home/HeroCarousel";

export default function Home() {
  return (
    <div className="bg-[#FCF3E4]">
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Services Section */}
      <section className="py-24 px-6 lg:px-8 bg-[#FCF3E4]">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-[#FF7B60]">
              Our Services
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-[#333355] sm:text-4xl">
              Everything You Need to Know About Your Future
            </p>
            <p className="mt-4 text-lg text-[#333355]/70">
              Comprehensive astrological services based on ancient Vedic wisdom
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {/* Service 1 */}
            <div className="flex flex-col bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow border border-[#333355]/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF7B60] text-3xl shadow-md">
                📊
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#333355]">
                Birth Chart (Kundli)
              </h3>
              <p className="mt-3 text-[#333355]/70 flex-grow">
                Get your detailed Vedic birth chart with planetary positions,
                dashas, and comprehensive life predictions based on your exact
                birth time and location.
              </p>
              <Link
                href="/kundli"
                className="mt-6 text-[#FF7B60] font-semibold hover:text-[#ff6a4d] transition-colors"
              >
                Generate Kundli →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow border border-[#333355]/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#333355] text-3xl shadow-md">
                🌟
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#333355]">
                Daily Horoscope
              </h3>
              <p className="mt-3 text-[#333355]/70 flex-grow">
                Receive personalized daily predictions for all zodiac signs.
                Plan your day with cosmic guidance and celestial insights for
                love, career, and health.
              </p>
              <Link
                href="/horoscope"
                className="mt-6 text-[#FF7B60] font-semibold hover:text-[#ff6a4d] transition-colors"
              >
                Read Horoscope →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow border border-[#333355]/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF7B60] text-3xl shadow-md">
                💑
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#333355]">
                Kundli Matching
              </h3>
              <p className="mt-3 text-[#333355]/70 flex-grow">
                Find your perfect life partner with comprehensive compatibility
                analysis. Check Guna Milan, Manglik Dosha, and detailed marriage
                predictions.
              </p>
              <Link
                href="/matchmaking"
                className="mt-6 text-[#FF7B60] font-semibold hover:text-[#ff6a4d] transition-colors"
              >
                Match Kundli →
              </Link>
            </div>

            {/* Service 4 */}
            <div className="flex flex-col bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow border border-[#333355]/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#333355] text-3xl shadow-md">
                💎
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#333355]">
                Gemstone Consultation
              </h3>
              <p className="mt-3 text-[#333355]/70 flex-grow">
                Discover which gemstones can enhance your luck and prosperity.
                Get personalized recommendations based on your planetary
                positions.
              </p>
              <Link
                href="/gemstones"
                className="mt-6 text-[#FF7B60] font-semibold hover:text-[#ff6a4d] transition-colors"
              >
                Find Your Gemstone →
              </Link>
            </div>

            {/* Service 5 */}
            <div className="flex flex-col bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow border border-[#333355]/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF7B60] text-3xl shadow-md">
                🔢
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#333355]">
                Numerology Reading
              </h3>
              <p className="mt-3 text-[#333355]/70 flex-grow">
                Unlock the power of numbers in your life. Get insights into your
                destiny number, life path, and lucky numbers for success.
              </p>
              <Link
                href="/numerology"
                className="mt-6 text-[#FF7B60] font-semibold hover:text-[#ff6a4d] transition-colors"
              >
                Get Reading →
              </Link>
            </div>

            {/* Service 6 */}
            <div className="flex flex-col bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow border border-[#333355]/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#333355] text-3xl shadow-md">
                🌍
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#333355]">
                Planetary Transit
              </h3>
              <p className="mt-3 text-[#333355]/70 flex-grow">
                Track current planetary movements and their effects on your
                life. Understand how cosmic changes influence your destiny.
              </p>
              <Link
                href="/transit"
                className="mt-6 text-[#FF7B60] font-semibold hover:text-[#ff6a4d] transition-colors"
              >
                View Transit →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-[#FF7B60]">
              Simple Process
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-[#333355] sm:text-4xl">
              Get Your Kundli in 3 Easy Steps
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FF7B60] text-white text-2xl font-bold shadow-lg">
                1
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#333355]">
                Enter Birth Details
              </h3>
              <p className="mt-2 text-[#333355]/70">
                Provide your date, time, and place of birth for accurate
                calculations
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#333355] text-white text-2xl font-bold shadow-lg">
                2
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#333355]">
                Generate Chart
              </h3>
              <p className="mt-2 text-[#333355]/70">
                Our system instantly creates your detailed Vedic birth chart
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FF7B60] text-white text-2xl font-bold shadow-lg">
                3
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[#333355]">
                Get Insights
              </h3>
              <p className="mt-2 text-[#333355]/70">
                Receive comprehensive predictions and personalized guidance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 lg:px-8 bg-[#FCF3E4]">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-[#FF7B60]">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-[#333355] sm:text-4xl">
              What Our Clients Say
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-[#333355]/10">
              <div className="flex gap-1 text-[#FF7B60] mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-[#333355]/80 italic">
                &quot;The kundli reading was incredibly accurate! It helped me
                understand my life&apos;s purpose and make important decisions
                with confidence.&quot;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#FF7B60] flex items-center justify-center text-white font-semibold">
                  P
                </div>
                <div>
                  <p className="font-semibold text-[#333355]">Priya Sharma</p>
                  <p className="text-sm text-[#333355]/60">Mumbai, India</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border border-[#333355]/10">
              <div className="flex gap-1 text-[#FF7B60] mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-[#333355]/80 italic">
                &quot;Kundli matching service was perfect for our marriage. The
                detailed compatibility report gave us great peace of mind.&quot;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#333355] flex items-center justify-center text-white font-semibold">
                  R
                </div>
                <div>
                  <p className="font-semibold text-[#333355]">Rahul Verma</p>
                  <p className="text-sm text-[#333355]/60">Delhi, India</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border border-[#333355]/10">
              <div className="flex gap-1 text-[#FF7B60] mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-[#333355]/80 italic">
                &quot;Daily horoscope predictions are spot on! I check it every
                morning before starting my day. Highly recommended!&quot;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#FF7B60] flex items-center justify-center text-white font-semibold">
                  A
                </div>
                <div>
                  <p className="font-semibold text-[#333355]">Anjali Patel</p>
                  <p className="text-sm text-[#333355]/60">Bangalore, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative isolate overflow-hidden bg-[#333355] px-6 py-24 text-center rounded-3xl shadow-2xl sm:px-16">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 text-6xl">✨</div>
              <div className="absolute top-20 right-20 text-5xl">🌟</div>
              <div className="absolute bottom-10 left-1/3 text-5xl">⭐</div>
              <div className="absolute bottom-20 right-10 text-6xl">🔮</div>
            </div>
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-[#FCF3E4] sm:text-4xl">
                Start Your Spiritual Journey Today
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#FCF3E4]/80">
                Discover what the stars have in store for you. Get your free
                Kundli and unlock the secrets of your destiny with ancient Vedic
                wisdom.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/kundli"
                  className="rounded-full bg-[#FF7B60] px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-[#ff6a4d] transition-all transform hover:scale-105"
                >
                  Get Free Kundli Now
                </Link>
                <Link
                  href="/contact"
                  className="text-base font-semibold leading-7 text-[#FCF3E4] hover:text-[#FF7B60] transition-colors"
                >
                  Talk to Astrologer <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
