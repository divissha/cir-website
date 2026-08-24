import { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  Wrench,
} from "lucide-react";

import EventCard from "./EventCard";


const eventSections = {
  Internships: {
    icon: BriefcaseBusiness,

    subtitle: "Research and internship opportunities",

    cards: [
      {
        number: "1",
        title: "Summer Internship Program",
        description:
          "Opportunities for students to work on research and development projects in robotics, artificial intelligence and intelligent systems.",
        type: "Internship Opportunity",
      },

      {
        number: "2",
        title: "Research Internship",
        description:
          "Research-oriented internship opportunities for students interested in working with faculty members and research groups at CIR.",
        type: "Research Internship",
      },

      {
        number: "3",
        title: "Student Internship Opportunities",
        description:
          "Explore internship opportunities involving robotics, machine learning, computer vision and autonomous systems.",
        type: "Student Opportunity",
      },
    ],
  },

  Workshops: {
    icon: Wrench,

    subtitle: "Academic workshops and technical activities",

    cards: [
      {
        number: "1",
        title: "Robotics Workshop",
        description:
          "Hands-on sessions introducing participants to robotics, robotic systems, sensors and intelligent autonomous machines.",
        type: "Technical Workshop",
      },

      {
        number: "2",
        title: "Artificial Intelligence Workshop",
        description:
          "An academic workshop covering concepts and practical applications of artificial intelligence and machine learning.",
        type: "AI Workshop",
      },

      {
        number: "3",
        title: "Computer Vision Workshop",
        description:
          "Learn about computer vision techniques, image processing and their applications in intelligent robotic systems.",
        type: "Technical Workshop",
      },
    ],
  },
};


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


export default function EventsPage() {

  const [activeSection, setActiveSection] =
    useState("Internships");

  const activeData = eventSections[activeSection];

  const ActiveIcon = activeData.icon;


  return (
    <section className="section-padding relative overflow-hidden bg-white">

      {/* Background decoration */}

      <div className="pointer-events-none absolute right-[-120px] top-[-100px] h-[400px] w-[400px] rounded-full bg-blue-50/50 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[15%] left-[-150px] h-[350px] w-[350px] rounded-full bg-slate-50 blur-3xl" />


      <div className="relative mx-auto max-w-[1120px] px-6">


        {/* Header */}

        <div className="mb-3 text-center">

          <div className="mb-3 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-800">

            <span className="h-2 w-2 rounded-full bg-blue-800" />

            Centre for Intelligent Robotics

          </div>


          <h1 className="font-display text-[44px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0b1736] md:text-[58px]">

            Events &{" "}

            <span className="text-blue-800">
              Opportunities
            </span>

          </h1>


          <p className="mx-auto mt-4 max-w-[700px] text-[15px] leading-7 text-slate-500">

            Explore internship opportunities, workshops and
            academic activities offered through the Centre for
            Intelligent Robotics.

          </p>

        </div>


        {/* Tabs */}

        <div className="mb-10 flex justify-center">

          <div className="flex flex-wrap justify-center gap-3">

            {Object.entries(eventSections).map(
              ([sectionName, section]) => {

                const Icon = section.icon;

                const isActive =
                  activeSection === sectionName;

                return (
                  <button
                    key={sectionName}
                    type="button"
                    onClick={() =>
                      setActiveSection(sectionName)
                    }
                    className={`flex items-center gap-2 rounded-full border px-6 py-3 text-[13px] font-medium transition-all duration-300 ${
                      isActive
                        ? "border-blue-800 bg-blue-800 text-white shadow-lg shadow-blue-500/15"
                        : "border-blue-100 bg-white text-[#17213b] hover:border-blue-600 hover:text-blue-800"
                    }`}
                  >

                    <Icon size={16} />

                    {sectionName}

                  </button>
                );
              }
            )}

          </div>

        </div>


        {/* Active Section */}

        <div>

          <SectionHeading>
            {activeSection}
          </SectionHeading>


          <div className="mb-4 flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-800">

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
                {activeData.subtitle}
              </p>

            </div>

          </div>


          {/* Cards */}

          <div className="flex flex-col gap-3">

            {activeData.cards.map((card) => (
              <EventCard
                key={card.number}
                card={card}
              />
            ))}

          </div>

        </div>


        {/* Bottom information */}

        <div className="mt-14 rounded-2xl border border-blue-100 bg-blue-50/40 p-7 md:p-9">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-800">
                CIR Opportunities
              </div>

              <h2 className="mt-2 font-display text-[25px] font-semibold text-[#0b1736]">
                Learn, Research & Innovate
              </h2>

              <p className="mt-2 max-w-[650px] text-sm leading-6 text-slate-500">
                Discover opportunities to participate in research,
                technical workshops and academic activities at CIR.
              </p>

            </div>


            <button
              type="button"
              className="flex w-fit shrink-0 items-center gap-2 rounded-lg border border-blue-200 bg-white px-5 py-3 text-[13px] font-semibold text-blue-600 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
            >

              Explore More

              <ArrowRight size={16} />

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}