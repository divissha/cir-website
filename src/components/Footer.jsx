import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-[#0b1736] text-white">
      <div className="mx-auto max-w-[1240px] px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold">CIR</div>
            <div className="mt-2 text-sm text-blue-200">Centre for Intelligent Robotics</div>
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-300">
              A visual foundation for the CIR website, ready for existing research, people, projects, publications and news content.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Explore</h3>
            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-300">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#research" className="hover:text-white">Research</a>
              <a href="#people" className="hover:text-white">People</a>
              <a href="#projects" className="hover:text-white">Projects</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Contact</h3>
            <p className="mt-5 text-sm leading-6 text-slate-300">
              Centre for Intelligent Robotics<br />
              IIIT-Allahabad, Jhalwa, <br />
              Prayagraj-211015, Uttar Pradesh, India
            </p>
            <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm text-blue-300">
              Contact CIR <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-slate-400">
          © 2026 Centre for Intelligent Robotics, IIIT Allahabad. All rights reserved.
        </div>
      </div>
    </footer>
  );
}