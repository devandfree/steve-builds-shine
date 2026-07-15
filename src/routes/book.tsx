import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle2, Video } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a call — Steve, Product Builder" },
      { name: "description", content: "Book a 30 min intro call with Steve to talk about your product." },
      { property: "og:title", content: "Book a call — Steve" },
      { property: "og:description", content: "Book a 30 min intro call with Steve to talk about your product." },
    ],
  }),
  component: Book,
});

const perks = [
  "30 minutes, no strings attached",
  "We scope your idea or product",
  "You leave with a concrete next step",
  "Video call — Google Meet",
];

function Book() {
  return (
    <PageShell
      eyebrow="LET'S TALK"
      title="Book a call"
      intro="Pick a slot that works for you. I'll reply within a few hours to confirm."
    >
      <div className="grid gap-6 sm:grid-cols-[1fr_1.2fr]">
        <div className="space-y-3">
          {perks.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.06 * i }}
              className="flex items-start gap-3 rounded-xl border border-border bg-card p-3"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <p className="text-xs text-foreground/90">{p}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-border bg-card p-6"
        >
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Video className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold">Intro call</p>
              <p className="text-xs text-muted-foreground">Free · 30 min</p>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            {["Tue, Aug 5 · 10:00", "Wed, Aug 6 · 14:00", "Thu, Aug 7 · 16:30", "Fri, Aug 8 · 11:00"].map((s, i) => (
              <motion.button
                key={s}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="flex w-full items-center justify-between rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/5"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  {s}
                </span>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </motion.button>
            ))}
          </div>

          <a
            href="mailto:steve@example.com"
            className="mt-6 block w-full rounded-full bg-primary py-3 text-center text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Or email me directly →
          </a>
        </motion.div>
      </div>
    </PageShell>
  );
}
