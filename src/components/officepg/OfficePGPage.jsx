import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  FileText,
  GraduationCap,
  Library,
  ScrollText,
} from "lucide-react";


/* =========================================================
   OFFICE OF PG DATA
========================================================= */

const pgSections = {
  "Postgraduate Programs": {
    icon: GraduationCap,

    cards: [
      {
        number: "1",
        title: "M.Tech Programs",
        description:
          "Information about postgraduate engineering programs, eligibility requirements, admission procedures and academic structure.",
      },

      {
        number: "2",
        title: "M.S. by Research",
        description:
          "Research-oriented postgraduate programs focused on advanced study, independent research and development in intelligent systems.",
      },

      {
        number: "3",
        title: "Ph.D. Programs",
        description:
          "Information regarding doctoral research, eligibility, admission, coursework and research requirements.",
      },

      {
        number: "4",
        title: "Research Areas",
        description:
          "Explore the major research areas available to postgraduate students at the Centre for Intelligent Robotics.",
      },
    ],
  },


  "Academic Guidelines": {
    icon: BookOpen,

    cards: [
      {
        number: "1",
        title: "Academic Regulations",
        description:
          "Important academic regulations and requirements that postgraduate students must follow during their program.",
      },

      {
        number: "2",
        title: "Attendance Requirements",
        description:
          "Guidelines related to attendance, academic participation and requirements for postgraduate coursework.",
      },

      {
        number: "3",
        title: "Academic Performance",
        description:
          "Information regarding grading, academic performance, evaluation and other academic requirements.",
      },

      {
        number: "4",
        title: "Program Requirements",
        description:
          "Important requirements that students need to complete during their postgraduate program.",
      },
    ],
  },


  "Coursework": {
    icon: Library,

    cards: [
      {
        number: "1",
        title: "Course Registration",
        description:
          "Information about registering for postgraduate courses, selecting subjects and completing academic registration.",
      },

      {
        number: "2",
        title: "Course Structure",
        description:
          "Overview of coursework requirements, credits, core subjects and elective courses for postgraduate students.",
      },

      {
        number: "3",
        title: "Elective Courses",
        description:
          "Explore elective coursework relevant to robotics, artificial intelligence, computer vision and intelligent systems.",
      },

      {
        number: "4",
        title: "Course Evaluation",
        description:
          "Information regarding examinations, assignments, evaluation procedures and academic assessment.",
      },
    ],
  },


  "Thesis & Dissertation": {
    icon: ScrollText,

    cards: [
      {
        number: "1",
        title: "Research Proposal",
        description:
          "Guidelines for preparing and submitting a research proposal for postgraduate research work.",
      },

      {
        number: "2",
        title: "Thesis Guidelines",
        description:
          "Important guidelines related to thesis preparation, structure, formatting and submission.",
      },

      {
        number: "3",
        title: "Thesis Evaluation",
        description:
          "Information regarding thesis evaluation, review procedures, presentations and assessment.",
      },

      {
        number: "",
        title: "Dissertation Submission",
        description:
          "Requirements and procedures for completing and submitting the final dissertation or thesis.",
      },
    ],
  },


  "Forms & Documents": {
    icon: FileText,

    cards: [
      {
        number: "1",
        title: "Academic Forms",
        description:
          "Access commonly required forms related to postgraduate academic activities and administration.",
      },

      {
        number: "2",
        title: "Research Forms",
        description:
          "Forms and documents required for research activities, project work and postgraduate research.",
      },

      {
        number: "3",
        title: "Thesis Forms",
        description:
          "Documents related to thesis submission, evaluation, approval and completion of postgraduate research.",
      },

      {
        number: "4",
        title: "Important Documents",
        description:
          "A collection of important academic documents and resources for postgraduate students.",
      },
    ],
  },
};


/* =========================================================
   ACADEMIC CARD
========================================================= */

function AcademicCard({ card }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_15px_40px_rgba(15,76,180,0.08)] md:px-9 md:py-3">

      {/* Blue accent */}

      <div className="absolute left-0 top-0 h-full w-[3px] bg-blue-800 transition-all duration-300 group-hover:w-[5px]" />


      <div className="flex gap-5 md:gap-7">

        {/* Number */}

        <div className="shrink-0">

          <span className="font-display text-[24px] font-semibold text-blue-800">
            {card.number}
          </span>

        </div>


        {/* Content */}

        <div className="flex-1">

          <h3 className="font-display text-[21px] font-semibold text-[#0b1736] md:text-[24px]">
            {card.title}
          </h3>


          <p className="mt-3 max-w-[850px] text-[14px] leading-7 text-slate-500">
            {card.description}
          </p>


          <button
            type="button"
            className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-blue-700 transition hover:text-blue-900"
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
   SECTION HEADING
========================================================= */

function SectionHeading({ children }) {
  return (
    <div className="mb-0 flex items-center gap-4">

      {/* <div className="h-px flex-1 bg-slate-100" />

      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
        {children}
      </span>

      <div className="h-px flex-1 bg-slate-100" /> */}

    </div>
  );
}


/* =========================================================
   OFFICE OF PG PAGE
========================================================= */

export default function OfficePGPage() {

  const [activeSection, setActiveSection] = useState(
    "Postgraduate Programs"
  );


  const activeData = pgSections[activeSection];

  const ActiveIcon = activeData.icon;


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

        <div className="mb-5 text-center">

          <div className="mb-3 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-800">

            <span className="h-2 w-2 rounded-full bg-blue-800" />

            Centre for Intelligent Robotics

          </div>


          <h1 className="font-display text-[44px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0b1736] md:text-[58px]">

            Office of{" "}

            <span className="text-blue-800">
              PG
            </span>

          </h1>


          <p className="mx-auto mt-3 max-w-[700px] text-[15px] leading-7 text-slate-500">

            Academic information, postgraduate programs and
            resources for students pursuing advanced study and
            research at the Centre for Intelligent Robotics.

          </p>

        </div>


        {/* =================================================
            CATEGORY BUTTONS
        ================================================= */}

        <div className="mb-7 flex flex-wrap justify-center gap-3">

          {Object.entries(pgSections).map(
            ([sectionName, section]) => {

              const Icon = section.icon;

              const isActive =
                activeSection === sectionName;


              return (

                <button
                  key={sectionName}
                  type="button"
                  onClick={() => setActiveSection(sectionName)}
                  className={`group flex items-center gap-2 rounded-full border px-5 py-3 text-[13px] font-medium transition-all duration-300 ${
                    isActive
                      ? "border-blue-800 bg-blue-800 text-white shadow-lg shadow-blue-500/15"
                      : "border-blue-100 bg-white text-[#17213b] hover:border-blue-800 hover:text-blue-800"
                  }`}
                >

                  <Icon
                    size={16}
                    strokeWidth={1.8}
                  />

                  {sectionName}

                </button>

              );

            }
          )}

        </div>


        {/* =================================================
            ACTIVE SECTION
        ================================================= */}

        <div>

          <SectionHeading>
            {activeSection}
          </SectionHeading>


          {/* Active category title */}

          

            {/* <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-800">

              <ActiveIcon
                size={23}
                strokeWidth={1.7}
              />

            </div>


            <div>

              <h2 className="font-display text-[26px] font-semibold text-[#0b1736]">
                {activeSection}
              </h2>

              <p className="mt-1 text-[13px] text-slate-400">
                Academic information and resources
              </p>

            </div> */}

          


          {/* Cards */}

          <div className="flex flex-col gap-3">

            {activeData.cards.map((card) => (

              <AcademicCard
                key={card.number}
                card={card}
              />

            ))}

          </div>

        </div>


        {/* =================================================
            BOTTOM INFORMATION
        ================================================= */}

        <div className="mt-14 rounded-2xl border border-blue-100 bg-blue-50/40 p-7 md:p-9">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
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