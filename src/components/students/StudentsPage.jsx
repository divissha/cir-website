export default function StudentsPage() {
  return (
    <section className="section-padding bg-white">

      <div className="mx-auto max-w-[1120px] px-6">

        <div className="mb-14 text-center">

          <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">
            Centre for Intelligent Robotics
          </div>

          <h1 className="font-display text-[44px] font-semibold text-[#0b1736] md:text-[58px]">
            Students
          </h1>

          <p className="mx-auto mt-5 max-w-[700px] text-[15px] leading-7 text-slate-500">
            Information, opportunities and resources for students
            associated with the Centre for Intelligent Robotics.
          </p>

        </div>


        <div className="grid gap-5 md:grid-cols-2">

          <div className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-blue-200 hover:shadow-lg">

            <h2 className="font-display text-[24px] font-semibold text-[#0b1736]">
              Student Opportunities
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Explore research opportunities, internships and
              academic activities available to students.
            </p>

          </div>


          <div className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-blue-200 hover:shadow-lg">

            <h2 className="font-display text-[24px] font-semibold text-[#0b1736]">
              Student Resources
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Access useful academic resources and information
              related to CIR activities.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}