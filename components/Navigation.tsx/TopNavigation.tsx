import ButtonLink from "@/lib/ui/shared/ButtonLink";
import { SocialMediaIcons } from "@/lib/ui/shared/SocialMediaIcons";
import { NavigationItems } from "./NavigationItems";

export function TopNavigation() {
  return (
    <nav>
      <ul className="flex items-center">
        <NavigationItems type="desktop" />
        <li>
          <SocialMediaIcons width={5} height={5} />
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
