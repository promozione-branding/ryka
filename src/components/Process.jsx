import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Site Assessment & Planning",
    desc: "We start with a detailed site visit to understand your space, design needs, and timeline. This step helps us plan your toilet cubicle partition setup perfectly.",
  },
  {
    num: "02",
    title: "Design & Material Finalization",
    desc: "As expert restroom partition manufacturers, we design layouts that fit your space and style. We help you choose the right materials for strong, long-lasting results.",
  },
  {
    num: "03",
    title: "Manufacturing & Quality Control",
    desc: "We manufacture every toilet cubicle partition using modern machines and follow strict quality checks to ensure durability, precision, and consistency.",
  },
  {
    num: "04",
    title: "Installation & Handover",
    desc: "Our team ensures smooth on-site installation of your partitions, followed by a final check to guarantee complete satisfaction.",
  },
];

export default function Process() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-teal-700 font-semibold tracking-widest text-sm uppercase mb-3">
            Our Approach
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Designing Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Ryka Restroom Cubicles, we make restroom design easy. We handle
            everything from planning to installation using quality materials.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl font-bold text-teal-100 mb-4">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 bg-teal-700 text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:bg-teal-800 transition-all shadow-lg"
          >
            Contact Now
          </Link>
        </div>
      </div>
    </section>
  );
}
