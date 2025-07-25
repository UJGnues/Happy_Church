import { churchContact } from "@/data/contact";

export const metadata = {
  title: "쿠키정책 - 행복한교회",
  description: "행복한교회 쿠키정책 안내 페이지입니다."
};

export default function CookiePolicyPage() {
  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-primary">쿠키정책</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. 쿠키(Cookie)란 무엇인가요?</h2>
        <p className="text-gray-700">
          쿠키란 웹사이트가 이용자의 컴퓨터(브라우저)에 저장하는 소량의 정보로, 이용자의 환경 설정, 로그인 상태, 서비스 이용 현황 등을 저장하여 보다 나은 사용자 경험을 제공합니다.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. 쿠키의 사용 목적</h2>
        <p className="text-gray-700">
          행복한교회는 다음과 같은 목적을 위해 쿠키를 사용합니다:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
          <li>회원의 로그인 유지</li>
          <li>이용자 맞춤형 서비스 제공 및 개인화</li>
          <li>웹사이트 방문 및 이용 형태 파악(통계/분석)</li>
          <li>서비스 개선 및 보안 관리</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. 쿠키의 설치/운영 및 거부 방법</h2>
        <p className="text-gray-700 mb-2">
          이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 브라우저의 옵션 설정을 통해 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인하거나, 모든 쿠키의 저장을 거부할 수 있습니다. 단, 쿠키 저장을 거부할 경우 로그인이 필요한 일부 서비스 이용에 어려움이 있을 수 있습니다.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>
            <strong>Internet Explorer:</strong> 도구 &gt; 인터넷 옵션 &gt; 개인정보 탭 &gt; 고급
          </li>
          <li>
            <strong>Chrome:</strong> 설정 &gt; 개인정보 및 보안 &gt; 쿠키 및 기타 사이트 데이터
          </li>
          <li>
            <strong>Edge:</strong> 설정 &gt; 쿠키 및 사이트 권한
          </li>
          <li>
            <strong>Safari:</strong> 환경설정 &gt; 개인정보 보호 &gt; 쿠키 및 웹사이트 데이터 관리
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. 쿠키 관련 문의</h2>
        <p className="text-gray-700">
          쿠키의 사용, 차단 또는 개인정보 보호와 관련된 문의는 아래로 연락해주시기 바랍니다.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mt-2">
          <li>전화: {churchContact.tel}</li>
          <li>이메일: {churchContact.email}</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">5. 쿠키정책 변경 안내</h2>
        <p className="text-gray-700">
          본 쿠키정책은 법령, 회사 정책 및 서비스 변경에 따라 개정될 수 있습니다.  
          변경 시 웹사이트를 통해 안내하며, 개정일자를 반드시 명시합니다.<br />
          <span className="block mt-2">최종 개정일: 2025년 7월 24일</span>
        </p>
      </section>
    </main>
  );
}
