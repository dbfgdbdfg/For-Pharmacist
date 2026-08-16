import {
  ArrowRight,
  Beaker,
  BookOpen,
  Pill,
  Clock3,
  FileText,
  HeartPulse,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { IconTile, PageHeader, PortalShell, SectionTitle, SupportiveNote, usePageMeta } from "./shared";

const evidence = [
  {
    title: "Clinical review of menstrual pain management in community pharmacy",
    journal: "Journal of Women’s Health Pharmacy",
    copy: "A practice-focused review outlining the role of NSAID therapy in menstrual pain counseling. It emphasizes symptom assessment, appropriate use, and referral awareness without replacing local product information.",
  },
  {
    title: "Pharmacist counseling considerations for dysmenorrhea and bloating",
    journal: "International Journal of Pharmacy Practice",
    copy: "An educational discussion of common patient questions around menstrual symptoms and supportive counseling. The publication highlights tailored communication and safety screening in the community setting.",
  },
  {
    title: "Evidence-informed self-care pathways for cyclical symptoms",
    journal: "Clinical Therapeutics Review",
    copy: "A narrative evidence summary describing self-care decision pathways for cyclical symptoms. It reinforces the importance of differentiating uncomplicated symptoms from cases that need medical evaluation.",
  },
];

const features = [
  { label: "Fast Onset", icon: Clock3, tone: "blue" as const },
  { label: "Liquid Soft Capsule", icon: Pill, tone: "teal" as const },
  { label: "Easy to Swallow", icon: Sparkles, tone: "blue" as const },
  { label: "Supports Menstrual Pain & Bloating", icon: HeartPulse, tone: "teal" as const },
];

export default function ProductEvidencePage() {
  usePageMeta("Product & Evidence Library", "Product overview, mechanism information, feature summaries, and publication placeholders for pharmacist education.");

  return (
    <PortalShell>
      <PageHeader
        eyebrow="Knowledge library"
        title="Product & Evidence Library"
        description="Access product information, mechanisms, scientific evidence, and clinical references."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <SectionTitle eyebrow="Product overview" title="Designed around two menstrual symptom considerations." />
              <div className="mt-7 grid gap-5 sm:grid-cols-3">
                <div className="rounded-2xl bg-blue-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-700">Active ingredients</p>
                  <ul className="mt-3 space-y-1.5 text-sm font-semibold leading-6 text-slate-800">
                    <li>Ibuprofen</li>
                    <li>Pamabrom</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-teal-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-700">Dosage form</p>
                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-800">Liquid Soft Capsule</p>
                </div>
                <div className="rounded-2xl bg-slate-100 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Indications</p>
                  <ul className="mt-3 space-y-1.5 text-sm font-semibold leading-6 text-slate-800">
                    <li>Menstrual pain relief</li>
                    <li>Temporary relief of menstrual bloating</li>
                  </ul>
                </div>
              </div>
              <button type="button" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-md shadow-blue-100 transition hover:bg-blue-700">
                View Product Information <ArrowRight size={17} />
              </button>
            </div>

            <div className="rounded-3xl bg-slate-950 p-7 text-white shadow-xl shadow-slate-200 sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-teal-300">Quick orientation</p>
              <h2 className="mt-3 text-2xl font-bold tracking-[-0.03em]">An evidence-first resource, built for pharmacist conversation.</h2>
              <p className="mt-4 leading-7 text-slate-300">This prototype organizes product learning around symptom understanding, appropriate counseling, and safety awareness. Always refer to locally approved product information for actual use decisions.</p>
              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-700 bg-white/5 p-4">
                  <BookOpen className="text-teal-300" size={21} />
                  <p className="mt-6 text-sm font-bold">Evidence summaries</p>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-white/5 p-4">
                  <Beaker className="text-blue-300" size={21} />
                  <p className="mt-6 text-sm font-bold">Mechanism refreshers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Mechanism of action" title="Two complementary mechanism summaries." />
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-blue-100 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-start gap-4">
                <IconTile icon={Beaker} tone="blue" />
                <div>
                  <h3 className="text-xl font-bold text-slate-950">Ibuprofen</h3>
                  <p className="mt-1 text-sm text-slate-500">NSAID mechanism overview</p>
                </div>
              </div>
              <ul className="mt-7 grid gap-3 text-sm leading-6 text-slate-700">
                {["Inhibits prostaglandin synthesis", "Relieves menstrual pain", "Reduces inflammation"].map((item) => (
                  <li key={item} className="flex gap-3 rounded-xl bg-blue-50/70 p-3.5"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />{item}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-teal-100 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-start gap-4">
                <IconTile icon={HeartPulse} tone="teal" />
                <div>
                  <h3 className="text-xl font-bold text-slate-950">Pamabrom</h3>
                  <p className="mt-1 text-sm text-slate-500">Symptom support overview</p>
                </div>
              </div>
              <ul className="mt-7 grid gap-3 text-sm leading-6 text-slate-700">
                {["Mild diuretic", "Helps relieve temporary menstrual bloating"].map((item) => (
                  <li key={item} className="flex gap-3 rounded-xl bg-teal-50/70 p-3.5"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Product features" title="Quick-reference product characteristics." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.label} className="card-lift rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <IconTile icon={feature.icon} tone={feature.tone} />
                <h3 className="mt-5 text-base font-bold text-slate-900">{feature.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Clinical evidence"
            title="Publication pathways for deeper learning."
            description="The entries below are realistic placeholder references for this concept prototype. They intentionally do not state detailed clinical numerical data."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {evidence.map((study) => (
              <article key={study.title} className="card-lift flex rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-teal-700">
                    <FileText size={15} /> {study.journal}
                  </div>
                  <h3 className="mt-4 text-lg font-bold leading-6 tracking-[-0.02em] text-slate-900">{study.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{study.copy}</p>
                  <button type="button" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900">
                    Read Publication <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <SupportiveNote>Educational evidence summaries are provided for pharmacist learning in this prototype. Consult current locally approved references and product information before counseling.</SupportiveNote>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="text-sm font-bold text-slate-900">Need a safety refresher before counseling?</p>
            <p className="mt-1 text-sm text-slate-500">Review key cautions, contraindications, and referral prompts.</p>
          </div>
          <Link to="/safety" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900">Open safety information <ArrowRight size={17} /></Link>
        </div>
      </section>
    </PortalShell>
  );
}
