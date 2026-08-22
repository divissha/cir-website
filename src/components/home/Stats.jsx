import { CalendarDays, Bot, Users, FileText, Trophy } from "lucide-react";

const stats = [
  { value: "25+", label: "Years of Excellence", icon: CalendarDays },
  { value: "50+", label: "Research Projects", icon: Bot },
  { value: "100+", label: "Researchers & Students", icon: Users },
  { value: "300+", label: "Publications", icon: FileText },
  { value: "20+", label: "Awards & Recognitions", icon: Trophy },
];

export default function Stats() {
  return (
    <section className="relative z-20 mx-auto -mt-7 max-w-[1240px] px-6">
      <div className="grid overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5 md:grid-cols-5">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className={`flex items-center gap-4 px-6 py-7 ${index !== stats.length - 1 ? "border-b border-slate-100 md:border-b-0 md:border-r" : ""}`}>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Icon size={23} strokeWidth={1.8} />
              </div>
              <div>
                <div className="text-[27px] font-bold leading-none text-blue-600">{stat.value}</div>
                <div className="mt-2 text-[11px] leading-4 text-slate-500">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}