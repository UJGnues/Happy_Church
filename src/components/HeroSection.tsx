"use client";

import { memo } from "react";
import Image from "next/image";

const HeroSection = memo(() => {
  return (
    <section className="relative h-screen overflow-hidden" role="banner">
      <div className="absolute inset-0">
        <Image
          src="/main.webp"
          alt="행복한교회 본당"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-radial-gradient from-black/50 via-black/20 to-transparent"
             style={{
               background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)'
             }}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-center mb-8 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          행복한 교회
        </h1>
        <div className="text-2xl md:text-4xl font-light text-center space-y-2">
          <p className="drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]">행복하고 아름다운 만남을 위해</p>
          <p className="drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]">소중한 당신과 함께하는 삶</p>
        </div>

        <div className="mt-12 text-center space-y-2" role="list">
          <p className="text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]" role="listitem">1. 성령의 은혜가 충만한 교회</p>
          <p className="text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]" role="listitem">2. 삶의 행복을 주는 교회</p>
          <p className="text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]" role="listitem">3. 삶의 행복이 가득한 교회</p>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
