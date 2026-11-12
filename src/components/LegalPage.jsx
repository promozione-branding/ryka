import Link from "next/link";
import { Leaf } from "lucide-react";



export default function LegalPage({ title, lastUpdated, intro, sections }) {
  return (
    <main className="w-full overflow-hidden bg-white text-[#102b55]">

      <section className="relative w-full bg-[#c5c3c3] min-h-[136px] flex items-center justify-center px-5 py-7 overflow-hidden pt-32">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute -top-20 left-10 w-40 h-40 border border-white rounded-full" />
          <div className="absolute -top-16 right-20 w-48 h-48 border border-white rounded-full" />
        </div>

        <div className="relative z-10 text-center">

          <h1 className="text-black text-[38px] sm:text-[50px] md:text-[64px] font-semibold leading-none tracking-tight">
            {title}
          </h1>

          <p className="text-[#171717] text-[13px] sm:text-[14px] md:text-[15px] mt-5 leading-relaxed">
            <Link href="/" className="hover:text-[#2183b7] transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            {title}
            <span className="mx-3">•</span>
            Last updated: {lastUpdated}
          </p>

        </div>
      </section>

      <section className="relative w-full bg-[#f7f7f7] py-14 md:py-16 lg:py-20 px-5 md:px-10">

        <div className="max-w-[1000px] mx-auto">

          <div className="mb-4">
            {intro.map((text, i) => (
              <p
                key={i}
                className="text-[#172b45] text-[14px] sm:text-[15px] leading-[1.95] mb-4"
              >
                {text}
              </p>
            ))}
          </div>

          {/* Sections */}
          {sections.map((section) => (
            <div key={section.heading} className="mt-12">

              <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-normal text-[#222222] leading-tight">
                {section.heading}
              </h2>

              <div className="w-[60px] h-[1px] bg-[#b5a17b] mt-3 mb-5" />

              {section.blocks.map((block, i) => {
                if (block.type === "h3") {
                  return (
                    <h3
                      key={i}
                      className="text-[19px] md:text-[22px] font-semibold text-black mt-7 mb-2"
                    >
                      {block.text}
                    </h3>
                  );
                }

                if (block.type === "ul") {
                  return (
                    <ul key={i} className="mb-5 space-y-3">
                      {block.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-[#172b45] text-[14px] sm:text-[15px] leading-[1.9]"
                        >
                          <Leaf
                            size={14}
                            strokeWidth={1.5}
                            className="shrink-0 mt-[7px] text-[#2183b7]"
                          />
                          <span>
                            {typeof item === "string" ? (
                              item
                            ) : (
                              <>
                                <strong className="text-[#222222]">
                                  {item.term}
                                </strong>{" "}
                                {item.text}
                              </>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p
                    key={i}
                    className="text-[#172b45] text-[14px] sm:text-[15px] leading-[1.95] mb-4"
                  >
                    {block.text}
                  </p>
                );
              })}

            </div>
          ))}

        </div>
      </section>

      {/* ================= CONTACT BAND ================= */}
      <section className="w-full bg-[#1684b5] px-5 py-10 md:py-12">

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-white text-[30px] sm:text-[38px] md:text-[46px] font-semibold leading-tight tracking-[-1px] mb-4">
            Have Questions?
          </h2>

          <p className="text-white text-[14px] sm:text-[15px] leading-[1.9]">
            Email us at{" "}
            <a
              href="mailto:rykarestroomcubicle@gmail.com"
              className="underline hover:text-white/80"
            >
              rykarestroomcubicle@gmail.com
            </a>
          </p>

          <p className="text-white/90 text-[13px] sm:text-[14px] leading-[1.9] mt-2">
            H-3/216, 2nd Floor, Vardhman Plaza Tower, Netaji Subhash Place,
            Pitampura, New Delhi
          </p>

        </div>
      </section>

    </main>
  );
}