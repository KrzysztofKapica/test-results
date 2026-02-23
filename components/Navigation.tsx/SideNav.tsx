"use client";
import { SocialMediaIcons } from "@/lib/ui/shared/SocialMediaIcons";
import { Close } from "@/public/icons";
import Link from "next/link";
import ButtonLink from "../../lib/ui/shared/ButtonLink";
import { NavigationItems } from "./NavigationItems";

interface SideNavProps {
  open: boolean;
  onClose: () => void;
}

export default function SideNav({ open, onClose }: SideNavProps) {
  return (
    <aside
      className={[
        "fixed top-0 right-0 h-full w-3/4 bg-white shadow-xl z-50 transition-transform duration-300 lg:hidden flex flex-col",
        open ? "translate-x-0" : "translate-x-full",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200 shrink-0 bg-[url('@/public/assets/backgrounds/bubbles.svg')] relative before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[#198F51] before:-z-10">
        <ButtonLink
          color={"orange"}
          variant={"solid"}
          href={"#o-nas"}
          onClick={onClose}
        >
          Też chcę działać
        </ButtonLink>
        <button
          onClick={onClose}
          aria-label="Zamknij menu"
          className="h-10 w-10 rounded-lg hover:bg-gray-50 focus:outline-none flex items-center justify-center fill-black cursor-pointer group"
        >
          <Close className="fill-white group-hover:fill-black" />
        </button>
      </div>
      <nav aria-label="Nawigacja boczna" className="flex-1 overflow-y-auto">
        <ul className="space-y-1">
          <li className="border-b border-gray-200 mb-0">
            <Link
              href="#"
              className="block px-7 py-4 font-semibold rounded-lg hover:bg-gray-50 text-xl"
              onClick={onClose}
            >
              Fundacja szczęśliwsi
            </Link>
          </li>
          <NavigationItems onClick={onClose} type="mobile" />
        </ul>
      </nav>
      <div className="shrink-0 border-t border-gray-200 p-4 relative bg-[url('@/public/assets/backgrounds/straight-lines.svg')] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[#F3C11B] before:-z-10 bg-no-repeat bg-left bg-cover">
        <p className="text-lg text-white text-shadow-lg font-extrabold mb-3">
          Wpadaj na nasze social media:
        </p>
        <SocialMediaIcons width={10} height={10} />
      </div>
    </aside>
  );
}
