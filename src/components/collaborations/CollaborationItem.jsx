import { ArrowUpRight, Building2 } from "lucide-react";

export default function CollaborationItem({ collaboration }) {
  return (
    <article className="group relative overflow-hidden border-b border-slate-200 bg-white py-14 md:py-16">

      {/* Decorative background element */}
      <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-blue-50/50 transition-transform duration-500 group-hover:scale-110" />

      <div className="relative z-10 grid items-center gap-10 md:grid-cols-[300px_1fr] lg:grid-cols-[360px_1fr] lg:gap-16">


        {/* =====================================================
            LEFT — UNIVERSITY / INSTITUTION LOGO
        ===================================================== */}

        <div className="flex items-center justify-center">

          <div className="h-[300px] w-full overflow-hidden rounded-xl border border-slate-100 bg-white">

            {collaboration.logo ? (
              <div className="h-[300px] w-full overflow-hidden rounded-xl border border-slate-100 bg-white">

                <img
                  src={collaboration.logo}
                  alt={`${collaboration.name} logo`}
                  className="h-full w-full object-contain p-0"
                />

              </div>
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <Building2
                  size={80}
                  strokeWidth={1.2}
                  className="text-blue-600"
                />
              </div>
            )}

          </div>

        </div>


        {/* =====================================================
            RIGHT — COLLABORATION INFORMATION
        ===================================================== */}

        <div>

          {/* Collaboration Type */}

          <div className="mb-3 flex items-center gap-3">

            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
              {collaboration.type}
            </span>

            <span className="h-px w-10 bg-blue-200" />

          </div>


          {/* Institution Name */}

          <h3 className="font-display text-[30px] font-semibold leading-tight tracking-[-0.02em] text-[#0b1736] md:text-[36px]">

            {collaboration.name}

          </h3>


          {/* Description */}

          <p className="mt-5 max-w-[720px] text-[14px] leading-7 text-slate-500">

            {collaboration.description}

          </p>


          {/* Optional Areas */}

          {collaboration.areas && (
            <div className="mt-6">

              <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-600">
                Areas of Collaboration
              </div>

              <p className="text-[13px] font-medium leading-6 text-[#17213b]">
                {collaboration.areas}
              </p>

            </div>
          )}


          {/* Read More */}

          {collaboration.url && (
            <a
              href={collaboration.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-5 py-3 text-[13px] font-semibold text-blue-600 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
            >

              Visit Institution

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