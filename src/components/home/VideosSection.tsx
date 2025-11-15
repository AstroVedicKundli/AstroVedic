import Link from "next/link";
import Image from "next/image";

export default function VideosSection() {
  const videos = [
    {
      id: 1,
      title: "Astrology Video 1",
      youtubeId: "U0F-uKUv7Tc",
      youtubeUrl: "https://www.youtube.com/watch?v=U0F-uKUv7Tc",
      category: "Astrology",
    },
    {
      id: 2,
      title: "Astrology Video 2",
      youtubeId: "cb8dNhZN4Bg",
      youtubeUrl: "https://www.youtube.com/watch?v=cb8dNhZN4Bg",
      category: "Numerology",
    },
    {
      id: 3,
      title: "Astrology Video 3",
      youtubeId: "qnEHnmUIsT8",
      youtubeUrl: "https://www.youtube.com/watch?v=qnEHnmUIsT8",
      category: "Horoscope",
    },
    {
      id: 4,
      title: "Astrology Video 4",
      youtubeId: "OGdXUBoDeYg",
      youtubeUrl: "https://www.youtube.com/watch?v=OGdXUBoDeYg",
      category: "Kundli",
    },
    {
      id: 5,
      title: "Astrology Video 5",
      youtubeId: "elTH7UkUu0Q",
      youtubeUrl: "https://www.youtube.com/watch?v=elTH7UkUu0Q",
      category: "Palmistry",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-8 lg:px-12 bg-[#FCF3E4]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B4513] mb-3">
            Educational Videos
          </h2>
          <div className="w-20 h-1 bg-[#FF7B60] mx-auto rounded-full"></div>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-[#333355]/10"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-[#333355]">
                {/* YouTube Thumbnail */}
                <Image
                  src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={video.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-12 h-12 bg-[#FF7B60]/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-2 left-2 bg-[#FF7B60]/90 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {video.category}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <h3 className="text-[#333355] font-bold text-sm leading-tight mb-2 line-clamp-2 group-hover:text-[#FF7B60] transition-colors">
                  {video.title}
                </h3>
                
                <div className="flex items-center gap-2 text-[#333355]/60 text-xs">
                  <svg
                    className="w-4 h-4 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                  <span>Watch on YouTube</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            href="/videos"
            className="inline-block bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:from-[#723A0F] hover:to-[#8B4513] transition-all shadow-md hover:shadow-lg transform hover:scale-105"
          >
            View All Videos
          </Link>
        </div>
      </div>
    </section>
  );
}

