import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/services/$slug")({
  head: () => ({
    meta: [
      { title: "Service — Steve, Product Builder" },
      { name: "description", content: "Details on services offered by Steve." },
    ],
  }),
  component: ServiceDetail,
  notFoundComponent: () => (
    <PageShell eyebrow="404" title="Service not found">
      <Link to="/" className="text-primary underline">Back home</Link>
    </PageShell>
  ),
});

const data: Record<string, { eyebrow: string; title: string; intro: string; deliverables: string[]; timeline: string; from: string }> = {
  mvp: {
    eyebrow: "SAAS PRODUCTS / MVP BUILD",
    title: "Ship your SaaS MVP",
    intro: "From idea to shipped product in weeks, not months. Design + build in one workflow.",
    deliverables: ["Product scope & user flows", "UI design system", "Full-stack build", "Auth, DB, payments", "Deployed & handed over"],
    timeline: "4–8 weeks",
    from: "from €6,500",
  },
  web: {
    eyebrow: "LANDING PAGES / WEB DESIGN",
    title: "High-converting landing pages",
    intro: "Beautiful, fast, conversion-focused web pages that make your product look inevitable.",
    deliverables: ["Positioning & copy input", "Wireframes & UI", "Framer or Next.js build", "Analytics & SEO", "Post-launch iteration"],
    timeline: "2–3 weeks",
    from: "from €2,500",
  },
  brand: {
    eyebrow: "BRAND IDENTITY / DESIGN SYSTEMS",
    title: "Brand & design system",
    intro: "A distinctive visual language and the system to keep it consistent as you scale.",
    deliverables: ["Logo & wordmark", "Color & type system", "Component library", "Guidelines doc", "Templates"],
    timeline: "3–5 weeks",
    from: "from €4,000",
  },
  strat: {
    eyebrow: "PRODUCT STRATEGY / CONSULTING",
    title: "Product strategy",
    intro: "Sparring on scope, positioning and roadmap for founders who want to ship the right thing.",
    deliverables: ["Discovery workshop", "Opportunity map", "Roadmap draft", "Weekly async review", "1:1 calls"],
    timeline: "ongoing",
    from: "from €1,500 / mo",
  },
};

function ServiceDetail() {
  const { slug } = useParams({ from: "/services/$slug" });
  const s = data[slug];
  if (!s) {
    return (
      <PageShell eyebrow="404" title="Service not found">
        <Link to="/" className="text-primary underline">Back home</Link>
      </PageShell>
    );
  }
  return (
    <PageShell eyebrow={s.eyebrow} title={s.title} intro={s.intro}>
      <div className="grid gap-6 sm:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            What you get
          </p>
          <div className="mt-4 space-y-2">
            {s.deliverables.map((d, i) => (
              <motion.div
                key={d}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-3"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm text-foreground/90">{d}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="h-fit rounded-2xl border border-border bg-card p-5"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Timeline</p>
          <p className="mt-1 text-lg font-bold">{s.timeline}</p>
          <p className="mt-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Investment</p>
          <p className="mt-1 text-lg font-bold text-primary">{s.from}</p>
          <Link
            to="/book"
            className="mt-6 block w-full rounded-full bg-primary py-2.5 text-center text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Book a call →
          </Link>
        </motion.div>
      </div>
    </PageShell>
  );
}
