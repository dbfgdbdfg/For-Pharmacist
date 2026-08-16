import { ArrowRight, BadgeAlert, ClipboardPlus, FlaskConical, Mail, Phone, Stethoscope } from "lucide-react";
import { IconTile, PageHeader, PortalShell, SectionTitle, SupportiveNote, usePageMeta } from "./shared";

const services = [
  { title: "Medical Inquiry", copy: "Request appropriate medical-information support for a product or use-related question.", icon: Stethoscope, tone: "teal" as const },
  { title: "Scientific Inquiry", copy: "Route literature, evidence, or scientific-exchange questions to the right specialist.", icon: FlaskConical, tone: "blue" as const },
  { title: "Product Complaint", copy: "Document a product quality concern through the approved quality reporting process.", icon: ClipboardPlus, tone: "amber" as const },
  { title: "Adverse Event Reporting", copy: "Report a possible adverse event through the applicable local pharmacovigilance pathway.", icon: BadgeAlert, tone: "red" as const },
];

export default function ProfessionalSupportPage() {
  usePageMeta("Professional Support", "Contact pathways for medical and scientific inquiries, quality concerns, and adverse event reporting.");

  return (
    <PortalShell>
      <PageHeader
        eyebrow="Professional services"
        title="Professional Support"
        description="Contact medical and scientific teams when additional support is required."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Choose the right route" title="Four focused support pathways." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="card-lift flex min-h-[248px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <IconTile icon={service.icon} tone={service.tone} />
                <h2 className="mt-5 text-lg font-bold text-slate-950">{service.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.copy}</p>
                <button type="button" className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-teal-700 hover:text-teal-900">
                  Start an inquiry <ArrowRight size={16} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-7 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-teal-700 to-teal-950 p-8 text-white sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-300">Local connection</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em]">Bring the right question to the right team.</h2>
            <p className="mt-4 leading-7 text-teal-100">Medical, scientific, quality, and safety questions often follow different processes. Use this hub to identify the appropriate route before contacting your local support network.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-teal-700">Prototype contact panel</p>
            <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-slate-950">Contact Local Representative</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">The details below are intentionally non-functional placeholders for this competition concept prototype.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5">
                <Mail className="text-teal-600" size={20} />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.13em] text-slate-400">Email</p>
                <p className="mt-1 text-sm font-bold text-slate-800">medical.support@prototype.example</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <Phone className="text-teal-600" size={20} />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.13em] text-slate-400">Phone</p>
                <p className="mt-1 text-sm font-bold text-slate-800">+00 0000 0000</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 sm:col-span-2">
                <Stethoscope className="text-teal-600" size={20} />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.13em] text-slate-400">Distributor</p>
                <p className="mt-1 text-sm font-bold text-slate-800">Local distributor contact to be confirmed in a production implementation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SupportiveNote>For a suspected adverse event, use the applicable local reporting process without delay. This prototype does not submit or store reports.</SupportiveNote>
        </div>
      </section>
    </PortalShell>
  );
}
