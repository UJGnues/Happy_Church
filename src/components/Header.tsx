"use client";
import { useEffect, useState } from "react";
import HeaderMobile from "./HeaderMobile";
import HeaderPC from "./HeaderPC";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <HeaderMobile /> : <HeaderPC />;
}
