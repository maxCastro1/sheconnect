"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import BouquetVisualPreview from "./RibbonVisual";

const HeroSection = () => {
  return (
    <section className="relative max-h-225 min-h-[60vh]  overflow-hidden pt-24 pb-16">
      {/* Minimal background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/[0.03] to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary/[0.02] to-transparent" />

      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center md:flex-row md:items-start gap-12 ">
        <div className="max-w-4xl ">
          {/* Editorial tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wide text-primary uppercase">
              Global resource hub for women
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-2 font-display text-5xl font-semibold tracking-tight text-foreground md:text-7xl lg:text-8xl"
          >
            Your strength.
            <br />
            <span className="italic text-primary">Your resources.</span>
            <br />
            Your future.
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-12 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            SheConnect curates the best support, career, wellness, and
            entrepreneurship resources for women — all in one place.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#resources"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              Explore Resources
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#categories"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-primary/5"
            >
              Browse Categories
            </a>
          </motion.div>
        </div>

        {/* Decorative element */}
     
            <BouquetVisualPreview />
      
      
      </div>
    </section>
  );
};

export default HeroSection;
