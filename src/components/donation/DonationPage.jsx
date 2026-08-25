import { ArrowRight, Heart, Award } from "lucide-react";
import {
  Building2,
  CheckCircle2,
  CreditCard,
  FileText,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

const donors = [
  {
    category: "Platinum",
    name: "Mr. / Ms.",
    designation: "",
    organization: "",
    image: "/images/donors/platinum.jpg",
  },
  {
    category: "Gold",
    name: "Mr. Rupak Chakraborty",
    designation: "Engineering Lead Manager",
    organization: "Index Exchange, Germany",
    image: "/images/donors/rupak-chakraborty.jpg",
  },
  {
    category: "Silver",
    name: "Dr. Surya Prakash",
    designation: "Assistant Professor",
    organization: "IIIT Allahabad",
    image: "/images/donors/surya-prakash.jpg",
  },
];

function DonorCard({ donor }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,76,180,0.10)]">

      {/* Decorative background */}
      <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-blue-50/60 transition-transform duration-500 group-hover:scale-110" />

      <div className="relative z-10 flex flex-col md:flex-row">

        {/* Category */}
        <div className="flex min-h-[180px] items-center justify-center bg-slate-50 px-8 py-8 md:w-[210px]">
          <div className="text-center">

            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-800 shadow-sm">
              <Award size={23} strokeWidth={1.5} />
            </div>

            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-800">
              {donor.category}
            </p>
          </div>
        </div>

        {/* Donor Image */}
        <div className="flex items-center justify-center px-8 py-8 md:w-[260px]">
          <div className="h-[150px] w-[150px] overflow-hidden rounded-xl border border-slate-200 bg-slate-50">

            <img
              src={donor.image}
              alt={donor.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

          </div>
        </div>

        {/* Donor Information */}
        <div className="flex flex-1 flex-col justify-center px-8 pb-8 md:px-10 md:py-8">

          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-800">
            Esteemed Donor
          </p>

          <h3 className="font-display text-[24px] font-semibold leading-tight text-[#0b1736] md:text-[28px]">
            {donor.name}
          </h3>

          {donor.designation && (
            <p className="mt-3 text-[15px] font-medium text-slate-600">
              {donor.designation}
            </p>
          )}

          {donor.organization && (
            <p className="mt-1 text-[14px] text-slate-500">
              {donor.organization}
            </p>
          )}

        </div>

      </div>
    </article>
  );
}

export default function DonationPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative overflow-hidden border-b border-slate-100">

        {/* Background decoration */}
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-50/60 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-sky-50/60 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px] px-6 pb-20 pt-20 lg:px-10">

          <div className="max-w-[760px]">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[1px] w-10 bg-blue-800" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-800">
                Support CIR
              </p>
            </div>

            <h1 className="font-display text-[44px] font-semibold leading-[1.08] tracking-tight text-[#0b1736] md:text-[58px]">
              Supporting the Future of
              <span className="text-blue-800"> Intelligent Robotics.</span>
            </h1>

            <p className="mt-2 max-w-[700px] text-[16px] leading-8 text-slate-500">
              Contributions from individuals and organizations help the Centre
              for Intelligent Robotics advance research, innovation and
              education in Robotics, Artificial Intelligence and related fields.
            </p>

          </div>

        </div>
      </section>


      <section>
        {/* ================================================= */}
      {/* DONATION INTRO */}
      {/* ================================================= */}

      <section className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10">

        <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-center">

          <div>

            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-800">
              Contributions & Support
            </p>

            <h2 className="mt-3 font-display text-[32px] font-semibold leading-tight text-[#0b1736] md:text-[40px]">
              Building a stronger ecosystem for
              <span className="text-blue-800"> research and innovation.</span>
            </h2>

            <p className="mt-2 max-w-[650px] text-[15px] leading-8 text-slate-500">
              Donations and contributions enable CIR to support research
              activities, student initiatives, laboratory infrastructure,
              academic programs and the development of intelligent robotic
              systems.
            </p>

          </div>


          {/* Donation CTA */}
          <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-blue-50/60 p-8">

            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100/70" />

            <div className="relative">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-800 shadow-sm">
                <Heart size={23} strokeWidth={1.5} />
              </div>

              <h3 className="font-display text-[23px] font-semibold text-[#0b1736]">
                Support CIR
              </h3>

              <p className="mt-3 text-[14px] leading-7 text-slate-500">
                Your contribution can help create opportunities for students,
                researchers and innovators working at the intersection of
                robotics and artificial intelligence.
              </p>

              <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-[13px] font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700">
                Make a Contribution
                <ArrowRight size={16} />
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* DONORS */}
      {/* ================================================= */}

      <section className="border-t border-slate-100 bg-slate-50/50">

        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10">

          {/* Heading */}
          <div className="mb-12">

            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-800">
              Acknowledgement
            </p>

            <h2 className="mt-3 font-display text-[34px] font-semibold text-[#0b1736] md:text-[42px]">
              Our Esteemed Donors
            </h2>

            <p className="mt-4 max-w-[650px] text-[15px] leading-7 text-slate-500">
              We gratefully acknowledge the individuals and organizations
              whose contributions support the academic and research mission
              of CIR.
            </p>

          </div>


          {/* Donor Cards */}
          <div className="space-y-6">

            {donors.map((donor) => (
              <DonorCard
                key={`${donor.category}-${donor.name}`}
                donor={donor}
              />
            ))}

          </div>

        </div>

      </section>



      {/* =====================================================
            TAX + CSR
        ===================================================== */}

        <div className="mt-10 grid gap-5 md:grid-cols-2">


          {/* 80G */}

          <div className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,76,180,0.08)] md:p-8">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-800">

              <ShieldCheck
                size={23}
                strokeWidth={1.7}
              />

            </div>


            <div className="mt-6">

              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-800">
                Tax Benefit
              </div>

              <h2 className="mt-2 font-display text-[24px] font-semibold text-[#0b1736]">
                80G Tax Deduction
              </h2>

              <p className="mt-3 text-[14px] leading-7 text-slate-500">

                Donations made to the institute by eligible citizens
                of India and NRIs may qualify for tax deduction under
                Section 80G, subject to applicable rules and
                regulations.

              </p>


              <a
                href="https://apply.iiita.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-blue-800 transition hover:text-blue-600"
              >

                Government Notification

                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />

              </a>

            </div>

          </div>


          {/* CSR */}

          <div className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(15,76,180,0.08)] md:p-8">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-800">

              <Building2
                size={23}
                strokeWidth={1.7}
              />

            </div>


            <div className="mt-6">

              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-800">
                Corporate Support
              </div>

              <h2 className="mt-2 font-display text-[24px] font-semibold text-[#0b1736]">
                Corporate Social Responsibility
              </h2>

              <p className="mt-3 text-[14px] leading-7 text-slate-500">

                CIR, IIIT Allahabad is eligible to accept support
                through Corporate Social Responsibility initiatives
                for education-related purposes under the applicable
                provisions of the Companies Act.

              </p>


              <a
                href="https://apply.iiita.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-blue-800 transition hover:text-blue-600"
              >

                View Institutional Information

                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />

              </a>

            </div>

          </div>

        </div>


        {/* =====================================================
            DONATION METHODS
        ===================================================== */}

        <div className="mt-20">

          <div className="mb-8 flex items-center gap-4">

            <div className="h-px flex-1 bg-slate-100" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Donation Methods
            </span>

            <div className="h-px flex-1 bg-slate-100" />

          </div>


          <div className="mb-10">

            <h2 className="font-display text-[32px] font-semibold text-[#0b1736]">
              How to Contribute
            </h2>

            <p className="mt-2 text-[14px] leading-7 text-slate-500">
              Contributions can be made through cheque, demand draft
              or online bank transfer.
            </p>

          </div>


          <div className="grid gap-5 md:grid-cols-2">


            {/* =================================================
                CHEQUE / DD
            ================================================= */}

            <div className="rounded-2xl border border-slate-200 bg-white p-7 md:p-8">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-800">

                  <FileText
                    size={22}
                    strokeWidth={1.6}
                  />

                </div>


                <div>

                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-800">
                    Offline Donation
                  </div>

                  <h3 className="mt-1 font-display text-[23px] font-semibold text-[#0b1736]">
                    Cheque / Demand Draft
                  </h3>

                </div>

              </div>


              <p className="mt-6 text-[14px] leading-7 text-slate-500">

                Mail your cheque or demand draft in favour of
                <strong className="font-semibold text-[#17213b]">
                  {" "}“IIITA”
                </strong>
                {" "}to:

              </p>


              <div className="mt-5 rounded-xl bg-slate-50 p-5">

                <p className="text-[14px] font-semibold text-[#0b1736]">
                  Shri O.P. Srivastava
                </p>

                <p className="mt-1 text-[13px] leading-6 text-slate-500">
                  Dy. Registrar (F&A)
                  <br />
                  Indian Institute of Information Technology Allahabad
                  <br />
                  Allahabad – 211012 (UP), INDIA
                </p>

              </div>


              <div className="mt-5 space-y-3">

                <div className="flex items-center gap-3 text-[13px] text-slate-500">

                  <Phone
                    size={15}
                    className="text-blue-800"
                  />

                  +91-532-2922007

                </div>


                <div className="flex items-center gap-3 text-[13px] text-slate-500">

                  <Mail
                    size={15}
                    className="text-blue-800"
                  />

                  jr.fa@iiita.ac.in

                </div>

              </div>

            </div>


            {/* =================================================
                ONLINE BANKING
            ================================================= */}

            <div className="rounded-2xl border border-blue-200 bg-blue-50/40 p-7 md:p-8">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-white text-blue-800">

                  <Landmark
                    size={22}
                    strokeWidth={1.6}
                  />

                </div>


                <div>

                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-800">
                    Online Donation
                  </div>

                  <h3 className="mt-1 font-display text-[23px] font-semibold text-[#0b1736]">
                    Bank Transfer
                  </h3>

                </div>

              </div>


              <p className="mt-6 text-[14px] leading-7 text-slate-500">
                Recently updated bank details:
              </p>


              {/* Bank details */}

              <div className="mt-5 overflow-hidden rounded-xl border border-blue-100 bg-white">

                <div className="grid grid-cols-[130px_1fr] border-b border-slate-100 px-5 py-4">

                  <span className="text-[12px] font-medium text-slate-400">
                    Bank Name
                  </span>

                  <span className="text-[13px] font-semibold text-[#17213b]">
                    ICICI
                  </span>

                </div>


                <div className="grid grid-cols-[130px_1fr] border-b border-slate-100 px-5 py-4">

                  <span className="text-[12px] font-medium text-slate-400">
                    Account Name
                  </span>

                  <span className="text-[13px] font-semibold text-[#17213b]">
                    IIIT Allahabad Alumni Account
                  </span>

                </div>


                <div className="grid grid-cols-[130px_1fr] border-b border-slate-100 px-5 py-4">

                  <span className="text-[12px] font-medium text-slate-400">
                    Account Number
                  </span>

                  <span className="text-[13px] font-semibold tracking-wide text-[#17213b]">
                    231401001363
                  </span>

                </div>


                <div className="grid grid-cols-[130px_1fr] border-b border-slate-100 px-5 py-4">

                  <span className="text-[12px] font-medium text-slate-400">
                    IFSC
                  </span>

                  <span className="text-[13px] font-semibold tracking-wide text-[#17213b]">
                    ICIC0002314
                  </span>

                </div>


                <div className="grid grid-cols-[130px_1fr] px-5 py-4">

                  <span className="text-[12px] font-medium text-slate-400">
                    SWIFT
                  </span>

                  <span className="text-[13px] font-semibold tracking-wide text-[#17213b]">
                    ICICINBBXXX
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
      










      {/* ================================================= */}
      {/* BOTTOM CTA */}
      {/* ================================================= */}

      <section className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10">

        <div className="relative overflow-hidden rounded-2xl bg-[#0b1736] px-8 py-12 md:px-12">

          {/* Decorative circles */}
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">

            <div className="max-w-[650px]">

              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-300">
                Support Research
              </p>

              <h2 className="mt-3 font-display text-[30px] font-semibold text-white md:text-[36px]">
                Help us build the next generation of intelligent systems.
              </h2>

              <p className="mt-4 text-[14px] leading-7 text-slate-300">
                Every contribution helps strengthen research, education and
                innovation at the Centre for Intelligent Robotics.
              </p>

            </div>

            <button className="flex w-fit shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3 text-[13px] font-semibold text-blue-700 transition hover:bg-blue-50">
              Get Involved
              <ArrowRight size={16} />
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}