import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "My Products — Steve, Product Builder" },
      { name: "description", content: "Templates, kits and digital products by Steve." },
      { property: "og:title", content: "My Products — Steve" },
      { property: "og:description", content: "Templates, kits and digital products by Steve." },
    ],
  }),
  component: Products,
});

const products = [
  { name: "Framer Portfolio Kit", price: "$49", desc: "The exact template I use to ship portfolios in a day." },
  { name: "SaaS Landing Pack", price: "$79", desc: "8 conversion-ready landing sections for early SaaS." },
  { name: "Notion Ops OS", price: "$29", desc: "The Notion system I use to run my solo studio." },
  { name: "Brand Starter", price: "$39", desc: "Logo, color and type foundations for indie founders." },
];

function Products() {
  return (
    <PageShell
      eyebrow="DIGITAL PRODUCTS"
      title="My products"
      intro="Templates, systems and kits — everything I've extracted from my own studio."
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
                Get it →
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </PageShell>
  );
}
