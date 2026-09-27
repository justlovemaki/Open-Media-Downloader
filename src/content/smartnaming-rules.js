import { parse } from "smol-toml";

export function defaultSmartNamingRules() {
  return {
    default_: { max_length: 64, template: "%title" },
    rules: [],
  };
}

function sanitizePathPart(value) {
  const sanitized = value
    .trim()
    .normalize("NFC")
    .replace(/^\.+/gu, "")
    .replace(/[^\p{L}\p{N}\p{M}\-\s_.]/gu, "")
    .replace(/-+/gu, "-")
    .replace(/\s+/gu, " ")
    .replace(/^(\s|-)+/gu, "")
    .slice(0, 190)
    .replace(/(\s|-)+$/gu, "");
  return sanitized || "no-name";
}

function normalizeDirectory(value) {
  if (value === "") return "";
  const trimmed = value.replace(/^\//, "").replace(/\/$/, "");
  const parts = trimmed.split("/");
  if (parts.some((part) => sanitizePathPart(part) !== part)) {
    throw new Error(
      'Invalid directory. Avoid special characters and use "/" as separator.',
    );
  }
  const directory = `${parts.join("/")}/`;
  if (directory.length > 255) throw new Error("Directory path is too long");
  return directory;
}

function normalizeRule(rule, index) {
  if (!rule || typeof rule !== "object")
    throw new Error(`Invalid rule object ${index}`);
  if (typeof rule.template !== "string") {
    throw new Error(`"template = …" is missing or invalid in rule ${index}`);
  }
  if (typeof rule.url !== "string") {
    throw new Error(`"url = …" is missing or invalid in rule ${index}`);
  }
  if (
    "max_length" in rule &&
    (typeof rule.max_length !== "number" || rule.max_length < 1)
  ) {
    throw new Error(`"max_length = …" is invalid in rule ${index}`);
  }
  if (
    "selector" in rule &&
    (typeof rule.selector !== "string" || !rule.selector)
  ) {
    throw new Error(`"selector = …" is invalid in rule ${index}`);
  }

  const normalized = {
    max_length: rule.max_length || null,
    selector: rule.selector || null,
    template: rule.template,
    url: rule.url,
    force_doc_title: rule.force_doc_title === true,
  };
  if (typeof rule.directory === "string")
    normalized.subdir = normalizeDirectory(rule.directory);

  if ("replace" in rule) {
    if (!Array.isArray(rule.replace))
      throw new Error('"replace" must be an array');
    normalized.replace = rule.replace.map((replacement) => {
      if (
        typeof replacement?.from !== "string" ||
        typeof replacement?.to !== "string"
      ) {
        throw new Error(
          'Every replacement requires string "from" and "to" fields',
        );
      }
      return { from: replacement.from, to: replacement.to };
    });
  }

  return normalized;
}

export function parseSmartNamingRules(source) {
  let document;
  try {
    document = parse(source);
  } catch {
    throw new Error("Invalid TOML syntax");
  }

  if (typeof document.max_length !== "number" || document.max_length < 1) {
    throw new Error("Default `max_length` value is invalid or missing");
  }
  if (typeof document.template !== "string" || document.template.length === 0) {
    throw new Error("Default `template` value is invalid or missing");
  }

  const defaultRule = {
    max_length: document.max_length,
    template: document.template,
    force_doc_title: document.force_doc_title === true,
  };
  const rules = Array.isArray(document.rule)
    ? document.rule.map((rule, index) => normalizeRule(rule, index + 1))
    : [];
  return { default_: defaultRule, rules };
}

export function stringifySmartNamingRules(defaultRule, rules) {
  const serializedRules = rules
    .map((rule) => {
      const fields = [
        "",
        "[[rule]]",
        `url = ${JSON.stringify(rule.url)}`,
        `max_length = ${rule.max_length ?? defaultRule.max_length}`,
        `template = ${JSON.stringify(rule.template)}`,
      ];
      if (rule.selector)
        fields.push(`selector = ${JSON.stringify(rule.selector)}`);
      if (rule.subdir)
        fields.push(
          `directory = ${JSON.stringify(rule.subdir.replace(/\/$/, ""))}`,
        );
      if (rule.force_doc_title) fields.push("force_doc_title = true");
      return fields.join("\n");
    })
    .join("\n");

  return `# Open Media Downloader smart naming rules.
# %title, %hostname and %selector are replaced when a download starts.

max_length = ${defaultRule.max_length}
template = ${JSON.stringify(defaultRule.template)}
${defaultRule.force_doc_title ? "force_doc_title = true\n" : ""}
# Example:
# [[rule]]
# url = "example.com"
# template = "%title-%hostname"
# directory = "videos"
${serializedRules}
`;
}
