const products = [
  {
    title: "Toilet Cubicles",
    desc: "Custom-built toilet cubicles in a variety of colors, finishes, and materials — from sleek modern panels to traditional textures — ensuring durability and low maintenance.",
  },
  {
    title: "Toilet Partitions",
    desc: "Designed for privacy and comfort, ideal for commercial, public, or institutional use. Choose from a wide array of layouts and configurations.",
  },
  {
    title: "Urinal Partitions",
    desc: "Ensure hygiene and privacy in shared washroom spaces. Made from water-resistant, easy-to-clean materials for high-traffic areas.",
  },
  {
    title: "Restroom Partitions",
    desc: "Premium partitions that provide excellent privacy, easy maintenance, and a clean appearance for modern commercial and public restrooms.",
  },
];

export default function Products() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-teal-700 font-semibold tracking-widest text-sm uppercase mb-3">
            Complete Solutions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Toilet Cubicle Accessories & Hardware
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Ryka Restroom Cubicles, we offer more than just premium cubicles.
            We provide a complete range of washroom accessories and partition
            hardware.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-lg flex items-center justify-center mb-4 font-bold text-lg">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
