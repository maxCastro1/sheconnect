"use client";

import { motion } from "framer-motion";

const MissionSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-6 inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wide text-primary uppercase">
            Our Mission
          </span>
          <h2 className="mb-6 font-display text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-5xl">
            Empowering women through{" "}
            <span className="italic text-primary">access</span>
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground md:text-lg">
            SheConnect exists to bridge the gap between women and the resources
            they need. We curate trusted organizations, tools, and communities
            from around the world — making it easier to find support, build
            careers, prioritize wellness, and grow businesses.
          </p>
          <p className="mb-12 text-xs leading-relaxed text-muted-foreground md:text-lg">
            Whether you&apos;re seeking help in a crisis, looking for your next
            career opportunity, or building something new — you deserve easy
            access to resources designed with you in mind.
          </p>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { stat: "500+", label: "Resources curated" },
              { stat: "50+", label: "Countries reached" },
              { stat: "24/7", label: "Crisis support" },
            ].map((item) => (
              <div key={item.label}>
                <div className="font-display text-4xl font-semibold text-primary">
                  {item.stat}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
