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
    desktopImage: "/images/smart-meter-1-desktop.png",
    mobileImage: "/images/smart-meter-1-mobile.png",
    title: "Smart Metering Intelligence",
    subtitle:
      "AI-powered Advanced Metering Infrastructure for modern utilities.",
  },
  {
    desktopImage: "/images/smart-water-meter-desktop.png",
    mobileImage: "/images/smart-water-meter-mobile.png",
    title: "Smart Water Management",
    subtitle:
      "Real-time monitoring, leak detection and water distribution analytics.",
  },
  {
    desktopImage: "/images/control-room-desktop.png",
    mobileImage: "/images/control-room-mobile.png",
    title: "Utility Command Center",
    subtitle:
      "A unified platform for monitoring electricity and water infrastructure.",
  },
  {
    desktopImage: "/images/transmission-grid-desktop.jpg",
    mobileImage: "/images/transmission-grid-mobile.png",
    title: "Smart Grid Modernization",
    subtitle:
      "Building resilient energy infrastructure through digital transformation.",
  },
  {
    desktopImage: "/images/utility-analytics-desktop.jpg",
    mobileImage: "/images/utility-analytics-mobile.png",
    title: "AI Utility Analytics",
    subtitle:
      "Actionable insights for revenue protection and operational excellence.",
  },
];

export default function IntroCarousel() {
  return (
    <section className="relative h-[90svh] min-h-[650px] md:h-[100svh] w-full overflow-hidden">

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
            <div className="relative h-full">

              {/* Background Image */}

              {/* Desktop Image */}
<Image
  src={slide.desktopImage}
  alt={slide.title}
  fill
  priority

  sizes="(max-width: 767px) 0vw, 100vw"
  className="
    hidden
    md:block
    object-cover
    object-center
    transition-transform
    duration-700
  "
/>

{/* Mobile Image */}
<Image
  src={slide.mobileImage}
  alt={slide.title}
  fill
  priority
  sizes="100vw"
  className="
    block
    md:hidden
    object-cover
    object-center
    transition-transform
    duration-700
  "
/>

              {/* Dark Overlay */}

              <div className=" absolute
    inset-0
    bg-gradient-to-b
    from-white/85
    via-white/40
    to-transparent
    md:bg-gradient-to-r
    md:from-white/80
    md:via-transparent
    md:to-transparent" />

              {/* Blur Overlay */}

              <div className="absolute inset-0" />

              {/* Content */}

              <div className="absolute inset-0 flex items-center pt-32 md:pt-0">

                <div className="container mx-auto max-w-7xl px-8">

                  <motion.div
                    className="max-w-lg md:max-w-xl lg:max-w-3xl"
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


                    <h1
  className="
    text-4xl
    sm:text-5xl
    lg:text-7xl
    font-extrabold
    leading-tight
    text-slate-900
  "
>
  {slide.title}
</h1>

                    <p className="mt-6
max-w-xl
text-lg
sm:text-xl
leading-relaxed
text-slate-700">
                      {slide.subtitle}
                    </p>

                 {/* Statistics */}

<div className="mt-10 flex flex-wrap justify-start gap-8 md:gap-12">

  <div className="min-w-[110px] text-center">
    <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-600 whitespace-nowrap">
      1.2M+
    </p>

    <p className="mt-2 text-sm sm:text-base text-slate-600">
      Smart Meters
    </p>
  </div>

  <div className="min-w-[110px] text-center">
    <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-600 whitespace-nowrap">
      99.98%
    </p>

    <p className="mt-2 text-sm sm:text-base text-slate-600">
      Availability
    </p>
  </div>

  <div className="min-w-[110px] text-center">
    <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-orange-500 whitespace-nowrap">
      48
    </p>

    <p className="mt-2 text-sm sm:text-base text-slate-600">
      Projects
    </p>
  </div>

</div>

                    {/* Buttons */}

                    <div className="mt-10
flex
flex-col
sm:flex-row
gap-4">

                      <Link
                        href="/contact"
                        className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg hover:bg-blue-700 transition"
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

                    <div className="hidden md:block mt-16 w-full max-w-md">

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