
"use client";

const products = [
  {
    name: "Floatex",
    image: "/product/imgi_7_Swing-Lite-4.webp",
    href: "/public-restroom-partitions/floatex",
  },
  {
    name: "Sky Hung",
    image: "/product/imgi_8_top-hung-2.webp",
    href: "/public-restroom-partitions/sky-hung",
    featured: true,
  },
  {
    name: "Nexus Evo",
    image: "/product/imgi_9_Nexus-Evos.webp",
    href: "/public-restroom-partitions/nexus-evo",
  },
  {
    name: "Nexus Canvas",
    image: "/product/imgi_10_Nexus-Canvas-1.webp",
    href: "/public-restroom-partitions/nexus-canvas",
  },
  {
    name: "Nexus Grand",
    image: "/product/imgi_11_Nexus-Grand-2.webp",
    href: "/public-restroom-partitions/nexus-grand",
  },
  {
    name: "Carlton Prime",
    image: "/product/imgi_12_Carlton-Prime-1.webp",
    href: "/public-restroom-partitions/carlton-prime",
  },
  {
    name: "Carlton Pristine",
    image: "/product/imgi_13_Carlton-Pristine-2.webp",
    href: "/public-restroom-partitions/carlton-pristine",
  },
];

export default function PublicRestroomProducts() {
  return (
    <section className="relative w-full bg-[#cad6c1] overflow-hidden py-12 md:py-28">

      <div className="max-w-[1350px] mx-auto px-5 md:px-8">

        {/* Heading */}
        <div className="text-center mb-3 md:mb-8">

          <h2 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[68px] font-semibold text-black leading-[1.05] tracking-[-2px]">
            Public Restroom Partitions
          </h2>

          <p className="text-[13px] md:text-[15px] text-[#242424] mt-4 max-w-[1000px] mx-auto leading-6">
            From commercial buildings to public facilities, our restroom
            partition systems offer modern design, easy maintenance,
            and robust functionality.
          </p>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[14px] gap-y-8 md:gap-y-6">

          {products.map((product, index) => (
            <a
              href={product.href}
              key={product.name}
              className={`group block min-w-0 ${
                product.featured
                  ? "lg:-mt-[10px] lg:mb-[10px]"
                  : ""
              }`}
            >

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
                  alt={`${product.name} Public Restroom Partitions`}
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
          ))}

        </div>

      </div>

    </section>
  );
}
