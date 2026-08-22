import CollaborationItem from "./CollaborationItem";


/* =========================================================
   PRESENT COLLABORATORS
========================================================= */

const presentCollaborators = [

  {
    name: "University of Illinois Urbana-Champaign",
    type: "Academic Collaboration",
    description:
      "The University of Illinois Urbana-Champaign is a public research university and the flagship institution of the University of Illinois system. Founded in 1867, it is a major centre for research and higher education.",
    url: "https://illinois.edu/",
  },

  {
    name: "Bielefeld University",
    type: "Academic Collaboration",
    description:
      "Bielefeld University is a research university in Germany known for interdisciplinary research and its emphasis on connecting research and teaching across academic disciplines.",
    url: "https://www.uni-bielefeld.de/",
  },

  {
    name: "Rovira i Virgili University",
    type: "Academic Collaboration",
    description:
      "Rovira i Virgili University is a modern public higher education institution with a strong focus on teaching, research and generating knowledge to address challenges facing society.",
    url: "https://www.urv.cat/",
  },

  {
    name: "Universitas Budi Luhur, Jakarta",
    type: "Academic Collaboration",
    description:
      "Universitas Budi Luhur is an Indonesian university focused on competency-based education, technology and developing graduates prepared for professional and global environments.",
    url: "https://www.budiluhur.ac.id/",
  },

  {
    name: "Universiti Teknologi Malaysia",
    type: "Academic Collaboration",
    description:
      "Universiti Teknologi Malaysia is a leading academic and research institution focused on science, technology and engineering, with an emphasis on innovation and technological development.",
    url: "https://www.utm.my/",
  },

  {
    name: "Mercedes-Benz Research and Development India",
    type: "Industry Collaboration",
    description:
      "Mercedes-Benz Research and Development India is a major research and development centre working on future mobility solutions, autonomous vehicles, artificial intelligence, big data and connected technologies.",
    url: "https://www.mbrdi.co.in/",
  },

  {
    name: "Instituto de Robótica para la Dependencia",
    type: "Research Collaboration",
    description:
      "The Instituto de Robótica para la Dependencia promotes research and training in robotics and assistive technologies for people with disabilities and dependent persons.",
    url: "https://institutorobotica.org/",
  },

  {
    name: "NavAjna Technologies Pvt. Ltd.",
    type: "Industry Collaboration",
    description:
      "NavAjna Technologies is an India-based technology company providing IT consulting and product engineering solutions, supporting organisations through technology and digital innovation.",
    url: "https://navajna.com/",
  },

  {
    name: "Addverb Technologies Pvt. Ltd.",
    type: "Industry Collaboration",
    description:
      "Addverb Technologies develops robotics and Industry 4.0 solutions for manufacturing and warehouse automation, with products covering industrial and warehouse automation requirements.",
    url: "https://www.addverb.com/",
  },

];


/* =========================================================
   FORMER COLLABORATORS
========================================================= */

const formerCollaborators = [

  {
    name: "Carnegie Mellon University",
    type: "Former Academic Collaboration",
    description:
      "Carnegie Mellon University is a globally recognised research university with strengths across robotics, artificial intelligence, computer science and emerging technologies.",
    url: "https://www.cmu.edu/",
  },

  {
    name: "École Polytechnique Fédérale de Lausanne",
    type: "Former Academic Collaboration",
    description:
      "EPFL is a leading technical university in Switzerland with an international research environment and a strong focus on education, research and innovation.",
    url: "https://www.epfl.ch/",
  },

];


function SectionHeading({ children }) {

  return (

    <div className="mb-10 flex items-center gap-4">

      <div className="h-px flex-1 bg-slate-100" />

      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
        {children}
      </span>

      <div className="h-px flex-1 bg-slate-100" />

    </div>

  );

}


/* =========================================================
   PAGE
========================================================= */

export default function CollaborationsPage() {

  return (

    <section className="section-padding relative overflow-hidden">

      {/* Background */}
      <div className="circuit-lines absolute inset-0 opacity-40" />

      <div className="hero-glow absolute right-[-150px] top-[-100px] h-[500px] w-[500px] rounded-full blur-3xl" />


      <div className="relative mx-auto max-w-[1100px] px-6">


        {/* =================================================
            HERO
        ================================================= */}

        <div className="mb-16 text-center">

          <div className="mb-5 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">

            <span className="h-2 w-2 rounded-full bg-blue-800" />

            Centre for Intelligent Robotics

          </div>


          <h1 className="font-display text-[46px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0b1736] md:text-[60px]">

            Our{" "}

            <span className="text-blue-800">
              Collaborations
            </span>

          </h1>


          <p className="mx-auto mt-6 max-w-[700px] text-[15px] leading-7 text-slate-500">

            Building meaningful academic, research and industry
            partnerships to advance robotics, artificial intelligence
            and intelligent systems.

          </p>

        </div>


        {/* =================================================
            PRESENT COLLABORATORS
        ================================================= */}

        <div className="mb-20">

          <SectionHeading>
            Our Present Collaborators
          </SectionHeading>


          <div className="flex flex-col gap-6">

            {presentCollaborators.map((collaboration) => (

              <CollaborationItem
                key={collaboration.name}
                collaboration={collaboration}
              />

            ))}

          </div>

        </div>


        {/* =================================================
            FORMER COLLABORATORS
        ================================================= */}

        <div>

          <SectionHeading>
            Our Former Collaborators
          </SectionHeading>


          <div className="flex flex-col gap-6">

            {formerCollaborators.map((collaboration) => (

              <CollaborationItem
                key={collaboration.name}
                collaboration={collaboration}
              />

            ))}

          </div>

        </div>


        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <div className="mt-16 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-8 md:p-10">

          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
            Research & Innovation
          </div>


          <h2 className="mt-2 font-display text-[28px] font-semibold text-[#0b1736]">
            Collaborate with CIR
          </h2>


          <p className="mt-3 max-w-[720px] text-sm leading-6 text-slate-500">
            CIR welcomes academic and industry partnerships that
            contribute to research, innovation and the development
            of intelligent robotic systems.
          </p>

        </div>

      </div>

    </section>

  );

}