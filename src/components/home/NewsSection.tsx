import Link from "next/link";

export default function NewsSection() {
  const newsItems = [
    {
      id: 1,
      date: "Nov 10, 2024",
      category: "Astrology",
      title: "Understanding Your Birth Chart: A Complete Guide",
      excerpt: "Learn how to read and interpret your birth chart with our comprehensive guide to Vedic astrology.",
      link: "/news/birth-chart-guide",
    },
    {
      id: 2,
      date: "Nov 08, 2024",
      category: "Numerology",
      title: "The Power of Numbers in Your Daily Life",
      excerpt: "Discover how numerology can help you make better decisions and understand your life path.",
      link: "/news/power-of-numbers",
    },
    {
      id: 3,
      date: "Nov 05, 2024",
      category: "Courses",
      title: "New Advanced Astrology Course Launching Soon",
      excerpt: "Join our upcoming advanced astrology course and become a certified astrologer in just 6 months.",
      link: "/news/new-course-launch",
    },
    {
      id: 4,
      date: "Nov 02, 2024",
      category: "Astrology",
      title: "Mercury Retrograde: What to Expect",
      excerpt: "Understanding the effects of Mercury retrograde and how to navigate this cosmic event.",
      link: "/news/mercury-retrograde",
    },
    {
      id: 5,
      date: "Oct 30, 2024",
      category: "Palmistry",
      title: "Reading Your Palm Lines",
      excerpt: "Learn the basics of palm reading and what your hand lines reveal about your destiny.",
      link: "/news/palm-reading",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-8 lg:px-12 bg-[#FCF3E4]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B4513] mb-3">
            Latest News & Updates
          </h2>
          <div className="w-20 h-1 bg-[#FF7B60] mx-auto rounded-full"></div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-[#333355]/10"
            >
              {/* News Header */}
              <div className="bg-gradient-to-br from-[#333355] to-[#4a4a6a] p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#FF7B60] text-xs font-semibold bg-white/20 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-white/80 text-xs">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-white text-base font-bold leading-tight line-clamp-2">
                  {item.title}
                </h3>
              </div>

              {/* News Content */}
              <div className="p-4">
                <p className="text-[#333355]/70 text-xs leading-relaxed mb-4 line-clamp-3">
                  {item.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-1 text-[#FF7B60] font-semibold text-xs hover:text-[#ff6a4d] transition-colors group"
                >
                  Read More
                  <svg
                    className="w-3 h-3 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            href="/news"
            className="inline-block bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:from-[#723A0F] hover:to-[#8B4513] transition-all shadow-md hover:shadow-lg transform hover:scale-105"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
}

