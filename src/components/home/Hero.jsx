import { ArrowRight, BrainCircuit } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 circuit-background opacity-60" />
      <div className="absolute right-[-100px] top-[-100px] h-[650px] w-[650px] rounded-full hero-glow blur-2xl" />
      <div className="dot-pattern absolute left-5 top-28 h-28 w-28 opacity-40" />
      <div className="dot-pattern absolute right-8 top-24 h-32 w-32 opacity-40" />

      <div className="relative mx-auto max-w-[1380px] px-6 lg:px-10">
        <div className="grid min-h-[570px] items-center lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative z-10 py-20 lg:py-24">
            <div className="mb-6 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-blue-600">
              <span className="h-2 w-2 rounded-full bg-blue-900" />
              Centre for Intelligent Robotics
            </div>

            <h1 className="font-display max-w-[650px] text-[52px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0b1736] sm:text-[60px] lg:text-[68px]">
              Intelligence<br />that Moves the<br /><span className="text-blue-900">Future</span>
            </h1>

            <p className="mt-6 max-w-[600px] text-[16px] leading-7 text-slate-600">
              Advancing the frontiers of Robotics, Artificial Intelligence,
              and Human–Robot Interaction for a smarter, safer and healthier tomorrow.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a href="#research" className="flex items-center gap-3 rounded-lg bg-blue-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-700">
                Explore Research <ArrowRight size={17} />
              </a>
              <a href="#about" className="flex items-center gap-3 rounded-lg border border-blue-600 bg-white px-6 py-3.5 text-sm font-semibold text-blue-900 transition hover:bg-blue-50">
                Discover CIR <ArrowRight size={17} />
              </a>
            </div>
          </div>

          <div className="relative h-[560px]">
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full hero-glow" />
            <div className="orbit absolute left-1/2 top-1/2 h-[490px] w-[490px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/60" />
            <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100" />

            <div className="robot-float absolute bottom-0 left-1/2 w-[480px] -translate-x-1/2 lg:w-[540px]">
              <img
                src="/images/robot-hero.png"
                alt="Robotics research"
                className="w-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div className="absolute right-[3%] top-[28%] flex h-[110px] w-[105px] flex-col items-center justify-center rounded-xl border border-slate-100 bg-white shadow-xl shadow-blue-500/10">
              <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-900">
                <BrainCircuit size={25} />
              </div>
              <span className="text-sm font-semibold text-blue-600">AI</span>
              <div className="mt-1 h-[2px] w-7 bg-blue-600" />
            </div>

            <div className="soft-pulse absolute left-[16%] top-[32%] h-3 w-3 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50" />
            <div className="soft-pulse absolute right-[8%] top-[45%] h-2 w-2 rounded-full bg-blue-400" />
            <div className="absolute bottom-[18%] left-[12%] h-2 w-2 rounded-full bg-blue-300" />
          </div>
        </div>
      </div>
    </section>
  );
}