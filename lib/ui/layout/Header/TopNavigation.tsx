import { Facebook, Instagram, Linkedin } from "@/public/icons";
import { TikTok } from "@/public/icons/TikTok";
import Link from "next/link";
import ButtonLink from "../../shared/ButtonLink";

export function TopNavigation() {
  return (
    <nav>
      <ul className="flex items-center">
        {/* <li className="relative font-bold flex cursor-pointer group">
          <span className="px-4 py-3 inline-flex items-center gap-1 group-hover:underline select-none">
            Fundacja
            <ChevronFilled className="transition-transform duration-200 origin-center group-hover:rotate-180 group-focus-within:rotate-180" />
          </span>
          <ul className="absolute top-full left-0 mt-0 hidden group-hover:block group-focus-within:block bg-white shadow-md shadow-gray-300 rounded-md min-w-56 overflow-hidden">
            <li>
              <Link className="block p-4 hover:bg-gray-100" href="#">
                Item 1
              </Link>
            </li>
            <li>
              <Link className="block p-4 hover:bg-gray-100" href="#">
                Item 2
              </Link>
            </li>
            <li>
              <Link className="block p-4 hover:bg-gray-100" href="#">
                Item 3
              </Link>
            </li>
          </ul>
        </li> */}

        <li className="px-4 py-3 font-bold whitespace-nowrap hover:underline">
          <Link href="#misja">Misja</Link>
        </li>

        <li className="px-4 py-3 font-bold whitespace-nowrap hover:underline">
          <Link href="#o-nas">Plan</Link>
        </li>
        {/* <li className="px-4 py-3 font-bold whitespace-nowrap hover:underline">
          <Link href="/kontakt">Kontakt</Link>
        </li> */}
        {/* <li className="relative font-bold flex cursor-pointer group">
          <span className="px-4 py-3 inline-flex items-center gap-1 group-hover:underline select-none">
            Emocje
            <ChevronFilled className="transition-transform duration-200 origin-center group-hover:rotate-180 group-focus-within:rotate-180" />
          </span>
          <ul className="absolute top-full left-0 mt-0 hidden group-hover:block group-focus-within:block bg-white shadow-lg shadow-gray-300 rounded-md min-w-56 overflow-hidden">
            <li>
              <Link
                className="block p-4 hover:bg-gray-100 max-w-72 whitespace-normal break-words"
                href="#"
                title="Very long link which is very very very long"
              >
                Very long link which is very very very long
              </Link>
            </li>
            <li>
              <Link className="block p-4 hover:bg-gray-100" href="#">
                Item 2
              </Link>
            </li>
            <li>
              <Link className="block p-4 hover:bg-gray-100" href="#">
                Item 3
              </Link>
            </li>
          </ul>
        </li> */}
        <li className="px-4 py-3 font-bold whitespace-nowrap hover:underline">
          <Link href="#baza-wiedzy">Baza wiedzy</Link>
        </li>
        <li>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61575284922514"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="h-7 w-7 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/fundacja_szczesliwsi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="h-7 w-7 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/fundacja-szcz%C4%99%C5%9Bliwsi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="h-7 w-7 rounded-lg hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href=" https://www.tiktok.com/@fundacjaszczesliwsi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="h-7 w-7 rounded-lg hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <TikTok className="w-7 h-7" />
            </a>
          </div>
        </li>

        <li className="px-4 py-3 font-bold whitespace-nowrap">
          <ButtonLink
            color={"orange"}
            variant={"solid"}
            href={"https://www.instagram.com/fundacja_szczesliwsi/"}
            target="_blank"
          >
            Też chcę działać!
          </ButtonLink>
        </li>
      </ul>
    </nav>
  );
}
