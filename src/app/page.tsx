import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import BannerSection from "@/components/BannerSection";
import { JsonLd } from "@/components/JsonLd";

// Footer import와 Header import는 필요 없습니다.
// layout.tsx에서 공통 적용되기 때문입니다.

const QuickAccess = dynamic(() => import("@/components/QuickAccess"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

export default function Home() {
  return (
    <>
      <JsonLd />
      <main className="min-h-screen">
        {/* Header, Footer는 layout.tsx에서만 렌더링합니다 */}
        <HeroSection />
        <BannerSection />
        <QuickAccess />
      </main>
    </>
  );
}
