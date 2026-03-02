"use client";
import { Close, Facebook, Instagram, Linkedin } from "@/public/icons";
import { TikTok } from "@/public/icons/TikTok";
import Link from "next/link";
import ButtonLink from "../../shared/ButtonLink";

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
        >
          <div onClick={onClose}>Też chcę działać!</div>
        </ButtonLink>
        <button
          onClick={onClose}
          aria-label="Zamknij menu"
          className="h-10 w-10 rounded-lg hover:bg-gray-50 focus:outline-none flex items-center justify-center fill-black cursor-pointer group"
        >
          <Close className="fill-white group-hover:fill-black" />
        </button>
      </div>
      <nav
        aria-label="Nawigacja boczna"
        className="flex-1 overflow-y-auto"
      >
        <ul className="space-y-1">
          {/* <li className="border-b border-gray-200 mb-0">
            <details className="group rounded-lg">
              <summary className="flex items-center justify-between px-7 py-4 cursor-pointer gap-2 font-semibold hover:bg-gray-50 rounded-lg">
                <span className="text-xl">Fundacja</span>
                <ChevronFilled className="transition-transform duration-200 group-open:rotate-180 min-w-10" />
              </summary>
              <ul className="ml-2 mt-1 overflow-hidden rounded-md ">
                <li>
                  <Link
                    href="#"
                    className="block px-8 py-2 hover:bg-gray-50 text-lg font-medium"
                    onClick={onClose}
                  >
                    Item 1
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-8 py-2 hover:bg-gray-50 text-lg font-medium"
                    onClick={onClose}
                  >
                    Item 2
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-8 py-2 hover:bg-gray-50 text-lg font-medium"
                    onClick={onClose}
                  >
                    Item 3
                  </Link>
                </li>
              </ul>
            </details>
          </li> */}

          <li className="border-b border-gray-200 mb-0">
            <Link
              href="#misja"
              className="block px-7 py-4 font-semibold rounded-lg hover:bg-gray-50 text-xl"
              onClick={onClose}
            >
              Misja
            </Link>
          </li>

          <li className="border-b border-gray-200 mb-0">
            <Link
              href="#o-nas"
              className="block px-7 py-4 font-semibold rounded-lg hover:bg-gray-50 text-xl"
              onClick={onClose}
            >
              Plan
            </Link>
          </li>
          <li className="border-b border-gray-200 mb-0">
            <Link
              href="#baza-wiedzy"
              className="block px-7 py-4 font-semibold rounded-lg hover:bg-gray-50 text-xl"
              onClick={onClose}
            >
              Baza wiedzy
            </Link>
          </li>

          {/* <li className="border-b border-gray-200 mb-0">
            <details className="group rounded-lg">
              <summary className="flex items-center justify-between px-7 py-4 cursor-pointer gap-2 font-semibold hover:bg-gray-50 rounded-lg">
                <span className="text-xl">Emocje</span>
                <ChevronFilled className="transition-transform duration-200 group-open:rotate-180 min-w-10" />
              </summary>
              <ul className="ml-2 mt-1 overflow-hidden rounded-md ">
                <li>
                  <Link
                    href="#"
                    className="w-full block px-8 py-2 hover:bg-gray-50 whitespace-normal break-words text-lg font-medium"
                    onClick={onClose}
                  >
                    Very long link which is very very very long
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-8 py-2 hover:bg-gray-50 text-lg font-medium"
                    onClick={onClose}
                  >
                    Item 2
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-8 py-2 hover:bg-gray-50 text-lg font-medium"
                    onClick={onClose}
                  >
                    Item 3
                  </Link>
                </li>
              </ul>
            </details>
          </li> */}

          {/* <li className="border-b border-gray-200 mb-0">
            <Link
              href="/kontakt"
              className="block px-7 py-4 font-semibold rounded-lg hover:bg-gray-50 text-xl"
              onClick={onClose}
            >
              Kontakt
            </Link>
          </li> */}
        </ul>
      </nav>
      <div className="shrink-0 border-t border-gray-200 p-4 relative bg-[url('@/public/assets/backgrounds/straight-lines.svg')] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[#F3C11B] before:-z-10 bg-no-repeat bg-left bg-cover">
        <p className="text-lg text-white text-shadow-lg font-extrabold mb-3">
          Wpadaj na nasze social media:
        </p>
        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="h-10 w-10 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors"
          >
            <Facebook className="w-8 h-8" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="h-10 w-10 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors"
          >
            <Instagram className="w-8 h-8" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="h-10 w-10 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href=" https://www.tiktok.com/@fundacjaszczesliwsi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="h-10 w-10 rounded-lg hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <TikTok className="w-8 h-8" />
          </a>
        </div>
      </div>
    </aside>
  );
}
