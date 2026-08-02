import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Globe, Bot, Rocket } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Ce que je Build — Steve" },
      { name: "description", content: "Sites web, agents IA et produits digitaux conçus pour accélérer votre business." },
      { property: "og:title", content: "Ce que je Build — Steve" },
      { property: "og:description", content: "Sites web, agents IA et produits digitaux conçus pour accélérer votre business." },
    ],
  }),
  component: Products,
});

const offers = [
  {
    icon: Globe,
    title: "Un site qui convertit",
    desc: "Clair, rapide, efficace. Pensé pour transformer vos visiteurs en clients.",
  },
  {
    icon: Bot,
    title: "Un agent IA qui travaille pour vous",
    desc: "Il répond, qualifie, automatise. 24h/24, sans pause.",
  },
  {
    icon: Rocket,
    title: "Un produit pour accélérer votre business",
    desc: "Vous avez une idée ? On la transforme en solution concrète.",
  },
];

function Products() {
  return (
    <PageShell
      eyebrow="OFFRES"
      title="Ce que je Build"
      intro="Ce que je peux mettre en place pour vous."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer, i) => (
          <motion.div
            key={offer.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * i, duration: 0.5 }}
            whileHover={{ y: -6, borderColor: "hsl(var(--primary) / 0.5)" }}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors"
          >
            <div className="mb-5 grid h-14 w-14 place-items-center rounded-xl bg-primary/10 text-primary">
              <offer.icon className="h-6 w-6" strokeWidth={2} />
            </div>
            <h3 className="text-lg font-bold leading-tight text-foreground">
              {offer.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {offer.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}
