import type { LucideIcon } from "lucide-react";
import {
  Bell,
  BookOpenCheck,
  ChevronRight,
  Menu,
  Search,
  ShieldCheck,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const navItems = [
  { label: "Product & Evidence", to: "/product-evidence" },
  { label: "Safety", to: "/safety" },
  { label: "Counseling Guide", to: "/counseling" },
  { label: "Professional Support", to: "/professional-support" },
];

const resourceSearch = [
  { title: "Better Day Hub home", to: "/", category: "Overview" },
  { title: "Product & Evidence Library", to: "/product-evidence", category: "Evidence" },
  { title: "Safety Information", to: "/safety", category: "Safety" },
  { title: "Counseling Guide", to: "/counseling", category: "Counseling" },
  { title: "Professional Support", to: "/professional-support", category: "Support" },
  { title: "My Dashboard", to: "/dashboard", category: "Learning" },
];

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} | Better Day Hub`;
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", description);
    }
  }, [description, title]);
}

export function PortalShell({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const results = useMemo(
    () =>
      resourceSearch.filter((item) =>
        `${item.title} ${item.category}`.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );

  const closeMenus = () => {
    setMobileOpen(false);
    setSearchOpen(false);
    setQuery("");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="border-b border-blue-100 bg-blue-950 px-4 py-2 text-center text-[10px] font-semibold tracking-[0.12em] text-blue-100 sm:text-xs">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <span>FOR HEALTHCARE PROFESSIONALS ONLY</span>
          <span className="hidden h-3 w-px bg-blue-700 sm:block" />
          <span>CONCEPT PROTOTYPE FOR COMPETITION</span>
          <span className="hidden h-3 w-px bg-blue-700 sm:block" />
          <span>NOT AN OFFICIAL COMMERCIAL WEBSITE</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="group flex items-center gap-3" onClick={closeMenus}>
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 text-white shadow-lg shadow-blue-200 transition-transform duration-200 group-hover:-translate-y-0.5">
              <BookOpenCheck size={21} strokeWidth={2.4} />
            </span>
            <span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-teal-600">Easy&apos;N 6 Eve</span>
              <span className="block text-lg font-bold tracking-tight text-slate-950">Better Day Hub</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                    active ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-50 hover:text-blue-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              aria-label="Search resources"
              onClick={() => setSearchOpen((open) => !open)}
              className="grid h-10 w-10 place-items-center rounded-full text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <Search size={19} />
            </button>
            <button
              type="button"
              aria-label="Notifications"
              className="relative grid h-10 w-10 place-items-center rounded-full text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <Bell size={19} />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-teal-500 ring-2 ring-white" />
            </button>
            <Link
              to="/dashboard"
              aria-label="Open pharmacist dashboard"
              className={`hidden h-10 items-center gap-2 rounded-full border px-3 text-sm font-semibold transition sm:flex ${
                location.pathname === "/dashboard"
                  ? "border-blue-200 bg-blue-50 text-blue-700"
                  : "border-slate-200 text-slate-700 hover:border-blue-200 hover:bg-blue-50"
              }`}
            >
              <UserRound size={17} />
              <span className="hidden xl:inline">Pharmacist</span>
            </Link>
            <button
              type="button"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setMobileOpen((open) => !open)}
              className="grid h-10 w-10 place-items-center rounded-lg text-slate-700 transition hover:bg-blue-50 hover:text-blue-700 lg:hidden"
            >
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="absolute inset-x-0 top-full border-b border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/5">
            <div className="mx-auto max-w-3xl">
              <label className="flex items-center gap-3 rounded-xl border border-blue-200 bg-blue-50/50 px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500">
                <Search size={18} className="text-blue-600" />
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search education resources, safety, counseling..."
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />
                <kbd className="rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] text-slate-400">ESC</kbd>
              </label>
              <div className="mt-2 overflow-hidden rounded-xl border border-slate-100 bg-white">
                {results.length ? (
                  results.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={closeMenus}
                      className="flex items-center justify-between px-4 py-3 transition hover:bg-blue-50"
                    >
                      <span>
                        <span className="block text-sm font-semibold text-slate-800">{item.title}</span>
                        <span className="text-xs text-slate-500">{item.category}</span>
                      </span>
                      <ChevronRight size={17} className="text-blue-600" />
                    </Link>
                  ))
                ) : (
                  <p className="px-4 py-5 text-sm text-slate-500">No matching resources. Try “safety” or “counseling”.</p>
                )}
              </div>
            </div>
          </div>
        )}

        {mobileOpen && (
          <div className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden">
            <nav className="mx-auto grid max-w-7xl gap-1" aria-label="Mobile navigation">
              {navItems.map((item) => {
                const active = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={closeMenus}
                    className={`rounded-lg px-3 py-3 text-sm font-semibold ${
                      active ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                to="/dashboard"
                onClick={closeMenus}
                className="mt-1 rounded-lg bg-slate-950 px-3 py-3 text-sm font-semibold text-white"
              >
                My Dashboard
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 shrink-0 text-teal-600" size={19} />
            <p className="max-w-2xl text-slate-500">
              Better Day Hub is a competition concept prototype for licensed pharmacists. It is not official prescribing information or a substitute for local approved product information.
            </p>
          </div>
          <div className="flex gap-4 text-xs font-semibold text-slate-500">
            <Link to="/safety" className="hover:text-blue-700">Safety</Link>
            <Link to="/professional-support" className="hover:text-blue-700">Medical support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  compact?: boolean;
}) {
  return (
    <section className={`clinical-grid border-b border-slate-100 ${compact ? "py-12" : "py-16 sm:py-20"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-teal-700 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            {eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-[-0.045em] text-slate-950 sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-600">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-slate-950 sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 leading-7 text-slate-600">{description}</p>}
    </div>
  );
}

export function IconTile({ icon: Icon, tone = "blue" }: { icon: LucideIcon; tone?: "blue" | "teal" | "amber" | "red" }) {
  const tones = {
    blue: "bg-blue-50 text-blue-600 ring-blue-100",
    teal: "bg-teal-50 text-teal-600 ring-teal-100",
    amber: "bg-amber-50 text-amber-600 ring-amber-100",
    red: "bg-rose-50 text-rose-600 ring-rose-100",
  };
  return (
    <span className={`grid h-11 w-11 place-items-center rounded-xl ring-1 ${tones[tone]}`}>
      <Icon size={21} strokeWidth={2.1} />
    </span>
  );
}

export function SupportiveNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 p-4 text-sm leading-6 text-blue-900">
      <ShieldCheck className="mt-0.5 shrink-0 text-blue-600" size={19} />
      <p>{children}</p>
    </div>
  );
}
