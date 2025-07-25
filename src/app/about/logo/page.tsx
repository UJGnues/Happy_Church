import Image from "next/image";

export const metadata = {
  title: "행복한교회 로고 소개",
  description: "행복한교회 로고와 심볼, 의미 소개 페이지",
};

export default function LogoPage() {
  return (
    <main className="container mx-auto py-16 px-6 max-w-2xl">
      <div className="flex flex-col items-center mb-10">
        <Image
          src="/logo.webp"
          alt="행복한교회 로고"
          width={300}
          height={300}
          priority
          className="rounded-2xl shadow-xl border-2 mb-4"
        />
        <div className="text-gray-700 text-lg font-medium mt-2">
          2025년 07월 25일 로고를 제작하였습니다
        </div>
      </div>

      <div className="flex items-start mb-10">
        <div className="font-bold w-28 text-pink-500 flex-shrink-0 text-2xl mt-1">하트</div>
        <div className="text-gray-800 ml-6 text-lg leading-relaxed">
          심장을 의미하는 영어 단어이면서, 동시에 사랑, 애정, 감정 등을 상징하는 기호로 사용. <br />
          행복의 요소라고 생각할 수 있는 사랑, 애정, 즐거움, 편안한 감정들을 표현한다.
        </div>
      </div>

      <div className="flex items-start mb-10">
        <div className="font-bold w-28 text-blue-700 flex-shrink-0 text-2xl mt-1">십자가</div>
        <div className="text-gray-800 ml-6 text-lg leading-relaxed">
          기독교에서 예수 그리스도의 수난과 죽음을 상징하며,<br />
          동시에 구원과 희생을 의미하는 중요한 상징
        </div>
      </div>

      <div className="flex items-start mb-14">
        <div className="font-bold w-28 text-primary flex-shrink-0 text-2xl mt-1">행복한교회</div>
        <div className="text-gray-800 ml-6 text-lg leading-relaxed">
          삶의 행복을 주는 교회<br />
          삶의 행복이 가득한 교회
        </div>
      </div>

      <div className="my-12">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl shadow-lg px-8 py-8">
          <div className="text-xl font-bold text-blue-700 mb-4 text-center">
            예수님의 팔복
          </div>
          <div className="text-lg text-gray-800 leading-relaxed">
            심령이 가난한 자는 복이 있나니 천국이 그들의 것임이요<br />
            애통하는 자는 복이 있나니 그들이 위로를 받을 것임이요<br />
            온유한 자는 복이 있나니 그들이 땅을 기업으로 받을 것임이요<br />
            의에 주리고 목마른 자는 복이 있나니 그들이 배부를 것임이요<br />
            긍휼히 여기는 자는 복이 있나니 그들이 긍휼히 여김을 받을 것임이요<br />
            마음이 청결한 자는 복이 있나니 그들이 하나님을 볼 것임이요<br />
            화평하게 하는 자는 복이 있나니 그들이 하나님의 아들이라 일컬음을 받을 것임이요<br />
            의를 위하여 박해를 받은 자는 복이 있나니 천국이 그들의 것임이라<br />
          </div>
          <div className="text-sm text-right text-blue-600 mt-4 font-medium">
            — 마태복음 5:3~10
          </div>
        </div>
      </div>
    </main>
  );
}
