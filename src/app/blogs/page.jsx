import BlogPage from "@/components/BlogPage"


export const revalidate = 60

export default function Blogs() {
  return (
    <main className="w-full overflow-hidden bg-white text-[#102b55]">

      <section className="relative w-full bg-[#c5c3c3] min-h-[136px] flex items-center justify-center px-5 py-7 overflow-hidden pt-30">

        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute -top-20 left-10 w-40 h-40 border border-white rounded-full" />
          <div className="absolute -top-16 right-20 w-48 h-48 border border-white rounded-full" />
        </div>

        <div className="relative z-10 text-center">

          <h1 className="text-black text-[42px] sm:text-[55px] md:text-[72px] font-semibold leading-none tracking-tight">
            Blogs
          </h1>

          <p className="text-[#171717] text-[13px] sm:text-[14px] md:text-[15px] mt-5 leading-relaxed">
            Insights on toilet cubicle partitions, washroom design and
            restroom solutions from Ryka.
          </p>

        </div>
      </section>

      <BlogPage />
    </main>
  )
}