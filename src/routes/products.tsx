import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Mes produits — Steve" },
      { name: "description", content: "Templates de sites et agents IA prêts à l'emploi." },
      { property: "og:title", content: "Mes produits — Steve" },
      { property: "og:description", content: "Templates de sites et agents IA prêts à l'emploi." },
    ],
  }),
  component: Products,
});

const products = [
  { name: "Landing Kit Pro", price: "49 €", desc: "8 sections de landing page prêtes à convertir, éditables sans coder." },
  { name: "Site Starter", price: "79 €", desc: "Template Next.js + Supabase pour lancer un site vitrine ou un blog en un week-end." },
  { name: "AI Agent Template", price: "79 €", desc: "Squelette d'agent IA avec RAG, outils et interface chat, prêt à brancher sur vos données." },
  { name: "Automation Pack", price: "39 €", desc: "10 workflows n8n prêts à l'emploi : leads, emails, CRM, notifications." },
];

function Products() {
  return (
    <PageShell
      eyebrow="PRODUITS NUMÉRIQUES"
      title="Mes produits"
      intro="Templates et outils prêts à l'emploi pour lancer votre site web ou votre agent IA en quelques heures."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {products.map((p, i) => (
          <motion.a
            key={p.name}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 * i }}
            whileHover={{ y: -4 }}
            className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
          >
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <p className="text-sm font-bold text-foreground">{p.name}</p>
            <p className="mt-1 flex-1 text-xs text-muted-foreground">{p.desc}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-black text-primary">{p.price}</span>
              <span className="text-xs font-semibold text-muted-foreground transition-colors group-hover:text-foreground">
                Je le veux →
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </PageShell>
  );
}
