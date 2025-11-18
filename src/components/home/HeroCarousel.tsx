"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface Slide {
  id: number;
  image: string;
  title: string;
  ctaText: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&q=80",
    title: "Discover Your Cosmic Path",
    ctaText: "Get Started",
    ctaLink: "/kundli",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1920&h=1080&fit=crop&q=80",
    title: "Ancient Wisdom for Modern Life",
    ctaText: "Learn More",
    ctaLink: "/services",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&h=1080&fit=crop&q=80",
    title: "Transform Your Journey",
    ctaText: "Explore Now",
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
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
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
              unoptimized
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* Content - Left Aligned */}
            <div className="relative z-20 h-full flex items-center">
              <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
                <div className="max-w-2xl">
                  {/* Title */}
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>

                  {/* CTA Button */}
                  <Link
                    href={slide.ctaLink}
                    className="inline-block px-8 py-4 bg-[#FF7B60] text-white text-base md:text-lg font-bold rounded-lg shadow-xl hover:bg-[#ff6a4d] transition-all transform hover:scale-105"
                  >
                    {slide.ctaText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots - Bottom Left */}
      <div className="absolute bottom-8 left-6 md:left-12 lg:left-16 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all rounded-full ${
              index === currentSlide
                ? "w-10 h-3 bg-white"
                : "w-3 h-3 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
