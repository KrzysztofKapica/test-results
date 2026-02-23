import logo from "@/public/assets/global/logo.svg";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { TopNavigation } from "./TopNavigation";

export default function Header() {
  return (
    <header className=" sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto  flex items-center justify-between py-2">
        <Link
          href="/"
          className="inline-flex items-center"
          aria-label="Strona główna"
        >
          <Image
            width={139}
            height={53}
            src={logo}
            alt="Fundacja Szczęśliwsi logo"
          />
        </Link>
        <div className="hidden lg:block">
          <TopNavigation />
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
