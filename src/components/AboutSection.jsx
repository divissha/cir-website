import { ArrowRight, Building2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#f7faff] py-24">
      <div className="dot-pattern absolute right-10 top-16 h-32 w-32 opacity-40" />
      <div className="dot-pattern absolute bottom-10 left-10 h-28 w-28 opacity-30" />

      <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-600">About CIR</div>
          <h2 className="font-display text-[34px] font-semibold leading-[1.2] text-[#0b1736] md:text-[40px]">
            Pioneering Research.<br />
            Building <span className="text-blue-600">Impact.</span>
          </h2>
          <p className="mt-6 max-w-[470px] text-[14px] leading-7 text-slate-600">
            The Centre for Intelligent Robotics (CIR) at IIIT Allahabad is one of the pioneering research labs in the field of Robotics and Artificial Intelligence in India. This visual foundation is intentionally ready for the existing CIR content to be plugged in later.
          </p>
          <a href="#" className="mt-7 inline-flex items-center gap-3 rounded-lg border border-blue-300 bg-white px-5 py-3 text-[13px] font-semibold text-blue-600 transition hover:bg-blue-50">
            Know More About Us <ArrowRight size={16} />
          </a>
        </div>

        <div className="relative">
          <div className="flex h-[380px] items-center justify-center overflow-hidden rounded-2xl border border-white bg-gradient-to-br from-blue-100 via-white to-cyan-50 shadow-xl shadow-slate-900/5">
            <div className="text-center">
              <Building2 size={64} className="mx-auto text-blue-300" strokeWidth={1} />
              <p className="mt-4 text-sm font-medium text-slate-400">Add CIR / IIIT Allahabad campus image</p>
              <p className="mt-1 text-xs text-slate-400">public/images/campus.jpg</p>
            </div>
          </div>

          <div className="absolute bottom-5 right-5 flex items-center gap-3 rounded-xl border border-white/70 bg-white/95 px-5 py-4 shadow-xl backdrop-blur">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <Building2 size={22} />
            </div>
            <div>
              <div className="text-sm font-bold text-[#0b1736]">IIIT Allahabad</div>
              <div className="mt-1 text-xs text-slate-500">A Premier Institution</div>
              <div className="mt-2 h-[2px] w-7 bg-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}