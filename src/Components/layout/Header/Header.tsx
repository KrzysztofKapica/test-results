import logo from "../../../assets/global/logo.svg";
import MobileMenu from "./MobileMenu";
import { TopNavigation } from "./TopNavigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-200 rounded-b-xl shadow-[0_4px_6px_rgba(0,0,0,0.25)]">
      <div className="container mx-auto flex items-center justify-between py-2">
        <a
          href="/"
          className="inline-flex items-center"
          aria-label="Strona główna"
        >
          <img
            width={139}
            height={53}
            src={logo}
            alt="Fundacja Szczęśliwsi logo"
          />
        </a>
        <div className="hidden lg:block">
          <TopNavigation />
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
