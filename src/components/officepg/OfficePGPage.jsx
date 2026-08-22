import {
  ArrowRight,
  BookOpen,
  FileText,
  GraduationCap,
  Library,
  ScrollText,
} from "lucide-react";


/* =========================================================
   PAGE DATA
========================================================= */

const sections = [
  {
    title: "Postgraduate Programs",
    description:
      "Academic information and program details for postgraduate students and researchers associated with CIR.",
    icon: GraduationCap,
  },

  {
    title: "Academic Guidelines",
    description:
      "Important academic guidelines, regulations and procedures relevant to postgraduate students.",
    icon: BookOpen,
  },

  {
    title: "Coursework",
    description:
      "Information about coursework, academic requirements, credits and postgraduate course structure.",
    icon: Library,
  },

  {
    title: "Thesis & Dissertation",
    description:
      "Guidelines and important information related to research work, thesis preparation and dissertation submission.",
    icon: ScrollText,
  },

  {
    title: "Forms & Documents",
    description:
      "Access important forms, academic documents and resources required during the postgraduate program.",
    icon: FileText,
  },
];


/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({ children }) {
  return (
    <div className="mb-8 flex items-center gap-4">

      <div className="h-px flex-1 bg-slate-100" />

      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
        {children}
      </span>

      <div className="h-px flex-1 bg-slate-100" />

    </div>
  );
}


/* =========================================================
   INFORMATION ITEM
========================================================= */

function AcademicItem({
  number,
  title,
  description,
}) {

  return (
    <article className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white px-6 py-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_14px_35px_rgba(15,76,180,0.07)] md:px-8 md:py-7">

      {/* Blue accent line */}

      <div className="absolute left-0 top-0 h-full w-[3px] bg-blue-600 transition-all duration-300 group-hover:w-[5px]" />


      <div className="flex gap-5 md:gap-7">

        {/* Number */}

        <div className="shrink-0 pt-1">

          <span className="font-display text-[24px] font-semibold text-blue-600">
            {String(number).padStart(2, "0")}
          </span>

        </div>


        {/* Content */}

        <div className="flex-1">

          <h3 className="font-display text-[21px] font-semibold text-[#0b1736] md:text-[24px]">
            {title}
          </h3>

          <p className="mt-3 max-w-[850px] text-[14px] leading-7 text-slate-500">
            {description}
          </p>


          <button
            type="button"
            className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-blue-800 transition hover:text-blue-600"
          >

            View Information

            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </button>

        </div>

      </div>

    </article>
  );
}


/* =========================================================
   PAGE
========================================================= */

export default function OfficePGPage() {

  return (

    <section className="section-padding relative overflow-hidden bg-white">


      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute right-[-120px] top-[-100px] h-[400px] w-[400px] rounded-full bg-blue-50/50 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[15%] left-[-150px] h-[350px] w-[350px] rounded-full bg-slate-50 blur-3xl" />


      <div className="relative mx-auto max-w-[1120px] px-6">


        {/* =================================================
            HERO
        ================================================= */}

        <div className="mb-14 text-center">


          {/* Label */}

          <div className="mb-5 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-800">

            <span className="h-2 w-2 rounded-full bg-blue-600" />

            Centre for Intelligent Robotics

          </div>


          {/* Heading */}

          <h1 className="font-display text-[44px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0b1736] md:text-[58px]">

            Office of{" "}

            <span className="text-blue-800">
              PG
            </span>

          </h1>


          {/* Description */}

          <p className="mx-auto mt-5 max-w-[700px] text-[15px] leading-7 text-slate-500">

            Academic information, postgraduate programs and
            resources for students pursuing advanced study and
            research at the Centre for Intelligent Robotics.

          </p>

        </div>


        {/* =================================================
            CATEGORY BUTTONS
        ================================================= */}

        <div className="mb-16 flex flex-wrap justify-center gap-3">

          {sections.map((section, index) => {

            const Icon = section.icon;

            return (

              <button
                key={section.title}
                type="button"
                className={`group flex items-center gap-2 rounded-full border px-5 py-3 text-[13px] font-medium transition-all duration-300 ${
                  index === 0
                    ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-500/15"
                    : "border-blue-100 bg-white text-[#17213b] hover:border-blue-400 hover:text-blue-600"
                }`}
              >

                <Icon
                  size={16}
                  strokeWidth={1.8}
                />

                {section.title}

              </button>

            );

          })}

        </div>


        {/* =================================================
            PG INFORMATION
        ================================================= */}

        <div>

          <SectionHeading>
            Postgraduate Academic Information
          </SectionHeading>


          <div className="flex flex-col gap-5">

            {sections.map((section, index) => (

              <AcademicItem
                key={section.title}
                number={index + 1}
                title={section.title}
                description={section.description}
              />

            ))}

          </div>

        </div>


        {/* =================================================
            IMPORTANT INFORMATION
        ================================================= */}

        <div className="mt-14 rounded-2xl border border-blue-100 bg-blue-50/40 p-7 md:p-9">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600">
                Postgraduate Office
              </div>

              <h2 className="mt-2 font-display text-[25px] font-semibold text-[#0b1736]">
                Academic Resources & Support
              </h2>

              <p className="mt-2 max-w-[650px] text-sm leading-6 text-slate-500">
                Find important academic information, documents and
                resources related to postgraduate study and research.
              </p>

            </div>


            <button
              type="button"
              className="flex w-fit shrink-0 items-center gap-2 rounded-lg border border-blue-200 bg-white px-5 py-3 text-[13px] font-semibold text-blue-600 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
            >

              View Resources

              <ArrowRight size={16} />

            </button>

          </div>

        </div>


      </div>

    </section>

  );
}