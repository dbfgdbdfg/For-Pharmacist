import { ChevronDown, CircleCheck, ClipboardList, HeartPulse, MessageCircleQuestion, Stethoscope } from "lucide-react";
import { useState } from "react";
import { IconTile, PageHeader, PortalShell, SectionTitle, SupportiveNote, usePageMeta } from "./shared";

const questions = [
  "Do you have menstrual pain?",
  "Are you experiencing bloating?",
  "When did the pain begin?",
  "Have you taken another pain reliever today?",
];

const faqItems = [
  {
    question: "When should patients take this medicine?",
    answer: "Counsel according to current locally approved product information and the individual patient’s symptom presentation. Confirm timing, suitability, and any relevant safety considerations.",
  },
  {
    question: "How many times can it be taken per day?",
    answer: "Refer to the current locally approved product information for dosing frequency and maximum daily limits. Do not extrapolate from this concept prototype.",
  },
  {
    question: "Can it be used with another NSAID?",
    answer: "Avoid duplicate NSAID use. Ask specifically about other pain relievers already taken and counsel patients to seek advice if unsure.",
  },
  {
    question: "What is Pamabrom?",
    answer: "Pamabrom is a mild diuretic that may help relieve temporary menstrual bloating. Use this explanation alongside the approved product information.",
  },
  {
    question: "Can patients take it even without bloating?",
    answer: "Support the patient based on the locally approved indication, their symptoms, and the current product information. Avoid presenting this prototype as prescribing guidance.",
  },
  {
    question: "What if the patient has a sensitive stomach?",
    answer: "Ask about stomach concerns, medical history, and relevant risk factors. Use the safety information and approved labeling to determine whether referral or an alternative discussion is appropriate.",
  },
  {
    question: "When should patients be referred to a physician?",
    answer: "Refer promptly when red flags are present, including severe abdominal pain, heavy bleeding, high fever, fainting, possible pregnancy, or persistent symptoms.",
  },
  {
    question: "How is it different from regular ibuprofen?",
    answer: "This resource describes ibuprofen alongside pamabrom for temporary menstrual pain and bloating considerations. Use the product overview and approved product information for the exact product context.",
  },
];

const flow = [
  "Patient Assessment",
  "Pain Evaluation",
  "Bloating Evaluation",
  "Medical History",
  "Product Recommendation",
  "Safety Counseling",
];

export default function CounselingPage() {
  usePageMeta("Counseling Guide", "Practical, evidence-informed counseling prompts, patient assessment flow, and frequently asked questions for pharmacist education.");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <PortalShell>
      <PageHeader
        eyebrow="Conversation support"
        title="Counseling Guide"
        description="Support effective and evidence-based patient counseling."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-7 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-300">Quick guidance</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em]">Start with a focused patient conversation.</h2>
            <p className="mt-4 leading-7 text-slate-300">Ask a small number of purposeful questions before moving to treatment discussion and safety counseling.</p>
            <div className="mt-8 space-y-3">
              {questions.map((question, index) => (
                <div key={question} className="flex items-center gap-3 rounded-xl border border-slate-700 bg-white/5 px-4 py-3">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-teal-400 text-xs font-bold text-slate-950">{index + 1}</span>
                  <span className="text-sm font-semibold">{question}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-teal-100 bg-teal-50/60 p-7 sm:p-9">
            <div className="flex gap-4">
              <IconTile icon={MessageCircleQuestion} tone="teal" />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-700">Example counseling</p>
                <p className="mt-3 text-xl font-bold leading-8 tracking-[-0.025em] text-slate-900">
                  “If menstrual pain is accompanied by bloating, consider a treatment option that addresses both symptoms while providing appropriate counseling.”
                </p>
              </div>
            </div>
            <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-slate-800">A better conversation is not just a product conversation.</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Confirm symptom pattern, check for duplicate NSAID use and relevant medical history, then make safety counseling clear and actionable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Evidence guidance" title="Keep the explanation simple, factual, and patient-centred." />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: HeartPulse,
                title: "Why pain occurs",
                copy: "Menstrual pain is associated with increased prostaglandin production.",
                tone: "teal" as const,
              },
              {
                icon: Stethoscope,
                title: "How ibuprofen helps",
                copy: "Ibuprofen helps relieve pain.",
                tone: "teal" as const,
              },
              {
                icon: CircleCheck,
                title: "How pamabrom may help",
                copy: "Pamabrom may help reduce temporary menstrual bloating.",
                tone: "teal" as const,
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <IconTile icon={item.icon} tone={item.tone} />
                <h3 className="mt-5 text-lg font-bold text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Counseling flow"
            title="Move through each consultation step with confidence."
            description="The flow helps bring assessment, recommendation, and safety advice into the same conversation."
          />
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-8">
            <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:justify-between">
              {flow.map((step, index) => (
                <div key={step} className="contents">
                  <div className="flex min-h-24 flex-1 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <span className="text-xs font-bold text-teal-600">0{index + 1}</span>
                    <p className="mt-4 text-sm font-bold leading-5 text-slate-800">{step}</p>
                  </div>
                  {index < flow.length - 1 && (
                    <div className="grid h-6 place-items-center text-teal-500 lg:h-auto lg:w-7">
                      <span className="block text-lg lg:hidden">↓</span>
                      <span className="hidden text-lg lg:block">→</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-7">
            <SupportiveNote>Use the sequence as a practical prompt, not a script. Adapt the discussion to the patient’s symptoms, medical history, and current locally approved information.</SupportiveNote>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionTitle eyebrow="Frequently asked questions" title="Clear answers to common questions at the counter." />
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {faqItems.map((item, index) => {
              const expanded = openFaq === index;
              return (
                <div key={item.question} className="border-b border-slate-100 last:border-0">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setOpenFaq(expanded ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left transition hover:bg-slate-50"
                  >
                    <span className="text-sm font-bold text-slate-800 sm:text-base">{item.question}</span>
                    <ChevronDown className={`shrink-0 text-teal-600 transition-transform ${expanded ? "rotate-180" : ""}`} size={19} />
                  </button>
                  {expanded && <p className="border-t border-slate-100 bg-slate-50 px-6 py-5 text-sm leading-7 text-slate-600">{item.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PortalShell>
  );
}
