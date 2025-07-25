import Link from "next/link";
import {
  MapPin,
  Users,
  Building,
  Calendar,
  Home,
  Briefcase,
  Heart,
  Phone,
} from "lucide-react";
import { useMemo } from "react";

type QuickAccessItem = {
  title: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  icon?: React.ReactNode;
  subtitle?: string;
};

const quickAccessItems: QuickAccessItem[] = [
  { title: "오경화 목사님", bgColor: "bg-pink", textColor: "text-white", borderColor: "border-[#ee95bb]" },
  { title: "교회 버튼1", icon: <Building className="w-14 h-14" />, bgColor: "bg-white", textColor: "text-gray-700", borderColor: "border-gray-300" },
  { title: "교회 버튼2", icon: <Briefcase className="w-14 h-14" />, bgColor: "bg-white", textColor: "text-gray-700", borderColor: "border-gray-300" },
  { title: "교회 버튼3", icon: <Users className="w-14 h-14" />, bgColor: "bg-white", textColor: "text-gray-700", borderColor: "border-gray-300" },
  { title: "교회 버튼4", icon: <Calendar className="w-14 h-14" />, bgColor: "bg-white", textColor: "text-gray-700", borderColor: "border-gray-300" },
  { title: "박남수 목사님", bgColor: "bg-blue-300", textColor: "text-white", borderColor: "border-[#379ae6]" },
  { title: "교회 메뉴1", icon: <Home className="w-14 h-14" />, bgColor: "bg-white", textColor: "text-gray-700", borderColor: "border-gray-300" },
  { title: "교회 메뉴2", icon: <Heart className="w-14 h-14" />, bgColor: "bg-white", textColor: "text-gray-700", borderColor: "border-gray-300" },
  { title: "교회 메뉴3", icon: <MapPin className="w-14 h-14" />, bgColor: "bg-white", textColor: "text-gray-700", borderColor: "border-gray-300" },
  { title: "교회 메뉴4", icon: <Phone className="w-14 h-14" />, bgColor: "bg-white", textColor: "text-gray-700", borderColor: "border-gray-300" },
];

function getMobileOrder(arr: QuickAccessItem[]) {
  const col = 2;
  const row = Math.ceil(arr.length / col);
  const result = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const idx = i + j * row;
      if (arr[idx]) result.push(arr[idx]);
    }
  }
  return result;
}

const QuickAccess = () => {
  const mobileItems = useMemo(() => getMobileOrder(quickAccessItems), []);

  return (
    <section className="py-12 bg-gray-background">
      <div className="container mx-auto px-4">
        <div className="hidden md:grid grid-cols-5 gap-x-8 gap-y-3 auto-rows-fr">
          {quickAccessItems.map((item, index) => (
            <Link
              key={index}
              href="#"
              className={`
                ${item.bgColor} ${item.textColor} rounded-2xl p-2
                flex flex-col items-center justify-center text-center
                hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 
                aspect-square border-2 ${item.borderColor}
                scale-90
              `}
            >
              {"icon" in item ? (
                <>
                  <div className={`${item.textColor} mb-4`}>{item.icon}</div>
                  <div>
                    {"subtitle" in item && item.subtitle && (
                      <p className="text-base opacity-90">{item.subtitle}</p>
                    )}
                    <p className="text-lg font-medium">{item.title}</p>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-lg font-medium">{item.title}</p>
                </div>
              )}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 auto-rows-fr md:hidden">
          {mobileItems.map((item, index) => (
            <Link
              key={index}
              href="#"
              className={`
                ${item.bgColor} ${item.textColor} rounded-2xl p-2
                flex flex-col items-center justify-center text-center
                hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 
                aspect-square border-2 ${item.borderColor}
                scale-90
              `}
            >
              {"icon" in item ? (
                <>
                  <div className={`${item.textColor} mb-4`}>{item.icon}</div>
                  <div>
                    {"subtitle" in item && item.subtitle && (
                      <p className="text-base opacity-90">{item.subtitle}</p>
                    )}
                    <p className="text-lg font-medium">{item.title}</p>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full">
                  <p className="text-lg font-medium">{item.title}</p>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
