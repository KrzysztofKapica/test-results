import logo from "@/public/assets/global/logo.svg";
import { Facebook, Instagram, Linkedin } from "@/public/icons";
import { TikTok } from "@/public/icons/TikTok";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-[url('@/public/assets/backgrounds/footer-bg.svg')] bg-cover bg-no-repeat py-20 px-4">
      <div className="container mx-auto py-12 bg-white flex flex-col md:flex-row justify-between gap-4 ">
        <div className="flex flex-col">
          <div className="mb-6">
            <Image
              src={logo}
              alt="Logo"
              width={484}
              height={197}
              className="left-[-38px] relative max-w-[242px] lg:max-w-[484px]"
            />
          </div>
          {/* <div className="text-2xl font-medium ">
            <span className="block">Napisz do nas:</span>
            <a
              className="hover:underline"
              href="mailto:kontakt@szczęśliwsi.pl"
            >
              kontakt@szczęśliwsi.pl
            </a>
          </div> */}
          {/* <div className="hidden md:flex gap-8 mt-auto">
            <Link
              className="font-medium text-sm hover:underline"
              href={"/"}
            >
              Polityka prywatności
            </Link>
            <Link
              className="font-medium text-sm hover:underline"
              href={"/"}
            >
              Regulamin
            </Link>
          </div> */}
        </div>
        <div className="flex flex-col gap-8 pr-10">
          <nav>
            <ul className="flex flex-col gap-4">
              <li className="font-medium text-xl md:text-[28px] hover:underline">
                <Link href="#misja">Misja</Link>
              </li>
              <li className="font-medium text-xl md:text-[28px] hover:underline">
                <Link href="#baza-wiedzy">Baza wiedzy</Link>
              </li>
            </ul>
          </nav>
          <div className="flex gap-4 mt-4">
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
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="h-10 w-10 rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors"
            >
              <TikTok className="w-10 h-10" />
            </a>
          </div>
          {/* <div className="md:hidden flex gap-8 mt-auto">
            <Link
              className="font-medium text-sm hover:underline"
              href={"/"}
            >
              Polityka prywatności
            </Link>
            <Link
              className="font-medium text-sm hover:underline"
              href={"/"}
            >
              Regulamin
            </Link>
          </div> */}
          <div className="mt-auto">
            &copy; {new Date().getFullYear()} Made with happiness by{" "}
            <br />
            Fundacja Szczęśliwsi
          </div>
        </div>
      </div>
    </footer>
  );
}
