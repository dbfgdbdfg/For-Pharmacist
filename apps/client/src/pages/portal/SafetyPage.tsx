import {
  AlertTriangle,
  Ban,
  ClipboardCheck,
  HeartPulse,
  ShieldAlert,
  Thermometer,
  TriangleAlert,
} from "lucide-react";
import { IconTile, PageHeader, PortalShell, SectionTitle, SupportiveNote, usePageMeta } from "./shared";

const safetyCards = [
  {
    title: "Recommended Dosage",
    copy: "Use the current locally approved product information to confirm patient-specific dosing and suitability.",
    icon: ClipboardCheck,
    tone: "teal" as const,
  },
  {
    title: "How to Use",
    copy: "Counsel on appropriate use and check whether the patient has already taken a pain reliever today.",
    icon: HeartPulse,
    tone: "teal" as const,
  },
  {
    title: "Maximum Daily Dose",
    copy: "Do not exceed the maximum daily dose stated in the locally approved product information.",
    icon: AlertTriangle,
    tone: "amber" as const,
  },
];

export default function SafetyPage() {
  usePageMeta("Safety Information", "Safety-focused product education including practical cautions, contraindication reminders, adverse reactions, and referral red flags.");

  return (
    <PortalShell>
      <PageHeader
        eyebrow="Safe use support"
        title="Safety Information"
        description="Approved safety information to support appropriate product use."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {safetyCards.map((card) => (
              <article key={card.title} className="card-lift rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <IconTile icon={card.icon} tone={card.tone} />
                <h2 className="mt-5 text-lg font-bold text-slate-950">{card.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{card.copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <SupportiveNote>This page is a counseling-support summary. For actual treatment decisions, check the current locally approved product information and assess the individual patient.</SupportiveNote>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Core warnings" title="Prompts to keep within the counseling conversation." />
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              "Avoid duplicate NSAID use",
              "Do not exceed recommended dose",
              "Consult a healthcare professional if symptoms persist",
            ].map((warning, index) => (
              <div key={warning} className="rounded-2xl border border-amber-100 bg-amber-50 p-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-amber-700 shadow-sm">{index + 1}</div>
                <p className="mt-5 text-base font-bold leading-6 text-amber-950">{warning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-7 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <article className="rounded-3xl border border-rose-100 bg-rose-50/60 p-7 sm:p-9">
            <div className="flex items-center gap-4">
              <IconTile icon={Ban} tone="red" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-rose-600">Contraindications</p>
                <h2 className="mt-1 text-2xl font-bold tracking-[-0.03em] text-slate-950">When not to proceed without appropriate review.</h2>
              </div>
            </div>
            <ul className="mt-7 space-y-3">
              {["NSAID hypersensitivity", "Active peptic ulcer", "Late pregnancy", "Severe renal disease"].map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-rose-500" /> {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-3xl border border-teal-100 bg-teal-50/60 p-7 sm:p-9">
            <div className="flex items-center gap-4">
              <IconTile icon={ShieldAlert} tone="teal" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-600">Common adverse reactions</p>
                <h2 className="mt-1 text-2xl font-bold tracking-[-0.03em] text-slate-950">Know the common patient-reported concerns.</h2>
              </div>
            </div>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {["Stomach discomfort", "Nausea", "Dizziness", "Skin rash"].map((item) => (
                <li key={item} className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm">{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-300">Urgent escalation</p>
            <h2 className="mt-2 text-3xl font-bold tracking-[-0.03em] text-white">Red flags that warrant immediate referral.</h2>
            <p className="mt-3 leading-7 text-slate-300">Refer patients immediately if any of the following are present.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { label: "Severe abdominal pain", icon: AlertTriangle },
              { label: "Heavy bleeding", icon: TriangleAlert },
              { label: "High fever", icon: Thermometer },
              { label: "Fainting", icon: HeartPulse },
              { label: "Possible pregnancy", icon: ShieldAlert },
            ].map((flag) => (
              <div key={flag.label} className="rounded-2xl border border-slate-700 bg-white/5 p-5">
                <flag.icon className="text-rose-300" size={22} />
                <p className="mt-7 text-sm font-bold leading-6 text-white">{flag.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PortalShell>
  );
}
