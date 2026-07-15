import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "My Work — Steve, Product Builder" },
      { name: "description", content: "A selection of products, MVPs and digital experiences crafted by Steve." },
      { property: "og:title", content: "My Work — Steve" },
      { property: "og:description", content: "A selection of products, MVPs and digital experiences crafted by Steve." },
    ],
  }),
  component: Work,
});

const projects = [
  { name: "Northlight SaaS", tag: "SAAS", year: "2025", desc: "Analytics platform for creators. From 0 to first 500 users in 8 weeks." },
  { name: "Fold Studio", tag: "BRAND", year: "2025", desc: "Full identity and marketing site for a design studio." },
  { name: "Kaya AI", tag: "MVP", year: "2024", desc: "AI writing assistant. Shipped MVP + waitlist in 3 weeks." },
  { name: "Ember Landing", tag: "WEB", year: "2024", desc: "High-converting landing page for a Series A fintech." },
  { name: "Lumen Notes", tag: "MVP", year: "2024", desc: "Minimal note-taking app with local-first sync." },
];

function Work() {
  return (
    <PageShell
      eyebrow="SELECTED WORK"
      title="See my work"
      intro="A few products I've designed, built and shipped in the last months."
    >
      <div className="space-y-3">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
            whileHover={{ y: -2 }}
            className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
          >
            <div className="grid h-14 w-20 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-[10px] font-black tracking-widest text-primary">
              {p.tag}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-3">
                <p className="truncate text-sm font-bold text-foreground">{p.name}</p>
                <span className="text-[10px] font-mono text-muted-foreground">{p.year}</span>
              </div>
              <p className="mt-1 truncate text-xs text-muted-foreground">{p.desc}</p>
            </div>
            <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
          </motion.a>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-card/50 p-6 text-center">
        <p className="text-sm text-muted-foreground">Want to see more or build together?</p>
        <Link
          to="/book"
          className="mt-3 inline-block rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          Book a call →
        </Link>
      </div>
    </PageShell>
  );
}
