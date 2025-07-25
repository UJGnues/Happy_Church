"use client";

import { Newspaper, BookOpen, ChevronRight, Calendar, Clock } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

type Verse = {
  verse: string;
  reference: string;
};

type NewsItem = {
  title: string;
  date: string;
  isNew: boolean;
};

const dailyVerses: Verse[] = [
  { verse: "너희는 먼저 그의 나라와 그의 의를 구하라 그리하면 이 모든 것을 너희에게 더하시리라", reference: "마태복음 6:33" },
  { verse: "여호와는 나의 목자시니 내게 부족함이 없으리로다", reference: "시편 23:1" },
  { verse: "내가 너와 함께 있어 너를 지키며 너를 이끌어 이 땅으로 돌아오게 하리라", reference: "창세기 28:15" },
  { verse: "주 안에서 항상 기뻐하라 내가 다시 말하노니 기뻐하라", reference: "빌립보서 4:4" },
  { verse: "하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니", reference: "요한복음 3:16" },
  { verse: "내 은혜가 네게 족하도다 이는 내 능력이 약한 데서 온전하여짐이라", reference: "고린도후서 12:9" },
  { verse: "두려워하지 말라 내가 너와 함께 함이라 놀라지 말라 나는 네 하나님이 됨이라", reference: "이사야 41:10" }
];

const getYesterday = (date: Date): Date => {
  const d = new Date(date);
  d.setDate(d.getDate() - 1);
  return d;
};

const BannerSection: React.FC = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState<number>(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const newsItems: NewsItem[][] = [
    [
      { title: "영혼사랑섬김(전도)", date: "2025.09.13 토요일", isNew: true },
      { title: "잠언 성경 레크레이션 진행 안내", date: "2025.07.25 금요일", isNew: true },
      { title: "홈페이지 배포 안내", date: "2025.07.21부터 시행", isNew: true }
    ],
    [
      { title: "엠프/마이크 구매 안내", date: "2025.07.14 화요일", isNew: true }
    ]
  ];

  const maxNewsLength = 3;
  const today: Date = new Date();
  const yesterday: Date = getYesterday(today);

  const dateString: string = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });

  const todayVerse: Verse = dailyVerses[today.getDay()];
  const yesterdayVerse: Verse = dailyVerses[yesterday.getDay()];

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentNewsIndex(prev => (prev + 1) % newsItems.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentNewsIndex, newsItems.length]);

  const handleIndicatorClick = (i: number) => setCurrentNewsIndex(i);

  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="w-full md:w-1/2 bg-pink-400 rounded-3xl p-4 md:p-8 flex flex-col relative overflow-hidden mb-4 md:mb-0 shadow-lg min-h-[280px]">
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="bg-white/30 backdrop-blur-sm p-3 rounded-xl">
                <Newspaper className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-1">교회 소식</h3>
                <p className="text-black/90 text-sm">행복한교회의 새로운 소식을 확인하세요</p>
              </div>
            </div>
            <div className="bg-white/30 backdrop-blur-sm p-2 rounded-full">
              <ChevronRight className="w-5 h-5 text-black" />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-4 mt-8">
            {Array.from({ length: maxNewsLength }).map((_, idx) => {
              const item = newsItems[currentNewsIndex][idx] || { title: "", date: "", isNew: false };
              const isEmpty = !item.title && !item.date;
              return (
                <div
                  key={idx}
                  className="bg-white/40 rounded-xl p-4 w-full min-h-[70px] flex items-center"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium">
                        {isEmpty ? <span className="invisible">공백</span> : item.title}
                      </span>
                      {item.isNew && item.title && (
                        <span className="bg-white/60 text-xs px-2 py-0.5 rounded-full text-black/80">NEW</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-black/70 text-xs">
                      {item.date && <Clock className="w-3 h-3" />}
                      <span>{item.date ? item.date : <span className="invisible">0000.00.00</span>}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-2 my-8">
            {newsItems.map((_, i: number) => (
              <button
                key={i}
                type="button"
                onClick={() => handleIndicatorClick(i)}
                aria-label={`뉴스 ${i + 1} 페이지로 이동`}
                className={`transition-all duration-200 focus:outline-none ${i === currentNewsIndex ? "w-6 bg-black" : "w-2 bg-black/30"} h-2 rounded-full`}
                style={{ cursor: "pointer" }}
              ></button>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-blue-300 rounded-3xl p-4 md:p-8 flex flex-col relative overflow-hidden shadow-lg min-h-[280px]">
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="bg-white/30 backdrop-blur-sm p-3 rounded-xl">
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-1">오늘의 말씀</h3>
                <p className="text-black/90 text-sm">{dateString}</p>
              </div>
            </div>
            <div className="bg-white/30 backdrop-blur-sm p-2 rounded-full">
              <ChevronRight className="w-5 h-5 text-black" />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-4">
            <div className="bg-white/40 rounded-2xl p-6 w-full min-h-[100px] flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3 text-black/90">
                <Calendar className="w-5 h-5" />
                <span className="text-sm font-medium">오늘의 말씀</span>
              </div>
              <p className="text-lg leading-relaxed font-light text-black mb-2">
                "{todayVerse.verse}"
              </p>
              <p className="text-sm text-black/80 text-right font-medium">{todayVerse.reference}</p>
            </div>
            <div className="bg-white/30 rounded-2xl p-6 w-full min-h-[100px] flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3 text-black/70">
                <Calendar className="w-5 h-5" />
                <span className="text-sm font-medium">어제의 말씀</span>
              </div>
              <p className="text-base leading-relaxed font-light text-black mb-2">
                "{yesterdayVerse.verse}"
              </p>
              <p className="text-sm text-black/60 text-right font-medium">{yesterdayVerse.reference}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
