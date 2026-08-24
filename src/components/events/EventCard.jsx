import { ArrowRight, CalendarDays } from "lucide-react";

export default function EventCard({ card }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_15px_40px_rgba(15,76,180,0.08)] md:px-8 md:py-7">

      {/* Blue accent */}
      <div className="absolute left-0 top-0 h-full w-[3px] bg-blue-600 transition-all duration-300 group-hover:w-[5px]" />

      <div className="flex gap-5 md:gap-7">

        {/* Number */}
        <div className="shrink-0">
          <span className="font-display text-[24px] font-semibold text-blue-600">
            {card.number}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1">

          {/* Event type */}
          <div className="mb-2 flex items-center gap-2">

            <CalendarDays
              size={14}
              strokeWidth={1.8}
              className="text-blue-600"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              {card.type}
            </span>

          </div>

          {/* Title */}
          <h3 className="font-display text-[22px] font-semibold text-[#0b1736] md:text-[25px]">
            {card.title}
          </h3>

          {/* Description */}
          <p className="mt-3 max-w-[850px] text-[14px] leading-7 text-slate-500">
            {card.description}
          </p>

          {/* Button */}
          <button
            type="button"
            className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-blue-600 transition hover:text-blue-800"
          >
            View Details

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