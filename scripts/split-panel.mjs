import { existsSync, readFileSync, writeFileSync } from "node:fs";

import generateModule from "@babel/generator";
import { parse } from "@babel/parser";
import traverseModule from "@babel/traverse";
import * as types from "@babel/types";

const generate = generateModule.default ?? generateModule;
const traverse = traverseModule.default ?? traverseModule;
const panelFile = "src/content/panel.js";
const runtimeFile = "src/content/panel-runtime.js";

if (existsSync(runtimeFile)) {
  console.log(`${runtimeFile} already exists; panel split skipped.`);
  process.exit(0);
}

const source = readFileSync(panelFile, "utf8");
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
        declaration.id.type === "Identifier" &&
        declaration.id.name === "L" &&
        declaration.init?.type === "ClassExpression",
    ),
);
if (splitIndex < 0)
  throw new Error("Unable to find the panel component boundary");

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
const panelProgram = types.program([
  types.importDeclaration(
    importedNames.map((name) =>
      types.importSpecifier(types.identifier(name), types.identifier(name)),
    ),
    types.stringLiteral("./panel-runtime.js"),
  ),
  ...ast.program.body.slice(splitIndex),
]);

const options = { comments: true, compact: false };
writeFileSync(runtimeFile, `${generate(runtimeProgram, options).code}\n`);
writeFileSync(panelFile, `${generate(panelProgram, options).code}\n`);
console.log(
  `Split panel into runtime + application modules with ${importedNames.length} explicit imports.`,
);
