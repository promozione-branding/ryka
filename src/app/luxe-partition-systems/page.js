import Link from "next/link";

export const metadata = {
  title: "Luxe Partition Systems | Ryka Restroom Cubicles",
  description:
    "Premium luxury restroom partition systems for hotels, corporate offices and high-end projects.",
};

export default function LuxePage() {
  return (
    <div className="pt-24 pb-20">
      <div className="bg-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Luxe Partition Systems</h1>
          <p className="text-teal-100 max-w-2xl">
            Architect-approved premium cubicles that elevate the restroom
            experience in luxury commercial and residential projects.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-gray-600 leading-relaxed mb-6">
          Our Luxe range features refined finishes, superior materials and
          discreet hardware designed for hotels, premium offices, malls and
          upscale residential developments. Trusted by developers such as M3M
          for projects that demand both aesthetics and performance.
        </p>
        <Link
          href="/contacts"
          className="inline-flex items-center gap-2 bg-teal-700 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-teal-800 transition-colors"
        >
          Request a Quote
        </Link>
      </div>
    </div>
  );
}
