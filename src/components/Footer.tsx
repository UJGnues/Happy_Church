import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";
import { churchContact } from "../data/contact";

const affiliatedSites = [
  "CBS선교후원",
  "월드쉐어",
  "스타선교회",
  "페루선교지",
  "중국 북한선교",
  "라오스선교지",
  "케냐 (기도선교)",
  "구제와 나눔"
];

const footerLinks = [
  { title: "개인정보처리방침", href: "/policy/privacy" },
  { title: "이용약관", href: "/policy/terms" },
  { title: "이메일무단수집거부", href: "/policy/email-refusal" },
  { title: "쿠키정책", href: "/policy/cookie" }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-2">
              <Logo size={150} className="filter brightness-0 invert" />
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <p>
                  {churchContact.address}
                  {churchContact.building}
                  {churchContact.churchZip}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href={`tel:${churchContact.tel}`} className="hover:text-blue-300">
                  {churchContact.tel}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <div>
                  <a href={`mailto:${churchContact.email}`} className="hover:text-blue-300">
                    {churchContact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">바로가기</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-blue-300">
                  주일예배
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-300">
                  수요예배
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-300">
                  금요기도회
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-center">선교후원지</h3>
            <div className="flex justify-center gap-x-10">
              <ul className="space-y-2 text-sm text-center">
                {affiliatedSites.slice(0, 4).map((site) => (
                  <li key={site}>
                    <Link href="#" className="hover:text-blue-300">
                      {site}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2 text-sm text-center">
                {affiliatedSites.slice(4).map((site) => (
                  <li key={site}>
                    <Link href="#" className="hover:text-blue-300">
                      {site}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 text-sm mb-4 md:mb-0">
              {footerLinks.map((link) => (
                <Link key={link.title} href={link.href} className="hover:text-blue-300">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-400 text-center w-full mt-4">
            Copyright © {currentYear} Happy Church All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
