// src/app/about/greeting/page.tsx
"use client";

import Image from "next/image";

export default function GreetingPage() {
  return (
    <main className="max-w-7xl mx-auto py-14 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-16">인사말</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* 오경화 목사님 */}
        <section>
          <div className="bg-white rounded-2xl shadow-lg border p-8 h-full flex flex-col justify-between min-h-[390px]">
            <div>
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/oh.jpg"
                  alt="오경화 목사님"
                  width={340}
                  height={210}
                  className="rounded-2xl object-cover shadow-lg"
                  priority
                />
              </div>
              <div className="text-base md:text-lg text-gray-800 leading-relaxed mb-8 text-left">
                하나님의 은혜와 사랑이 가득한 행복한교회에<br />오신 여러분을 진심으로 환영합니다.<br />
                저희 교회는 하나님 사랑, 이웃 사랑을 실천하며<br />
                복음의 기쁨을 함께 나누는 공동체입니다.<br />
                행복한교회에서 예배하며<br />
                삶의 회복과 치유, 참된 평안을 경험하시길 소망합니다.<br />
                언제나 여러분의 삶에 하나님의 평안과 소망이 넘치시길 기도합니다.
              </div>
            </div>
            <div className="flex flex-col items-end mt-2">
              <span className="font-semibold text-gray-700 mb-1">행복한교회</span>
              <span className="text-lg font-bold">오경화 목사</span>
            </div>
          </div>
        </section>
        {/* 박남수 목사님 */}
        <section>
          <div className="bg-white rounded-2xl shadow-lg border p-8 h-full flex flex-col justify-between min-h-[390px]">
            <div>
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/park.jpg"
                  alt="박남수 목사님"
                  width={340}
                  height={210}
                  className="rounded-2xl object-cover shadow-lg"
                  priority
                />
              </div>
              <div className="text-base md:text-lg text-gray-800 leading-relaxed mb-8 text-left">
                여러분을 행복한교회로 초대합니다.<br />
                저희 교회는 예수님의 사랑과 은혜 안에서 서로를 존중하고 격려하며,<br />
                기쁨과 평안을 경험하는 믿음의 가족입니다.<br />
                여러분의 마음에 따뜻한 위로와 용기,<br />
                그리고 새로운 시작의 소망이 가득하기를 바랍니다.<br />
                행복한교회에서 하나님께 예배드리며 함께 성장해가길 소망합니다.
              </div>
            </div>
            <div className="flex flex-col items-end mt-2">
              <span className="font-semibold text-gray-700 mb-1">행복한교회</span>
              <span className="text-lg font-bold">박남수 목사</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
