import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", path: "/" },
  { name: "Members", path: "/members" },
  { name: "Events", path: "/events" },
  { name: "Office of PG", path: "/office-pg" },
  { name: "Collaborations", path: "/collaborations" },
  { name: "Projects", path: "/projects" },
  { name: "Blogs", path: "/blogs" },
  { name: "Donations", path: "/donations" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-xl">

      <div className="mx-auto flex h-[88px] max-w-[1380px] items-center justify-between px-6 lg:px-10">

        {/* =====================================================
            LOGO
        ===================================================== */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >

          <div className="flex h-[54px] w-[54px] items-center justify-center rounded-xl border border-blue-200 bg-white">

            <div className="relative h-8 w-8">

              <div className="absolute left-1/2 top-0 h-7 w-6 -translate-x-1/2 rounded-t-full border-2 border-blue-600" />

              <div className="absolute left-1/2 top-3 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-600" />

              <div className="absolute bottom-0 left-1/2 h-3 w-7 -translate-x-1/2 rounded-b-full border-2 border-blue-600" />

            </div>

          </div>


          <div>

            <div className="text-[28px] font-bold leading-none tracking-tight text-[#0b1736]">
              CIR
            </div>

            <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.08em] text-slate-500">
              IIIT Allahabad
            </div>

          </div>

        </Link>


        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <nav className="hidden items-center gap-8 lg:flex">

          {navigation.map((item) => (

            <Link
              key={item.name}
              to={item.path}
              className="relative text-[14px] font-medium text-[#17213b] transition hover:text-blue-800"
            >

              {item.name}

              {/* Home underline */}

              {item.name === "Home" && (
                <span className="absolute -bottom-[31px] left-0 h-[2px] w-full bg-blue-800" />
              )}

            </Link>

          ))}


          {/* Contact */}

          <Link
            to="/contact"
            className="flex items-center gap-2 rounded-lg bg-blue-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-800"
          >

            Get In Touch

            <ArrowRight size={16} />

          </Link>

        </nav>


        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg border border-slate-200 p-2 lg:hidden"
          aria-label="Toggle menu"
        >

          {mobileOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}

        </button>

      </div>


      {/* =======================================================
          MOBILE NAVIGATION
      ======================================================= */}

      {mobileOpen && (

        <div className="border-t border-slate-100 bg-white px-6 py-5 lg:hidden">

          <div className="flex flex-col gap-5">

            {navigation.map((item) => (

              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-slate-700 transition hover:text-blue-700"
              >

                {item.name}

              </Link>

            ))}


            {/* Contact */}

            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex w-fit items-center gap-2 rounded-lg bg-blue-900 px-5 py-3 text-sm font-semibold text-white"
            >

              Get In Touch

              <ArrowRight size={16} />

            </Link>

          </div>

        </div>

      )}

    </header>
  );
}