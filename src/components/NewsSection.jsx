import { ArrowRight, CalendarDays } from "lucide-react";

const news = [
  { date: "May 10, 2026", title: "AI & Robotics Workshop", description: "Placeholder event card ready for the existing CIR news and events content.", image: "/images/event-1.jpg" },
  { date: "Apr 20, 2026", title: "New Robotic Platform at CIR", description: "Placeholder card for future laboratory, project and infrastructure updates.", image: "/images/event-2.jpg" },
  { date: "Mar 15, 2026", title: "Research Internship Program", description: "Placeholder card for internship announcements and academic opportunities.", image: "/images/event-3.jpg" },
];

export default function NewsSection() {
  return (
    <section id="news" className="bg-white py-20">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="mb-7 flex items-center justify-between">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">News & Events</div>
          <a href="#" className="flex items-center gap-2 text-[12px] font-medium text-blue-600">
            View All News & Events <ArrowRight size={15} />
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {news.map((item) => (
            <article key={item.title} className="academic-card flex gap-4 rounded-xl p-3">
              <div className="flex h-[130px] w-[115px] shrink-0 items-center justify-center overflow-hidden rounded-lg bg-blue-50">
                <img src={item.image} alt="" className="h-full w-full object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                <CalendarDays className="absolute text-blue-200" size={30} />
              </div>
              <div className="py-1">
                <div className="text-[10px] font-medium text-blue-600">{item.date}</div>
                <h3 className="mt-2 text-[15px] font-bold leading-5 text-[#0b1736]">{item.title}</h3>
                <p className="mt-2 line-clamp-3 text-[11px] leading-5 text-slate-500">{item.description}</p>
                <a href="#" className="mt-3 flex items-center gap-2 text-[11px] font-semibold text-blue-600">
                  Read More <ArrowRight size={13} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}