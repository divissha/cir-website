import { BrainCircuit, Bot, Handshake, HeartPulse, ArrowRight, AlignCenter } from "lucide-react";

const researchAreas = [
  {  title: "Artificial Intelligence", description: "Machine learning, deep learning, computer vision and intelligent decision making.", icon: BrainCircuit, bg: "bg-blue-50", text: "text-blue-600" },
  {  title: "Robotics", description: "Autonomous systems, mobile robotics, manipulation and control of robotic systems.", icon: Bot, bg: "bg-cyan-50", text: "text-cyan-600" },
  {  title: "Human-Robot Interaction", description: "Designing natural and effective interaction between humans and robotic systems.", icon: Handshake, bg: "bg-purple-50", text: "text-violet-600" },
  {  title: "Healthcare Automation", description: "Robotics and AI-driven solutions for healthcare, assistive technologies and rehabilitation.", icon: HeartPulse, bg: "bg-orange-50", text: "text-orange-500" },
];

export default function ResearchSection() {
  return (
    <section id="research" className="section-padding relative overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="grid items-end gap-6 md:grid-cols-2">
          <div>
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">Research Domains</div>
            <h2 className="font-display text-[32px] font-semibold leading-tight text-[#0b1736] md:text-[38px]">
              Exploring the Frontiers of <span className="text-blue-900">Robotics & AI</span>
            </h2>
          </div>
          <p className="max-w-[450px] text-sm leading-6 text-slate-500 md:justify-self-end">
            Interdisciplinary research focused on creating intelligent systems that understand, learn and interact with the world.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {researchAreas.map((area) => {
            const Icon = area.icon;
            return (
              <article key={area.number} className="academic-card group relative min-h-[285px] overflow-hidden rounded-xl p-6">
                <div className={`absolute right-5 top-6 text-[17px] font-semibold ${area.text}`}>{area.number}</div>
                <div className={`flex h-[72px] w-[72px] items-center justify-center rounded-full ${area.bg} ${area.text}`}>
                  <Icon size={34} strokeWidth={1.7} />
                </div>
                <h3 className="mt-7 max-w-[220px] text-[18px] font-bold leading-6 text-[#0b1736]">{area.title}</h3>
                <p className="mt-4 text-[13px] leading-6 text-slate-500">{area.description}</p>
                <a href="#" className={`absolute bottom-6 flex items-center gap-2 text-[13px] font-semibold ${area.text}`}>
                  Learn More
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}