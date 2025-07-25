// src/app/worship/event/page.tsx
"use client";

interface MonthlyEvent {
  title: string;
  date: string;
  location: string;
  description: string;
}

const getMonthlyEvents = (month: number): MonthlyEvent[] => {
  // 모든 달에 고정적으로 들어가는 행사 (예: 영혼사랑섬김)
  const regular = [
    {
      title: "영혼사랑섬김(전도)",
      date: "매월 둘째주 토요일 오전 (변동가능)",
      location: "교회 및 교회 인근 지역",
      description: "지역 이웃을 위한 전도 활동. 모든 성도님들의 참여를 환영합니다.",
    },
  ];

  // 절기/특별 행사
  const specials: { [key: number]: MonthlyEvent[] } = {
    3: [
      {
        title: "종려주일",
        date: "3월 30일(주일) (2025년 기준)",
        location: "본당",
        description: "예수님의 예루살렘 입성을 기념하는 주일 예배입니다.",
      },
      {
        title: "고난주간 특별새벽기도회",
        date: "3월 31일(월) ~ 4월 5일(토)",
        location: "본당",
        description: "예수님의 고난을 묵상하는 특별 새벽기도회가 열립니다.",
      },
    ],
    4: [
      {
        title: "부활주일",
        date: "4월 6일(주일) (2025년 기준)",
        location: "본당",
        description: "예수님의 부활을 기념하는 감사의 예배입니다.",
      },
    ],
    5: [
      {
        title: "어버이주일",
        date: "5월 11일(주일) (2025년 기준, 둘째주)",
        location: "본당",
        description: "부모님께 감사하는 마음을 나누는 예배입니다.",
      },
    ],
    11: [
      {
        title: "추수감사주일",
        date: "11월 16일(주일) (2025년 기준, 셋째주)",
        location: "본당",
        description: "한 해 동안 주신 은혜에 감사드리는 예배입니다.",
      },
    ],
    12: [
      {
        title: "성탄절 예배",
        date: "12월 25일(목)",
        location: "본당",
        description: "예수님의 탄생을 기념하는 성탄절 예배입니다.",
      },
    ],
  };

  return [...regular, ...(specials[month] || [])];
};

const monthNames = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

export default function WorshipEventPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">2025년 교회 행사 안내</h1>
      <div className="space-y-8">
        {monthNames.map((month, idx) => {
          const events = getMonthlyEvents(idx + 1);
          return (
            <section key={month}>
              <h2 className="text-2xl font-bold mb-4 text-blue-600">{month}</h2>
              <div className="space-y-4">
                {events.length > 0 ? (
                  events.map((event, i) => (
                    <div
                      key={i}
                      className="bg-white border rounded-2xl shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between"
                    >
                      <div>
                        <h3 className="text-lg font-bold text-blue-700 mb-1">{event.title}</h3>
                        <div className="text-gray-800 mb-1">
                          <span className="font-semibold">일시:</span> {event.date}
                        </div>
                        <div className="text-gray-800 mb-1">
                          <span className="font-semibold">장소:</span> {event.location}
                        </div>
                        <p className="text-gray-700">{event.description}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-gray-400 pl-2">등록된 특별 행사가 없습니다.</div>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
