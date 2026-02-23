import logo from "@/public/assets/global/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { SocialMediaIcons } from "../lib/ui/shared/SocialMediaIcons";
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
          <SocialMediaIcons height={10} width={10} />

          <div className="mt-auto">
            &copy; {new Date().getFullYear()} Made with happiness by <br />
            Fundacja Szczęśliwsi
          </div>
        </div>
      </div>
    </footer>
  );
}
