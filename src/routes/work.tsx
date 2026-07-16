import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Mes projets — Steve" },
      { name: "description", content: "Sites web, micro-SaaS et agents IA livrés par Steve." },
      { property: "og:title", content: "Mes projets — Steve" },
      { property: "og:description", content: "Sites web, micro-SaaS et agents IA livrés par Steve." },
    ],
  }),
  component: Work,
});

const projects = [
  { name: "Northlight Analytics", tag: "SAAS", year: "2025", desc: "Micro-SaaS d'analytics pour créateurs. 0 → 500 utilisateurs payants en 8 semaines." },
  { name: "Kaya Support AI", tag: "IA", year: "2025", desc: "Agent IA qui répond aux emails support 24/7. -70% de temps de traitement." },
  { name: "Ember Landing", tag: "WEB", year: "2025", desc: "Landing page pour une fintech Série A. +38% de conversion vs l'ancienne version." },
  { name: "Fold Studio", tag: "WEB", year: "2024", desc: "Site vitrine pour un studio créatif, livré en 5 jours." },
  { name: "Lumen Notes", tag: "SAAS", year: "2024", desc: "Micro-SaaS de prise de notes local-first. Stripe + Supabase." },
  { name: "AutoLeads", tag: "IA", year: "2024", desc: "Agent IA de qualification de leads B2B branché sur HubSpot." },
];

function Work() {
  return (
    <PageShell
      eyebrow="PROJETS SÉLECTIONNÉS"
      title="Mes projets"
      intro="Quelques sites, micro-SaaS et agents IA que j'ai conçus, développés et mis en ligne récemment."
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
        <p className="text-sm text-muted-foreground">Envie de construire quelque chose ensemble ?</p>
        <Link
          to="/book"
          className="mt-3 inline-block rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          Réserver un appel →
        </Link>
      </div>
    </PageShell>
  );
}
