import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Mes projets — Steve" },
      { name: "description", content: "Sites web et agents IA conçus et livrés par Steve." },
      { property: "og:title", content: "Mes projets — Steve" },
      { property: "og:description", content: "Sites web et agents IA conçus et livrés par Steve." },
    ],
  }),
  component: Work,
});

const projects = [
  {
    name: "Aoline",
    tag: "WEB",
    year: "2025",
    desc: "Landing page avec formulaire de contact.",
    href: "https://aoline-consulting.vercel.app/",
  },
  {
    name: "Ecoland",
    tag: "WEB",
    year: "2025",
    desc: "Site vitrine complet avec fonction e-commerce (panier d'achat) et produits.",
    href: "https://ecoland-two.vercel.app/",
  },
  {
    name: "Renovex",
    tag: "WEB",
    year: "2025",
    desc: "Site web vitrine complet avec blog.",
    href: "https://renovex-btp.vercel.app/",
  },
];

function Work() {
  return (
    <PageShell
      eyebrow="PROJETS SÉLECTIONNÉS"
      title="Mes projets"
      intro="Quelques sites web et agents IA que j'ai conçus, développés et mis en ligne récemment."
    >
      <div className="space-y-3">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
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
          to="/contact"
          className="mt-3 inline-block rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          Me contacter →
        </Link>
      </div>
    </PageShell>
  );
}
