"use client";

import { motion } from "framer-motion";
import { Phone, ShieldCheck } from "lucide-react";
import { resources } from "@/data/resources";

const UrgentSupport = () => {
  const urgentResources = resources.filter((r) => r.urgent);

  return (
    <section id="urgent" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-support/20 bg-support-muted p-8 md:p-12"
        >
          <div className="mb-8 flex items-center gap-3">
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                Need help{" "}
                <span className="italic text-support">right now?</span>
              </h2>
            </div>
          </div>

          <p className="mb-10 max-w-2xl text-base text-muted-foreground">
            If you or someone you know is in immediate danger, please reach out.
            These resources are available 24/7, free, and confidential.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {urgentResources.map((r) => (
              <a
                key={r.id}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-support/20 bg-card p-6 transition-all hover:border-support/40 hover:shadow-md"
              >
                <div className="mb-3 flex items-center gap-2">
                  <Phone className="h-4 w-4 text-support" />
                  <span className="rounded-full bg-support/10 px-2.5 py-0.5 text-xs font-medium text-support">
                    24/7 Available
                  </span>
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                  {r.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {r.description}
                </p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UrgentSupport;
