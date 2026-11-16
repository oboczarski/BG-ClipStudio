import { useState } from "react";
import CodePanel from "../../components/CodePanel";
import {
  ColorControl,
  RangeControl,
  SelectControl,
  TextControl,
} from "../../components/Controls";
import SectionHeading from "../../components/SectionHeading";
import { escapeHtml, rgb, styleObjectToRule } from "../../utils/css";

const AUDIOWIDE_STACK =
  '"Audiowide", "Product Sans", "Google Sans", Arial, sans-serif';
const MUSEO_STACK =
  '"MuseoModerno", "Product Sans", "Google Sans", Arial, sans-serif';
const BRUNO_STACK =
  '"Bruno Ace SC", "Product Sans", "Google Sans", Arial, sans-serif';

const textPresets = [
  {
    id: "spectral-foil",
    name: "Spectral Foil",
    sample: "FOIL",
    category: "gradient fill",
    description:
      "A bright spectral foil with a pale perimeter and restrained ambient separation.",
    defaults: {
      color1: "#f8ffff",
      color2: "#36ffd5",
      color3: "#ff5fbd",
      angle: 98,
      outline: 1.4,
      outlineColor: "#c8fff4",
      depth: 14,
    },
    background: ({ color1, color2, color3, angle }) =>
      `linear-gradient(${angle}deg, ${color1} 0%, ${color2} 40%, #6f8cff 68%, ${color3} 100%)`,
    shadow: ({ color2, depth }) =>
      `0 0 ${Math.round(depth * 0.9)}px ${rgb(color2, 0.22)}, 0 ${depth}px ${Math.round(depth * 1.8)}px rgb(0 0 0 / 58%)`,
  },
  {
    id: "halftone-ink",
    name: "Halftone Ink",
    sample: "INK",
    category: "pattern clipped",
    description:
      "A dot screen is clipped directly into the glyphs, backed by a dense print-ink gradient.",
    defaults: {
      color1: "#fff1b8",
      color2: "#ff5d70",
      color3: "#7b5cff",
      angle: 132,
      outline: 1,
      outlineColor: "#ffd6a0",
      depth: 8,
    },
    background: ({ color1, color2, color3, angle }) =>
      `radial-gradient(circle, ${rgb(color1, 0.9)} 0 1px, transparent 1.5px), linear-gradient(${angle}deg, ${color2}, ${color3})`,
    backgroundSize: "7px 7px, auto",
    backgroundPosition: "0 0, 0 0",
    backgroundRepeat: "repeat, no-repeat",
    shadow: ({ color2, color3, depth }) =>
      `${Math.max(2, Math.round(depth * 0.35))}px ${Math.max(2, Math.round(depth * 0.35))}px 0 ${rgb(color2, 0.52)}, ${Math.max(4, Math.round(depth * 0.7))}px ${Math.max(4, Math.round(depth * 0.7))}px 0 ${rgb(color3, 0.35)}, 0 ${depth}px ${depth * 2}px rgb(0 0 0 / 48%)`,
  },
  {
    id: "thermal-tube",
    name: "Thermal Tube",
    sample: "HEAT",
    category: "static neon",
    description:
      "A warm-white core and stacked colored shadows create a polished static tube effect.",
    defaults: {
      color1: "#fff8dd",
      color2: "#ff9b3d",
      color3: "#ff3f8f",
      angle: 180,
      outline: 1.2,
      outlineColor: "#fff6d9",
      depth: 18,
    },
    background: ({ color1, color2, color3, angle }) =>
      `linear-gradient(${angle}deg, ${color1} 0 24%, ${color2} 58%, ${color3} 100%)`,
    shadow: ({ color2, color3, depth }) =>
      `0 0 ${Math.round(depth * 0.45)}px ${rgb(color2, 0.5)}, 0 0 ${depth}px ${rgb(color2, 0.46)}, 0 0 ${Math.round(depth * 2.2)}px ${rgb(color3, 0.26)}, 0 ${Math.round(depth * 0.8)}px ${Math.round(depth * 1.8)}px rgb(0 0 0 / 60%)`,
  },
  {
    id: "offset-press",
    name: "Offset Press",
    sample: "PRESS",
    category: "registered shadow",
    description:
      "Cyan and magenta registration offsets sit behind a high-contrast editorial face.",
    defaults: {
      color1: "#fffaf0",
      color2: "#22e7e0",
      color3: "#ff4c9b",
      angle: 96,
      outline: 0.8,
      outlineColor: "#ffffff",
      depth: 10,
    },
    background: ({ color1, color2, color3, angle }) =>
      `linear-gradient(${angle}deg, ${color1} 0 48%, ${color2} 48% 72%, ${color3} 72% 100%)`,
    shadow: ({ color2, color3, depth }) =>
      `-${Math.max(2, Math.round(depth * 0.45))}px ${Math.max(2, Math.round(depth * 0.35))}px 0 ${rgb(color2, 0.8)}, ${Math.max(2, Math.round(depth * 0.45))}px -${Math.max(2, Math.round(depth * 0.35))}px 0 ${rgb(color3, 0.78)}, 0 ${depth}px ${Math.round(depth * 1.5)}px rgb(0 0 0 / 52%)`,
  },
  {
    id: "liquid-chrome",
    name: "Liquid Chrome",
    sample: "CHROME",
    category: "metallic stops",
    description:
      "Compressed light and dark stops make a metallic fill without images, SVG, or generated content.",
    defaults: {
      color1: "#f6ffff",
      color2: "#78d9f3",
      color3: "#9b77ff",
      angle: 180,
      outline: 1.6,
      outlineColor: "#d8f9ff",
      depth: 12,
    },
    background: ({ color1, color2, color3, angle }) =>
      `linear-gradient(${angle}deg, ${color1} 0 13%, #5b6c78 26%, #f7ffff 39%, ${color2} 50%, #17232e 58%, ${color3} 74%, #efffff 88%, #48505b 100%)`,
    shadow: ({ color2, depth }) =>
      `0 1px 0 rgb(255 255 255 / 35%), 0 ${Math.round(depth * 0.55)}px 0 rgb(6 11 17 / 90%), 0 ${depth}px ${Math.round(depth * 1.7)}px rgb(0 0 0 / 64%), 0 0 ${depth}px ${rgb(color2, 0.12)}`,
  },
  {
    id: "engraved-titanium",
    name: "Engraved Titanium",
    sample: "FORGED",
    category: "pressed type",
    description:
      "A charcoal metallic fill and opposing highlight/shade stack make the type feel stamped into steel.",
    defaults: {
      color1: "#78828e",
      color2: "#2d3640",
      color3: "#11161c",
      angle: 180,
      outline: 1,
      outlineColor: "#11161c",
      depth: 5,
    },
    background: ({ color1, color2, color3, angle }) =>
      `linear-gradient(${angle}deg, ${color1} 0%, ${color2} 42%, ${color3} 72%, #66717d 100%)`,
    shadow: ({ depth }) =>
      `0 1px 1px rgb(255 255 255 / 24%), 0 -1px 1px rgb(0 0 0 / 82%), ${Math.max(2, Math.round(depth * 0.6))}px ${Math.max(2, Math.round(depth * 0.6))}px ${depth}px rgb(0 0 0 / 46%)`,
  },
  {
    id: "blueprint-grid",
    name: "Blueprint Grid",
    sample: "GRID",
    category: "dual pattern",
    description:
      "Fine orthogonal line systems are clipped to the letterforms over a blueprint-blue base.",
    defaults: {
      color1: "#d8ffff",
      color2: "#4cf5e0",
      color3: "#5578ff",
      angle: 135,
      outline: 1.4,
      outlineColor: "#8cfff0",
      depth: 9,
    },
    background: ({ color1, color2, color3, angle }) =>
      `repeating-linear-gradient(90deg, ${rgb(color1, 0.45)} 0 1px, transparent 1px 7px), repeating-linear-gradient(0deg, ${rgb(color2, 0.38)} 0 1px, transparent 1px 7px), linear-gradient(${angle}deg, #0e5570, ${color3})`,
    shadow: ({ color2, depth }) =>
      `0 0 ${depth}px ${rgb(color2, 0.22)}, 0 ${depth}px ${depth * 2}px rgb(0 0 0 / 55%)`,
  },
  {
    id: "solar-extrusion",
    name: "Solar Extrusion",
    sample: "SOLAR",
    category: "layered depth",
    description:
      "A hot metallic face sits above a stepped maroon extrusion built entirely with text shadows.",
    defaults: {
      color1: "#fff1ae",
      color2: "#ff9f43",
      color3: "#ff4b4b",
      angle: 180,
      outline: 1,
      outlineColor: "#ffe4a3",
      depth: 14,
    },
    background: ({ color1, color2, color3, angle }) =>
      `linear-gradient(${angle}deg, ${color1}, ${color2} 52%, ${color3})`,
    shadow: ({ color3, depth }) => {
      const layers = Array.from(
        { length: Math.max(3, Math.round(depth / 2)) },
        (_, index) =>
          `${index + 1}px ${index + 1}px 0 ${rgb(color3, 0.76 - index * 0.045)}`,
      );
      layers.push(`0 ${depth}px ${depth * 2}px rgb(0 0 0 / 58%)`);
      return layers.join(", ");
    },
  },
  {
    id: "recessed-slate",
    name: "Recessed Slate Inlay",
    sample: "INSET",
    category: "embedded · mineral cut",
    description:
      "A stage-matched slate face, dark upper lip, and pale lower return make the glyphs read as cavities cut into the surface.",
    fontFamily: MUSEO_STACK,
    fontWeight: "760",
    defaults: {
      color1: "#252f38",
      color2: "#080c10",
      color3: "#8ea0ad",
      angle: 180,
      outline: 0.8,
      outlineColor: "#090d11",
      depth: 7,
    },
    stage: ({ color1, color2 }) => ({
      background: `radial-gradient(circle at 5px 5px, rgb(255 255 255 / 3%) 0 1px, transparent 1.4px) 0 0 / 13px 13px, repeating-linear-gradient(112deg, transparent 0 31px, rgb(255 255 255 / 3%) 31px 32px, transparent 32px 67px), linear-gradient(145deg, #394550, ${color1} 48%, ${color2})`,
      boxShadow:
        "inset 0 1px 0 rgb(255 255 255 / 9%), inset 0 -34px 70px rgb(0 0 0 / 18%)",
    }),
    background: ({ color1, color2, color3, angle }) =>
      `linear-gradient(${angle}deg, ${color2} 0 12%, #111820 29%, ${color1} 55%, ${color3} 87%, ${color1} 100%)`,
    shadow: ({ color3, depth }) =>
      `-${Math.max(1, Math.round(depth * 0.28))}px -${Math.max(1, Math.round(depth * 0.28))}px ${Math.max(1, Math.round(depth * 0.22))}px rgb(0 0 0 / 92%), ${Math.max(1, Math.round(depth * 0.26))}px ${Math.max(1, Math.round(depth * 0.3))}px ${Math.max(1, Math.round(depth * 0.26))}px ${rgb(color3, 0.48)}, 0 0 1px rgb(0 0 0 / 84%)`,
    fillStyle: () => ({
      filter: "contrast(1.08)",
    }),
  },
  {
    id: "subsurface-channel",
    name: "Subsurface Signal Channel",
    sample: "CHANNEL",
    category: "embedded · luminous groove",
    description:
      "A blackened signal trench holds its cyan energy along the lower internal wall, with the upper edge falling into the plate instead of lifting away from it.",
    fontFamily: AUDIOWIDE_STACK,
    fontWeight: "400",
    defaults: {
      color1: "#61ffe0",
      color2: "#071313",
      color3: "#5576ff",
      angle: 180,
      outline: 1.2,
      outlineColor: "#020707",
      depth: 10,
    },
    stage: ({ color1, color2, color3 }) => ({
      background: `repeating-linear-gradient(90deg, rgb(255 255 255 / 3%) 0 1px, transparent 1px 28px), repeating-linear-gradient(0deg, rgb(255 255 255 / 2%) 0 1px, transparent 1px 28px), radial-gradient(ellipse at 16% 12%, ${rgb(color1, 0.08)}, transparent 18rem), radial-gradient(ellipse at 86% 86%, ${rgb(color3, 0.08)}, transparent 19rem), linear-gradient(145deg, #142627, ${color2} 55%, #040808)`,
      boxShadow:
        "inset 0 1px 0 rgb(255 255 255 / 7%), inset 0 -38px 72px rgb(0 0 0 / 24%)",
    }),
    background: ({ color1, color2, color3, angle }) =>
      `linear-gradient(${angle}deg, #010505 0 18%, ${color2} 42%, #0b2020 63%, ${color1} 86%, ${color3} 100%)`,
    shadow: ({ color1, color3, depth }) =>
      `0 -${Math.max(2, Math.round(depth * 0.28))}px ${Math.max(1, Math.round(depth * 0.2))}px rgb(0 0 0 / 96%), 0 ${Math.max(1, Math.round(depth * 0.22))}px ${Math.max(1, Math.round(depth * 0.2))}px ${rgb(color1, 0.5)}, 0 ${Math.max(2, Math.round(depth * 0.45))}px ${depth}px ${rgb(color3, 0.12)}`,
    fillStyle: ({ color1, depth }) => ({
      filter: `drop-shadow(0 0 ${Math.max(2, Math.round(depth * 0.35))}px ${rgb(color1, 0.12)})`,
    }),
  },
  {
    id: "pearl-relief",
    name: "Pearl Relief Emboss",
    sample: "RELIEF",
    category: "embossed · raised ceramic",
    description:
      "A pale ceramic face catches a crisp upper-left highlight, a cool lower-right shade, and a soft cast shadow that clearly raises the type.",
    fontFamily: MUSEO_STACK,
    fontWeight: "780",
    defaults: {
      color1: "#fffdf7",
      color2: "#d5d9e6",
      color3: "#a58fc8",
      angle: 150,
      outline: 0.7,
      outlineColor: "#f9fbff",
      depth: 11,
    },
    stage: ({ color1, color2, color3 }) => ({
      background: `radial-gradient(ellipse at 17% 8%, rgb(255 255 255 / 88%), transparent 17rem), radial-gradient(ellipse at 87% 84%, ${rgb(color3, 0.22)}, transparent 20rem), linear-gradient(145deg, ${color1}, ${color2} 74%, #b8b7ca)`,
      boxShadow:
        "inset 0 1px 0 rgb(255 255 255 / 88%), inset 0 -32px 68px rgb(74 62 105 / 12%)",
    }),
    background: ({ color1, color2, color3, angle }) =>
      `linear-gradient(${angle}deg, #ffffff 0 21%, ${color1} 38%, ${color2} 68%, ${color3} 100%)`,
    shadow: ({ color1, color3, depth }) =>
      `-${Math.max(1, Math.round(depth * 0.2))}px -${Math.max(1, Math.round(depth * 0.2))}px ${Math.max(1, Math.round(depth * 0.18))}px ${rgb(color1, 0.96)}, ${Math.max(2, Math.round(depth * 0.28))}px ${Math.max(2, Math.round(depth * 0.3))}px ${Math.max(2, Math.round(depth * 0.28))}px ${rgb(color3, 0.52)}, 0 ${Math.max(4, Math.round(depth * 0.72))}px ${Math.round(depth * 1.35)}px rgb(70 61 91 / 24%)`,
    fillStyle: () => ({
      filter: "saturate(0.86)",
    }),
  },
  {
    id: "kintsugi-leaf",
    name: "Kintsugi Gold Leaf",
    sample: "GOLD",
    category: "fractured metallic fill",
    description:
      "Hard-stop fracture seams cross a compressed gold-leaf spectrum, creating repaired metallic type without an image texture.",
    fontFamily: MUSEO_STACK,
    fontWeight: "790",
    defaults: {
      color1: "#fff1a8",
      color2: "#f0a739",
      color3: "#7b3908",
      angle: 168,
      outline: 1.2,
      outlineColor: "#4e2608",
      depth: 13,
    },
    stage: ({ color2 }) => ({
      background: `radial-gradient(ellipse at 18% 0%, ${rgb(color2, 0.11)}, transparent 20rem), repeating-linear-gradient(132deg, rgb(255 215 121 / 4%) 0 1px, transparent 1px 17px), linear-gradient(145deg, #21170d, #080705 58%, #030303)`,
    }),
    background: ({ color1, color2, color3, angle }) =>
      `linear-gradient(133deg, transparent 0 26%, ${color1} 26% 27.2%, transparent 27.2% 62%, ${color2} 62% 63.1%, transparent 63.1% 100%), linear-gradient(48deg, transparent 0 54%, #fff7d1 54% 54.8%, transparent 54.8% 78%, ${color3} 78% 79.1%, transparent 79.1%), linear-gradient(${angle}deg, #fff9d8 0 10%, ${color1} 23%, ${color2} 46%, #7f430b 58%, #ffd76e 72%, ${color3} 86%, #fff2a7 100%)`,
    backgroundBlendMode: "screen, screen, normal",
    shadow: ({ color2, color3, depth }) =>
      `0 1px 0 rgb(255 255 255 / 42%), 0 ${Math.max(2, Math.round(depth * 0.34))}px 0 ${rgb(color3, 0.82)}, 0 ${depth}px ${Math.round(depth * 1.8)}px rgb(0 0 0 / 68%), 0 0 ${depth}px ${rgb(color2, 0.18)}`,
    fillStyle: () => ({
      filter: "contrast(1.16) saturate(1.12)",
    }),
  },
  {
    id: "aurora-interference",
    name: "Aurora Interference Film",
    sample: "AURORA",
    category: "blended spectral film",
    description:
      "Conic interference color, displaced highlight pools, screen blending, and spectral drop shadows turn the glyphs into thin optical film.",
    fontFamily: MUSEO_STACK,
    fontWeight: "760",
    defaults: {
      color1: "#73ffe0",
      color2: "#7284ff",
      color3: "#ff69c8",
      angle: 214,
      outline: 1,
      outlineColor: "#dcfff7",
      depth: 16,
    },
    stage: ({ color1, color2, color3 }) => ({
      background: `radial-gradient(ellipse at 18% 9%, ${rgb(color1, 0.16)}, transparent 18rem), radial-gradient(ellipse at 82% 86%, ${rgb(color3, 0.15)}, transparent 20rem), linear-gradient(145deg, #071b22, ${rgb(color2, 0.2)} 55%, #190a20), #05070c`,
    }),
    background: ({ color1, color2, color3, angle }) =>
      `radial-gradient(ellipse at 24% 18%, rgb(255 255 255 / 88%) 0 4%, transparent 31%), radial-gradient(ellipse at 82% 78%, ${rgb(color3, 0.72)} 0 8%, transparent 34%), conic-gradient(from ${angle}deg at 50% 48%, ${color1}, ${color2}, ${color3}, #ffd986, ${color1})`,
    backgroundBlendMode: "screen, screen, normal",
    shadow: ({ color1, color2, color3, depth }) =>
      `-${Math.max(1, Math.round(depth * 0.18))}px 0 ${Math.max(2, Math.round(depth * 0.28))}px ${rgb(color1, 0.4)}, ${Math.max(1, Math.round(depth * 0.18))}px 0 ${Math.max(2, Math.round(depth * 0.28))}px ${rgb(color3, 0.38)}, 0 0 ${depth}px ${rgb(color2, 0.25)}, 0 ${depth}px ${depth * 2}px rgb(0 0 0 / 58%)`,
    fillStyle: () => ({
      filter: "saturate(1.3) contrast(1.08)",
      mixBlendMode: "screen",
    }),
  },
  {
    id: "topographic-contour",
    name: "Topographic Contour Type",
    sample: "CONTOUR",
    category: "mapped line field",
    description:
      "Off-center concentric survey lines are clipped into the glyphs over a deep chromatic base, creating terrain rather than a generic stripe pattern.",
    fontFamily: AUDIOWIDE_STACK,
    fontWeight: "400",
    defaults: {
      color1: "#baffec",
      color2: "#31d9d0",
      color3: "#7467ff",
      angle: 132,
      outline: 1.2,
      outlineColor: "#8fffe6",
      depth: 10,
    },
    stage: ({ color2, color3 }) => ({
      background: `linear-gradient(90deg, rgb(255 255 255 / 3%) 1px, transparent 1px) 0 0 / 22px 22px, linear-gradient(0deg, rgb(255 255 255 / 3%) 1px, transparent 1px) 0 0 / 22px 22px, radial-gradient(ellipse at 18% 0%, ${rgb(color2, 0.12)}, transparent 18rem), radial-gradient(ellipse at 88% 88%, ${rgb(color3, 0.12)}, transparent 20rem), linear-gradient(145deg, #071d25, #0b0a2a)`,
    }),
    background: ({ color1, color2, color3, angle }) =>
      `repeating-radial-gradient(ellipse at 24% 68%, ${rgb(color1, 0.92)} 0 1.4px, transparent 1.8px 9px, ${rgb(color2, 0.72)} 10px 11.5px, transparent 12px 21px), linear-gradient(${angle}deg, #09243b, ${color2} 46%, ${color3})`,
    backgroundSize: "142% 164%, auto",
    backgroundPosition: "14% 62%, 0 0",
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundBlendMode: "screen, normal",
    shadow: ({ color2, color3, depth }) =>
      `0 0 ${depth}px ${rgb(color2, 0.26)}, ${Math.max(2, Math.round(depth * 0.35))}px ${Math.max(2, Math.round(depth * 0.35))}px 0 ${rgb(color3, 0.42)}, 0 ${depth}px ${depth * 2}px rgb(0 0 0 / 56%)`,
  },
  {
    id: "carbon-inlay",
    name: "Carbon Fiber Inlay",
    sample: "CARBON",
    category: "woven composite fill",
    description:
      "A micro conic weave, directional sheen, dense graphite base, and machined edge produce readable carbon composite rather than a checkerboard.",
    fontFamily: BRUNO_STACK,
    fontWeight: "400",
    defaults: {
      color1: "#82909b",
      color2: "#202a31",
      color3: "#52ead1",
      angle: 126,
      outline: 1.2,
      outlineColor: "#0b1115",
      depth: 12,
    },
    stage: ({ color2, color3 }) => ({
      background: `repeating-linear-gradient(135deg, rgb(255 255 255 / 3%) 0 1px, transparent 1px 8px), radial-gradient(ellipse at 16% 0%, ${rgb(color3, 0.07)}, transparent 18rem), linear-gradient(145deg, #222b31, ${color2} 52%, #070a0c)`,
    }),
    background: ({ color1, color2, color3, angle }) =>
      `repeating-conic-gradient(from 45deg at 5px 5px, ${color1} 0 25%, ${color2} 0 50%, #0a0f12 0 75%, #47525b 0 100%), linear-gradient(${angle}deg, transparent 0 24%, ${rgb(color3, 0.5)} 42%, transparent 58%), linear-gradient(145deg, #11181c, ${color2})`,
    backgroundSize: "10px 10px, auto, auto",
    backgroundPosition: "0 0, 0 0, 0 0",
    backgroundRepeat: "repeat, no-repeat, no-repeat",
    backgroundBlendMode: "overlay, screen, normal",
    shadow: ({ color3, depth }) =>
      `0 1px 0 rgb(255 255 255 / 24%), 0 ${Math.max(2, Math.round(depth * 0.32))}px 0 rgb(0 0 0 / 88%), 0 0 ${Math.round(depth * 0.8)}px ${rgb(color3, 0.14)}, 0 ${depth}px ${Math.round(depth * 1.7)}px rgb(0 0 0 / 62%)`,
    fillStyle: () => ({
      filter: "contrast(1.22)",
    }),
  },
  {
    id: "prismatic-glass-cut",
    name: "Prismatic Glass Cut",
    sample: "PRISM",
    category: "faceted transparent type",
    description:
      "Hard translucent facets, narrow white refractions, and contour-following filter shadows make the letters read like individually cut glass.",
    fontFamily: MUSEO_STACK,
    fontWeight: "760",
    defaults: {
      color1: "#eaffff",
      color2: "#55e8ff",
      color3: "#bd65ff",
      angle: 128,
      outline: 1.1,
      outlineColor: "#dffcff",
      depth: 15,
    },
    stage: ({ color2, color3 }) => ({
      background: `radial-gradient(ellipse at 14% 10%, ${rgb(color2, 0.18)}, transparent 18rem), radial-gradient(ellipse at 86% 84%, ${rgb(color3, 0.17)}, transparent 20rem), repeating-linear-gradient(132deg, rgb(255 255 255 / 3%) 0 1px, transparent 1px 21px), linear-gradient(145deg, #071520, #120a26 58%, #04060c)`,
    }),
    background: ({ color1, color2, color3, angle }) =>
      `linear-gradient(${angle}deg, rgb(255 255 255 / 92%) 0 10%, transparent 10% 24%, ${rgb(color2, 0.82)} 24% 37%, rgb(255 255 255 / 38%) 37% 39%, ${rgb(color3, 0.78)} 39% 58%, transparent 58% 71%, ${color1} 71% 78%, ${rgb(color2, 0.66)} 78% 100%), linear-gradient(154deg, rgb(255 255 255 / 36%), ${rgb(color2, 0.26)} 42%, ${rgb(color3, 0.24)})`,
    backgroundBlendMode: "screen, normal",
    shadow: ({ color2, color3, depth }) =>
      `0 1px 0 rgb(255 255 255 / 48%), 0 ${Math.max(2, Math.round(depth * 0.34))}px 0 rgb(4 12 25 / 82%), 0 ${depth}px ${Math.round(depth * 1.9)}px rgb(0 0 0 / 62%), 0 0 ${depth}px ${rgb(color2, 0.2)}, 0 0 ${Math.round(depth * 1.5)}px ${rgb(color3, 0.14)}`,
    fillStyle: ({ color2, color3, depth }) => ({
      filter: `drop-shadow(-2px -2px ${Math.max(1, Math.round(depth * 0.14))}px rgb(255 255 255 / 26%)) drop-shadow(2px 3px ${Math.max(2, Math.round(depth * 0.22))}px ${rgb(color2, 0.2)}) drop-shadow(-1px 4px ${Math.max(2, Math.round(depth * 0.26))}px ${rgb(color3, 0.16)})`,
    }),
  },
];

function createSettings(preset, phrase = "SURFACE") {
  return {
    phrase,
    size: 96,
    tracking: -5,
    ...preset.defaults,
  };
}

function getTreatmentStageStyles(preset, settings) {
  return preset.stage?.(settings) ?? {};
}

function getTreatmentStyles(preset, settings, compact = false) {
  const base = {
    gridArea: "1 / 1",
    display: "block",
    fontFamily:
      preset.fontFamily ??
      '"Arial Black", "Helvetica Neue", Arial, ui-sans-serif, system-ui, sans-serif',
    fontSize: compact
      ? "clamp(2rem, 5vw, 3rem)"
      : `clamp(3rem, 9vw, ${settings.size}px)`,
    fontWeight: preset.fontWeight ?? "950",
    fontStyle: preset.fontStyle,
    lineHeight: "0.84",
    letterSpacing: `${compact ? Math.max(settings.tracking, -3) : settings.tracking}px`,
    textTransform: "uppercase",
    textAlign: "center",
  };

  const outline = {
    ...base,
    zIndex: 1,
    color: "transparent",
    WebkitTextFillColor: "transparent",
    WebkitTextStroke: `${settings.outline}px ${settings.outlineColor}`,
    paintOrder: "stroke fill",
    ...(preset.outlineStyle?.(settings) ?? {}),
  };

  const fill = {
    ...base,
    zIndex: 2,
    color: "transparent",
    WebkitTextFillColor: "transparent",
    backgroundImage: preset.background(settings),
    backgroundSize: preset.backgroundSize,
    backgroundPosition: preset.backgroundPosition,
    backgroundRepeat: preset.backgroundRepeat,
    backgroundBlendMode: preset.backgroundBlendMode,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    textShadow: preset.shadow(settings),
    ...(preset.fillStyle?.(settings) ?? {}),
  };

  const wrapper = {
    display: "inline-grid",
    placeItems: "center",
    maxWidth: "100%",
    isolation: "isolate",
  };

  return { wrapper, outline, fill };
}

function getTreatmentCode(preset, settings) {
  const styles = getTreatmentStyles(preset, settings);
  const stageStyles = getTreatmentStageStyles(preset, settings);
  const hasTreatmentSurface = Object.keys(stageStyles).length > 0;
  const stageRule =
    hasTreatmentSurface
      ? `${styleObjectToRule(".type-treatment-surface", {
          minHeight: "520px",
          display: "grid",
          placeItems: "center",
          padding: "34px",
          border: "1px solid rgb(255 255 255 / 11%)",
          borderRadius: "25px",
          overflow: "hidden",
          textAlign: "center",
          ...stageStyles,
        })}\n\n`
      : "";
  const phrase = escapeHtml(settings.phrase);
  const markup = hasTreatmentSurface
    ? `<div class="type-treatment-surface">
  <span class="type-treatment">
    <span class="type-treatment__outline" aria-hidden="true">${phrase}</span>
    <span class="type-treatment__fill">${phrase}</span>
  </span>
</div>`
    : `<span class="type-treatment">
  <span class="type-treatment__outline" aria-hidden="true">${phrase}</span>
  <span class="type-treatment__fill">${phrase}</span>
</span>`;
  return `${markup}

${stageRule}${styleObjectToRule(".type-treatment", styles.wrapper)}

${styleObjectToRule(
  ".type-treatment__outline,\n.type-treatment__fill",
  {
    gridArea: styles.fill.gridArea,
    display: styles.fill.display,
    fontFamily: styles.fill.fontFamily,
    fontSize: styles.fill.fontSize,
    fontWeight: styles.fill.fontWeight,
    fontStyle: styles.fill.fontStyle,
    lineHeight: styles.fill.lineHeight,
    letterSpacing: styles.fill.letterSpacing,
    textTransform: styles.fill.textTransform,
    textAlign: styles.fill.textAlign,
  },
)}

${styleObjectToRule(".type-treatment__outline", {
  zIndex: styles.outline.zIndex,
  color: styles.outline.color,
  WebkitTextFillColor: styles.outline.WebkitTextFillColor,
  WebkitTextStroke: styles.outline.WebkitTextStroke,
  paintOrder: styles.outline.paintOrder,
})}

${styleObjectToRule(".type-treatment__fill", {
  zIndex: styles.fill.zIndex,
  color: styles.fill.color,
  WebkitTextFillColor: styles.fill.WebkitTextFillColor,
  backgroundImage: styles.fill.backgroundImage,
  backgroundSize: styles.fill.backgroundSize,
  backgroundPosition: styles.fill.backgroundPosition,
  backgroundRepeat: styles.fill.backgroundRepeat,
  backgroundBlendMode: styles.fill.backgroundBlendMode,
  WebkitBackgroundClip: styles.fill.WebkitBackgroundClip,
  backgroundClip: styles.fill.backgroundClip,
  textShadow: styles.fill.textShadow,
  filter: styles.fill.filter,
  mixBlendMode: styles.fill.mixBlendMode,
  opacity: styles.fill.opacity,
})}`;
}

function Treatment({ preset, settings, compact = false, phrase }) {
  const styles = getTreatmentStyles(preset, settings, compact);
  const text = phrase ?? settings.phrase;
  return (
    <span className="type-treatment" style={styles.wrapper}>
      <span
        className="type-treatment__outline"
        aria-hidden="true"
        style={styles.outline}
      >
        {text}
      </span>
      <span className="type-treatment__fill" style={styles.fill}>
        {text}
      </span>
    </span>
  );
}

export default function TextLab() {
  const [presetId, setPresetId] = useState(textPresets[0].id);
  const preset = textPresets.find((item) => item.id === presetId);
  const [settings, setSettings] = useState(createSettings(textPresets[0]));

  function selectPreset(nextId) {
    const nextPreset = textPresets.find((item) => item.id === nextId);
    setPresetId(nextId);
    setSettings((current) => createSettings(nextPreset, current.phrase));
  }

  const code = getTreatmentCode(preset, settings);
  const stageStyles = getTreatmentStageStyles(preset, settings);

  return (
    <div className="tab-page text-lab">
      <section className="page-intro page-intro--text">
        <div>
          <span className="page-intro__eyebrow">Type can be a material</span>
          <h2>Sixteen treatments. One honest foundry.</h2>
        </div>
        <p>
          This lab has been rebuilt from zero around practical text systems:
          clipped gradients and patterns, dimensional shadow stacks, metallic stop
          compression, print registration, true recessed illusions, raised relief,
          blend modes, filters, and accessible two-layer outlines.
        </p>
        <div className="page-intro__metrics">
          <div>
            <strong>16</strong>
            <span>distinct treatments</span>
          </div>
          <div>
            <strong>3</strong>
            <span>editable color stops</span>
          </div>
          <div>
            <strong>2 + 1</strong>
            <span>embedded + embossed</span>
          </div>
        </div>
      </section>

      <section className="section type-foundry">
        <SectionHeading
          kicker="01 · interactive type foundry"
          title="Tune a complete treatment, not a broken pile of text effects."
          description="Every preset uses visible markup—never generated content—and the displayed HTML and CSS update with the stage."
          badge="live HTML + exact CSS"
        />

        <div className="type-foundry__layout">
          <aside className="panel type-controls">
            <div className="panel-heading">
              <div>
                <span>Foundry controls</span>
                <small>{preset.name}</small>
              </div>
            </div>
            <div className="control-grid">
              <TextControl
                id="type-phrase"
                label="Text"
                value={settings.phrase}
                maxLength={26}
                onChange={(phrase) =>
                  setSettings((current) => ({ ...current, phrase }))
                }
              />
              <SelectControl
                id="type-preset"
                label="Treatment"
                value={presetId}
                options={textPresets.map((item) => ({
                  value: item.id,
                  label: item.name,
                }))}
                onChange={selectPreset}
              />
              <RangeControl
                id="type-size"
                label="Type size"
                min={52}
                max={140}
                value={settings.size}
                unit="px"
                onChange={(size) =>
                  setSettings((current) => ({ ...current, size }))
                }
              />
              <RangeControl
                id="type-tracking"
                label="Tracking"
                min={-10}
                max={12}
                value={settings.tracking}
                unit="px"
                onChange={(tracking) =>
                  setSettings((current) => ({ ...current, tracking }))
                }
              />
              <RangeControl
                id="type-angle"
                label="Gradient angle"
                min={0}
                max={360}
                value={settings.angle}
                unit="°"
                onChange={(angle) =>
                  setSettings((current) => ({ ...current, angle }))
                }
              />
              <RangeControl
                id="type-outline"
                label="Outline"
                min={0}
                max={5}
                step={0.1}
                value={settings.outline}
                unit="px"
                onChange={(outline) =>
                  setSettings((current) => ({ ...current, outline }))
                }
              />
              <RangeControl
                id="type-depth"
                label="Shadow depth"
                min={0}
                max={28}
                value={settings.depth}
                unit="px"
                onChange={(depth) =>
                  setSettings((current) => ({ ...current, depth }))
                }
              />
              <ColorControl
                id="type-outline-color"
                label="Outline color"
                value={settings.outlineColor}
                onChange={(outlineColor) =>
                  setSettings((current) => ({ ...current, outlineColor }))
                }
              />
              <ColorControl
                id="type-color-1"
                label="Stop 1"
                value={settings.color1}
                onChange={(color1) =>
                  setSettings((current) => ({ ...current, color1 }))
                }
              />
              <ColorControl
                id="type-color-2"
                label="Stop 2"
                value={settings.color2}
                onChange={(color2) =>
                  setSettings((current) => ({ ...current, color2 }))
                }
              />
              <ColorControl
                id="type-color-3"
                label="Stop 3"
                value={settings.color3}
                onChange={(color3) =>
                  setSettings((current) => ({ ...current, color3 }))
                }
              />
            </div>
            <div className="type-preset-note">
              <span>{preset.category}</span>
              <p>{preset.description}</p>
            </div>
          </aside>

          <div className="type-foundry__preview">
            <div
              className={`type-stage type-stage--${preset.id}`}
              style={stageStyles}
            >
              <div className="type-stage__register">
                <span>TYPE / MATERIAL</span>
                <small>{preset.name}</small>
              </div>
              <Treatment preset={preset} settings={settings} />
              <p>Editable foreground text remains real, selectable content.</p>
            </div>
            <CodePanel
              label={`${preset.name} · live HTML + exact CSS`}
              language="HTML + CSS"
              code={code}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          kicker="02 · treatment library"
          title="Sixteen visual languages with meaningfully different mechanics."
          description="Select any specimen to load its complete recipe into the foundry above."
          badge="no minor color-swap repeats"
        />
        <div className="text-technique-grid">
          {textPresets.map((item) => {
            const itemSettings = createSettings(item, item.sample);
            return (
              <button
                key={item.id}
                className={`text-technique ${presetId === item.id ? "text-technique--active" : ""}`}
                type="button"
                onClick={() => selectPreset(item.id)}
              >
                <div
                  className={`text-technique__stage text-technique__stage--${item.id}`}
                  style={getTreatmentStageStyles(item, itemSettings)}
                >
                  <Treatment
                    preset={item}
                    settings={itemSettings}
                    compact
                    phrase={item.sample}
                  />
                </div>
                <div className="text-technique__copy">
                  <span>{item.category}</span>
                  <strong>{item.name}</strong>
                  <p>{item.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="section type-guidance">
        <SectionHeading
          kicker="03 · practical type guidance"
          title="Choose the technique by job, not by spectacle."
        />
        <div className="decision-grid">
          <article>
            <span>Display</span>
            <strong>Foil, chrome, extrusion</strong>
            <p>Use on short headings with strong contrast and generous surrounding space.</p>
          </article>
          <article>
            <span>Editorial</span>
            <strong>Offset press, halftone</strong>
            <p>Best for posters, covers, category labels, and compact campaign moments.</p>
          </article>
          <article>
            <span>Interface</span>
            <strong>Blueprint, engraved</strong>
            <p>Keep sizes readable and reserve texture for labels that are not body copy.</p>
          </article>
          <article>
            <span>Accessibility</span>
            <strong>Real text stays real</strong>
            <p>The duplicate outline layer is hidden from assistive tech; the fill layer carries the content.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
