"use client";

import type { ElementType } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Briefcase,
  GraduationCap,
  Leaf,
  Users,
  Rocket,
} from "lucide-react";
import { categories } from "@/data/resources";
import Image from "next/image";

const iconMap: Record<string, ElementType> = {
  Heart,
  Briefcase,
  GraduationCap,
  Leaf,
  Users,
  Rocket,
};

const categoryAccents: Record<string, { icon: string; border: string }> = {
  Support: {
    icon: "text-support bg-support-muted",
    border: "hover:border-support/30",
  },
  Careers: {
    icon: "text-action bg-action-muted",
    border: "hover:border-action/30",
  },
  Education: {
    icon: "text-primary bg-primary/10",
    border: "hover:border-primary/30",
  },
  Wellness: { icon: "text-care bg-care-muted", border: "hover:border-care/30" },
  Community: {
    icon: "text-care bg-care-muted",
    border: "hover:border-care/30",
  },
  Business: {
    icon: "text-action bg-action-muted",
    border: "hover:border-action/30",
  },
};

const CategorySection = () => {
  return (
    <section id="categories" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Find what you <span className="italic text-primary">need</span>
          </h2>
          <p className="mx-auto max-w-lg text-base text-muted-foreground">
            Curated categories designed around the real needs of women
            everywhere.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            const accents =
              categoryAccents[cat.name] || categoryAccents.Education;
            const hasImage = Boolean(cat.img);

            return (
              <motion.a
                key={cat.name}
                href="#resources"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`group relative h-full min-h-72 w-full overflow-hidden rounded-2xl border border-border transition-all  hover:shadow-md ${accents.border} ${
                  hasImage ? "bg-slate-900" : "bg-card"
                }`}
              >
                {hasImage ? (
                  <>
                    <Image
                      src={cat.img}
                      alt={`${cat.name} category`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/10" />
                  </>
                ) : null}

                <div className="relative z-10 flex h-full flex-col justify-end p-8">
                  <div
                    className={`mb-2 inline-flex rounded-full w-max p-3 ${
                      hasImage
                        ? "border border-white/20 bg-white/10 text-white backdrop-blur-sm"
                        : accents.icon
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3
                    className={`mb-2 font-display text-3xl font-bold ${
                      hasImage ? "text-white" : "text-foreground"
                    }`}
                  >
                    {cat.name}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      hasImage ? "text-white/85" : "text-muted-foreground"
                    }`}
                  >
                    {cat.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
