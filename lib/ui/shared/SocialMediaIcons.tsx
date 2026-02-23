import { Facebook, Instagram, Linkedin } from "@/public/icons";
import { TikTok } from "@/public/icons/TikTok";

const data = [
  {
    name: "Facebook",
    icon: <Facebook className="w-8 h-8" />,
    url: "https://facebook.com",
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-8 h-8" />,
    url: "https://instagram.com",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-8 h-8" />,
    url: "https://linkedin.com",
  },
  {
    name: "TikTok",
    icon: <TikTok className="w-8 h-8" />,
    url: "https://linkedin.com",
  },
];

const SocialMediaIcons = ({
  height,
  width,
}: {
  height: number;
  width: number;
}) => {
  return (
    <div className="flex gap-4">
      {data.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.name}
          className={`h-${height} w-${width} rounded-lg hover:bg-gray-50 flex items-center justify-center transition-colors`}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export { SocialMediaIcons };
