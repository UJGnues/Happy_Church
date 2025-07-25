"use client";

import { churchContact } from "../../data/contact";

export default function LocationPage() {
  return (
    <main className="max-w-5xl mx-auto py-10 px-4">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">교회 오시는 길</h1>
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl shadow transition"
          onClick={() => window.print()}
        >
          약도인쇄 미리보기
        </button>
      </div>

      <div className="w-full rounded-2xl overflow-hidden shadow-lg border mb-4 aspect-[3/2] bg-white">
        <iframe
          title="교회 위치"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.321558040135!2d126.8027673!3d37.52391659999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9d41f76ee73d%3A0x41e06989684804e3!2z6rK96riw64-EIOu2gOyynOyLnCDsm5DsooXroZwgMjY!5e0!3m2!1sko!2skr!4v1753151918789!5m2!1sko!2skr"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: 360 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="mb-8 bg-gray-50 rounded-xl p-6 shadow flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <span className="font-bold text-gray-800">주소 :</span>
          <span className="ml-2">
            {churchContact.address}{churchContact.building}
          </span>
        </div>
        <div>
          <span className="font-bold text-gray-800">대표전화 :</span>
          <span className="ml-2">{churchContact.tel}</span>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">지하철</h2>
        <ul className="list-disc pl-5 text-gray-800 space-y-2">
          <li>
            <span className="font-bold text-blue-600">서해선 원종역 4번출구</span> ▶ 이디야커피에서 오른쪽 방향 ▶ 메카커피에서 진행방향으로 직진 ▶ 가마치통닭쪽 길 건너 ▶ 대화약국 건물 3층 ▶ 교회
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">버스</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white shadow-md border p-6 flex flex-col space-y-2">
            <h3 className="text-lg font-bold mb-2 text-blue-600">
              원종역 3번 출구 앞<br />
              <span className="font-normal text-base text-gray-500">(원종종합시장, 성곡사거리 방면)</span>
            </h3>
            <div>
              <span className="font-semibold">마을버스:</span> 017, 017-1<br />
              <span className="font-semibold">시내버스:</span> 3, 8, 23, 50, 50-1, 59-1, 70, 70-2, 75, 95, 98<br />
              <span className="font-semibold">간선버스:</span> 606, 661
            </div>
          </div>
          <div className="rounded-2xl bg-white shadow-md border p-6 flex flex-col space-y-2">
            <h3 className="text-lg font-bold mb-2 text-blue-600">
              원종역 2번 출구 앞<br />
              <span className="font-normal text-base text-gray-500">(오정농협, 원종1동행정복지센터 방면)</span>
            </h3>
            <div>
              <span className="font-semibold">마을버스:</span> 017, 017-1<br />
              <span className="font-semibold">시내버스:</span> 3, 8, 23, 50, 50-1, 59-1, 70, 70-2, 75, 95, 98<br />
              <span className="font-semibold">간선버스:</span> 606, 661
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
