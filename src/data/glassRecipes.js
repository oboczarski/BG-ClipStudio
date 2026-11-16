import { rgb, styleObjectToRule } from "../utils/css";
import { getOpticalFieldCode } from "./glassFields";

function scaledAlpha(base, opacity) {
  return Number((base * (opacity / 100)).toFixed(3));
}

function shadowSet(settings, color, character = "lifted") {
  const depth = settings.depth;
  const glow = rgb(color, scaledAlpha(0.13, settings.reflection));

  if (character === "embedded") {
    return `inset ${Math.round(depth * 0.2)}px ${Math.round(depth * 0.24)}px ${Math.round(depth * 0.7)}px rgb(0 0 0 / 46%), inset -2px -2px ${Math.round(depth * 0.45)}px rgb(255 255 255 / 12%), 0 ${Math.round(depth * 0.4)}px ${Math.round(depth * 0.9)}px rgb(0 0 0 / 42%), 0 0 ${Math.round(depth * 0.9)}px ${glow}`;
  }

  if (character === "floating") {
    return `0 ${Math.round(depth * 1.4)}px ${Math.round(depth * 2.5)}px rgb(0 0 0 / 54%), 0 ${Math.round(depth * 0.55)}px ${Math.round(depth * 1.1)}px rgb(0 0 0 / 42%), 0 0 ${Math.round(depth * 1.25)}px ${glow}, inset 0 1px 0 rgb(255 255 255 / 24%), inset 0 -1px 0 rgb(0 0 0 / 25%)`;
  }

  return `0 ${depth}px ${Math.round(depth * 2.1)}px rgb(0 0 0 / 48%), 0 ${Math.round(depth * 0.35)}px ${Math.round(depth * 0.7)}px rgb(0 0 0 / 36%), 0 0 ${depth}px ${glow}, inset 0 1px 0 rgb(255 255 255 / 22%), inset 0 -1px 0 rgb(0 0 0 / 22%)`;
}

export const glassRecipes = [
  {
    id: "refractive-edge",
    name: "Refractive Edge Slab",
    category: "dimensional border",
    description:
      "A clear architectural slab with a light-splitting edge, soft inner pool, and a narrow moving-looking reflection that remains completely static.",
    defaults: {
      tint: "#55f2d2",
      accent: "#7186ff",
      blur: 24,
      opacity: 72,
      saturation: 145,
      border: 1,
      radius: 30,
      depth: 24,
      highlightX: 22,
      highlightY: 12,
      reflection: 74,
    },
    surface(settings) {
      return {
        background: `radial-gradient(ellipse at ${settings.highlightX}% ${settings.highlightY}%, ${rgb("#ffffff", scaledAlpha(0.3, settings.reflection))}, transparent 35%), radial-gradient(ellipse at 84% 82%, ${rgb(settings.accent, scaledAlpha(0.17, settings.opacity))}, transparent 46%), linear-gradient(145deg, ${rgb("#ffffff", scaledAlpha(0.15, settings.opacity))}, ${rgb(settings.tint, scaledAlpha(0.07, settings.opacity))} 42%, rgb(7 13 24 / 28%) 100%) padding-box, linear-gradient(130deg, rgb(255 255 255 / 68%), ${rgb(settings.tint, 0.6)} 30%, rgb(255 255 255 / 12%) 52%, ${rgb(settings.accent, 0.58)} 78%, rgb(255 255 255 / 46%)) border-box`,
        borderColor: "transparent",
        boxShadow: shadowSet(settings, settings.tint, "floating"),
      };
    },
    glint(settings) {
      return {
        position: "absolute",
        zIndex: 1,
        width: "72%",
        height: "18%",
        left: `${Math.max(-18, settings.highlightX - 34)}%`,
        top: `${Math.max(4, settings.highlightY - 2)}%`,
        borderRadius: "999px",
        background: `linear-gradient(90deg, transparent, ${rgb("#ffffff", scaledAlpha(0.36, settings.reflection))}, transparent)`,
        transform: "rotate(-18deg)",
        filter: `blur(${Math.max(1, Math.round(settings.blur * 0.13))}px)`,
      };
    },
    lens(settings) {
      return {
        position: "absolute",
        zIndex: 0,
        inset: "10px",
        borderRadius: `${Math.max(8, settings.radius - 9)}px`,
        border: "1px solid rgb(255 255 255 / 10%)",
        boxShadow:
          "inset 0 1px 0 rgb(255 255 255 / 17%), inset 0 -18px 36px rgb(0 0 0 / 14%)",
      };
    },
    fallback: "linear-gradient(145deg, rgb(34 61 68 / 94%), rgb(11 15 29 / 96%))",
  },
  {
    id: "smoked-lens",
    name: "Smoked Optical Lens",
    category: "dark glass",
    description:
      "Dense smoked glass with a cool optical bloom, restrained caustic edge, and embedded instrument depth.",
    defaults: {
      tint: "#31e5ff",
      accent: "#816dff",
      blur: 18,
      opacity: 84,
      saturation: 128,
      border: 1,
      radius: 34,
      depth: 19,
      highlightX: 72,
      highlightY: 24,
      reflection: 62,
    },
    surface(settings) {
      return {
        background: `radial-gradient(circle at ${settings.highlightX}% ${settings.highlightY}%, ${rgb(settings.tint, scaledAlpha(0.25, settings.reflection))}, transparent 31%), radial-gradient(ellipse at 20% 86%, ${rgb(settings.accent, scaledAlpha(0.17, settings.opacity))}, transparent 45%), linear-gradient(155deg, rgb(255 255 255 / 9%), rgb(4 9 16 / ${scaledAlpha(0.7, settings.opacity)}) 54%, rgb(1 3 8 / ${scaledAlpha(0.88, settings.opacity)})) padding-box, linear-gradient(135deg, rgb(255 255 255 / 38%), ${rgb(settings.tint, 0.38)} 34%, rgb(255 255 255 / 8%) 61%, ${rgb(settings.accent, 0.32)}) border-box`,
        borderColor: "transparent",
        boxShadow: shadowSet(settings, settings.tint, "embedded"),
      };
    },
    glint(settings) {
      return {
        position: "absolute",
        zIndex: 1,
        width: "42%",
        height: "42%",
        right: `${Math.max(-8, 52 - settings.highlightX)}%`,
        top: `${Math.max(-10, settings.highlightY - 20)}%`,
        borderRadius: "50%",
        border: `1px solid ${rgb(settings.tint, scaledAlpha(0.34, settings.reflection))}`,
        boxShadow: `inset 0 0 ${settings.blur}px ${rgb(settings.tint, 0.09)}, 0 0 ${Math.round(settings.blur * 0.75)}px ${rgb(settings.tint, 0.08)}`,
      };
    },
    lens(settings) {
      return {
        position: "absolute",
        zIndex: 0,
        inset: "14px",
        borderRadius: `${Math.max(8, settings.radius - 12)}px`,
        background: "linear-gradient(145deg, rgb(0 0 0 / 16%), transparent 48%)",
        border: "1px solid rgb(255 255 255 / 7%)",
        boxShadow:
          "inset 5px 6px 16px rgb(0 0 0 / 24%), inset -2px -2px 8px rgb(255 255 255 / 4%)",
      };
    },
    fallback: "linear-gradient(155deg, rgb(18 31 42 / 97%), rgb(2 5 11 / 98%))",
  },
  {
    id: "frozen-acrylic",
    name: "Frozen Acrylic",
    category: "frosted diffusion",
    description:
      "Milky diffusion, suspended micro-bubbles, cool inner bloom, and a soft ice-cut perimeter.",
    defaults: {
      tint: "#b8fbff",
      accent: "#af9cff",
      blur: 32,
      opacity: 76,
      saturation: 118,
      border: 2,
      radius: 38,
      depth: 22,
      highlightX: 26,
      highlightY: 18,
      reflection: 88,
    },
    surface(settings) {
      return {
        background: `radial-gradient(circle at ${settings.highlightX}% ${settings.highlightY}%, rgb(255 255 255 / ${scaledAlpha(0.42, settings.reflection)}), transparent 32%), radial-gradient(circle at 12px 14px, rgb(255 255 255 / 20%) 0 1px, transparent 1.5px) 0 0 / 20px 22px, linear-gradient(145deg, rgb(255 255 255 / ${scaledAlpha(0.28, settings.opacity)}), ${rgb(settings.tint, scaledAlpha(0.16, settings.opacity))} 48%, ${rgb(settings.accent, scaledAlpha(0.12, settings.opacity))}) padding-box, linear-gradient(135deg, rgb(255 255 255 / 78%), ${rgb(settings.tint, 0.56)} 42%, rgb(255 255 255 / 24%) 72%, ${rgb(settings.accent, 0.46)}) border-box`,
        borderColor: "transparent",
        boxShadow: shadowSet(settings, settings.tint, "lifted"),
      };
    },
    glint(settings) {
      return {
        position: "absolute",
        zIndex: 1,
        inset: "8px 12px auto",
        height: "2px",
        borderRadius: "999px",
        background: `linear-gradient(90deg, transparent, rgb(255 255 255 / ${scaledAlpha(0.86, settings.reflection)}), transparent)`,
        boxShadow: `0 7px ${Math.round(settings.blur * 0.8)}px rgb(255 255 255 / 24%)`,
      };
    },
    lens(settings) {
      return {
        position: "absolute",
        zIndex: 0,
        inset: "13px",
        borderRadius: `${Math.max(8, settings.radius - 11)}px`,
        background: `linear-gradient(145deg, rgb(255 255 255 / 11%), ${rgb(settings.tint, 0.05)})`,
        border: "1px solid rgb(255 255 255 / 22%)",
        boxShadow:
          "inset 0 1px 0 rgb(255 255 255 / 34%), inset 0 -22px 40px rgb(46 85 112 / 10%)",
      };
    },
    fallback: "linear-gradient(145deg, rgb(196 229 234 / 94%), rgb(125 127 177 / 94%))",
  },
  {
    id: "iridescent-membrane",
    name: "Iridescent Membrane",
    category: "spectral film",
    description:
      "A whisper-thin spectral film with conic color separation, soft edge pooling, and a floating translucent body.",
    defaults: {
      tint: "#54ffd8",
      accent: "#ff66be",
      blur: 26,
      opacity: 58,
      saturation: 176,
      border: 1,
      radius: 42,
      depth: 26,
      highlightX: 50,
      highlightY: 16,
      reflection: 78,
    },
    surface(settings) {
      return {
        background: `radial-gradient(ellipse at ${settings.highlightX}% ${settings.highlightY}%, rgb(255 255 255 / ${scaledAlpha(0.32, settings.reflection)}), transparent 35%), conic-gradient(from 210deg at 50% 42%, ${rgb(settings.tint, scaledAlpha(0.2, settings.opacity))}, rgb(99 102 241 / ${scaledAlpha(0.2, settings.opacity)}), ${rgb(settings.accent, scaledAlpha(0.19, settings.opacity))}, rgb(255 198 94 / ${scaledAlpha(0.16, settings.opacity)}), ${rgb(settings.tint, scaledAlpha(0.2, settings.opacity))}) padding-box, linear-gradient(145deg, rgb(255 255 255 / 10%), rgb(255 255 255 / 3%)) padding-box, conic-gradient(from 190deg, ${rgb(settings.tint, 0.64)}, rgb(128 113 255 / 55%), ${rgb(settings.accent, 0.58)}, rgb(255 211 119 / 52%), ${rgb(settings.tint, 0.64)}) border-box`,
        borderColor: "transparent",
        boxShadow: shadowSet(settings, settings.accent, "floating"),
      };
    },
    glint(settings) {
      return {
        position: "absolute",
        zIndex: 1,
        width: "68%",
        height: "32%",
        left: "16%",
        top: "4%",
        borderRadius: "50%",
        background: `radial-gradient(ellipse, rgb(255 255 255 / ${scaledAlpha(0.28, settings.reflection)}), transparent 70%)`,
        filter: `blur(${Math.max(2, Math.round(settings.blur * 0.2))}px)`,
      };
    },
    lens(settings) {
      return {
        position: "absolute",
        zIndex: 0,
        inset: "9px",
        borderRadius: `${Math.max(8, settings.radius - 7)}px`,
        border: "1px solid rgb(255 255 255 / 10%)",
        boxShadow:
          "inset 0 1px 0 rgb(255 255 255 / 20%), inset 0 -20px 38px rgb(69 37 101 / 9%)",
      };
    },
    fallback: "linear-gradient(145deg, rgb(57 89 89 / 94%), rgb(65 34 78 / 95%))",
  },
  {
    id: "prismatic-lens",
    name: "Prismatic Lens Plate",
    category: "refracted facets",
    description:
      "Hard translucent facets cross a clear lens, with chromatic separation at the lower edge and a dark optical backing.",
    defaults: {
      tint: "#4cf6ff",
      accent: "#b06cff",
      blur: 20,
      opacity: 68,
      saturation: 158,
      border: 2,
      radius: 28,
      depth: 28,
      highlightX: 18,
      highlightY: 10,
      reflection: 84,
    },
    surface(settings) {
      return {
        background: `linear-gradient(125deg, rgb(255 255 255 / ${scaledAlpha(0.25, settings.reflection)}) 0 11%, transparent 11% 33%, ${rgb(settings.tint, scaledAlpha(0.16, settings.opacity))} 33% 45%, transparent 45% 68%, ${rgb(settings.accent, scaledAlpha(0.15, settings.opacity))} 68% 79%, transparent 79%) padding-box, radial-gradient(ellipse at ${settings.highlightX}% ${settings.highlightY}%, rgb(255 255 255 / 22%), transparent 38%) padding-box, linear-gradient(150deg, rgb(22 45 59 / ${scaledAlpha(0.48, settings.opacity)}), rgb(5 8 20 / ${scaledAlpha(0.72, settings.opacity)})) padding-box, linear-gradient(125deg, rgb(235 255 255 / 78%), ${rgb(settings.tint, 0.62)} 20%, rgb(7 16 29 / 80%) 43%, ${rgb(settings.accent, 0.62)} 68%, rgb(255 119 200 / 54%) 82%, rgb(5 8 17 / 88%)) border-box`,
        borderColor: "transparent",
        boxShadow: shadowSet(settings, settings.tint, "floating"),
      };
    },
    glint(settings) {
      return {
        position: "absolute",
        zIndex: 1,
        left: "-8%",
        top: `${settings.highlightY}%`,
        width: "66%",
        height: "12%",
        borderRadius: "999px",
        background: `linear-gradient(90deg, transparent, rgb(255 255 255 / ${scaledAlpha(0.54, settings.reflection)}), ${rgb(settings.tint, 0.22)}, transparent)`,
        transform: "rotate(-18deg)",
        filter: `blur(${Math.max(1, Math.round(settings.blur * 0.1))}px)`,
      };
    },
    lens(settings) {
      return {
        position: "absolute",
        zIndex: 0,
        inset: "12px",
        borderRadius: `${Math.max(6, settings.radius - 9)}px`,
        border: "1px solid rgb(255 255 255 / 10%)",
        background:
          "linear-gradient(125deg, rgb(255 255 255 / 5%) 0 20%, transparent 20% 58%, rgb(0 0 0 / 11%) 58%)",
        boxShadow: "inset 0 1px 0 rgb(255 255 255 / 17%)",
      };
    },
    fallback: "linear-gradient(150deg, rgb(25 58 70 / 96%), rgb(11 10 34 / 97%))",
  },
  {
    id: "fluid-capsule",
    name: "Fluid Capsule",
    category: "soft refraction",
    description:
      "Overlapping fluid pools, a swollen capsule edge, and a softly magnified inner plate create a rounded liquid object.",
    defaults: {
      tint: "#60f4c6",
      accent: "#4f8cff",
      blur: 30,
      opacity: 66,
      saturation: 138,
      border: 1,
      radius: 60,
      depth: 23,
      highlightX: 28,
      highlightY: 18,
      reflection: 72,
    },
    surface(settings) {
      return {
        background: `radial-gradient(circle at ${settings.highlightX}% ${settings.highlightY}%, rgb(255 255 255 / ${scaledAlpha(0.29, settings.reflection)}) 0 8%, transparent 29%), radial-gradient(circle at 82% 74%, ${rgb(settings.accent, scaledAlpha(0.2, settings.opacity))} 0 14%, transparent 46%), radial-gradient(circle at 20% 88%, ${rgb(settings.tint, scaledAlpha(0.2, settings.opacity))} 0 11%, transparent 42%), linear-gradient(145deg, rgb(255 255 255 / ${scaledAlpha(0.14, settings.opacity)}), rgb(5 16 25 / ${scaledAlpha(0.34, settings.opacity)})) padding-box, linear-gradient(135deg, rgb(255 255 255 / 60%), ${rgb(settings.tint, 0.46)}, rgb(255 255 255 / 13%) 48%, ${rgb(settings.accent, 0.48)}, rgb(255 255 255 / 36%)) border-box`,
        borderColor: "transparent",
        boxShadow: shadowSet(settings, settings.tint, "lifted"),
      };
    },
    glint(settings) {
      return {
        position: "absolute",
        zIndex: 1,
        width: "44%",
        height: "18%",
        left: "16%",
        top: "9%",
        borderRadius: "50%",
        background: `radial-gradient(ellipse, rgb(255 255 255 / ${scaledAlpha(0.38, settings.reflection)}), transparent 72%)`,
        filter: `blur(${Math.max(2, Math.round(settings.blur * 0.16))}px)`,
      };
    },
    lens(settings) {
      return {
        position: "absolute",
        zIndex: 0,
        inset: "11px",
        borderRadius: `${Math.max(18, settings.radius - 9)}px`,
        background: `radial-gradient(ellipse at 40% 12%, rgb(255 255 255 / 12%), transparent 42%), linear-gradient(145deg, ${rgb(settings.tint, 0.04)}, ${rgb(settings.accent, 0.04)})`,
        border: "1px solid rgb(255 255 255 / 12%)",
        boxShadow:
          "inset 0 2px 2px rgb(255 255 255 / 14%), inset 0 -18px 32px rgb(0 0 0 / 10%)",
      };
    },
    fallback: "linear-gradient(145deg, rgb(42 83 76 / 95%), rgb(21 40 75 / 96%))",
  },
  {
    id: "depth-cut-glass",
    name: "Depth-Cut Glass",
    category: "faceted inset",
    description:
      "A heavy cut-glass border, angular internal reflection, and embedded shadow make the card feel carved rather than floated.",
    defaults: {
      tint: "#80dfff",
      accent: "#8572ff",
      blur: 16,
      opacity: 78,
      saturation: 132,
      border: 3,
      radius: 24,
      depth: 20,
      highlightX: 22,
      highlightY: 14,
      reflection: 76,
    },
    surface(settings) {
      return {
        background: `linear-gradient(132deg, rgb(255 255 255 / ${scaledAlpha(0.26, settings.reflection)}) 0 13%, transparent 13% 36%, ${rgb(settings.tint, scaledAlpha(0.12, settings.opacity))} 36% 48%, transparent 48% 72%, rgb(0 0 0 / 16%) 72%) padding-box, linear-gradient(155deg, rgb(255 255 255 / 11%), rgb(10 20 34 / ${scaledAlpha(0.62, settings.opacity)})) padding-box, linear-gradient(132deg, rgb(255 255 255 / 82%) 0 8%, ${rgb(settings.tint, 0.72)} 8% 23%, rgb(6 14 24 / 88%) 23% 46%, ${rgb(settings.accent, 0.62)} 46% 64%, rgb(4 8 17 / 92%) 64% 82%, rgb(214 245 255 / 54%) 82%) border-box`,
        borderColor: "transparent",
        boxShadow: shadowSet(settings, settings.accent, "embedded"),
      };
    },
    glint(settings) {
      return {
        position: "absolute",
        zIndex: 1,
        left: `${Math.max(-8, settings.highlightX - 28)}%`,
        top: `${settings.highlightY}%`,
        width: "52%",
        height: "9%",
        background: `linear-gradient(90deg, transparent, rgb(255 255 255 / ${scaledAlpha(0.58, settings.reflection)}), transparent)`,
        transform: "rotate(-16deg)",
        filter: `blur(${Math.max(1, Math.round(settings.blur * 0.08))}px)`,
      };
    },
    lens(settings) {
      return {
        position: "absolute",
        zIndex: 0,
        inset: "15px",
        borderRadius: `${Math.max(5, settings.radius - 12)}px`,
        border: "1px solid rgb(255 255 255 / 8%)",
        boxShadow:
          "inset 6px 7px 18px rgb(0 0 0 / 22%), inset -2px -2px 8px rgb(255 255 255 / 6%)",
      };
    },
    fallback: "linear-gradient(155deg, rgb(31 52 67 / 97%), rgb(11 13 33 / 98%))",
  },
  {
    id: "crystal-dashboard",
    name: "Crystal Dashboard",
    category: "technical glass",
    description:
      "A subtle etched grid, measured luminous edge, and layered readout plate make glass practical for data-heavy interface cards.",
    defaults: {
      tint: "#42f5d0",
      accent: "#5d8cff",
      blur: 22,
      opacity: 70,
      saturation: 140,
      border: 1,
      radius: 26,
      depth: 22,
      highlightX: 18,
      highlightY: 10,
      reflection: 68,
    },
    surface(settings) {
      return {
        background: `repeating-linear-gradient(90deg, rgb(255 255 255 / 5%) 0 1px, transparent 1px 22px), repeating-linear-gradient(0deg, rgb(255 255 255 / 4%) 0 1px, transparent 1px 22px), radial-gradient(ellipse at ${settings.highlightX}% ${settings.highlightY}%, ${rgb(settings.tint, scaledAlpha(0.22, settings.reflection))}, transparent 42%), linear-gradient(150deg, rgb(255 255 255 / ${scaledAlpha(0.12, settings.opacity)}), rgb(5 13 24 / ${scaledAlpha(0.52, settings.opacity)})) padding-box, linear-gradient(135deg, ${rgb(settings.tint, 0.7)}, rgb(255 255 255 / 24%) 38%, ${rgb(settings.accent, 0.58)} 70%, rgb(255 255 255 / 38%)) border-box`,
        borderColor: "transparent",
        boxShadow: shadowSet(settings, settings.tint, "lifted"),
      };
    },
    glint(settings) {
      return {
        position: "absolute",
        zIndex: 1,
        left: "12px",
        top: "12px",
        width: "42%",
        height: "2px",
        background: `linear-gradient(90deg, ${rgb(settings.tint, scaledAlpha(0.74, settings.reflection))}, transparent)`,
        boxShadow: `0 0 ${settings.blur}px ${rgb(settings.tint, 0.18)}`,
      };
    },
    lens(settings) {
      return {
        position: "absolute",
        zIndex: 0,
        inset: "12px",
        borderRadius: `${Math.max(6, settings.radius - 9)}px`,
        border: "1px solid rgb(255 255 255 / 9%)",
        background:
          "linear-gradient(145deg, rgb(0 0 0 / 5%), rgb(255 255 255 / 3%))",
        boxShadow:
          "inset 0 1px 0 rgb(255 255 255 / 14%), inset 0 -16px 30px rgb(0 0 0 / 10%)",
      };
    },
    fallback: "linear-gradient(150deg, rgb(24 54 59 / 96%), rgb(7 13 28 / 97%))",
  },
  {
    id: "fresnel-caustic",
    name: "Fresnel Caustic Halo",
    category: "concentric refraction",
    description:
      "A clear Fresnel lens with nested caustic rings, radial energy lines, a bright upper halo, and a prismatic perimeter that visibly reorganizes the field behind it.",
    defaults: {
      tint: "#72fce5",
      accent: "#7c82ff",
      blur: 28,
      opacity: 62,
      saturation: 164,
      border: 2,
      radius: 44,
      depth: 28,
      highlightX: 48,
      highlightY: 18,
      reflection: 88,
    },
    surface(settings) {
      return {
        background: `radial-gradient(ellipse at ${settings.highlightX}% ${settings.highlightY}%, rgb(255 255 255 / ${scaledAlpha(0.38, settings.reflection)}) 0 3%, transparent 28%), repeating-radial-gradient(ellipse at 50% 52%, transparent 0 19px, ${rgb(settings.tint, scaledAlpha(0.17, settings.reflection))} 20px 22px, transparent 23px 43px, ${rgb(settings.accent, scaledAlpha(0.12, settings.reflection))} 44px 46px, transparent 47px 71px) padding-box, repeating-conic-gradient(from 2deg at 50% 52%, rgb(255 255 255 / 9%) 0deg 1deg, transparent 1deg 13deg) padding-box, linear-gradient(145deg, rgb(255 255 255 / ${scaledAlpha(0.16, settings.opacity)}), ${rgb(settings.tint, scaledAlpha(0.06, settings.opacity))} 42%, rgb(4 11 24 / ${scaledAlpha(0.34, settings.opacity)}) 100%) padding-box, conic-gradient(from 204deg, rgb(255 255 255 / 76%), ${rgb(settings.tint, 0.68)} 18%, rgb(255 255 255 / 12%) 37%, ${rgb(settings.accent, 0.64)} 58%, rgb(255 106 210 / 48%) 74%, rgb(255 255 255 / 68%)) border-box`,
        borderColor: "transparent",
        boxShadow: shadowSet(settings, settings.tint, "floating"),
      };
    },
    glint(settings) {
      return {
        position: "absolute",
        zIndex: 1,
        width: "84%",
        height: "58%",
        left: "8%",
        top: "-18%",
        borderRadius: "50%",
        border: `1px solid rgb(255 255 255 / ${scaledAlpha(0.54, settings.reflection)})`,
        boxShadow: `0 8px ${Math.round(settings.blur * 0.9)}px rgb(255 255 255 / 14%), inset 0 -8px ${Math.round(settings.blur * 0.7)}px ${rgb(settings.tint, 0.1)}`,
        filter: `blur(${Math.max(0.4, Number((settings.blur * 0.025).toFixed(1)))}px)`,
      };
    },
    lens(settings) {
      return {
        position: "absolute",
        zIndex: 0,
        inset: "11px",
        borderRadius: `${Math.max(12, settings.radius - 9)}px`,
        border: "1px solid rgb(255 255 255 / 13%)",
        background: `repeating-radial-gradient(ellipse at 50% 52%, transparent 0 23px, rgb(255 255 255 / 8%) 24px 25px, transparent 26px 49px), radial-gradient(ellipse at 50% 52%, ${rgb(settings.tint, 0.05)}, transparent 63%)`,
        boxShadow:
          "inset 0 2px 0 rgb(255 255 255 / 22%), inset 0 -24px 42px rgb(0 0 0 / 15%)",
      };
    },
    fallback: "linear-gradient(145deg, rgb(50 91 91 / 95%), rgb(20 25 61 / 96%))",
  },
  {
    id: "mercury-laminate",
    name: "Mercury Bubble Laminate",
    category: "polarized mirror glass",
    description:
      "A dark mercury body traps reflective bubbles and silver bands beneath a polarized cyan-magenta edge, balancing mirror density with readable optical transparency.",
    defaults: {
      tint: "#95fff0",
      accent: "#ff79dc",
      blur: 22,
      opacity: 80,
      saturation: 180,
      border: 2,
      radius: 36,
      depth: 30,
      highlightX: 26,
      highlightY: 16,
      reflection: 92,
    },
    surface(settings) {
      return {
        background: `radial-gradient(ellipse at ${settings.highlightX}% ${settings.highlightY}%, rgb(255 255 255 / ${scaledAlpha(0.42, settings.reflection)}) 0 2%, transparent 25%), radial-gradient(circle at 17% 81%, transparent 0 7%, rgb(255 255 255 / 22%) 7.5% 8%, ${rgb(settings.tint, scaledAlpha(0.12, settings.opacity))} 9% 13%, transparent 14%), radial-gradient(circle at 83% 24%, transparent 0 10%, rgb(255 255 255 / 19%) 10.5% 11%, ${rgb(settings.accent, scaledAlpha(0.11, settings.opacity))} 12% 18%, transparent 19%), linear-gradient(164deg, rgb(255 255 255 / ${scaledAlpha(0.22, settings.opacity)}) 0%, rgb(102 123 135 / ${scaledAlpha(0.2, settings.opacity)}) 18%, rgb(3 8 15 / ${scaledAlpha(0.72, settings.opacity)}) 47%, ${rgb(settings.accent, scaledAlpha(0.09, settings.opacity))} 72%, rgb(218 245 244 / ${scaledAlpha(0.1, settings.opacity)}) 100%) padding-box, conic-gradient(from 218deg, rgb(255 255 255 / 82%), ${rgb(settings.tint, 0.7)} 19%, rgb(20 28 43 / 88%) 37%, ${rgb(settings.accent, 0.68)} 58%, rgb(255 227 162 / 48%) 74%, rgb(255 255 255 / 74%)) border-box`,
        borderColor: "transparent",
        boxShadow: shadowSet(settings, settings.accent, "floating"),
      };
    },
    glint(settings) {
      return {
        position: "absolute",
        zIndex: 1,
        inset: "7% -12% auto",
        height: "34%",
        borderRadius: "50%",
        background: `repeating-linear-gradient(174deg, transparent 0 12px, rgb(255 255 255 / ${scaledAlpha(0.28, settings.reflection)}) 13px 15px, transparent 16px 29px, ${rgb(settings.tint, 0.1)} 30px 33px, transparent 34px 48px)`,
        transform: "rotate(-7deg)",
        filter: `blur(${Math.max(1, Math.round(settings.blur * 0.1))}px)`,
      };
    },
    lens(settings) {
      return {
        position: "absolute",
        zIndex: 0,
        inset: "12px",
        borderRadius: `${Math.max(10, settings.radius - 10)}px`,
        border: "1px solid rgb(255 255 255 / 9%)",
        background: `radial-gradient(circle at 7px 9px, rgb(255 255 255 / 8%) 0 1px, transparent 1.5px) 0 0 / 23px 27px, linear-gradient(145deg, rgb(255 255 255 / 8%), ${rgb(settings.tint, 0.035)} 42%, rgb(0 0 0 / 16%))`,
        boxShadow:
          "inset 7px 8px 20px rgb(0 0 0 / 28%), inset -3px -3px 12px rgb(255 255 255 / 7%), inset 0 1px 0 rgb(255 255 255 / 16%)",
      };
    },
    fallback: "linear-gradient(155deg, rgb(53 67 74 / 97%), rgb(6 9 17 / 98%))",
  },
];

export function getGlassStyles(recipe, settings, compact = false) {
  const recipeSurface = recipe.surface(settings);
  const surface = {
    position: "relative",
    isolation: "isolate",
    overflow: "hidden",
    width: compact ? "100%" : "min(520px, 100%)",
    minHeight: compact ? "174px" : "330px",
    border: `${settings.border}px solid ${recipeSurface.borderColor}`,
    borderRadius: `${settings.radius}px`,
    padding: compact ? "18px" : "34px",
    backdropFilter: `blur(${settings.blur}px) saturate(${settings.saturation}%)`,
    WebkitBackdropFilter: `blur(${settings.blur}px) saturate(${settings.saturation}%)`,
    background: recipeSurface.background,
    boxShadow: recipeSurface.boxShadow,
  };

  const content = {
    position: "relative",
    zIndex: 2,
    minHeight: compact ? "138px" : "262px",
    display: "grid",
    alignContent: "space-between",
    gap: "22px",
    color: "#f4ffff",
  };

  return {
    surface,
    glint: recipe.glint(settings),
    lens: recipe.lens(settings),
    content,
  };
}

export function getGlassCode(recipe, settings, field) {
  const styles = getGlassStyles(recipe, settings);
  const fieldCode = field ? `${getOpticalFieldCode(field)}

` : "";
  return `<section class="optical-field">
  <span class="optical-field__layer optical-field__layer--one" aria-hidden="true"></span>
  <span class="optical-field__layer optical-field__layer--two" aria-hidden="true"></span>
  <article class="liquid-card">
    <span class="liquid-card__lens" aria-hidden="true"></span>
    <span class="liquid-card__glint" aria-hidden="true"></span>
    <div class="liquid-card__content">
      <!-- Your real card content -->
    </div>
  </article>
</section>

${fieldCode}${styleObjectToRule(".liquid-card", styles.surface)}

${styleObjectToRule(".liquid-card__lens", styles.lens)}

${styleObjectToRule(".liquid-card__glint", styles.glint)}

${styleObjectToRule(".liquid-card__content", styles.content)}

@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .liquid-card {
    background: ${recipe.fallback};
  }
}`;
}
