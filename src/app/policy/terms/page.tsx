import { churchContact } from "@/data/contact";

export const metadata = {
  title: "이용약관 - 행복한교회",
  description: "행복한교회 이용약관 안내 페이지입니다."
};

export default function TermsPage() {
  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-primary">이용약관</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">제1조(목적)</h2>
        <p className="text-gray-700">
          본 약관은 행복한교회(이하 '교회')가 운영하는 홈페이지의 이용과 관련하여 교회와 회원 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">제2조(약관의 효력 및 변경)</h2>
        <p className="text-gray-700">
          1. 본 약관은 교회 홈페이지에 게시하거나 기타 방법으로 공지함으로써 효력을 발생합니다.<br/>
          2. 교회는 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있으며, 개정 시 홈페이지를 통해 공지합니다.<br/>
          3. 변경된 약관에 이의가 있는 경우 회원은 탈퇴할 수 있으며, 별도의 이의가 없는 경우 동의한 것으로 간주합니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">제3조(용어의 정의)</h2>
        <p className="text-gray-700">
          1. ‘회원’이라 함은 교회의 홈페이지에 회원가입을 한 자를 의미합니다.<br/>
          2. ‘이용자’란 회원을 포함하여 홈페이지를 이용하는 모든 방문자를 의미합니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">제4조(회원가입)</h2>
        <p className="text-gray-700">
          1. 홈페이지 이용을 위해 회원가입 시 실명 및 정확한 정보를 기재해야 합니다.<br/>
          2. 타인의 명의, 허위 정보, 도용 등으로 가입할 수 없으며, 위반 시 서비스 이용이 제한될 수 있습니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">제5조(회원의 의무)</h2>
        <p className="text-gray-700">
          1. 회원은 관계법령, 본 약관, 이용안내 등 교회가 정한 사항을 준수해야 합니다.<br/>
          2. 타인의 권리나 명예, 개인정보 등 법적 보호 이익을 침해하지 않아야 하며, 건전한 인터넷 이용문화를 준수해야 합니다.<br/>
          3. 회원 계정 관리 및 비밀번호 보안에 책임을 집니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">제6조(개인정보 보호)</h2>
        <p className="text-gray-700">
          교회는 관련 법령에 따라 회원의 개인정보를 보호하며, 개인정보 처리방침에 따라 관리·운영합니다. 자세한 사항은 교회 홈페이지 내 개인정보처리방침을 참고하시기 바랍니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">제7조(서비스의 제공 및 변경)</h2>
        <p className="text-gray-700">
          1. 교회는 홈페이지를 통해 다양한 예배 및 교회 소식, 콘텐츠, 자료 등을 제공합니다.<br/>
          2. 서비스의 내용, 운영 시간 등은 사정에 따라 변경 또는 중단될 수 있으며, 이 경우 사전 공지합니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">제8조(서비스 이용의 제한 및 중지)</h2>
        <p className="text-gray-700">
          1. 회원이 본 약관을 위반하거나 관련 법령을 위반한 경우 서비스 이용이 제한·중지될 수 있습니다.<br/>
          2. 천재지변, 시스템 점검, 운영상 필요에 따라 서비스가 일시 중단될 수 있습니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">제9조(게시물의 저작권)</h2>
        <p className="text-gray-700">
          홈페이지 내 게시물의 저작권은 별도의 표시가 없는 한 교회에 귀속되며, 무단 복제, 배포, 상업적 이용을 금지합니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">제10조(면책조항)</h2>
        <p className="text-gray-700">
          1. 교회는 천재지변, 불가항력적 사유로 인한 서비스 제공의 장애에 대해 책임을 지지 않습니다.<br/>
          2. 회원의 귀책사유로 인한 서비스 장애에 대해서도 책임을 지지 않습니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">제11조(준거법 및 재판관할)</h2>
        <p className="text-gray-700">
          본 약관에 관한 분쟁은 대한민국 법을 적용하며, 분쟁 발생 시 교회 소재지 관할 법원을 제1심 법원으로 합니다.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">부칙</h2>
        <p className="text-gray-700">
          본 약관은 2025년 7월 24일부터 시행합니다.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-2">문의처</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>전화: {churchContact.tel}</li>
          <li>이메일: {churchContact.email}</li>
        </ul>
      </section>
    </main>
  );
}
