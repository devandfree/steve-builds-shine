import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, Instagram, Twitter, Linkedin, Github, ArrowUpRight, Plus, Minus, HelpCircle } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Steve" },
      { name: "description", content: "Envie d'avancer sur un site web ou un agent IA ? Contactez Steve directement." },
      { property: "og:title", content: "Contact — Steve" },
      { property: "og:description", content: "Envie d'avancer sur un site web ou un agent IA ? Contactez Steve directement." },
    ],
  }),
  component: Contact,
});

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "steve@example.com",
    href: "mailto:steve@example.com",
    desc: "Pour un projet, une question ou juste dire bonjour.",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Envoyer un message",
    href: "https://wa.me/",
    desc: "Réponse rapide en message direct.",
  },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Twitter, label: "X/Twitter", href: "https://x.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "Github", href: "https://github.com" },
];

const faqs = [
  {
    question: "Que puis-je vous demander exactement ?",
    answer:
      "Un site vitrine, une landing page, un site e-commerce, ou un agent IA qui automatise une tâche récurrente (réponses, qualification, RDV...).",
  },
  {
    question: "Combien de temps prend un projet ?",
    answer:
      "Un site web simple prend généralement 1 à 2 semaines. Un agent IA plus complexe peut nécessiter 2 à 4 semaines selon les intégrations.",
  },
  {
    question: "Quel est le budget indicatif ?",
    answer:
      "Chaque projet est sur mesure. Après un premier échange, je vous envoie une proposition claire avec les options et les délais.",
  },
  {
    question: "Travaillez-vous avec des outils no-code ?",
    answer:
      "Oui. Je travaille avec une stack moderne (low-code, no-code et IA) pour des performances, un SEO et une maintenabilité optimales. Avec un contôle sur le code source.",
  },
  {
    question: "Et après la livraison, ça fonctionne comment ?",
    answer:
      "Je vous accompagne pour la mise en ligne et je vous offre un mois de support gratuit pour ajuster les derniers détails.",
  },
];

function FAQItem({
  faq,
  index,
}: {
  faq: { question: string; answer: string };
  index: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55 + index * 0.05, duration: 0.4 }}
      className="overflow-hidden rounded-2xl border border-border bg-card"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-secondary/50"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-foreground">{faq.question}</span>
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-secondary text-foreground transition-colors">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Contact() {
  return (
    <PageShell
      eyebrow="ON DISCUTE"
      title="Contact"
      intro="Vous avez un projet, une idée ou une question ? Choisissez le canal qui vous convient."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {channels.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * i, duration: 0.5 }}
            whileHover={{ y: -4, borderColor: "hsl(var(--primary) / 0.5)" }}
            className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-colors"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
            <div className="mt-4">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                {c.label}
              </p>
              <p className="mt-1 text-lg font-bold text-foreground">{c.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{c.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-12 rounded-2xl border border-border bg-card p-6 text-center"
      >
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Ou suivez-moi
        </p>
        <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-2">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.05, type: "spring", stiffness: 260, damping: 20 }}
              whileHover={{ scale: 1.1, rotate: -4 }}
              whileTap={{ scale: 0.9 }}
              className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <s.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* FAQ */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-12"
      >
        <div className="mb-6 flex items-center gap-2">
          <HelpCircle className="h-4 w-4 text-primary" />
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Questions fréquentes
          </p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </div>
      </motion.section>
    </PageShell>
  );
}
