import { churchContact } from "../../../data/contact";

export default function GuidePage() {
  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-primary">교회안내</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">예배 시간 안내</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>주일예배: 오전 10시</li>
          <li>수요예배: 오후 7시</li>
          <li>금요기도회: 오후 9시</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">오시는 길</h2>
        <p>{churchContact.address}{churchContact.building}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">문의</h2>
        <p>전화: {churchContact.tel}</p>
        <p>이메일: {churchContact.email}</p>
      </section>
    </main>
  );
}
