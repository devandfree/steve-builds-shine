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
} from "lucide-react";
import steveAvatar from "@https://www.hebergeur-image.com/upload/129.0.60.177-6a711ecc9be19.png";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const tools = [
  { icon: Code2, name: "Lovable" },
  { icon: Rocket, name: "Next.js" },
  { icon: Database, name: "Supabase" },
  { icon: Bot, name: "OpenAI" },
  { icon: Sparkles, name: "Claude" },
];

const contacts = [
  { icon: Mail, label: "Email", href: "mailto:steve@example.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: MessageCircle, label: "Whatsapp", href: "https://wa.me/" },
  { icon: Twitter, label: "X/Twitter", href: "https://x.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "Github", href: "https://github.com" },
];

const MotionLink = motion(Link);

function PillButton({
  icon: Icon,
  label,
  to,
}: {
  icon: typeof Play;
  label: string;
  to: "/work" | "/products" | "/contact";
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

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-8 sm:py-10">
        {/* Nav */}
        <nav className="grid grid-cols-2 items-center gap-3 sm:flex sm:justify-between">
          <PillButton icon={Play} label="Mes projets" to="/work" />
          <div className="hidden sm:block">
            <PillButton icon={ShoppingBag} label="Ce que je Build" to="/products" />
          </div>
          <PillButton icon={CheckCircle2} label="Contact" to="/contact" />
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
              Product Builder<br />Sites web & Agents IA
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
              Salut, moi c&apos;est Steve. Je conçois des sites web et des agents
              IA qui aident votre business à aller plus vite, convertir plus et
              automatiser ce qui vous fait perdre du temps.
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
