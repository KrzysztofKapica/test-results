import Link from "next/link";
import { navigationItems } from "./navigation.data";

type Props = {
  onClick?: () => void;
  type: "desktop" | "mobile";
};

const NavigationItems = ({ onClick, type }: Props) => {
  return (
    <>
      {navigationItems.map((item) => (
        <li
          key={item.id}
          className={`${type === "mobile" && "border-b border-gray-200"} mb-0`}
        >
          <Link
            href={item.id}
            className={`block px-7 py-4 font-semibold rounded-lg ${
              type === "mobile" ? "hover:bg-gray-50 text-xl" : "hover:underline"
            }`}
            onClick={onClick}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </>
  );
};

export { NavigationItems };
