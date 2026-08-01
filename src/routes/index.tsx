import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Play,
  ShoppingBag,
  CheckCircle2,
  Mail,
  Instagram,
  MessageCircle,
  Twitter,
  Linkedin,
  Github,
  Code2,
  Database,
  Sparkles,
  Bot,
  Zap,
  Rocket,
  ChevronRight,
  Plus,
  Minus,
} from "lucide-react";
import { useState } from "react";
import steveAvatar from "@/assets/steve-avatar.webp.asset.json";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const tools = [
  { icon: Code2, name: "Lovable" },
  { icon: Rocket, name: "Next.js" },
  { icon: Database, name: "Supabase" },
  { icon: Bot, name: "OpenAI" },
  { icon: Zap, name: "n8n" },
  { icon: Sparkles, name: "Claude" },
];

const services = [
  { title: "SITES WEB /\nLANDING PAGES", tag: "WEB", slug: "web" },
  { title: "AGENTS IA /\nAUTOMATISATIONS", tag: "IA", slug: "ai" },
  { title: "CONSEIL /\nPRODUCT STRATEGY", tag: "CONSEIL", slug: "strat" },
];

const contacts = [
  { icon: Mail, label: "Email", href: "mailto:steve@example.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: MessageCircle, label: "Whatsapp", href: "https://wa.me/" },
  { icon: Twitter, label: "X/Twitter", href: "https://x.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "Github", href: "https://github.com" },
];

const faqs = [
  {
    question: "Quel type de site web peux-tu créer ?",
    answer:
      "Sites vitrines, landing pages, portfolios, blogs et sites orientés conversion. Chaque site est pensé pour être rapide, responsive, SEO-friendly et conçu pour convertir vos visiteurs en clients.",
  },
  {
    question: "Qu'est-ce qu'un agent IA et comment peut-il m'aider ?",
    answer:
      "Un agent IA est un assistant automatisé qui effectue des tâches répétitives à votre place : répondre au support, qualifier des leads, rédiger du contenu, synchroniser des données entre vos outils. Je le connecte à vos outils existants (Slack, Notion, Gmail, HubSpot, etc.) via des workflows n8n ou Make.",
  },
  {
    question: "Quel est le délai pour livrer un site web ?",
    answer:
      "Un site vitrine ou une landing page simple se livre généralement en 1 à 3 semaines. Les agents IA multi-étapes ou les sites complexes demandent entre 2 et 6 semaines selon le périmètre.",
  },
  {
    question: "Quel est le délai pour déployer un agent IA ?",
    answer:
      "Un agent IA simple (support, qualification ou rédaction) se déploie en 2 à 4 semaines. Les agents connectés à plusieurs outils et bases de données demandent plus de cadrage, généralement 4 à 6 semaines.",
  },
  {
    question: "Quels outils et technologies utilises-tu ?",
    answer:
      "Je travaille principalement avec Lovable, Next.js, Supabase, OpenAI, Claude, n8n et Resend. Cette stack me permet de livrer vite, de manière fiable et scalable, que ce soit pour un site ou un agent IA.",
  },
  {
    question: "Comment se déroule un projet avec toi ?",
    answer:
      "On démarre par un appel de cadrage gratuit pour bien comprendre votre besoin. Ensuite je propose un plan, un devis et un délai. Durant le projet, je fais des points réguliers et vous livre une version testable avant la mise en ligne.",
  },
  {
    question: "Combien coûte un projet type ?",
    answer:
      "Les sites web commencent à 1 500 € et les agents IA à 2 500 €. Le conseil produit est proposé à partir de 1 200 € par mois. Chaque devis est ajusté en fonction du périmètre exact.",
  },
];

const MotionLink = motion(Link);

function PillButton({
  icon: Icon,
  label,
  to,
}: {
  icon: typeof Play;
  label: string;
  to: "/work" | "/products" | "/book";
}) {
  return (
    <MotionLink
      to={to}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="group flex items-center gap-2 rounded-full border border-border bg-card/60 px-2 py-2 pr-5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:bg-card"
    >
      <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground">
        <Icon className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
      <span>{label}</span>
    </MotionLink>
  );
}

function ServiceCard({ title, tag, slug, index }: { title: string; tag: string; slug: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <Link
        to="/services/$slug"
        params={{ slug }}
        className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-3 transition-colors hover:border-primary/40"
      >
        <div className="grid h-14 w-20 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-[10px] font-black tracking-widest text-primary">
          {tag}
        </div>
        <div className="min-w-0 flex-1">
          <p className="whitespace-pre-line text-[11px] font-bold uppercase tracking-wider text-foreground/90 leading-tight">
            {title}
          </p>
        </div>
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-1">
          <ChevronRight className="h-4 w-4" strokeWidth={3} />
        </span>
      </Link>
    </motion.div>
  );
}

function FAQItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      className="overflow-hidden rounded-2xl border border-border bg-card"
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-secondary/50"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold text-foreground">{question}</span>
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
          {isOpen ? (
            <Minus className="h-3.5 w-3.5" strokeWidth={3} />
          ) : (
            <Plus className="h-3.5 w-3.5" strokeWidth={3} />
          )}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5">
          <p className="text-sm leading-relaxed text-muted-foreground">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Portfolio() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-8 sm:py-10">
        {/* Nav */}
        <nav className="grid grid-cols-2 items-center gap-3 sm:flex sm:justify-between">
          <PillButton icon={Play} label="Mes projets" to="/work" />
          <div className="hidden sm:block">
            <PillButton icon={ShoppingBag} label="Mes produits" to="/products" />
          </div>
          <PillButton icon={CheckCircle2} label="Réserver un appel" to="/book" />
        </nav>

        {/* Hero */}
        <section className="relative mt-10 grid gap-8 sm:mt-16 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 sm:order-1"
          >
            <div className="mb-4 h-px w-16 bg-primary" />
            <h2 className="text-xl font-semibold leading-tight sm:text-2xl">
              Product Builder<br />Web & IA
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative order-1 mx-auto sm:order-2"
          >
            <motion.img
              src={steveAvatar.url}
              alt="Steve, Product Builder"
              width={420}
              height={520}
              className="relative z-10 h-auto w-[280px] object-contain sm:w-[380px]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 text-center">
              <p className="text-[10px] font-semibold tracking-[0.4em] text-primary">STEVE</p>
              <h1 className="-mt-1 text-6xl font-black tracking-tighter sm:text-7xl">
                <span className="text-foreground">st</span>
                <span className="text-foreground/40">eve</span>
              </h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-3 text-sm leading-relaxed text-muted-foreground sm:text-right"
          >
            <p>
              Salut, moi c&apos;est Steve. Je conçois et je développe des sites web
              et des agents IA pour transformer vos idées en produits utiles —
              vite et sans friction.
            </p>
          </motion.div>
        </section>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          {tools.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.15, color: "hsl(var(--primary))" }}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <t.icon className="h-4 w-4" />
              <span className="text-xs font-medium">{t.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Statement / À propos */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative mt-20"
        >
          {/* Background decorative elements */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_400px] lg:items-end">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                Product Builder Web & IA
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl font-extrabold leading-[0.95] tracking-tighter text-foreground sm:text-5xl lg:text-6xl"
              >
                Je construis des produits web utiles,
                <br className="hidden sm:block" />
                rapides et rentables —{" "}
                <span className="text-muted-foreground">pas des maquettes.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                Je ne suis pas designer, je suis Product Builder. Mon truc c&apos;est de passer
                de l&apos;idée au produit en ligne : un site qui convertit ou un agent IA
                qui automatise ce qui vous prend trop de temps.
              </motion.p>
            </div>

            {/* Tech Stack Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-4 gap-3 rounded-3xl border border-border/50 bg-card/40 p-6 backdrop-blur-sm"
            >
              {[
                { label: "LV", name: "Lovable" },
                { label: "VC", name: "Vercel" },
                { label: "ST", name: "Stripe" },
                { label: "SB", name: "Supabase" },
                { label: "AI", name: "OpenAI" },
                { label: "CL", name: "Claude" },
                { label: "N8", name: "n8n" },
                { label: "RS", name: "Resend" },
              ].map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="group grid aspect-square place-items-center rounded-xl border border-border bg-secondary/40 transition-colors hover:border-primary/50"
                >
                  <span className="font-mono text-xs font-bold text-muted-foreground opacity-60 transition-opacity group-hover:opacity-100">
                    {tool.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Stats Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center gap-12 border-t border-border/50 pt-8"
          >
            <div className="space-y-1">
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                Stack Principale
              </p>
              <p className="font-mono text-sm text-foreground">Lovable / Next.js / Supabase</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                Disponibilité
              </p>
              <p className="font-mono text-sm text-primary">Projets en cours</p>
            </div>
            <div className="ml-auto flex items-center gap-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-border" />
              <span className="font-mono text-xs text-muted-foreground">
                Product Builder · Web & IA
              </span>
            </div>
          </motion.div>
        </motion.section>

        {/* What I do */}
        <section className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 h-px w-16 bg-primary" />
            <h2 className="text-4xl font-bold lowercase tracking-tight sm:text-5xl">
              ce que je fais
            </h2>
          </motion.div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.tag} {...s} index={i} />
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 h-px w-16 bg-primary" />
            <h2 className="text-4xl font-bold lowercase tracking-tight sm:text-5xl">
              questions fréquentes
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Tout ce que vous devez savoir sur mes sites web et agents IA.
            </p>
          </motion.div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-24 mb-10 text-center"
        >
          <h2 className="text-2xl font-semibold">Me contacter</h2>
          <div className="mx-auto mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-border bg-card p-3">
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={c.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ scale: 1.15, rotate: -6 }}
                whileTap={{ scale: 0.9 }}
                className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <c.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Steve — Product Builder · Sites web & Agents IA
          </p>
        </motion.section>
      </div>
    </div>
  );
}
