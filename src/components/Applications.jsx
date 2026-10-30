const applications = [
  { name: "Hospitals", icon: "🏥" },
  { name: "Restaurants", icon: "🍽️" },
  { name: "Office Partition", icon: "🏢" },
  { name: "Schools & Universities", icon: "🎓" },
  { name: "Parks", icon: "🌳" },
  { name: "Fitness Centers", icon: "💪" },
  { name: "Hotels", icon: "🏨" },
  { name: "Retirement Homes", icon: "🏡" },
  { name: "Industrial Areas", icon: "🏭" },
  { name: "Airports", icon: "✈️" },
  { name: "Offices", icon: "💼" },
  { name: "Cinemas", icon: "🎬" },
];

export default function Applications() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-teal-700 font-semibold tracking-widest text-sm uppercase mb-3">
            Applications
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Cubicle Stall Applications
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From high-traffic public spaces to luxury private facilities, our
            solutions adapt to every environment.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {applications.map((app, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-teal-50 hover:shadow-md transition-all cursor-default border border-transparent hover:border-teal-100"
            >
              <span className="text-3xl mb-3">{app.icon}</span>
              <span className="text-sm font-medium text-gray-800 text-center">
                {app.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
