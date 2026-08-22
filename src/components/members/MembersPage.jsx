import MemberCard from "./MemberCard";


/* =========================================================
   SECTION TITLE
========================================================= */

function GroupTitle({ children }) {
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
   CIR HEAD
========================================================= */

const cirHead = {
  name: "CIR Head Name",
  role: "Head, Centre for Intelligent Robotics",
  area: "Robotics • Artificial Intelligence • Computer Vision",
  image: "/images/cir-head.jpg",
  email: "head@example.com",
  profile: "#",
};


/* =========================================================
   FACULTY
========================================================= */

const faculty = [
  {
    name: "Faculty Member 1",
    role: "Professor",
    area: "Intelligent Robotics • Machine Learning",
    image: "/images/faculty-1.jpg",
    email: "faculty1@example.com",
    profile: "#",
  },

  {
    name: "Faculty Member 2",
    role: "Professor",
    area: "Computer Vision • Deep Learning",
    image: "/images/faculty-2.jpg",
    email: "faculty2@example.com",
    profile: "#",
  },

  {
    name: "Faculty Member 3",
    role: "Associate Professor",
    area: "Human–Robot Interaction • AI",
    image: "/images/faculty-3.jpg",
    email: "faculty3@example.com",
    profile: "#",
  },

  {
    name: "Faculty Member 4",
    role: "Associate Professor",
    area: "Autonomous Systems • Robotics",
    image: "/images/faculty-4.jpg",
    email: "faculty4@example.com",
    profile: "#",
  },

  {
    name: "Faculty Member 5",
    role: "Assistant Professor",
    area: "Robotic Perception • Intelligent Systems",
    image: "/images/faculty-5.jpg",
    email: "faculty5@example.com",
    profile: "#",
  },
];


/* =========================================================
   FORMER HEAD
========================================================= */

const formerHead = {
  name: "Former Head Name",
  role: "Former Head, CIR",
  area: "Robotics • Intelligent Systems • AI",
  image: "/images/former-head.jpg",
  email: "formerhead@example.com",
  profile: "#",
};


/* =========================================================
   MEMBERS PAGE
========================================================= */

export default function MembersPage() {

  return (

    <section className="section-padding">

      <div className=" mx-auto max-w-[1240px] px-6">

        {/* =================================================
            PAGE HEADING
        ================================================= */}

        <div className="mb-10 text-center">

          <div className="mt-0 mb-2 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700">

            <span className="h-2 w-2 rounded-full bg-blue-600" />

            Centre for Intelligent Robotics

          </div>

          <h1 className=" font-display text-[46px] font-semibold leading-tight text-[#0b1736] md:text-[58px]">

            Members

          </h1>

          <p className="mx-auto mt-5 max-w-[700px] text-[15px] leading-7 text-slate-500">

            Meet the faculty and leadership of the Centre for
            Intelligent Robotics at IIIT Allahabad.

          </p>

        </div>


        {/* =================================================
            FACULTY & LEADERSHIP
        ================================================= */}

        <div className="mb-10">

          <GroupTitle>
            Faculty & Leadership
          </GroupTitle>


          {/* ===============================================
              CIR HEAD
          =============================================== */}

          <div className="mb-10 flex justify-center">

            <div className="w-full max-w-[350px]">

              <MemberCard
                member={cirHead}
              />

            </div>

          </div>


          {/* ===============================================
              FIRST ROW — THREE FACULTY
          =============================================== */}

          <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 md:grid-cols-3">

            {faculty.slice(0, 3).map((member) => (

              <MemberCard
                key={member.name}
                member={member}
              />

            ))}

          </div>


          {/* ===============================================
              SECOND ROW — TWO FACULTY
          =============================================== */}

          <div className="mx-auto mt-5 grid max-w-[730px] grid-cols-1 gap-5 md:grid-cols-2">

            {faculty.slice(3, 5).map((member) => (

              <MemberCard
                key={member.name}
                member={member}
              />

            ))}

          </div>


          {/* ===============================================
              FORMER HEAD
          =============================================== */}

          <div className="mt-10 flex justify-center">

            <div className="w-full max-w-[350px]">

              <MemberCard
                member={formerHead}
              />

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}