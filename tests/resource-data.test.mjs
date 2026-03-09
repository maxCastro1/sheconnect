import assert from "node:assert/strict";

import { importTsModule } from "./helpers/load-ts-module.mjs";

export default async function runResourceDataTests() {
  const { categories, resources } = await importTsModule("data/resources.ts");
  const categoryNames = categories.map((category) => category.name);
  const categoryNameSet = new Set(categoryNames);

  assert.equal(categoryNameSet.size, categories.length);

  for (const category of categories) {
    assert.match(category.img, /^https:\/\/images\.unsplash\.com\//);
    assert.ok(category.description.trim().length > 0);
  }
  
  const resourceIds = resources.map((resource) => resource.id);
  assert.equal(new Set(resourceIds).size, resources.length);

  for (const resource of resources) {
    assert.ok(categoryNameSet.has(resource.category));
    assert.match(resource.url, /^https:\/\//);
    assert.ok(resource.description.trim().length > 0);

    const resolvedImage = resource.img || categories.find(
      (category) => category.name === resource.category,
    )?.img;

    assert.ok(resolvedImage, `Missing image for resource "${resource.title}"`);
  }
}
