import { ArrowUpRight, Building2 } from "lucide-react";

export default function CollaborationItem({ collaboration }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,76,180,0.08)] md:p-9">

      {/* Decorative element */}
      <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-blue-50/60 transition-transform duration-500 group-hover:scale-110" />

      <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-start">

        {/* Logo / Icon */}
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">

          {collaboration.logo ? (
            <img
              src={collaboration.logo}
              alt={`${collaboration.name} logo`}
              className="h-10 w-10 object-contain"
            />
          ) : (
            <Building2
              size={28}
              strokeWidth={1.5}
            />
          )}

        </div>


        {/* Content */}
        <div className="flex-1">

          {/* Type */}
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600">
            {collaboration.type}
          </div>


          {/* Name */}
          <h3 className="font-display text-[26px] font-semibold leading-tight text-[#0b1736] md:text-[30px]">
            {collaboration.name}
          </h3>


          {/* Description */}
          <p className="mt-4 max-w-[850px] text-[14px] leading-7 text-slate-500">
            {collaboration.description}
          </p>


          {/* Read More */}
          {collaboration.url && (
            <a
              href={collaboration.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-blue-600 transition hover:text-blue-800"
            >
              Read More

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          )}

        </div>

      </div>

    </article>
  );
}