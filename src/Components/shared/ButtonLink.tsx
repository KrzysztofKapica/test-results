type Color = "green" | "orange" | "yellow" | "blue" | "purple";
type Variant = "solid" | "outline";

const styles: Record<Color, Record<Variant, string>> = {
  green: {
    solid: "bg-[#198F51] text-white hover:brightness-85",
    outline:
      "border border-[#198F51] text-[#198F51] hover:bg-[#198F51] hover:text-white",
  },
  orange: {
    solid: "bg-[#F65009] text-white hover:bg-[#e64500]",
    outline:
      "border border-[#F65009] text-[#F65009] hover:bg-[#F65009] hover:text-white",
  },
  yellow: {
    solid: "bg-[#F3C11B] text-black hover:brightness-85",
    outline:
      "border border-[#F3C11B] text-[#F3C11B] hover:bg-[#F3C11B] hover:text-black",
  },
  blue: {
    solid: "bg-[#3D38F5] text-white hover:brightness-85",
    outline:
      "border border-[#3D38F5] text-[#3D38F5] hover:bg-[#3D38F5] hover:text-white",
  },
  purple: {
    solid: "bg-[#8A38F5] text-white hover:brightness-85",
    outline:
      "border border-[#8A38F5] text-[#8A38F5] hover:bg-[#8A38F5] hover:text-white",
  },
};

type ButtonLinkProps = {
  className?: string;
  color: Color;
  variant: Variant;
  href: string;
  children: React.ReactNode;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

export default function ButtonLink({
  className = "",
  color,
  variant,
  href,
  children,
  target = "_self",
}: ButtonLinkProps) {
  const base = "block px-4 py-2 rounded-md font-black transition";
  const cv = styles[color][variant];
  return (
    <a
      href={href}
      target={target}
      className={`${base} ${cv} ${className}`}
    >
      {children}
    </a>
  );
}
