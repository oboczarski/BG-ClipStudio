import { clamp, styleObjectToRule } from "../utils/css";

function alpha(value, maximum, minimum = 0) {
  return Number((minimum + (clamp(value, 0, 100) / 100) * (maximum - minimum)).toFixed(3));
}

function scaledAlpha(value, referenceValue, referenceAlpha) {
  return Number(clamp((value / referenceValue) * referenceAlpha, 0, 1).toFixed(3));
}

function opticalFilter(settings) {
  const filters = [`blur(${settings.blur}px)`];
  if (settings.saturation !== 100) filters.push(`saturate(${settings.saturation}%)`);
  if (settings.clarity !== 100) filters.push(`contrast(${settings.clarity}%)`);
  return filters.join(" ");
}

function commonShadow(settings, options = {}) {
  const {
    shadowAlpha = 0.42,
    insetTop = 0.28,
    insetBottom = 0.08,
    spread = 0,
  } = options;
  const depth = settings.depth;
  return `inset 0 1px 0 rgb(255 255 255 / ${alpha(settings.edge, insetTop, 0.04)}), inset 0 -1px 0 rgb(255 255 255 / ${alpha(settings.edge, insetBottom, 0.01)}), 0 ${Math.round(depth * 0.5)}px ${Math.round(depth * 1.55)}px ${spread}px rgb(2 5 14 / ${shadowAlpha})`;
}

const defaults = {
  blur: 14,
  density: 42,
  diffusion: 38,
  clarity: 112,
  saturation: 128,
  edge: 62,
  specular: 68,
  refraction: 55,
  depth: 28,
  radius: 34,
  highlightX: 86,
  highlightY: 9,
};

export const clearGlassRecipes = [
  {
    id: "og-original",
    name: "OG Original",
    category: "reference material",
    fieldId: "sphere-registry-field",
    description:
      "The supplied favorite, preserved as a clear radial body with a directional white conic edge and a practical cross-browser clipping model.",
    note: "Three transparent lens fields over a silver conic perimeter.",
    defaults: {
      ...defaults,
      blur: 6,
      density: 40,
      diffusion: 28,
      clarity: 100,
      saturation: 100,
      edge: 72,
      specular: 73,
      refraction: 54,
      depth: 30,
      radius: 32,
      highlightX: 92,
      highlightY: 6,
    },
    material(settings) {
      const body = scaledAlpha(settings.density, 40, 0.035);
      const bloom = scaledAlpha(settings.specular, 73, 0.18);
      const haze = scaledAlpha(settings.diffusion, 28, 0.09);
      return {
        border: "2px solid transparent",
        background: `radial-gradient(120% 100% at ${settings.highlightX}% ${settings.highlightY}%, rgb(255 255 255 / ${bloom}) 0%, rgb(255 255 255 / ${haze}) 22%, rgb(255 255 255 / ${body}) 48%, transparent 68%) padding-box, radial-gradient(90% 75% at ${100 - settings.highlightX}% ${100 - settings.highlightY}%, rgb(225 235 255 / ${scaledAlpha(settings.refraction, 54, 0.1)}) 0%, rgb(255 255 255 / ${scaledAlpha(settings.diffusion, 28, 0.045)}) 30%, transparent 62%) padding-box, radial-gradient(140% 120% at 48% 42%, rgb(255 255 255 / ${scaledAlpha(settings.density, 40, 0.075)}) 0%, rgb(255 255 255 / ${scaledAlpha(settings.density, 40, 0.045)}) 55%, rgb(255 255 255 / ${scaledAlpha(settings.density, 40, 0.065)}) 100%) padding-box, conic-gradient(from -30deg, rgb(255 255 255 / ${scaledAlpha(settings.edge, 72, 0.1)}) 0deg, rgb(255 255 255 / ${scaledAlpha(settings.edge, 72, 0.42)}) 40deg, rgb(255 255 255 / ${scaledAlpha(settings.edge, 72, 0.467)}) 60deg, rgb(255 246 255 / ${scaledAlpha(settings.edge, 72, 0.3)}) 69deg, rgb(255 255 255 / ${scaledAlpha(settings.edge, 72, 0.05)}) 93deg, rgb(255 255 255 / ${scaledAlpha(settings.edge, 72, 0.05)}) 163deg, rgb(255 255 255 / ${scaledAlpha(settings.edge, 72, 0.28)}) 210deg, rgb(255 255 255 / ${scaledAlpha(settings.edge, 72, 0.38)}) 225deg, rgb(255 255 255 / ${scaledAlpha(settings.edge, 72, 0.12)}) 242deg, rgb(255 255 255 / ${scaledAlpha(settings.edge, 72, 0.04)}) 270deg, rgb(255 255 255 / ${scaledAlpha(settings.edge, 72, 0.1)}) 368deg) border-box`,
        backdropFilter: opticalFilter(settings),
        WebkitBackdropFilter: opticalFilter(settings),
        boxShadow: `inset 0 2px 26px rgb(255 255 255 / ${scaledAlpha(settings.diffusion, 28, 0.133)}), 0 ${Math.round(settings.depth * 0.6)}px ${Math.round(settings.depth * 1.2)}px rgb(5 8 20 / 0.44)`,
      };
    },
    fallback: "linear-gradient(145deg, rgb(38 45 57 / 92%), rgb(16 20 30 / 94%)) padding-box, linear-gradient(135deg, rgb(255 255 255 / 58%), rgb(255 255 255 / 10%), rgb(255 255 255 / 34%)) border-box",
  },
  {
    id: "adaptive-clear-lens",
    name: "Adaptive Clear Lens",
    category: "iOS-inspired clear material",
    fieldId: "verdigris-fin-field",
    description:
      "A content-first clear surface with a bright leading shoulder, soft ambient spill, and deeper lensing only around its perimeter.",
    note: "Clear through the center; optically active around the edge.",
    defaults: {
      ...defaults,
      blur: 11,
      density: 27,
      diffusion: 22,
      clarity: 119,
      saturation: 136,
      edge: 78,
      specular: 82,
      refraction: 67,
      depth: 27,
      radius: 38,
      highlightX: 18,
      highlightY: 8,
    },
    material(settings) {
      const clearBody = alpha(settings.density, 0.07, 0.018);
      return {
        border: "1px solid transparent",
        background: `radial-gradient(85% 58% at ${settings.highlightX}% ${settings.highlightY}%, rgb(255 255 255 / ${alpha(settings.specular, 0.34, 0.08)}) 0%, rgb(255 255 255 / ${alpha(settings.diffusion, 0.095, 0.025)}) 25%, transparent 67%) padding-box, radial-gradient(72% 48% at ${100 - settings.highlightX}% ${100 - settings.highlightY}%, rgb(223 236 255 / ${alpha(settings.refraction, 0.09, 0.025)}) 0%, transparent 69%) padding-box, linear-gradient(128deg, rgb(255 255 255 / ${clearBody}), rgb(255 255 255 / ${alpha(settings.density, 0.025, 0.008)}) 46%, rgb(235 243 255 / ${alpha(settings.refraction, 0.055, 0.012)})) padding-box, conic-gradient(from 224deg, rgb(255 255 255 / ${alpha(settings.edge, 0.16, 0.035)}), rgb(255 255 255 / ${alpha(settings.edge, 0.64, 0.13)}) 16%, rgb(255 255 255 / 0.08) 34%, rgb(218 229 246 / ${alpha(settings.edge, 0.24, 0.05)}) 60%, rgb(255 255 255 / ${alpha(settings.edge, 0.42, 0.09)}) 82%, rgb(255 255 255 / ${alpha(settings.edge, 0.16, 0.035)})) border-box`,
        backdropFilter: opticalFilter(settings),
        WebkitBackdropFilter: opticalFilter(settings),
        boxShadow: `${commonShadow(settings, { shadowAlpha: 0.38, insetTop: 0.42 })}, inset ${Math.round((settings.highlightX - 50) / -12)}px ${Math.round((settings.highlightY - 50) / -18)}px 24px rgb(255 255 255 / ${alpha(settings.specular, 0.1, 0.025)})`,
      };
    },
    fallback: "linear-gradient(145deg, rgb(41 49 57 / 90%), rgb(15 20 27 / 94%)) padding-box, linear-gradient(135deg, rgb(255 255 255 / 64%), rgb(255 255 255 / 10%), rgb(255 255 255 / 38%)) border-box",
  },
  {
    id: "luminous-satin-diffuser",
    name: "Luminous Satin Diffuser",
    category: "pearl diffusion glass",
    fieldId: "halftone-furnace-field",
    description:
      "A milky, nearly colorless diffuser spreads high-frequency backgrounds into a soft pearlescent field without becoming an opaque white panel.",
    note: "Fine frost, broad pearl bloom, and a restrained satin edge.",
    defaults: {
      ...defaults,
      blur: 23,
      density: 58,
      diffusion: 76,
      clarity: 94,
      saturation: 104,
      edge: 54,
      specular: 62,
      refraction: 35,
      depth: 24,
      radius: 29,
      highlightX: 72,
      highlightY: 12,
    },
    material(settings) {
      const body = alpha(settings.density, 0.19, 0.07);
      const frost = alpha(settings.diffusion, 0.24, 0.07);
      return {
        border: "1px solid transparent",
        background: `radial-gradient(120% 78% at ${settings.highlightX}% ${settings.highlightY}%, rgb(255 255 255 / ${alpha(settings.specular, 0.34, 0.11)}) 0%, rgb(255 255 255 / ${frost}) 22%, transparent 63%) padding-box, radial-gradient(95% 82% at 16% 91%, rgb(238 244 250 / ${alpha(settings.diffusion, 0.16, 0.05)}) 0%, transparent 67%) padding-box, linear-gradient(145deg, rgb(255 255 255 / ${body}), rgb(236 241 246 / ${alpha(settings.density, 0.13, 0.045)}) 54%, rgb(255 255 255 / ${alpha(settings.density, 0.17, 0.06)})) padding-box, linear-gradient(132deg, rgb(255 255 255 / ${alpha(settings.edge, 0.62, 0.18)}), rgb(255 255 255 / ${alpha(settings.edge, 0.17, 0.05)}) 38%, rgb(209 221 235 / ${alpha(settings.edge, 0.34, 0.1)}) 69%, rgb(255 255 255 / ${alpha(settings.edge, 0.5, 0.14)})) border-box`,
        backdropFilter: opticalFilter(settings),
        WebkitBackdropFilter: opticalFilter(settings),
        boxShadow: `${commonShadow(settings, { shadowAlpha: 0.32, insetTop: 0.38 })}, inset 0 0 ${Math.round(18 + settings.diffusion * 0.28)}px rgb(255 255 255 / ${alpha(settings.diffusion, 0.12, 0.035)})`,
      };
    },
    fallback: "linear-gradient(145deg, rgb(221 225 229 / 91%), rgb(159 167 178 / 92%)) padding-box, linear-gradient(135deg, white, rgb(170 183 198), white) border-box",
  },
  {
    id: "smoked-clarity-plate",
    name: "Smoked Clarity Plate",
    category: "neutral dark glass",
    fieldId: "contour-vault-field",
    description:
      "Graphite-black glass keeps its hue neutral, using controlled silver edge light and a lifted interior to stay readable over saturated scenery.",
    note: "Neutral smoke with a precision-machined silver perimeter.",
    defaults: {
      ...defaults,
      blur: 16,
      density: 66,
      diffusion: 28,
      clarity: 122,
      saturation: 116,
      edge: 68,
      specular: 58,
      refraction: 48,
      depth: 35,
      radius: 24,
      highlightX: 24,
      highlightY: 7,
    },
    material(settings) {
      const smoke = alpha(settings.density, 0.58, 0.22);
      return {
        border: "1px solid transparent",
        background: `linear-gradient(180deg, rgb(255 255 255 / ${alpha(settings.specular, 0.11, 0.025)}) 0%, transparent 16%) padding-box, radial-gradient(100% 74% at ${settings.highlightX}% ${settings.highlightY}%, rgb(255 255 255 / ${alpha(settings.specular, 0.18, 0.045)}) 0%, transparent 61%) padding-box, radial-gradient(75% 65% at ${100 - settings.highlightX}% 100%, rgb(193 206 226 / ${alpha(settings.refraction, 0.075, 0.018)}) 0%, transparent 72%) padding-box, linear-gradient(142deg, rgb(18 20 25 / ${smoke}), rgb(6 8 12 / ${alpha(settings.density, 0.69, 0.3)}) 57%, rgb(22 24 30 / ${alpha(settings.density, 0.54, 0.2)})) padding-box, conic-gradient(from 215deg, rgb(236 242 248 / ${alpha(settings.edge, 0.46, 0.12)}), rgb(255 255 255 / ${alpha(settings.edge, 0.16, 0.04)}) 20%, rgb(124 136 151 / ${alpha(settings.edge, 0.26, 0.07)}) 52%, rgb(255 255 255 / ${alpha(settings.edge, 0.52, 0.14)}) 76%, rgb(236 242 248 / ${alpha(settings.edge, 0.46, 0.12)})) border-box`,
        backdropFilter: opticalFilter(settings),
        WebkitBackdropFilter: opticalFilter(settings),
        boxShadow: `${commonShadow(settings, { shadowAlpha: 0.57, insetTop: 0.26 })}, inset 0 0 32px rgb(255 255 255 / ${alpha(settings.diffusion, 0.055, 0.012)})`,
      };
    },
    fallback: "linear-gradient(145deg, rgb(23 26 32 / 96%), rgb(5 7 11 / 98%)) padding-box, linear-gradient(135deg, rgb(255 255 255 / 48%), rgb(101 111 126 / 34%), rgb(255 255 255 / 34%)) border-box",
  },
  {
    id: "waterline-meniscus",
    name: "Waterline Meniscus",
    category: "fluid lens · pseudo layer 01",
    fieldId: "biomorphic-orbitarium-field",
    description:
      "A clear body gains a curved meniscus that pools reflected light along one side, suggesting liquid volume without coloring the entire card.",
    note: "One generated highlight layer models a curved waterline.",
    defaults: {
      ...defaults,
      blur: 12,
      density: 32,
      diffusion: 32,
      clarity: 116,
      saturation: 132,
      edge: 65,
      specular: 86,
      refraction: 78,
      depth: 31,
      radius: 46,
      highlightX: 78,
      highlightY: 16,
    },
    material(settings) {
      return {
        border: "1px solid transparent",
        background: `radial-gradient(110% 92% at ${settings.highlightX}% ${settings.highlightY}%, rgb(255 255 255 / ${alpha(settings.specular, 0.22, 0.06)}) 0%, rgb(255 255 255 / ${alpha(settings.diffusion, 0.065, 0.018)}) 34%, transparent 68%) padding-box, linear-gradient(132deg, rgb(255 255 255 / ${alpha(settings.density, 0.09, 0.025)}), rgb(238 245 250 / ${alpha(settings.density, 0.035, 0.009)}) 56%, rgb(255 255 255 / ${alpha(settings.density, 0.075, 0.02)})) padding-box, linear-gradient(145deg, rgb(255 255 255 / ${alpha(settings.edge, 0.58, 0.15)}), rgb(255 255 255 / 0.07) 43%, rgb(205 221 238 / ${alpha(settings.edge, 0.32, 0.08)}) 72%, rgb(255 255 255 / ${alpha(settings.edge, 0.42, 0.11)})) border-box`,
        backdropFilter: opticalFilter(settings),
        WebkitBackdropFilter: opticalFilter(settings),
        boxShadow: `${commonShadow(settings, { shadowAlpha: 0.4, insetTop: 0.35 })}, inset 0 -18px 34px rgb(211 228 242 / ${alpha(settings.refraction, 0.075, 0.018)})`,
      };
    },
    pseudo(settings) {
      return {
        before: {
          content: '""',
          position: "absolute",
          zIndex: 0,
          width: `${115 + Math.round(settings.refraction * 0.25)}%`,
          height: `${34 + Math.round(settings.refraction * 0.2)}%`,
          left: "-16%",
          top: `${clamp(settings.highlightY + 10, 12, 52)}%`,
          borderRadius: "50%",
          borderTop: `1px solid rgb(255 255 255 / ${alpha(settings.specular, 0.72, 0.18)})`,
          background: `radial-gradient(ellipse at 50% 0%, rgb(255 255 255 / ${alpha(settings.specular, 0.16, 0.035)}), transparent 68%)`,
          boxShadow: `0 -8px 24px rgb(255 255 255 / ${alpha(settings.specular, 0.11, 0.025)}), inset 0 10px 26px rgb(216 233 247 / ${alpha(settings.refraction, 0.08, 0.018)})`,
          transform: `rotate(${Math.round((settings.highlightX - 50) / 10)}deg)`,
          pointerEvents: "none",
        },
      };
    },
    fallback: "linear-gradient(145deg, rgb(43 51 61 / 91%), rgb(15 20 27 / 94%)) padding-box, linear-gradient(135deg, rgb(255 255 255 / 62%), rgb(255 255 255 / 10%), rgb(212 227 241 / 44%)) border-box",
  },
  {
    id: "spectral-edge-membrane",
    name: "Spectral Edge Membrane",
    category: "clear prism · pseudo layer 02",
    fieldId: "magnetic-flux-field",
    description:
      "The body stays clear while a hairline spectral seam appears only at the perimeter—the color behaves like dispersion, not a tint wash.",
    note: "A narrow optical seam contains the only deliberate spectrum.",
    defaults: {
      ...defaults,
      blur: 9,
      density: 24,
      diffusion: 18,
      clarity: 126,
      saturation: 145,
      edge: 79,
      specular: 74,
      refraction: 72,
      depth: 26,
      radius: 37,
      highlightX: 14,
      highlightY: 12,
    },
    material(settings) {
      return {
        border: "1px solid transparent",
        background: `radial-gradient(105% 75% at ${settings.highlightX}% ${settings.highlightY}%, rgb(255 255 255 / ${alpha(settings.specular, 0.25, 0.06)}), transparent 61%) padding-box, radial-gradient(82% 64% at ${100 - settings.highlightX}% ${100 - settings.highlightY}%, rgb(224 236 255 / ${alpha(settings.refraction, 0.085, 0.02)}), transparent 73%) padding-box, linear-gradient(146deg, rgb(255 255 255 / ${alpha(settings.density, 0.078, 0.018)}), rgb(255 255 255 / ${alpha(settings.density, 0.024, 0.006)}) 54%, rgb(238 244 252 / ${alpha(settings.density, 0.06, 0.014)})) padding-box, linear-gradient(125deg, rgb(255 255 255 / ${alpha(settings.edge, 0.58, 0.13)}), rgb(255 255 255 / 0.06) 44%, rgb(225 233 247 / ${alpha(settings.edge, 0.34, 0.08)}) 73%, rgb(255 255 255 / ${alpha(settings.edge, 0.46, 0.1)})) border-box`,
        backdropFilter: opticalFilter(settings),
        WebkitBackdropFilter: opticalFilter(settings),
        boxShadow: commonShadow(settings, { shadowAlpha: 0.39, insetTop: 0.4 }),
      };
    },
    pseudo(settings) {
      return {
        after: {
          content: '""',
          position: "absolute",
          zIndex: 2,
          inset: "1px",
          border: "1px solid transparent",
          borderRadius: "inherit",
          background: `linear-gradient(transparent, transparent) padding-box, conic-gradient(from ${Math.round(settings.highlightX * 1.8)}deg, rgb(93 234 255 / ${alpha(settings.refraction, 0.46, 0.09)}), rgb(255 255 255 / ${alpha(settings.edge, 0.6, 0.14)}) 17%, rgb(255 122 222 / ${alpha(settings.refraction, 0.33, 0.06)}) 34%, transparent 48%, rgb(167 128 255 / ${alpha(settings.refraction, 0.28, 0.05)}) 67%, rgb(255 255 255 / ${alpha(settings.edge, 0.44, 0.1)}) 82%, rgb(93 234 255 / ${alpha(settings.refraction, 0.46, 0.09)})) border-box`,
          boxShadow: `inset 0 0 ${Math.round(6 + settings.refraction * 0.08)}px rgb(255 255 255 / ${alpha(settings.specular, 0.08, 0.015)})`,
          pointerEvents: "none",
        },
      };
    },
    fallback: "linear-gradient(145deg, rgb(37 45 55 / 91%), rgb(13 18 26 / 95%)) padding-box, linear-gradient(135deg, rgb(106 232 255 / 72%), white, rgb(255 129 224 / 56%), rgb(162 131 255 / 60%)) border-box",
  },
  {
    id: "deep-field-crystal",
    name: "Deep-Field Crystal",
    category: "iOS-inspired thick material",
    fieldId: "blackwater-caustic",
    description:
      "A thicker clear surface uses deeper shadow, layered edge compression, and soft internal scattering while allowing the dark field to remain legible beneath it.",
    note: "Large-form lensing with stronger separation and soft internal scatter.",
    defaults: {
      ...defaults,
      blur: 18,
      density: 46,
      diffusion: 49,
      clarity: 108,
      saturation: 118,
      edge: 73,
      specular: 76,
      refraction: 64,
      depth: 40,
      radius: 52,
      highlightX: 84,
      highlightY: 8,
    },
    material(settings) {
      const body = alpha(settings.density, 0.115, 0.035);
      return {
        border: "2px solid transparent",
        background: `radial-gradient(115% 84% at ${settings.highlightX}% ${settings.highlightY}%, rgb(255 255 255 / ${alpha(settings.specular, 0.28, 0.08)}) 0%, rgb(255 255 255 / ${alpha(settings.diffusion, 0.085, 0.022)}) 28%, transparent 67%) padding-box, radial-gradient(72% 56% at 10% 88%, rgb(209 224 238 / ${alpha(settings.refraction, 0.1, 0.026)}) 0%, transparent 70%) padding-box, radial-gradient(140% 115% at 49% 47%, transparent 40%, rgb(255 255 255 / ${alpha(settings.diffusion, 0.075, 0.018)}) 78%, rgb(255 255 255 / ${alpha(settings.diffusion, 0.13, 0.035)}) 100%) padding-box, linear-gradient(140deg, rgb(255 255 255 / ${body}), rgb(232 239 246 / ${alpha(settings.density, 0.055, 0.016)}) 56%, rgb(255 255 255 / ${alpha(settings.density, 0.092, 0.026)})) padding-box, conic-gradient(from 205deg, rgb(217 229 240 / ${alpha(settings.edge, 0.32, 0.08)}), rgb(255 255 255 / ${alpha(settings.edge, 0.66, 0.16)}) 18%, rgb(255 255 255 / 0.08) 39%, rgb(184 199 218 / ${alpha(settings.edge, 0.24, 0.06)}) 58%, rgb(255 255 255 / ${alpha(settings.edge, 0.54, 0.13)}) 78%, rgb(217 229 240 / ${alpha(settings.edge, 0.32, 0.08)})) border-box`,
        backdropFilter: opticalFilter(settings),
        WebkitBackdropFilter: opticalFilter(settings),
        boxShadow: `inset 0 2px 0 rgb(255 255 255 / ${alpha(settings.edge, 0.48, 0.12)}), inset 0 -16px 32px rgb(185 204 220 / ${alpha(settings.diffusion, 0.095, 0.022)}), 0 ${Math.round(settings.depth * 0.55)}px ${Math.round(settings.depth * 1.75)}px -8px rgb(0 3 10 / 0.68), 0 7px 18px rgb(0 3 10 / 0.36)`,
      };
    },
    fallback: "linear-gradient(145deg, rgb(42 50 59 / 94%), rgb(13 18 25 / 96%)) padding-box, linear-gradient(135deg, rgb(255 255 255 / 68%), rgb(148 166 185 / 28%), rgb(255 255 255 / 46%)) border-box",
  },
];

export function getClearGlassStyles(recipe, settings, compact = false) {
  const pseudo = recipe.pseudo?.(settings) ?? {};
  return {
    surface: {
      position: "relative",
      isolation: "isolate",
      overflow: "hidden",
      boxSizing: "border-box",
      width: "100%",
      maxWidth: compact ? "350px" : "560px",
      minHeight: compact ? "190px" : "350px",
      padding: compact ? "22px" : "34px",
      borderRadius: `${settings.radius}px`,
      color: "#f7fbff",
      textShadow: "0 1px 12px rgb(0 0 0 / 42%)",
      ...recipe.material(settings),
    },
    before: pseudo.before,
    after: pseudo.after,
  };
}

function reusableCardStyle(recipe, settings) {
  return {
    position: "relative",
    isolation: "isolate",
    overflow: "hidden",
    boxSizing: "border-box",
    padding: "2rem",
    borderRadius: `${settings.radius}px`,
    color: "#f7fbff",
    textShadow: "0 1px 12px rgb(0 0 0 / 42%)",
    ...recipe.material(settings),
  };
}

export function getClearGlassCode(recipe, settings) {
  const rules = [styleObjectToRule(".liquid-card", reusableCardStyle(recipe, settings))];
  const pseudo = recipe.pseudo?.(settings);

  if (pseudo?.before) {
    rules.push(styleObjectToRule(".liquid-card::before", pseudo.before));
  }
  if (pseudo?.after) {
    rules.push(styleObjectToRule(".liquid-card::after", pseudo.after));
  }

  rules.push(`@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {\n  .liquid-card {\n    background: ${recipe.fallback};\n  }\n}`);

  return rules.join("\n\n");
}
