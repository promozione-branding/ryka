"use client";

import FlowerBackdrop from "@/components/FlowerBackdrop";
import {
  FadeInUp,
  Stagger,
  StaggerItem,
} from "@/components/MotionWrappers";

const products = [
  {
    name: "Miniput",
    image: "/product/imgi_16_kids-cubicles.webp",
    href: "/kids-restrooms-partitions/miniput",
  },
  {
    name: "Lil-Waves",
    image: "/product/imgi_17_petar-pan.webp",
    href: "/kids-restrooms-partitions/lil-waves",
    featured: true,
  },
  {
    name: "Lil-Shine",
    image: "/product/imgi_18_Lil-Shine.webp",
    href: "/kids-restrooms-partitions/lil-shine",
  },
  {
    name: "Aero Kids",
    image: "/product/aero-kids.webp",
    href: "/kids-restrooms-partitions/aero-kids",
  },
  {
    name: "Half Round",
    image: "/product/imgi_20_Hansel-Gretel.webp",
    href: "/kids-restrooms-partitions/half-round",
  },
  {
    name: "Slice Cut",
    image: "/product/imgi_21_Slice-Cut-2.webp",
    href: "/kids-restrooms-partitions/slice-cut",
  },
  {
    name: "Straight",
    image: "/product/straight.webp",
    href: "/kids-restrooms-partitions/straight",
  },
];

export default function KidsRestroomProducts() {
  return (
    <section className="relative w-full bg-[#cad6c1] overflow-hidden py-12 md:py-28">
      <FlowerBackdrop />

      <div className="relative z-10 max-w-[1350px] mx-auto py-6 px-5 md:px-8 py-20">
        {/* Heading */}
        <FadeInUp className="text-center mb-3 md:mb-8">
          <h2 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[68px] font-semibold text-black leading-[1.05] tracking-[-2px]">
            Kids Restroom Partitions
          </h2>

          <p className="text-[13px] md:text-[15px] text-[#242424] mt-4 max-w-[1000px] mx-auto leading-6">
            Our kids restroom partitions combine fun colors, low-height
            panels, and smooth edges to ensure safety and comfort for
            young users.
          </p>
        </FadeInUp>

        {/* Product Grid */}
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[14px] gap-y-8 md:gap-y-6">
          {products.map((product, index) => (
            <StaggerItem
              key={product.name}
              custom={index}
              className={product.featured ? "lg:-mt-[10px] lg:mb-[10px]" : ""}
            >
              <a href={product.href} className="group block min-w-0">
                {/* Product Image */}
                <div
                  className={`relative w-full overflow-hidden rounded-[6px] bg-[#e2e4df] ${
                    product.featured
                      ? "h-[215px] md:h-[233px] lg:h-[233px]"
                      : "h-[200px] md:h-[215px]"
                  }`}
                >
                  <img
                    src={product.image}
                    alt={`${product.name} Kids Restroom Partitions`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                </div>

                {/* Product Name */}
                <div className="text-center pt-4 md:pt-5">
                  <h3 className="text-[17px] md:text-[19px] font-medium text-black group-hover:text-[#755d24] transition-colors duration-300">
                    {product.name}
                  </h3>
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}