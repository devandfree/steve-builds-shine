import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle2, Video } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Réserver un appel — Steve" },
      { name: "description", content: "30 min offertes pour parler de votre site web ou de votre agent IA." },
      { property: "og:title", content: "Réserver un appel — Steve" },
      { property: "og:description", content: "30 min offertes pour parler de votre site web ou de votre agent IA." },
    ],
  }),
  component: Book,
});

const perks = [
  "30 minutes, sans engagement",
  "On cadre votre projet ensemble",
  "Vous repartez avec une prochaine étape claire",
  "Appel visio — Google Meet",
];

function Book() {
  return (
    <PageShell
      eyebrow="ON EN PARLE"
      title="Réserver un appel"
      intro="Choisissez un créneau qui vous arrange. Je confirme sous quelques heures."
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
              <p className="text-sm font-bold">Appel découverte</p>
              <p className="text-xs text-muted-foreground">Gratuit · 30 min</p>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            {["Mar. 21 juil. · 10:00", "Mer. 22 juil. · 14:00", "Jeu. 23 juil. · 16:30", "Ven. 24 juil. · 11:00"].map((s, i) => (
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
            Ou écrivez-moi directement →
          </a>
        </motion.div>
      </div>
    </PageShell>
  );
}
