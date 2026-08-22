import {
  ArrowRight,
  ExternalLink,
  Mail,
  GraduationCap,
  Users,
} from "lucide-react";

export default function MemberCard({ member }) {
  return (
    <article className="academic-card group overflow-hidden rounded-xl bg-white">

      {/* IMAGE */}
      <div className="relative h-[250px] overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">

        {/* Decorative circles */}
        {/* <div className="absolute right-5 top-5 h-20 w-20 rounded-full border border-blue-100" /> */}

        <div className="absolute right-10 top-10 h-2 w-2 rounded-full bg-blue-400" />

        <div className="dot-pattern absolute bottom-5 left-5 h-20 w-20 opacity-30" />

        {/* Member image */}
        <img
          src={member.image}
          alt={member.name}
          className="relative z-10 h-full w-full object-cover object-top"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        {/* Placeholder if image doesn't exist */}
        <div className="absolute inset-0 flex items-center justify-center">

          <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white/70 text-blue-200">

            <div className="text-5xl font-semibold">
              {member.name?.charAt(0)}
            </div>

          </div>

        </div>

        {/* External link */}
        <div className="absolute bottom-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white text-blue-600 shadow-md transition duration-300 group-hover:scale-105">
          <ExternalLink size={15} />
        </div>

      </div>

      {/* CONTENT */}
      <div className="p-6">

        {/* ROLE */}
        <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-600">
          {member.role}
        </div>

        {/* NAME */}
        <h3 className="mt-2 text-[19px] font-bold text-[#0b1736]">
          {member.name}
        </h3>

        {/* RESEARCH AREA */}
        <p className="mt-2 min-h-[44px] text-[12px] leading-5 text-slate-500">
          {member.area}
        </p>

        {/* ACTIONS */}
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

          <a
            href={member.profile || "#"}
            className="flex items-center gap-2 text-[12px] font-semibold text-blue-600 transition hover:text-blue-800"
          >
            View Profile

            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          <a
            href={`mailto:${member.email || "contact@cir.iiita.ac.in"}`}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition hover:bg-blue-100"
            aria-label={`Email ${member.name}`}
          >
            <Mail size={14} />
          </a>

        </div>

      </div>

    </article>
  );
}

