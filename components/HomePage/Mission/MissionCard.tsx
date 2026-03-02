import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

const MissionCard = ({
  title,
  summary,
  image,
  bgShapes,
  bgColor,
  shapeMode = "cover",
}: {
  title: string;
  summary: string | React.ReactNode;
  image: string | StaticImport;
  bgShapes:
    | "bubbles"
    | "straight-lines"
    | "messy-lines"
    | "circly-lines"
    | "dots";
  bgColor: "green" | "blue" | "orange" | "yellow" | "purple";
  shapeMode?: "cover" | "contain";
}) => {
  const shapeClass: Record<typeof bgShapes, string> = {
    bubbles: "before:bg-[url('/assets/backgrounds/bubbles.svg')]",
    "straight-lines":
      "before:bg-[url('/assets/backgrounds/straight-lines.svg')]",
    "messy-lines": "before:bg-[url('/assets/backgrounds/messy-lines.svg')]",
    "circly-lines": "before:bg-[url('/assets/backgrounds/circly-lines.svg')]",
    dots: "before:bg-[url('/assets/backgrounds/dots.svg')]",
  };

  const colorClass: Record<typeof bgColor, string> = {
    green: "bg-[#198F51]",
    blue: "bg-[#3D38F5]",
    orange: "bg-[#F65009]",
    yellow: "bg-[#F3C11B]",
    purple: "bg-[#8A38F5]",
  };

  const modeClass: Record<"cover" | "contain", string> = {
    cover: "bg-cover",
    contain: "bg-contain",
  };

  return (
    <div className="w-full h-full max-w-full lg:max-w-[376px] rounded-lg shadow-md bg-white overflow-clip">
      <div
        className={[
          "h-[175px] relative",
          colorClass[bgColor],
          modeClass[shapeMode],
          "before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0",
          "before:bg-repeat before:bg-center",
          shapeClass[bgShapes],
        ].join(" ")}
      />
      <div className="px-6 lg:px-9 py-4">
        <div className="flex align-bottom relative">
          <Image
            src={image}
            height={180}
            width={101}
            alt=""
            className="absolute bottom-0"
          />
          <h3 className="text-xl md:text-2xl font-medium ml-[120px]">
            {title}
          </h3>
        </div>
        <div className="mt-4">{summary}</div>
      </div>
    </div>
  );
};

export { MissionCard };
