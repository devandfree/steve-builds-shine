import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/services/$slug")({
  head: () => ({
    meta: [
      { title: "Service — Steve" },
      { name: "description", content: "Détails des services proposés par Steve." },
    ],
  }),
  component: ServiceDetail,
  notFoundComponent: () => (
    <PageShell eyebrow="404" title="Service introuvable">
      <Link to="/" className="text-primary underline">Retour à l&apos;accueil</Link>
    </PageShell>
  ),
});

const data: Record<string, { eyebrow: string; title: string; intro: string; deliverables: string[]; timeline: string; from: string }> = {
  web: {
    eyebrow: "SITES WEB / LANDING PAGES",
    title: "Un site qui convertit",
    intro: "Site vitrine ou landing page pensée pour vendre. Rapide, responsive, prête à générer des leads.",
    deliverables: [
      "Structure & copywriting orienté conversion",
      "Design sur-mesure (sans template générique)",
      "Développement Next.js / Lovable",
      "SEO technique, analytics et formulaires",
      "Mise en ligne + prise en main",
    ],
    timeline: "1 à 3 semaines",
    from: "à partir de 1 500 €",
  },
  ai: {
    eyebrow: "AGENTS IA / AUTOMATISATIONS",
    title: "Automatisez avec l'IA",
    intro: "Agents IA sur-mesure branchés sur vos outils : support, ventes, contenu, ops. Vous récupérez du temps, tout de suite.",
    deliverables: [
      "Audit des tâches à automatiser",
      "Agent IA (OpenAI / Claude) avec vos données",
      "Intégrations : Slack, Notion, HubSpot, Gmail…",
      "Workflows n8n / Make",
      "Suivi, logs et optimisation",
    ],
    timeline: "2 à 5 semaines",
    from: "à partir de 2 500 €",
  },
  strat: {
    eyebrow: "CONSEIL / PRODUCT STRATEGY",
    title: "Conseil produit",
    intro: "Sparring pour founders : cadrage, positionnement, roadmap et choix techniques. Livrer la bonne chose, pas plus.",
    deliverables: [
      "Atelier de discovery",
      "Cartographie des opportunités",
      "Ébauche de roadmap",
      "Revue asynchrone hebdo",
      "Appels 1:1",
    ],
    timeline: "en continu",
    from: "à partir de 1 200 € / mois",
  },
};

function ServiceDetail() {
  const { slug } = useParams({ from: "/services/$slug" });
  const s = data[slug];
  if (!s) {
    return (
      <PageShell eyebrow="404" title="Service introuvable">
        <Link to="/" className="text-primary underline">Retour à l&apos;accueil</Link>
      </PageShell>
    );
  }
  return (
    <PageShell eyebrow={s.eyebrow} title={s.title} intro={s.intro}>
      <div className="grid gap-6 sm:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Ce que vous obtenez
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
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Délai</p>
          <p className="mt-1 text-lg font-bold">{s.timeline}</p>
          <p className="mt-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Tarif</p>
          <p className="mt-1 text-lg font-bold text-primary">{s.from}</p>
          <Link
            to="/book"
            className="mt-6 block w-full rounded-full bg-primary py-2.5 text-center text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Réserver un appel →
          </Link>
        </motion.div>
      </div>
    </PageShell>
  );
}
