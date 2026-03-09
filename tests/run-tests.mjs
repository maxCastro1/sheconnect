import runNavigationLinkTests from "./navigation-links.test.mjs";
import runResourceDataTests from "./resource-data.test.mjs";

const suites = [
  ["resource-data", runResourceDataTests],
  ["navigation-links", runNavigationLinkTests],
];

let failures = 0;

for (const [name, run] of suites) {
  try {
    await run();
    console.log(`ok ${name}`);
  } catch (error) {
    failures += 1;
    console.error(`not ok ${name}`);
    console.error(error);
  }
}

if (failures > 0) {
  process.exitCode = 1;
} else {
  console.log(`\n${suites.length} test suites passed`);
}
