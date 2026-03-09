"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { resources, type Category } from "@/data/resources";
import SearchFilter from "./SearchFilter";
import ResourceCard from "./ResourceCard";

const ResourcesSection = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      const matchCat = activeCategory === "All" || r.category === activeCategory;
      const matchSearch =
        !search ||
        r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <section id="resources" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Explore <span className="italic text-primary">Resources</span>
          </h2>
          <p className="mx-auto max-w-lg text-base text-muted-foreground">
            Real, vetted resources to support every part of your journey.
          </p>
        </motion.div>

        <SearchFilter
          search={search}
          onSearchChange={setSearch}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {filtered.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r, i) => (
              <ResourceCard key={r.id} resource={r} index={i} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-base text-muted-foreground">
              No resources found. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResourcesSection;
