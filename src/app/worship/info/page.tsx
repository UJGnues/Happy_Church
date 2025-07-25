"use client";

import { Clock, MapPin, Church } from "lucide-react";

export default function WorshipInfoPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-2 md:px-4">
      {/* 상단 제목 */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">예배 안내</h1>

      {/* 예배 시간 안내 */}
      <section className="bg-white rounded-2xl shadow-lg p-3 sm:p-6 mb-10 border">
        <div className="overflow-x-auto">
          <table className="w-full text-center min-w-[340px]">
            <thead>
              <tr className="border-b">
                <th className="py-3 text-blue-700 text-base md:text-lg font-semibold">예배명</th>
                <th className="py-3 text-gray-700 text-base md:text-lg font-semibold">시간</th>
                <th className="py-3 text-gray-700 text-base md:text-lg font-semibold">장소</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  icon: <Church className="inline-block mr-1 w-5 h-5 text-blue-600" />,
                  name: "주일예배 1부",
                  time: "오전 9:00",
                  place: "본당",
                },
                {
                  icon: <Church className="inline-block mr-1 w-5 h-5 text-blue-600" />,
                  name: "주일예배 2부",
                  time: "오전 11:00",
                  place: "본당",
                },
                {
                  icon: <Church className="inline-block mr-1 w-5 h-5 text-blue-600" />,
                  name: "주일예배 3부",
                  time: "오후 1:00",
                  place: "본당",
                },
                {
                  icon: <Clock className="inline-block mr-1 w-5 h-5 text-indigo-600" />,
                  name: "수요예배 1부",
                  time: "오후 8:00",
                  place: "본당",
                },
                {
                  icon: <Clock className="inline-block mr-1 w-5 h-5 text-yellow-600" />,
                  name: "금요예배 1부",
                  time: "오후 9:00",
                  place: "본당",
                },
              ].map((row, idx) => (
                <tr
                  key={row.name}
                  className="border-b last:border-0 transition hover:bg-blue-50/50"
                >
                  <td className="py-4 font-semibold text-blue-700 flex items-center justify-center gap-1">
                    {row.icon}
                    <span className="whitespace-nowrap">{row.name}</span>
                  </td>
                  <td className="py-4 text-base font-semibold text-gray-900">
                    {row.time}
                  </td>
                  <td className="py-4 font-medium text-green-700 flex items-center justify-center">
                    <MapPin className="inline-block w-4 h-4 mr-1 text-green-600" />
                    {row.place}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 안내 및 문의 박스 */}
      <section className="space-y-4">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h2 className="text-xl font-bold mb-2 text-blue-700">예배 참석 안내</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>예배 10분 전까지 착석해 주시기 바랍니다.</li>
          </ul>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
          <h2 className="text-xl font-bold mb-2 text-gray-700">문의</h2>
          <p className="text-gray-700">
            자세한 안내는 <span className="font-semibold">행복한교회</span>로 연락해 주세요.<br />
            <span className="font-semibold">전화:</span> 032-682-0590
          </p>
        </div>
      </section>
    </main>
  );
}
