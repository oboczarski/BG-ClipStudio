import { serializeGradientLayer, styleObjectToRule } from "../utils/css";

export const referenceCards = [
  {
    id: "shadowline-prism",
    title: "Shadowline Prism Tile",
    group: "Flow-matched raised",
    note: "An angular graphite prism whose diagonal facet continues from the content plate through the bevel and rim.",
    radius: 30,
    layers: [
      {
        name: "Facet light",
        box: "content-box",
        kind: "linear-gradient",
        geometry: "128deg",
        stops: [
          { color: "#ffffff", alpha: 0.1, position: 0 },
          { color: "#ffffff", alpha: 0.1, position: 14 },
          { color: "#ffffff", alpha: 0, position: 14 },
          { color: "#ffffff", alpha: 0, position: 42 },
          { color: "#000000", alpha: 0.28, position: 42 },
          { color: "#000000", alpha: 0.28, position: 100 },
        ],
      },
      {
        name: "Graphite face",
        box: "content-box",
        kind: "linear-gradient",
        geometry: "145deg",
        stops: [
          { color: "#171922", alpha: 1, position: 0 },
          { color: "#080a10", alpha: 1, position: 52 },
          { color: "#020306", alpha: 1, position: 100 },
        ],
      },
      {
        name: "Axial bevel",
        box: "padding-box",
        kind: "linear-gradient",
        geometry: "128deg",
        stops: [
          { color: "#000000", alpha: 1, position: 0 },
          { color: "#000000", alpha: 1, position: 17 },
          { color: "#505d84", alpha: 0.42, position: 30 },
          { color: "#06080e", alpha: 1, position: 58 },
          { color: "#2290b5", alpha: 0.26, position: 72 },
          { color: "#000000", alpha: 1, position: 100 },
        ],
      },
      {
        name: "Prism rim",
        box: "border-box",
        kind: "linear-gradient",
        geometry: "128deg",
        stops: [
          { color: "#b9c6eb", alpha: 0.44, position: 0 },
          { color: "#1e253e", alpha: 1, position: 24 },
          { color: "#000000", alpha: 1, position: 50 },
          { color: "#2eaed7", alpha: 0.36, position: 76 },
          { color: "#000000", alpha: 1, position: 100 },
        ],
      },
    ],
    shadows: [
      "0 19px 32px rgb(0 0 0 / 66%)",
      "8px 10px 16px rgb(0 0 0 / 38%)",
      "-5px -5px 12px rgb(130 155 255 / 4%)",
      "inset 1px 1px 0 rgb(255 255 255 / 8%)",
      "inset -10px -12px 20px rgb(0 0 0 / 42%)",
    ],
  },
  {
    id: "orbital-coin",
    title: "Orbital Coin",
    group: "Circular / machined",
    note: "A round coin with a soft lens face, deep middle ring, and segmented metallic tracking on the outside edge.",
    radius: 999,
    layers: [
      {
        name: "Lens highlight",
        box: "content-box",
        kind: "radial-gradient",
        geometry: "circle at 38% 30%",
        stops: [
          { color: "#ffffff", alpha: 0.14, position: 0 },
          { color: "#c8daff", alpha: 0.06, position: 19 },
          { color: "#c8daff", alpha: 0, position: 45 },
        ],
      },
      {
        name: "Coin face",
        box: "content-box",
        kind: "radial-gradient",
        geometry: "circle at 50% 52%",
        stops: [
          { color: "#090d16", alpha: 1, position: 0 },
          { color: "#090d16", alpha: 1, position: 42 },
          { color: "#020408", alpha: 1, position: 78 },
          { color: "#000000", alpha: 1, position: 100 },
        ],
      },
      {
        name: "Metal track",
        box: "padding-box",
        kind: "conic-gradient",
        geometry: "from 0deg at 50% 50%",
        unit: "deg",
        stops: [
          { color: "#000000", alpha: 1, position: 0 },
          { color: "#232d46", alpha: 1, position: 62 },
          { color: "#6c7ca6", alpha: 0.58, position: 112 },
          { color: "#080c16", alpha: 1, position: 174 },
          { color: "#000000", alpha: 1, position: 236 },
          { color: "#465378", alpha: 0.58, position: 304 },
          { color: "#000000", alpha: 1, position: 360 },
        ],
      },
      {
        name: "Segmented rim",
        box: "border-box",
        kind: "repeating-conic-gradient",
        geometry: "from 4deg at 50% 50%",
        unit: "deg",
        stops: [
          { color: "#9baedc", alpha: 0.72, position: 0 },
          { color: "#9baedc", alpha: 0.72, position: 8 },
          { color: "#111726", alpha: 1, position: 8 },
          { color: "#111726", alpha: 1, position: 19 },
          { color: "#020408", alpha: 1, position: 19 },
          { color: "#020408", alpha: 1, position: 32 },
        ],
      },
    ],
    shadows: [
      "0 25px 46px rgb(0 0 0 / 74%)",
      "0 10px 20px rgb(0 0 0 / 64%)",
      "0 0 33px rgb(119 155 231 / 7%)",
      "inset 0 1px 0 rgb(255 255 255 / 9%)",
      "inset 0 -18px 30px rgb(0 0 0 / 52%)",
    ],
  },
  {
    id: "axial-prism",
    title: "Axial Prism Slab",
    group: "Angular / directional",
    note: "Diagonal light pressure and an asymmetric violet-to-cyan bevel give this slab its unmistakable machined direction.",
    radius: 30,
    layers: [
      {
        name: "Axial light",
        box: "content-box",
        kind: "linear-gradient",
        geometry: "128deg",
        stops: [
          { color: "#ffffff", alpha: 0.12, position: 0 },
          { color: "#ffffff", alpha: 0.12, position: 17 },
          { color: "#ffffff", alpha: 0, position: 17 },
          { color: "#ffffff", alpha: 0, position: 38 },
          { color: "#000000", alpha: 0.24, position: 38 },
          { color: "#000000", alpha: 0.24, position: 100 },
        ],
      },
      {
        name: "Prism face",
        box: "content-box",
        kind: "linear-gradient",
        geometry: "38deg",
        stops: [
          { color: "#1c1923", alpha: 1, position: 0 },
          { color: "#080a13", alpha: 1, position: 44 },
          { color: "#020307", alpha: 1, position: 100 },
        ],
      },
      {
        name: "Split bevel",
        box: "padding-box",
        kind: "linear-gradient",
        geometry: "128deg",
        stops: [
          { color: "#020307", alpha: 1, position: 0 },
          { color: "#020307", alpha: 1, position: 16 },
          { color: "#504176", alpha: 0.72, position: 27 },
          { color: "#0a0b12", alpha: 1, position: 56 },
          { color: "#255f7c", alpha: 0.58, position: 68 },
          { color: "#000000", alpha: 1, position: 100 },
        ],
      },
      {
        name: "Spectral rim",
        box: "border-box",
        kind: "linear-gradient",
        geometry: "128deg",
        stops: [
          { color: "#b9a6ff", alpha: 0.66, position: 0 },
          { color: "#1b162d", alpha: 1, position: 24 },
          { color: "#020307", alpha: 1, position: 48 },
          { color: "#35acd2", alpha: 0.54, position: 68 },
          { color: "#040508", alpha: 1, position: 100 },
        ],
      },
    ],
    shadows: [
      "13px 26px 45px rgb(0 0 0 / 70%)",
      "-9px -7px 20px rgb(124 100 255 / 5%)",
      "0 0 27px rgb(54 178 218 / 5%)",
      "inset 1px 1px 0 rgb(255 255 255 / 9%)",
      "inset -13px -16px 26px rgb(0 0 0 / 46%)",
    ],
  },
  {
    id: "vanta-soot",
    title: "Vanta Soot Deboss",
    group: "Embedded / inverse depth",
    note: "A soot-black deboss whose concentrated lower-right shade and restrained rim lighting make it feel pressed into the stage.",
    radius: 30,
    layers: [
      {
        name: "Inverse shade",
        box: "content-box",
        kind: "radial-gradient",
        geometry: "circle at 68% 76%",
        stops: [
          { color: "#000000", alpha: 0.82, position: 0 },
          { color: "#000000", alpha: 0.42, position: 38 },
          { color: "#000000", alpha: 0, position: 70 },
        ],
      },
      {
        name: "Soot bloom",
        box: "content-box",
        kind: "radial-gradient",
        geometry: "ellipse at 32% 24%",
        stops: [
          { color: "#5a6070", alpha: 0.1, position: 0 },
          { color: "#5a6070", alpha: 0, position: 38 },
        ],
      },
      {
        name: "Pressed face",
        box: "content-box",
        kind: "linear-gradient",
        geometry: "150deg",
        stops: [
          { color: "#0f1012", alpha: 1, position: 0 },
          { color: "#161513", alpha: 1, position: 100 },
        ],
      },
      {
        name: "Recess wall",
        box: "padding-box",
        kind: "radial-gradient",
        geometry: "circle at center",
        stops: [
          { color: "#1b1c1e", alpha: 1, position: 0 },
          { color: "#111214", alpha: 1, position: 48 },
          { color: "#08090a", alpha: 1, position: 82 },
        ],
      },
      {
        name: "Soot rim",
        box: "border-box",
        kind: "linear-gradient",
        geometry: "135deg",
        stops: [
          { color: "#3c3e45", alpha: 1, position: 0 },
          { color: "#1a1b1e", alpha: 1, position: 35 },
          { color: "#0d0e0f", alpha: 1, position: 65 },
          { color: "#2d2f34", alpha: 1, position: 100 },
        ],
      },
    ],
    shadows: [
      "inset 5px 5px 11px rgb(0 0 0 / 88%)",
      "inset -4px -4px 9px rgb(255 255 255 / 3%)",
      "0 13px 22px rgb(0 0 0 / 72%)",
    ],
  },
  {
    id: "floating-sapphire",
    title: "Floating Sapphire Tile",
    group: "Raised / optical blue",
    note: "A polished blue-glass tile with a cool lens highlight, dense optical bevel, and a deep cast shadow.",
    radius: 30,
    layers: [
      {
        name: "Lens wash",
        box: "content-box",
        kind: "radial-gradient",
        geometry: "ellipse at 30% 18%",
        stops: [
          { color: "#afd5ff", alpha: 0.24, position: 0 },
          { color: "#539dff", alpha: 0.1, position: 24 },
          { color: "#539dff", alpha: 0, position: 48 },
        ],
      },
      {
        name: "Sapphire face",
        box: "content-box",
        kind: "linear-gradient",
        geometry: "180deg",
        stops: [
          { color: "#141f30", alpha: 0.94, position: 0 },
          { color: "#050a13", alpha: 1, position: 52 },
          { color: "#010409", alpha: 1, position: 100 },
        ],
      },
      {
        name: "Optical bevel",
        box: "padding-box",
        kind: "linear-gradient",
        geometry: "145deg",
        stops: [
          { color: "#4ea9ff", alpha: 0.42, position: 0 },
          { color: "#050b13", alpha: 1, position: 22 },
          { color: "#102b4f", alpha: 1, position: 49 },
          { color: "#5e9cff", alpha: 0.34, position: 70 },
          { color: "#020408", alpha: 1, position: 100 },
        ],
      },
      {
        name: "Sapphire rim",
        box: "border-box",
        kind: "linear-gradient",
        geometry: "145deg",
        stops: [
          { color: "#c4deff", alpha: 0.76, position: 0 },
          { color: "#1f5898", alpha: 1, position: 17 },
          { color: "#02050a", alpha: 1, position: 43 },
          { color: "#6097de", alpha: 0.68, position: 72 },
          { color: "#010307", alpha: 1, position: 100 },
        ],
      },
    ],
    shadows: [
      "0 28px 46px rgb(0 0 0 / 76%)",
      "0 13px 25px rgb(0 16 42 / 60%)",
      "0 0 32px rgb(74 151 255 / 8%)",
      "inset 0 1px 0 rgb(232 244 255 / 13%)",
      "inset 0 -17px 27px rgb(0 0 0 / 48%)",
    ],
  },
];

function getReferenceCardDeclarations(card, settings) {
  return {
    width: `${settings.size}px`,
    aspectRatio: "1",
    padding: `${settings.padding}px`,
    border: `${settings.border}px solid transparent`,
    borderRadius: settings.radius >= 999 ? "50%" : `${settings.radius}px`,
    boxSizing: "border-box",
    display: "grid",
    placeItems: "center",
    overflow: "hidden",
    background: card.layers.map(serializeGradientLayer).join(", "),
    backgroundRepeat: "no-repeat",
    boxShadow: card.shadows.join(", "),
  };
}

export function getReferenceCardStyle(card, settings) {
  const { background, backgroundRepeat, ...style } =
    getReferenceCardDeclarations(card, settings);

  return {
    ...style,
    "--reference-card-background": background,
    "--reference-card-background-repeat": backgroundRepeat,
  };
}

export function getReferenceCardCss(card, settings) {
  const cardStyle = getReferenceCardDeclarations(card, settings);
  const logoStyle = {
    width: `${settings.logoSize}%`,
    height: `${settings.logoSize}%`,
    objectFit: "contain",
    opacity: settings.logoOpacity / 100,
    filter: "drop-shadow(0 16px 22px rgb(0 0 0 / 58%))",
  };

  return `${styleObjectToRule(".reference-card", cardStyle)}

${styleObjectToRule(".reference-card > img", logoStyle)}`;
}
