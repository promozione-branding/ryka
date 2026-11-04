const FADE = "linear-gradient(to bottom, #000 55%, transparent 100%)";

export default function FlowerBackdrop({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 top-0 z-0 h-[320px] md:h-[420px] overflow-hidden ${className}`}
    >
      {/* Flower 1 - Far Left */}
      <div
        className="absolute -left-[1%] top-[38px] w-[20%] h-full opacity-90"
        style={{
          backgroundImage: "url('/flower_illustration_.webp')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "top left",
          WebkitMaskImage: FADE,
          maskImage: FADE,
        }}
      />

      {/* Flower 2 - Mid Left */}
      <div
        className="absolute left-[22%] top-[28px] w-[20%] h-full opacity-80"
        style={{
          backgroundImage: "url('/flower_illustration_.webp')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "top center",
          WebkitMaskImage: FADE,
          maskImage: FADE,
        }}
      />

      {/* Flower 3 - Mid Right */}
      <div
        className="absolute left-[62%] top-[28px] w-[20%] h-full opacity-80"
        style={{
          backgroundImage: "url('/flower_illustration_.webp')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "top center",
          WebkitMaskImage: FADE,
          maskImage: FADE,
        }}
      />

      {/* Flower 4 - Far Right */}
      <div
        className="absolute -right-[10%] top-[28px] w-[20%] h-full opacity-90"
        style={{
          backgroundImage: "url('/flower_illustration_.webp')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "top right",
          WebkitMaskImage: FADE,
          maskImage: FADE,
        }}
      />
    </div>
  );
}