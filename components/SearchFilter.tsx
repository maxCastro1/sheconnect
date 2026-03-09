"use client";

import { Search } from "lucide-react";
import { categories, type Category } from "@/data/resources";

interface SearchFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  activeCategory: Category | "All";
  onCategoryChange: (cat: Category | "All") => void;
}

const SearchFilter = ({
  search,
  onSearchChange,
  activeCategory,
  onCategoryChange,
}: SearchFilterProps) => {
  return (
    <div className="mb-12 flex flex-col gap-6">
      <div className="relative">
        <Search className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search resources..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-full border border-border bg-card py-4 pl-12 pr-6 text-foreground  placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {["All", ...categories.map((c) => c.name)].map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat as Category | "All")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-primary/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;
