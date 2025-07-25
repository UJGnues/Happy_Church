// src/components/Logo.tsx
"use client";
import Image from "next/image";

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 120, className = "" }: LogoProps) {
  return (
    <Image
      src="/logo.webp" // 경로는 실제 파일 위치로!
      alt="행복한교회 로고"
      width={size}
      height={size}
      priority
      className={`block ${className}`}
      style={{ width: size, height: "auto" }}
    />
  );
}
