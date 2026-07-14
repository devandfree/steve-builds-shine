import { createFileRoute } from "@tanstack/react-router";
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
  Figma,
  Framer,
  Code2,
  Boxes,
  Rocket,
  Database,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import steveAvatar from "@/assets/steve-avatar.png";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const navLinks = [
  { icon: Play, label: "See my work" },
  { icon: ShoppingBag, label: "My products" },
  { icon: CheckCircle2, label: "Book a call" },
];

const tools = [
  { icon: Figma, name: "Figma" },
  { icon: Framer, name: "Framer" },
  { icon: Code2, name: "Cursor" },
  { icon: Boxes, name: "Notion" },
  { icon: Database, name: "Supabase" },
  { icon: Sparkles, name: "AI+" },
];

const services = [
  { title: "SAAS PRODUCTS /\nMVP BUILD", tag: "MVP" },
  { title: "LANDING PAGES /\nWEB DESIGN", tag: "WEB" },
  
  { title: "BRAND IDENTITY /\nDESIGN SYSTEMS", tag: "BRAND" },
  { title: "PRODUCT STRATEGY /\nCONSULTING", tag: "STRAT" },
];

const contacts = [
  { icon: Mail, label: "Gmail" },
  { icon: Instagram, label: "Instagram" },
  { icon: MessageCircle, label: "Whatsapp" },
  { icon: Twitter, label: "X/Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Github, label: "Github" },
];

function PillButton({ icon: Icon, label }: { icon: typeof Play; label: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="group flex items-center gap-2 rounded-full border border-border bg-card/60 px-2 py-2 pr-5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-primary/50 hover:bg-card"
    >
      <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground">
        <Icon className="h-3.5 w-3.5" strokeWidth={3} />
      </span>
      <span>{label}</span>
    </motion.button>
  );
}

function ServiceCard({ title, tag, index }: { title: string; tag: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
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
    </motion.div>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-8 sm:py-10">
        {/* Nav */}
        <nav className="grid grid-cols-2 items-center gap-3 sm:flex sm:justify-between">
          <PillButton icon={Play} label="See my work" />
          <div className="hidden sm:block">
            <PillButton icon={ShoppingBag} label="My products" />
          </div>
          <PillButton icon={CheckCircle2} label="Book a call" />
        </nav>

        {/* Hero */}
        <section className="relative mt-10 grid gap-8 sm:mt-16 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
          <div className="order-2 sm:order-1">
            <div className="mb-4 h-px w-16 bg-primary" />
            <h2 className="text-xl font-semibold leading-tight sm:text-2xl">
              Product Builder<br />& Digital Craftsman
            </h2>
          </div>

          <div className="relative order-1 mx-auto sm:order-2">
            <img
              src={steveAvatar}
              alt="Steve, Product Builder"
              width={420}
              height={520}
              className="relative z-10 h-auto w-[280px] object-contain sm:w-[380px]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 text-center">
              <p className="text-[10px] font-semibold tracking-[0.4em] text-primary">STEVE</p>
              <h1 className="-mt-1 text-6xl font-black tracking-tighter sm:text-7xl">
                <span className="text-foreground">st</span>
                <span className="text-foreground/40">eve</span>
              </h1>
            </div>
          </div>

          <div className="order-3 text-sm leading-relaxed text-muted-foreground sm:text-right">
            <p>
              Hi, I&apos;m Steve, a product builder, designer and developer passionate
              about shipping result-driven products and giving your ideas an
              interesting story and shape.
            </p>
          </div>
        </section>

        {/* Tools */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-70">
          {tools.map((t) => (
            <div key={t.name} className="flex items-center gap-2 text-muted-foreground">
              <t.icon className="h-4 w-4" />
              <span className="text-xs font-medium">{t.name}</span>
            </div>
          ))}
        </div>

        {/* Statement */}
        <section className="mt-20">
          <div className="mb-6 h-px w-16 bg-primary" />
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Building incredible, impactful, useful products,
            <br className="hidden sm:block" />
            digital experiences and many more…
          </h2>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Product is not just about pixels, code, features or launches — it&apos;s a way
            of telling a story, solving real problems and shipping solutions to those
            who need them. Building and crafting memorable products is what I do very
            well…
          </p>

          {/* Logo strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-40">
            {["◆ Loom", "▲ Vercel", "★ Stripe", "◉ Linear", "✦ Notion", "◈ Figma", "▼ Raycast", "● Arc"].map((l) => (
              <span key={l} className="text-xs font-bold tracking-wider text-muted-foreground">
                {l}
              </span>
            ))}
          </div>
        </section>

        {/* What I do */}
        <section className="mt-20">
          <div className="mb-6 h-px w-16 bg-primary" />
          <h2 className="text-4xl font-bold lowercase tracking-tight sm:text-5xl">
            what I do
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.tag} {...s} index={i} />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mt-24 mb-10 text-center">
          <h2 className="text-2xl font-semibold">Contact me</h2>
          <div className="mx-auto mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-border bg-card p-3">
            {contacts.map((c) => (
              <button
                key={c.label}
                aria-label={c.label}
                className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
              >
                <c.icon className="h-5 w-5" />
              </button>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Steve — Product Builder
          </p>
        </section>
      </div>
    </div>
  );
}
