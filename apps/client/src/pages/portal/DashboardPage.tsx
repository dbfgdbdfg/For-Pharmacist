import { ArrowRight, Award, BookMarked, BookOpenCheck, CheckCircle2, Clock3, FileText, GraduationCap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { IconTile, PageHeader, PortalShell, SectionTitle, usePageMeta } from "./shared";

const activities = [
  { title: "Completed Safety Module", meta: "Today · 12 min", icon: CheckCircle2, tone: "teal" as const },
  { title: "Viewed Counseling Guide", meta: "Yesterday · 8 min", icon: BookOpenCheck, tone: "teal" as const },
  { title: "New Clinical Evidence Available", meta: "This week · Product & Evidence", icon: FileText, tone: "teal" as const },
];

export default function DashboardPage() {
  usePageMeta("My Dashboard", "Prototype pharmacist learning dashboard with progress, saved counseling guides, evidence updates, certification, and activity.");

  return (
    <PortalShell>
      <PageHeader
        eyebrow="Learning workspace"
        title="Welcome Back, Pharmacist"
        description="A focused overview of learning progress, saved resources, and recent updates."
        compact
      />

      <section className="bg-slate-50 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between"><IconTile icon={GraduationCap} tone="teal" /><span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-bold text-teal-700">In progress</span></div>
              <p className="mt-5 text-sm font-bold text-slate-500">Learning Progress</p>
              <p className="mt-1 text-3xl font-bold tracking-[-0.04em] text-slate-950">68%</p>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-[68%] rounded-full bg-gradient-to-r from-teal-600 to-teal-500" /></div>
              <p className="mt-3 text-xs text-slate-500">3 of 4 core learning areas complete</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <IconTile icon={BookMarked} tone="teal" />
              <p className="mt-5 text-sm font-bold text-slate-500">Saved Counseling Guides</p>
              <p className="mt-1 text-3xl font-bold tracking-[-0.04em] text-slate-950">04</p>
              <p className="mt-4 text-xs leading-5 text-slate-500">Your most-used counseling pathways are ready to revisit.</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <IconTile icon={Sparkles} tone="teal" />
              <p className="mt-5 text-sm font-bold text-slate-500">Recently Updated Evidence</p>
              <p className="mt-1 text-3xl font-bold tracking-[-0.04em] text-slate-950">03</p>
              <p className="mt-4 text-xs leading-5 text-slate-500">New learning summaries available in the evidence library.</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <IconTile icon={Sparkles} tone="teal" />
              <p className="mt-5 text-sm font-bold text-slate-500">Better Day Pharmacist Certification</p>
              <p className="mt-1 text-3xl font-bold tracking-[-0.04em] text-slate-950">Complete 1 more module</p>
              <p className="mt-4 text-xs leading-5 text-slate-500">Unlock your prototype learning completion badge.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-7 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div>
            <SectionTitle eyebrow="Recent activity" title="Continue from where you left off." />
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              {activities.map((activity, index) => (
                <div key={activity.title} className={`flex gap-4 p-5 ${index < activities.length - 1 ? "border-b border-slate-100" : ""}`}>
                  <IconTile icon={activity.icon} tone={activity.tone} />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-900">{activity.title}</p>
                    <p className="mt-1 text-sm text-slate-500">{activity.meta}</p>
                  </div>
                  <Clock3 className="mt-2 text-slate-300" size={18} />
                </div>
              ))}
            </div>
          </div>
          <aside className="rounded-3xl bg-slate-950 p-8 text-white sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-300">Next recommended step</p>
            <h2 className="mt-3 text-2xl font-bold tracking-[-0.035em]">Complete the counseling flow refresher.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">Review patient assessment, pain and bloating evaluation, and safety counseling in one guided sequence.</p>
            <Link to="/counseling" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-teal-400 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-teal-300">
              Continue learning <ArrowRight size={17} />
            </Link>
          </aside>
        </div>
      </section>
    </PortalShell>
  );
}
