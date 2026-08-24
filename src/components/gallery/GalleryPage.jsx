export default function GalleryPage() {
  return (
    <section className="section-padding bg-white">

      <div className="mx-auto max-w-[1120px] px-6">

        <div className="mb-14 text-center">

          <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
            Centre for Intelligent Robotics
          </div>

          <h1 className="font-display text-[44px] font-semibold text-[#0b1736] md:text-[58px]">
            Gallery
          </h1>

          <p className="mx-auto mt-5 max-w-[700px] text-[15px] leading-7 text-slate-500">
            Explore events, workshops, research activities and
            other activities at CIR.
          </p>

        </div>


        {/* Gallery placeholder */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">

          {[1, 2, 3, 4, 5, 6].map((item) => (

            <div
              key={item}
              className="flex h-[240px] items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
            >

              <span className="text-sm text-slate-400">
                Gallery Image {item}
              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}