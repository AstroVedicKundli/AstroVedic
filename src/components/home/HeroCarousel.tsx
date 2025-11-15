"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/hero_banner_1.jpg",
    title: "Discover Your Cosmic Destiny",
    subtitle: "Ancient Vedic Wisdom",
    description:
      "Get personalized birth charts, horoscopes, and astrological insights to guide your life's journey through the stars.",
    ctaText: "Get Free Kundli",
    ctaLink: "/kundli",
  },
  {
    id: 2,
    image: "/hero-slide-3.svg", // Replace with .jpg when you have actual images
    title: "Find Your Perfect Match",
    subtitle: "Kundli Matching",
    description:
      "Discover compatibility with comprehensive Kundli matching. Check Guna Milan, Manglik Dosha, and detailed marriage predictions.",
    ctaText: "Match Kundli",
    ctaLink: "/matchmaking",
  },
  {
    id: 3,
    image: "/hero-slide-3.svg", // Replace with .jpg when you have actual images
    title: "Daily Horoscope Predictions",
    subtitle: "Plan Your Day",
    description:
      "Receive personalized daily predictions for all zodiac signs. Plan your day with cosmic guidance and celestial insights.",
    ctaText: "Read Horoscope",
    ctaLink: "/horoscope",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="px-6 pt-24 pb-12 md:px-8 md:pt-24 md:pb-12 lg:px-12 lg:pt-20 lg:pb-10">
      <div className="relative w-full h-[60vh] overflow-hidden rounded-3xl bg-[#333355] shadow-2xl">
        {/* Slides */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 bg-[#333355] ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />

              {/* Content - Left Aligned - Only show for slides other than first */}
              {index !== 0 && (
                <div className="relative z-20 h-full flex items-center">
                  <div className="container mx-auto px-8 lg:px-12 max-w-7xl">
                    <div className="max-w-2xl">
                      {/* Subtitle */}
                      <div className="inline-block mb-3 px-3 py-1.5 bg-[#FF7B60]/90 rounded-full backdrop-blur-sm">
                        <span className="text-white text-xs md:text-sm font-semibold">
                          {slide.subtitle}
                        </span>
                      </div>

                      {/* Title */}
                      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
                        {slide.title}
                      </h1>

                      {/* Description */}
                      <p className="text-sm md:text-base text-white/90 mb-6 leading-relaxed drop-shadow-lg">
                        {slide.description}
                      </p>

                      {/* CTA Button */}
                      <Link
                        href={slide.ctaLink}
                        className="inline-block px-6 py-3 bg-[#FF7B60] text-white text-sm md:text-base font-semibold rounded-full shadow-2xl hover:shadow-[#FF7B60]/50 hover:bg-[#ff6a4d] transition-all transform hover:scale-105"
                      >
                        {slide.ctaText}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Indicator Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all ${
                index === currentSlide
                  ? "w-12 bg-[#FF7B60]"
                  : "w-3 bg-white/50 hover:bg-white/80"
              } h-3 rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute bottom-8 right-8 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-all shadow-lg"
          aria-label={isAutoPlaying ? "Pause autoplay" : "Play autoplay"}
        >
          {isAutoPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
