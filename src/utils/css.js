export function hexToRgb(hex) {
  const normalized = hex.replace("#", "");
  const value =
    normalized.length === 3
      ? normalized
          .split("")
          .map((part) => part + part)
          .join("")
      : normalized;

  return [
    Number.parseInt(value.slice(0, 2), 16),
    Number.parseInt(value.slice(2, 4), 16),
    Number.parseInt(value.slice(4, 6), 16),
  ];
}

export function rgbChannels(hex) {
  return hexToRgb(hex).join(" ");
}

export function rgb(hex, alpha = 1) {
  return `rgb(${rgbChannels(hex)} / ${alpha})`;
}

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export function cssPropertyName(property) {
  if (property.startsWith("--")) return property;
  if (property.startsWith("Webkit")) {
    const unprefixedProperty = property.slice(6);
    return `-webkit-${unprefixedProperty
      .replace(/^[A-Z]/, (character) => character.toLowerCase())
      .replace(/[A-Z]/g, (character) => `-${character.toLowerCase()}`)}`;
  }
  return property.replace(/[A-Z]/g, (character) => `-${character.toLowerCase()}`);
}

export function styleObjectToDeclarations(style, indentation = "  ") {
  return Object.entries(style)
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .map(
      ([property, value]) =>
        `${indentation}${cssPropertyName(property)}: ${String(value)};`,
    )
    .join("\n");
}

export function styleObjectToRule(selector, style) {
  return `${selector} {\n${styleObjectToDeclarations(style)}\n}`;
}

export function splitTopLevelList(value) {
  const items = [];
  let current = "";
  let depth = 0;

  for (const character of value) {
    if (character === "(") depth += 1;
    if (character === ")") depth = Math.max(0, depth - 1);

    if (character === "," && depth === 0) {
      items.push(current.trim());
      current = "";
      continue;
    }

    current += character;
  }

  if (current.trim()) items.push(current.trim());
  return items;
}

export function formatCssList(value, indentation = "  ") {
  return splitTopLevelList(value).join(`,\n${indentation}`);
}

export function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function toCssNumber(value, digits = 2) {
  return Number(value.toFixed(digits)).toString();
}

export function stopColor(stop) {
  return rgb(stop.color, stop.alpha);
}

export function serializeGradientLayer(layer) {
  const stops = layer.stops
    .map(
      (stop) =>
        `${stopColor(stop)} ${toCssNumber(stop.position)}${layer.unit ?? "%"}`,
    )
    .join(", ");

  return `${layer.kind}(${layer.geometry}, ${stops}) ${layer.box}`;
}

export async function copyToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}
