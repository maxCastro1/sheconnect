import path from "node:path";
import { readFile } from "node:fs/promises";

import ts from "typescript";

export async function importTsModule(relativePath) {
  const filePath = path.resolve(process.cwd(), relativePath);
  const source = await readFile(filePath, "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
    },
    fileName: filePath,
  });

  return import(
    `data:text/javascript;charset=utf-8,${encodeURIComponent(outputText)}`
  );
}
