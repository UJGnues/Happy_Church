import { churchContact } from "@/data/contact";

export const metadata = {
  title: "이메일무단수집거부 - 행복한교회",
  description: "행복한교회 이메일무단수집거부 안내 페이지입니다."
};

export default function EmailRefusalPage() {
  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-primary">이메일주소 무단수집 거부</h1>

      <section className="mb-8">
        <p className="text-gray-700">
          행복한교회(이하 ‘교회’)는 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제50조의2에 따라,
          교회 홈페이지에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부합니다.
        </p>
        <p className="text-gray-700 mt-4">
          이를 위반 시, 정보통신망법에 의해 형사처벌 및 손해배상 등의 책임이 따를 수 있음을 알려드립니다.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">관련 법률 안내</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>정보통신망 이용촉진 및 정보보호 등에 관한 법률 제50조의2 (전자우편주소의 무단 수집행위 등 금지)</li>
          <li>위반 시 1천만원 이하의 벌금 부과</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-2">문의처</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>전화: {churchContact.tel}</li>
          <li>이메일: {churchContact.email}</li>
        </ul>
      </section>

      <section className="mt-8">
        <p className="text-gray-700">
          본 고지는 2025년 7월 24일부터 적용됩니다.
        </p>
      </section>
    </main>
  );
}
