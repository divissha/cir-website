import { useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  FolderKanban,
  Cpu,
  GraduationCap,
  Users,
  Globe2,
  Lightbulb,
  Building2,
} from "lucide-react";

const projects = [
  {
    category: "Externally Funded",
    title: "Indo-European Union (EU) Project",
    description:
      "A joint collaborative project involving IIIT Allahabad, IIIT Delhi, IIIT Hyderabad and international academic and industry partners.",
    meta: "Indo-European Collaborative Project",
  },
  {
    category: "Externally Funded",
    title: "DAAD-DST Indo-German Grant Project",
    description:
      "A collaborative Indo-German research initiative undertaken alongside Bielefeld University.",
    meta: "DAAD-DST • Indo-German Collaboration",
  },
  {
    category: "Externally Funded",
    title: "NSF-IHFC Project",
    description:
      "A collaborative research project involving the University of Illinois Urbana-Champaign, IHFC, IIT Delhi and DST.",
    meta: "NSF-IHFC • Collaborative Research",
  },
  {
    category: "Research Project",
    title: "Human Robot Interactions via Emotions",
    description:
      "Human-robot interaction research using optimized deep learning techniques for understanding emotional interaction.",
    meta: "Artificial Intelligence • HRI",
  },
  {
    category: "Research Project",
    title: "Smart Home Devices with Household Robots",
    description:
      "Research on the integration of smart home devices with household robotic systems.",
    meta: "Robotics • Smart Systems",
  },
  {
    category: "Research Project",
    title: "Intelligent Object Manipulation",
    description:
      "Intelligent object manipulation and robotic grasping using reinforcement learning techniques.",
    meta: "Robotics • Reinforcement Learning",
  },
];

const irasHighlights = [
  {
    icon: Cpu,
    number: "3",
    title: "RAS Hubs",
    text: "Three Robotics and Autonomous Systems hubs established at Indian higher education institutions.",
  },
  {
    icon: GraduationCap,
    number: "22",
    title: "Faculty Trained",
    text: "Faculty members from Indian HEIs trained in Robotics and Autonomous Systems.",
  },
  {
    icon: Users,
    number: "220",
    title: "Students",
    text: "Senior undergraduate and postgraduate students targeted through modernized robotics courses.",
  },
  {
    icon: Building2,
    number: "3",
    title: "Pilot Projects",
    text: "Industry-driven robotics and autonomous systems pilot projects developed in India.",
  },
];

const irasPartners = [
  "IIIT Delhi",
  "IIIT Hyderabad",
  "IIIT Allahabad",
  "University of Genoa",
  "Warsaw University of Technology",
  "Universitat Rovira i Virgili",
  "Technical University of Crete",
  "Creative Thinking Development",
  "Guru Gobind Singh Indraprastha University",
  "Addverb Technologies",
];

function ProjectCard({ project }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,76,180,0.08)]">

      <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-blue-50/70 transition-transform duration-500 group-hover:scale-110" />

      <div className="relative z-10">

        <div className="mb-5 flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-800">
            <FolderKanban size={21} strokeWidth={1.5} />
          </div>

          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-blue-800">
            {project.category}
          </span>
        </div>

        <h3 className="font-display text-[22px] font-semibold leading-tight text-[#0b1736]">
          {project.title}
        </h3>

        <p className="mt-4 text-[14px] leading-7 text-slate-500">
          {project.description}
        </p>

        <div className="mt-5 border-t border-slate-100 pt-4 text-[12px] font-medium text-slate-400">
          {project.meta}
        </div>

      </div>
    </article>
  );
}

function IRASHub() {
  return (
    <div>

      {/* IRAS HERO */}
      <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-blue-50/50 p-8 md:p-12">

        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">

          <div>

            <div className="mb-4 flex items-center gap-3">
              <span className="h-[1px] w-10 bg-blue-800" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-800">
                International Robotics Initiative
              </span>
            </div>

            <h2 className="font-display text-[34px] font-semibold leading-tight text-[#0b1736] md:text-[44px]">
              Capacity Building in Robotics &
              <span className="text-blue-800">
                {" "}Autonomous Systems in India
              </span>
            </h2>

            <p className="mt-4 text-[15px] leading-8 text-slate-600">
              IRAS-HUB is an international collaborative project focused on
              strengthening education, research, training and innovation in
              Robotics and Autonomous Systems in India.
            </p>

            <p className="mt-4 text-[15px] leading-8 text-slate-600">
              The initiative connects Indian higher education institutions
              with European universities and industry partners to build
              robotics expertise, modernize courses and develop
              industry-oriented robotics projects.
            </p>

            <a
              href="https://iiitd.ac.in/iras-hub/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-[13px] font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700"
            >
              Visit IRAS-HUB Portal
              <ExternalLink size={15} />
            </a>

          </div>


          {/* PROJECT BADGE */}
          <div className="relative flex justify-center">

            <div className="flex h-[230px] w-[230px] flex-col items-center justify-center rounded-full border border-blue-200 bg-white shadow-[0_20px_60px_rgba(15,76,180,0.10)]">

              <Cpu
                size={52}
                strokeWidth={1.2}
                className="text-blue-800"
              />

              <p className="mt-5 text-[26px] font-bold tracking-tight text-[#0b1736]">
                IRAS
              </p>

              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-800">
                HUB
              </p>

              <div className="mt-4 h-[1px] w-12 bg-blue-200" />

              <p className="mt-3 text-[11px] text-slate-400">
                Robotics & Autonomous Systems
              </p>

            </div>

          </div>

        </div>
      </div>


      {/* HIGHLIGHTS */}
      <section className="mt-12">

        <div className="mb-7">

          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-800">
            Project Highlights
          </p>

          <h3 className="mt-2 font-display text-[28px] font-semibold text-[#0b1736]">
            Building Robotics Capacity
          </h3>

        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {irasHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-[0_15px_35px_rgba(15,76,180,0.07)]"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-800">
                  <Icon size={21} strokeWidth={1.5} />
                </div>

                <div className="mt-5 text-[30px] font-semibold text-blue-800">
                  {item.number}
                </div>

                <h4 className="mt-1 text-[16px] font-semibold text-[#0b1736]">
                  {item.title}
                </h4>

                <p className="mt-3 text-[13px] leading-6 text-slate-500">
                  {item.text}
                </p>

              </div>
            );
          })}

        </div>

      </section>


      {/* OBJECTIVES */}
      <section className="mt-14">

        <div className="grid gap-5 md:grid-cols-2">

          <div className="rounded-2xl border border-slate-200 bg-white p-7">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-800">
              <Lightbulb size={21} strokeWidth={1.5} />
            </div>

            <h3 className="mt-5 font-display text-[24px] font-semibold text-[#0b1736]">
              Project Objectives
            </h3>

            <ul className="mt-5 space-y-4 text-[14px] leading-6 text-slate-500">

              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-800" />
                Develop highly skilled human resources in Robotics and Autonomous Systems.
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-800" />
                Promote basic and applied robotics research.
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-800" />
                Develop robotics technologies for sectors such as agriculture and transportation.
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-800" />
                Encourage innovation, start-ups and entrepreneurship in robotics.
              </li>

            </ul>

          </div>


          <div className="rounded-2xl border border-slate-200 bg-white p-7">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-800">
              <Globe2 size={21} strokeWidth={1.5} />
            </div>

            <h3 className="mt-5 font-display text-[24px] font-semibold text-[#0b1736]">
              International Collaboration
            </h3>

            <p className="mt-5 text-[14px] leading-7 text-slate-500">
              The project brings together Indian and European higher education
              institutions and industry partners to promote international
              collaboration in robotics education, research and innovation.
            </p>

            <div className="mt-6 flex items-center gap-3 text-[13px] font-semibold text-blue-800">
              <span className="h-[1px] w-8 bg-blue-800" />
              India × Europe
            </div>

          </div>

        </div>

      </section>


      {/* PARTNERS */}
      <section className="mt-14">

        <div className="mb-7">

          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-800">
            Consortium
          </p>

          <h3 className="mt-2 font-display text-[28px] font-semibold text-[#0b1736]">
            Project Partners
          </h3>

        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

          {irasPartners.map((partner, index) => (

            <div
              key={partner}
              className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 transition hover:border-blue-200"
            >

              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[11px] font-semibold text-blue-800">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="text-[13px] font-medium text-[#17213b]">
                {partner}
              </span>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}


export default function ProjectsPage() {

  const [activeTab, setActiveTab] = useState("projects");

  return (
    <main className="min-h-screen bg-white">

      {/* PAGE HEADER */}
      <section className="relative overflow-hidden border-b border-slate-100">

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-50/60 blur-3xl" />

        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-sky-50/60 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px] px-6 pb-16 pt-20 lg:px-10">

          <div className="flex items-center gap-3">
            <span className="h-[1px] w-10 bg-blue-800" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-800">
              Research & Innovation
            </p>
          </div>

          <h1 className="mt-1 font-display text-[44px] font-semibold tracking-tight text-[#0b1736] md:text-[54px]">
            Projects
          </h1>

          <p className="mt-2 max-w-[700px] text-[15px] leading-8 text-slate-500">
            Explore research initiatives, externally funded projects and
            collaborative programs undertaken by the Centre for Intelligent
            Robotics.
          </p>

        </div>

      </section>


      {/* TABS */}
      <section className="sticky top-[88px] z-30 border-b border-slate-100 bg-white/95 backdrop-blur-xl">

        <div className="mx-auto max-w-[1200px] overflow-x-auto px-6 lg:px-10">

          <div className="flex min-w-max gap-2 py-2">

            <button
              onClick={() => setActiveTab("projects")}
              className={`rounded-lg px-5 py-3 text-[13px] font-semibold transition ${
                activeTab === "projects"
                  ? "bg-blue-800 text-white shadow-lg shadow-blue-500/20"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-800"
              }`}
            >
              Projects
            </button>

            <button
              onClick={() => setActiveTab("iras")}
              className={`rounded-lg px-5 py-3 text-[13px] font-semibold transition ${
                activeTab === "iras"
                  ? "bg-blue-800 text-white shadow-lg shadow-blue-500/20"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-800"
              }`}
            >
              Project IRAS-HUB
            </button>

          </div>

        </div>

      </section>


      {/* TAB CONTENT */}
      <section className="mx-auto max-w-[1200px] px-6 py-9 lg:px-10">

        {activeTab === "projects" ? (

          <div>

            {/* EXTERNALLY FUNDED */}
            <div className="mb-12">

              <div className="mb-2">

                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-800">
                  Sponsored Research
                </p>

                <h2 className="mt-2 font-display text-[30px] font-semibold text-[#0b1736]">
                  Externally Funded Projects
                </h2>

              </div>

              <div className="grid gap-2 lg:grid-cols-3">

                {projects
                  .filter((project) =>
                    project.category === "Externally Funded"
                  )
                  .map((project) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                    />
                  ))}

              </div>

            </div>


            {/* RESEARCH PROJECTS */}
            <div>

              <div className="mb-7">

                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-800">
                  CIR Research
                </p>

                <h2 className="mt-2 font-display text-[30px] font-semibold text-[#0b1736]">
                  Research Projects
                </h2>

              </div>

              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                {projects
                  .filter((project) =>
                    project.category === "Research Project"
                  )
                  .map((project) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                    />
                  ))}

              </div>

            </div>

          </div>

        ) : (

          <IRASHub />

        )}

      </section>

    </main>
  );
}