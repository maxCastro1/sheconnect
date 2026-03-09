import assert from "node:assert/strict";
import path from "node:path";
import { readFile } from "node:fs/promises";

const root = process.cwd();
const filesWithAnchors = [
  "components/Footer.tsx",
  "components/HeroSection.tsx",
  "components/Navbar.tsx",
];
const sectionFiles = [
  "components/CategorySection.tsx",
  "components/ResourcesSection.tsx",
  "components/UrgentSupport.tsx",
  "components/MissionSection.tsx",
];

async function read(relativePath) {
  return readFile(path.join(root, relativePath), "utf8");
}

export default async function runNavigationLinkTests() {
  const anchorSources = await Promise.all(filesWithAnchors.map(read));
  const sectionSources = await Promise.all(sectionFiles.map(read));

  const anchors = anchorSources.flatMap((source) =>
    Array.from(source.matchAll(/href="#([^"]+)"/g), (match) => match[1]),
  );
  const ids = new Set(
    sectionSources.flatMap((source) =>
      Array.from(source.matchAll(/id="([^"]+)"/g), (match) => match[1]),
    ),
  );

  assert.ok(anchors.length > 0);

  for (const anchor of anchors) {
    assert.ok(ids.has(anchor), `Missing section id for #${anchor}`);
  }
}
