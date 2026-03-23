// Divisor SVG em curva entre seções — zero JS, zero runtime cost
interface Props {
  fromColor: string;
  toColor: string;
  flip?: boolean;
}

export default function SectionDivider({ fromColor, toColor, flip = false }: Props) {
  return (
    <div
      className="relative w-full overflow-hidden leading-none -mt-px"
      style={{ backgroundColor: toColor }}
    >
      <svg
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className={`w-full h-12 md:h-16 ${flip ? "scale-x-[-1]" : ""}`}
        style={{ display: "block" }}
      >
        <path
          d="M0,0 C360,60 1080,60 1440,0 L1440,0 L0,0 Z"
          fill={fromColor}
        />
      </svg>
    </div>
  );
}
