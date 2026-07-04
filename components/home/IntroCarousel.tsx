"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    image: "/images/smart-meter-1.png",
    title: "Smart Metering Intelligence",
    subtitle:
      "AI-powered Advanced Metering Infrastructure for modern utilities.",
  },
  {
    image: "/images/smart-water-meter.png",
    title: "Smart Water Management",
    subtitle:
      "Real-time monitoring, leak detection and water distribution analytics.",
  },
  {
    image: "/images/control-room.png",
    title: "Utility Command Center",
    subtitle:
      "A unified platform for monitoring electricity and water infrastructure.",
  },
  {
    image: "/images/transmission-grid.jpg",
    title: "Smart Grid Modernization",
    subtitle:
      "Building resilient energy infrastructure through digital transformation.",
  },
  {
    image: "/images/utility-analytics.jpg",
    title: "AI Utility Analytics",
    subtitle:
      "Actionable insights for revenue protection and operational excellence.",
  },
];

export default function IntroCarousel() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Shared animated background */}
      <HeroBackground />

      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="relative h-screen">

              {/* Background Image */}

              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover scale-100"
              />

              {/* Dark Overlay */}

              <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-transparent" />

              {/* Blur Overlay */}

              <div className="absolute inset-0" />

              {/* Content */}

              <div className="absolute inset-0 flex items-center">

                <div className="container mx-auto max-w-7xl px-8">

                  <motion.div
                    className="max-w-3xl"
                    initial={{
                      opacity: 0,
                      y: 60,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                    }}
                  >


                    <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-slate-900">
                      {slide.title}
                    </h1>

                    <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-600">
                      {slide.subtitle}
                    </p>

                    {/* Statistics */}

                    <div className="mt-12 grid max-w-xl grid-cols-3 gap-8">

                      <div>
                        <p className="text-4xl font-black text-blue-600">
                          1.2M+
                        </p>

                        <p className="mt-2 text-slate-500">
                          Smart Meters
                        </p>
                      </div>

                      <div>
                        <p className="text-4xl font-black text-emerald-600">
                          99.98%
                        </p>

                        <p className="mt-2 text-slate-500">
                          Availability
                        </p>
                      </div>

                      <div>
                        <p className="text-4xl font-black text-orange-500">
                          48
                        </p>

                        <p className="mt-2 text-slate-500">
                          Projects
                        </p>
                      </div>

                    </div>

                    {/* Buttons */}

                    <div className="mt-12 flex flex-wrap gap-5">

                      <Link
                        href="/contact"
                        className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-slate-900 shadow-lg transition hover:bg-blue-700 hover:shadow-xl"
                      >
                        Request Demo
                      </Link>

                      <Link
                        href="/about"
                        className="rounded-xl border border-blue-600 bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
                      >
                        Learn More
                      </Link>

                    </div>

                    {/* Progress Bar */}

                    <div className="mt-16 w-full max-w-md">

                      <div className="h-[3px] overflow-hidden rounded-full bg-white/20">

                        <div className="h-full w-full animate-[progress_5s_linear_infinite] bg-cyan-400" />

                      </div>

                    </div>

                  </motion.div>

                </div>

              </div>

              {/* Bottom Fade */}

              <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-b from-transparent to-white/30" />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}