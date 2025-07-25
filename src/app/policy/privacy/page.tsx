import { churchContact } from "@/data/contact";

export const metadata = {
  title: "개인정보처리방침 - 행복한교회",
  description: "행복한교회 개인정보처리방침 안내 페이지입니다."
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-primary">개인정보처리방침</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. 총칙</h2>
        <p className="text-gray-700">
          행복한교회(이하 '교회')는 개인정보보호법 등 관련 법령을 준수하며, 이용자의 개인정보를 보호하기 위해 최선을 다하고 있습니다.
        </p>
        <p className="text-gray-700">
          본 방침은 교회가 제공하는 서비스 이용 시 수집되는 개인정보의 처리 기준과 이용자의 권리 및 그 행사방법에 대해 안내합니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. 개인정보의 수집 항목 및 방법</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>필수항목: 이름, 연락처(전화번호), 이메일</li>
          <li>서비스 이용과정에서 자동으로 수집될 수 있는 정보: 접속 IP, 쿠키, 접속기록, 이용기록, 브라우저 정보</li>
        </ul>
        <p className="text-gray-700 mt-2">
          수집 방법: 홈페이지 회원가입, 각종 신청서, 온라인 문의, 서비스 이용 과정에서 자동 수집
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. 개인정보의 수집 및 이용 목적</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>홈페이지 회원 관리 및 본인 확인</li>
          <li>서비스 제공 및 안내, 소식 알림</li>
          <li>문의·상담 처리 및 민원 대응</li>
          <li>통계·분석 및 서비스 개선</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. 개인정보의 보유 및 이용 기간</h2>
        <p className="text-gray-700">
          원칙적으로 개인정보는 수집·이용 목적 달성 시 즉시 파기합니다. 단, 관계 법령에 따라 일정기간 보존이 필요한 경우에는 해당 법령에서 정한 기간 동안 안전하게 보관됩니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. 개인정보의 제3자 제공</h2>
        <p className="text-gray-700">
          교회는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 법령에 특별한 규정이 있는 경우 또는 이용자의 동의를 받은 경우에 한해 제공할 수 있습니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. 개인정보의 처리 위탁</h2>
        <p className="text-gray-700">
          교회는 원활한 서비스 제공을 위하여 개인정보 처리 업무를 외부에 위탁할 수 있으며, 이 경우 위탁받은 자에 대해 관리·감독을 철저히 합니다. (현재 기준: 위탁사항 없음)
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. 이용자 및 법정대리인의 권리와 행사방법</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>개인정보의 열람, 정정, 삭제, 처리정지 요청 가능</li>
          <li>요청 시 본인 확인 후 지체 없이 조치</li>
        </ul>
        <p className="text-gray-700 mt-2">
          개인정보 관련 권리 행사는 교회 홈페이지, 이메일, 전화 등을 통해 언제든 신청하실 수 있습니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. 개인정보의 파기 절차 및 방법</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>개인정보는 목적 달성 후 지체 없이 파기합니다.</li>
          <li>전자적 파일 형태는 복구 불가능한 방법으로,  
              문서 형태는 분쇄 등 물리적 방법으로 안전하게 파기합니다.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">9. 개인정보의 안전성 확보조치</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>접근권한 관리 및 정기적 보안점검</li>
          <li>개인정보 취급 직원 최소화 및 교육</li>
          <li>보안프로그램 설치 및 관리</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">10. 개인정보 보호책임자 및 담당자 안내</h2>
        <p className="text-gray-700">
          개인정보 보호와 관련한 문의, 신고, 상담은 아래 연락처로 하실 수 있습니다.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-2">
          <li>개인정보 보호책임자: 오경화 목사</li>
          <li>연락처: {churchContact.tel}</li>
          <li>이메일: {churchContact.email}</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">11. 고지의 의무</h2>
        <p className="text-gray-700">
          본 개인정보처리방침은 관련 법령, 교회 정책, 서비스 내용 변경 등에 따라 개정될 수 있으며,  
          개정 시 홈페이지 공지사항을 통해 사전 안내합니다.<br/>
          <span className="block mt-2">최종 개정일: 2025년 7월 24일</span>
        </p>
      </section>
    </main>
  );
}
