import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Globe, Bot, Rocket, Calendar, MessageSquare, FileText, Hammer } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Ce que je build — Steve" },
      { name: "description", content: "Sites web, agents IA et produits digitaux conçus pour accélérer votre business." },
      { property: "og:title", content: "Ce que je build — Steve" },
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

const steps = [
  {
    icon: MessageSquare,
    title: "1. On échange",
    desc: "On prend 15 min pour comprendre votre besoin, vos objectifs et vos contraintes.",
  },
  {
    icon: FileText,
    title: "2. Scope & devis",
    desc: "Je vous propose un scope clair, un planning réaliste et un budget transparent.",
  },
  {
    icon: Hammer,
    title: "3. Je construis",
    desc: "Développement itératif avec des points réguliers pour ajuster en cours de route.",
  },
  {
    icon: Rocket,
    title: "4. Livraison",
    desc: "Mise en ligne, tests finaux et un mois de support pour peaufiner les détails.",
  },
];

function Products() {
  return (
    <PageShell eyebrow="OFFRES" title="Ce que je build">
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

      {/* Comment ça se passe */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mt-16"
      >
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Process
        </p>
        <h2 className="mt-2 text-2xl font-bold text-foreground">Comment ça se passe</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.4 }}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                <step.icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="text-sm font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-16 flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center sm:p-10"
      >
        <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
          <Calendar className="h-5 w-5" strokeWidth={2} />
        </div>
        <h3 className="text-xl font-bold text-foreground">
          Vous avez un projet en tête ?
        </h3>
        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          Discutons de votre idée et voyons comment la transformer en produit concret.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          Me contacter
          <Rocket className="h-4 w-4" strokeWidth={2} />
        </Link>
      </motion.div>
    </PageShell>
  );
}
