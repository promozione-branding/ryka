import Link from "next/link";

export default function Transformation() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-teal-800 to-teal-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-400 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            From Cluttered & Unhygienic to Clean & Contemporary
          </h2>
          <p className="text-teal-100 text-lg leading-relaxed mb-8">
            Say goodbye to outdated restroom spaces marked by rusted hardware,
            poor layouts, and compromised hygiene. As a leading{" "}
            <strong className="text-white">
              toilet cubicle partition supplier
            </strong>{" "}
            and bathroom partition manufacturer, Ryka Restroom Cubicles
            transforms your washrooms into smart, durable, and elegantly
            designed environments.
          </p>
          <p className="text-teal-100 leading-relaxed mb-10">
            Our modular restroom partition systems are crafted for modern
            aesthetics, maximum privacy, and long-lasting performance. Whether
            you&apos;re searching for a toilet cubicle partition near me or need
            a trusted restroom partition distributor, Ryka is your one-stop
            solution — where luxury meets hygiene, effortlessly.
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 bg-white text-teal-900 px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:bg-teal-50 transition-all shadow-lg"
          >
            Get a Free Consultation
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
