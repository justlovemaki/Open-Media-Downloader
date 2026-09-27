import { existsSync, readFileSync, writeFileSync } from "node:fs";

import generateModule from "@babel/generator";
import { parse } from "@babel/parser";
import traverseModule from "@babel/traverse";
import * as types from "@babel/types";

const generate = generateModule.default ?? generateModule;
const traverse = traverseModule.default ?? traverseModule;
const entryFile = "src/service/main.js";
const runtimeFile = "src/service/service-runtime.js";

if (existsSync(runtimeFile)) {
  console.log(`${runtimeFile} already exists; service split skipped.`);
  process.exit(0);
}

const source = readFileSync(entryFile, "utf8");
const ast = parse(source, {
  sourceType: "module",
  allowAwaitOutsideFunction: true,
  plugins: ["importMeta", "topLevelAwait"],
});
const splitIndex = ast.program.body.findIndex(
  (statement) =>
    statement.type === "VariableDeclaration" &&
    statement.declarations.some(
      (declaration) =>
        declaration.id.type === "Identifier" && declaration.id.name === "mt",
    ),
);
if (splitIndex < 0)
  throw new Error("Unable to find the Service Worker lifecycle boundary");

const splitOffset = ast.program.body[splitIndex].start;
let programPath;
traverse(ast, {
  Program(path) {
    programPath = path;
    path.stop();
  },
});
const importedNames = Object.entries(programPath.scope.bindings)
  .filter(([, binding]) => {
    if (binding.path.node.start >= splitOffset) return false;
    return binding.referencePaths.some(
      (path) => path.node.start >= splitOffset,
    );
  })
  .map(([name]) => name)
  .sort();

const runtimeProgram = types.program([
  ...ast.program.body.slice(0, splitIndex),
  types.exportNamedDeclaration(
    null,
    importedNames.map((name) =>
      types.exportSpecifier(types.identifier(name), types.identifier(name)),
    ),
  ),
]);
const entryProgram = types.program([
  types.importDeclaration(
    importedNames.map((name) =>
      types.importSpecifier(types.identifier(name), types.identifier(name)),
    ),
    types.stringLiteral("./service-runtime.js"),
  ),
  ...ast.program.body.slice(splitIndex),
]);

const options = { comments: true, compact: false };
writeFileSync(runtimeFile, `${generate(runtimeProgram, options).code}\n`);
writeFileSync(entryFile, `${generate(entryProgram, options).code}\n`);
console.log(
  `Split Service Worker into runtime + lifecycle modules with ${importedNames.length} imports.`,
);
