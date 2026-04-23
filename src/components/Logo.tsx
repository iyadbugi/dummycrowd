type LogoProps = {
  height?: number;
  className?: string;
};

export default function Logo({ height = 28, className }: LogoProps) {
  const width = (80 / 28) * height;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Slice"
      role="img"
    >
      <text
        x="0"
        y="23.5"
        fontFamily="var(--font-slice-sans), Inter, system-ui, sans-serif"
        fontSize="26"
        fontWeight="600"
        fill="#14120E"
        letterSpacing="-0.03em"
      >
        Slice
      </text>
      <line
        x1="4"
        y1="17"
        x2="11"
        y2="7"
        stroke="#4E6A4F"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
