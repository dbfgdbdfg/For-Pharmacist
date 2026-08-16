import {
  ArrowRight,
  BookOpen,
  CircleHelp,
  ClipboardCheck,
  HeartPulse,
  LayoutDashboard,
  ShieldAlert,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";
import { IconTile, PortalShell, SectionTitle, usePageMeta } from "./shared";

const resources = [
  {
    title: "Product & Evidence",
    copy: "Product overview, mechanism of action, evidence summaries, and reference pathways.",
    icon: BookOpen,
    to: "/product-evidence",
    tone: "teal" as const,
  },
  {
    title: "Safety Information",
    copy: "Use practical safety prompts, contraindications, and referral red flags in one place.",
    icon: ShieldAlert,
    to: "/safety",
    tone: "red" as const,
  },
  {
    title: "Counseling Guide",
    copy: "Structure confident, patient-centered conversations around pain and bloating.",
    icon: ClipboardCheck,
    to: "/counseling",
    tone: "teal" as const,
  },
  {
    title: "Professional Support",
    copy: "Route medical, scientific, quality, and safety inquiries to the right team.",
    icon: Stethoscope,
    to: "/professional-support",
    tone: "teal" as const,
  },
  {
    title: "My Dashboard",
    copy: "Track learning progress, saved guidance, recent updates, and certification.",
    icon: LayoutDashboard,
    to: "/dashboard",
    tone: "teal" as const,
  },
];

export default function HomePage() {
  usePageMeta("Evidence-based pharmacist education", "Better Day Hub is a concept prototype for pharmacist education, counseling, safety resources, and professional support.");

  return (
    <PortalShell>
      <section className="clinical-grid overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-24">
          <div className="relative z-10">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/90 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-teal-700 shadow-sm">
              <HeartPulse size={15} />
              Women&apos;s health resource center
            </p>
            <h1 className="max-w-3xl text-5xl font-bold tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-7xl">
              Better <span className="text-teal-600">Day</span> Hub
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Evidence-based pharmacist education and counseling platform for women&apos;s health.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/counseling"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-200 transition hover:-translate-y-0.5 hover:bg-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                Explore Resources <ArrowRight size={18} />
              </Link>
              <Link
                to="/product-evidence"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-200 hover:text-teal-700"
              >
                View Product Evidence
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-sm">
              <div className="flex items-center gap-2 text-slate-600"><span className="h-2 w-2 rounded-full bg-teal-500" /> Pharmacist-first education</div>
              <div className="flex items-center gap-2 text-slate-600"><span className="h-2 w-2 rounded-full bg-teal-500" /> Evidence &amp; safety focused</div>
              <div className="flex items-center gap-2 text-slate-600"><span className="h-2 w-2 rounded-full bg-slate-400" /> Non-commercial prototype</div>
            </div>
          </div>

          <div className="relative min-h-[390px]">
            <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-teal-600 via-teal-600 to-teal-500 shadow-2xl shadow-teal-200" />
            <div className="absolute inset-x-0 bottom-0 top-0 rounded-[2rem] border border-white/60 bg-white/10 backdrop-blur-[1px]" />
            <div className="absolute left-6 top-7 rounded-2xl border border-white/70 bg-white p-4 shadow-xl shadow-teal-950/10 sm:left-10">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-teal-50 text-teal-600"><BookOpen size={22} /></span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.12em] text-teal-600">Resource of the week</span>
                  <span className="mt-1 block text-sm font-bold text-slate-900">Counseling essentials</span>
                </span>
              </div>
            </div>
            <div className="absolute right-4 top-28 w-56 rounded-2xl border border-white/80 bg-white p-5 shadow-xl shadow-teal-950/10 sm:right-8">
              <p className="text-xs font-bold uppercase tracking-[0.13em] text-slate-400">Pharmacist pathway</p>
              <div className="mt-4 space-y-3">
                {["Assess symptoms", "Screen safety", "Counsel clearly"].map((item, index) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-teal-50 text-xs font-bold text-teal-700">{index + 1}</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-6 left-5 right-5 rounded-2xl border border-white/60 bg-slate-950 p-5 text-white shadow-xl shadow-teal-950/20 sm:bottom-9 sm:left-10 sm:right-10">
              <div className="flex items-start gap-3">
                <CircleHelp className="mt-0.5 shrink-0 text-teal-300" size={20} />
                <div>
                  <p className="text-sm font-bold">Designed for efficient counseling.</p>
                  <p className="mt-1 text-sm leading-5 text-slate-300">Find the product, safety, counseling, and support information that matters in the moment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Explore the hub"
            title="The information you need, arranged around your workflow."
            description="Each resource area is designed to move from product understanding to safe, practical counseling."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {resources.map((resource, index) => (
              <Link
                key={resource.title}
                to={resource.to}
                className={`card-lift group flex min-h-[255px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${
                  index === 0 ? "xl:col-span-1" : ""
                }`}
              >
                <IconTile icon={resource.icon} tone={resource.tone} />
                <h2 className="mt-5 text-lg font-bold tracking-[-0.02em] text-slate-900">{resource.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{resource.copy}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-teal-700">
                  Open resource <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-300">Clinical conversation support</p>
            <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-[-0.04em]">Built to support clear, evidence-based discussions at the counter.</h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-300">Use the guided counseling flow to connect symptom assessment, product understanding, and safety prompts in a consistent sequence.</p>
            <Link to="/counseling" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-teal-300 hover:text-white">
              Review counseling flow <ArrowRight size={17} />
            </Link>
          </div>
          <div className="rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 to-teal-50 p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">Safety-first framework</p>
            <div className="mt-5 space-y-4">
              {["Confirm relevant symptoms and timing", "Screen for key contraindications and duplicate NSAID use", "Refer promptly when red flags are present"].map((item, index) => (
                <div key={item} className="flex gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-xs font-bold text-teal-700 shadow-sm">{index + 1}</span>
                  <p className="pt-0.5 text-sm font-semibold leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            <Link to="/safety" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-900">
              Review safety information <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </PortalShell>
  );
}
