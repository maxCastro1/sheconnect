"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { categories, type Resource } from "@/data/resources";
import Image from "next/image";

const categoryStyles: Record<string, { badge: string; accent: string }> = {
  Support: {
    badge: "bg-support-muted text-support",
    accent: "hover:border-support/30",
  },
  Careers: {
    badge: "bg-action-muted text-action",
    accent: "hover:border-action/30",
  },
  Education: {
    badge: "bg-primary/10 text-primary",
    accent: "hover:border-primary/30",
  },
  Wellness: {
    badge: "bg-care-muted text-care",
    accent: "hover:border-care/30",
  },
  Community: {
    badge: "bg-care-muted text-care",
    accent: "hover:border-care/30",
  },
  Business: {
    badge: "bg-action-muted text-action",
    accent: "hover:border-action/30",
  },
};

const categoryImages = Object.fromEntries(
  categories.map((category) => [category.name, category.img]),
) as Record<Resource["category"], string>;

const ResourceCard = ({
  resource,
  index,
}: {
  resource: Resource;
  index: number;
}) => {
  const styles = categoryStyles[resource.category] || categoryStyles.Education;
  const imageSrc = resource.img || categoryImages[resource.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`group flex flex-col rounded-4xl border border-border bg-card p-6 transition-all duration-300 ease-in-out hover:shadow-md ${styles.accent}`}
    >
      {imageSrc ? (
        <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-[30px]">
          <Image
            src={imageSrc}
            alt={resource.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
      ) : null}
      <div className="mb-4 flex items-start justify-between gap-2">
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${styles.badge}`}
        >
          {resource.category}
        </span>
        {resource.featured && (
          <span className="rounded-full bg-action/10 px-2.5 py-0.5 text-xs font-medium text-action">
            Featured
          </span>
        )}
      </div>
      <h3 className="mb-2 font-display text-lg font-bold text-foreground">
        {resource.title}
      </h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
        {resource.description}
      </p>
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-max items-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        Visit Resource
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </motion.div>
  );
};

export default ResourceCard;
