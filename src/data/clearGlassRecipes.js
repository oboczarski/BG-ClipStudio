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
  borderWidth: 2,
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
      "The supplied favorite, restored with its actual border-area conic lens so the perimeter is painted as a border treatment rather than a border-box approximation.",
    note: "Three transparent lens fields over the original border-area rim.",
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
      borderWidth: 2,
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
        border: `${settings.borderWidth}px solid transparent`,
        background: `radial-gradient(120% 100% at ${settings.highlightX}% ${settings.highlightY}%, rgb(255 255 255 / ${bloom}) 0%, rgb(255 255 255 / ${haze}) 22%, rgb(255 255 255 / ${body}) 48%, transparent 68%) border-box, radial-gradient(90% 75% at ${100 - settings.highlightX}% ${100 - settings.highlightY}%, rgb(225 235 255 / ${scaledAlpha(settings.refraction, 54, 0.1)}) 0%, rgb(255 255 255 / ${scaledAlpha(settings.diffusion, 28, 0.045)}) 30%, transparent 62%) border-box, radial-gradient(140% 120% at 48% 42%, rgb(255 255 255 / ${scaledAlpha(settings.density, 40, 0.075)}) 0%, rgb(255 255 255 / ${scaledAlpha(settings.density, 40, 0.045)}) 55%, rgb(255 255 255 / ${scaledAlpha(settings.density, 40, 0.065)}) 100%) border-box, conic-gradient(from -30deg, rgb(255 255 255 / ${scaledAlpha(settings.edge, 72, 0.1)}) 0deg, rgb(255 255 255 / ${scaledAlpha(settings.edge, 72, 0.42)}) 40deg, rgb(255 255 255 / ${scaledAlpha(settings.edge, 72, 0.467)}) 60deg, rgb(255 246 255 / ${scaledAlpha(settings.edge, 72, 0.3)}) 69deg, rgb(255 255 255 / ${scaledAlpha(settings.edge, 72, 0.05)}) 93deg, rgb(255 255 255 / ${scaledAlpha(settings.edge, 72, 0.05)}) 163deg, rgb(255 255 255 / ${scaledAlpha(settings.edge, 72, 0.28)}) 210deg, rgb(255 255 255 / ${scaledAlpha(settings.edge, 72, 0.38)}) 225deg, rgb(255 255 255 / ${scaledAlpha(settings.edge, 72, 0.12)}) 242deg, rgb(255 255 255 / ${scaledAlpha(settings.edge, 72, 0.04)}) 270deg, rgb(255 255 255 / ${scaledAlpha(settings.edge, 72, 0.1)}) 368deg) border-area`,
        backdropFilter: opticalFilter(settings),
        WebkitBackdropFilter: opticalFilter(settings),
        boxShadow: `inset 0 2px 26px rgb(255 255 255 / ${scaledAlpha(settings.diffusion, 28, 0.133)}), 0 ${Math.round(settings.depth * 0.6)}px ${Math.round(settings.depth * 1.2)}px rgb(5 8 20 / 0.44)`,
      };
    },
    fallback: "linear-gradient(145deg, rgb(38 45 57 / 92%), rgb(16 20 30 / 94%)) padding-box, linear-gradient(135deg, rgb(255 255 255 / 58%), rgb(255 255 255 / 10%), rgb(255 255 255 / 34%)) border-area",
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
      borderWidth: 1,
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
      blur: 2,
      density: 58,
      diffusion: 76,
      clarity: 94,
      saturation: 104,
      edge: 54,
      specular: 62,
      refraction: 35,
      borderWidth: 1,
      depth: 24,
      radius: 29,
      highlightX: 72,
      highlightY: 12,
    },
    material(settings) {
      return {
        border: `${settings.borderWidth}px solid transparent`,
        background: `radial-gradient(120% 78% at ${settings.highlightX}% ${settings.highlightY}%, rgb(255 255 255 / ${scaledAlpha(settings.specular, 62, 0.255)}) 0%, rgb(255 255 255 / ${scaledAlpha(settings.diffusion, 76, 0.2)}) 22%, transparent 63%) padding-box padding-box, radial-gradient(95% 82% at 16% 91%, rgb(238 244 250 / ${scaledAlpha(settings.diffusion, 76, 0.133)}) 0%, transparent 67%) padding-box padding-box, linear-gradient(145deg, rgb(255 255 255 / ${scaledAlpha(settings.density, 58, 0.14)}), rgb(236 241 246 / ${scaledAlpha(settings.density, 58, 0.094)}) 54%, rgb(255 255 255 / ${scaledAlpha(settings.density, 58, 0.125)})) padding-box padding-box, linear-gradient(132deg, rgb(255 255 255 / ${scaledAlpha(settings.edge, 54, 0.48)}), rgb(255 255 255 / ${scaledAlpha(settings.edge, 54, 0.514)}) 38%, rgb(209 221 235 / ${scaledAlpha(settings.edge, 54, 0.53)}) 69%, rgb(255 255 255 / ${scaledAlpha(settings.edge, 54, 0.533)})) border-area`,
        backdropFilter: opticalFilter(settings),
        WebkitBackdropFilter: opticalFilter(settings),
        boxShadow: `inset 0 1px 0 rgb(255 255 255 / ${scaledAlpha(settings.edge, 54, 0.224)}), inset 0 -1px 0 rgb(255 255 255 / ${scaledAlpha(settings.edge, 54, 0.047)}), 0 ${Math.round(settings.depth * 0.5)}px ${Math.round(settings.depth * 1.54)}px rgb(2 5 14 / 0.32), inset 0 0 ${Math.round(18 + settings.diffusion * 0.276)}px rgb(255 255 255 / ${scaledAlpha(settings.diffusion, 76, 0.1)})`,
      };
    },
    fallback: "linear-gradient(145deg, rgb(221 225 229 / 91%), rgb(159 167 178 / 92%)) padding-box, linear-gradient(135deg, white, rgb(170 183 198), white) border-area",
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
      borderWidth: 1,
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
      borderWidth: 1,
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
    id: "edge-lensed-control",
    name: "Edge-Lensed Control Glass",
    category: "iOS regular · edge lensing",
    fieldId: "magnetic-flux-field",
    description:
      "A Regular-style control surface uses localized dimming for legibility, concentrated shoulder lensing, and a thin asymmetric boundary that brightens where the virtual light meets the glass.",
    note: "Localized dimming, responsive edge lensing, and a light-shaped boundary.",
    defaults: {
      ...defaults,
      blur: 18,
      density: 34,
      diffusion: 24,
      clarity: 116,
      saturation: 128,
      edge: 84,
      specular: 82,
      refraction: 70,
      borderWidth: 2,
      depth: 31,
      radius: 36,
      highlightX: 17,
      highlightY: 8,
    },
    material(settings) {
      const dimming = alpha(settings.density, 0.26, 0.07);
      return {
        border: `${settings.borderWidth}px solid transparent`,
        background: `radial-gradient(78% 52% at ${settings.highlightX}% ${settings.highlightY}%, rgb(255 255 255 / ${alpha(settings.specular, 0.38, 0.08)}) 0%, rgb(255 255 255 / ${alpha(settings.diffusion, 0.11, 0.02)}) 31%, transparent 72%) padding-box, radial-gradient(96% 78% at ${100 - settings.highlightX}% ${100 - settings.highlightY}%, rgb(215 228 242 / ${alpha(settings.refraction, 0.1, 0.02)}) 0%, transparent 68%) padding-box, linear-gradient(145deg, rgb(18 22 29 / ${dimming}), rgb(5 8 14 / ${alpha(settings.density, 0.36, 0.11)}) 58%, rgb(24 28 35 / ${alpha(settings.density, 0.22, 0.06)})) padding-box, conic-gradient(from 196deg at 50% 50%, rgb(190 207 221 / ${alpha(settings.edge, 0.28, 0.06)}) 0deg, rgb(255 255 255 / ${alpha(settings.edge, 0.92, 0.18)}) 19deg, rgb(255 255 255 / ${alpha(settings.edge, 0.16, 0.03)}) 48deg, rgb(124 143 160 / ${alpha(settings.edge, 0.24, 0.05)}) 118deg, rgb(255 255 255 / ${alpha(settings.edge, 0.09, 0.02)}) 198deg, rgb(255 255 255 / ${alpha(settings.edge, 0.68, 0.14)}) 284deg, rgb(190 207 221 / ${alpha(settings.edge, 0.28, 0.06)}) 360deg) border-area`,
        backdropFilter: opticalFilter(settings),
        WebkitBackdropFilter: opticalFilter(settings),
        boxShadow: `inset 0 2px 0 rgb(255 255 255 / ${alpha(settings.edge, 0.4, 0.08)}), inset 0 -1px 0 rgb(24 32 44 / 0.42), inset ${Math.round((50 - settings.highlightX) / 10)}px ${Math.round((50 - settings.highlightY) / 14)}px 26px rgb(255 255 255 / ${alpha(settings.specular, 0.11, 0.02)}), 0 ${Math.round(settings.depth * 0.55)}px ${Math.round(settings.depth * 1.55)}px -5px rgb(0 3 10 / 0.58)`,
      };
    },
    fallback: "linear-gradient(145deg, rgb(34 40 48 / 95%), rgb(8 11 17 / 97%)) padding-box, linear-gradient(132deg, rgb(255 255 255 / 78%), rgb(109 126 143 / 34%), rgb(255 255 255 / 48%)) border-area",
  },
  {
    id: "fresnel-halo-capsule",
    name: "Fresnel Halo Capsule",
    category: "concentric refraction glass",
    fieldId: "sphere-registry-field",
    description:
      "A clear lens uses concentric Fresnel compression inside the material, then resolves into a thin radial highlight at the optical boundary instead of a decorative frame.",
    note: "Concentric internal lens rings resolve into a quiet perimeter highlight.",
    defaults: {
      ...defaults,
      blur: 7,
      density: 29,
      diffusion: 21,
      clarity: 124,
      saturation: 138,
      edge: 77,
      specular: 80,
      refraction: 86,
      borderWidth: 2,
      depth: 36,
      radius: 54,
      highlightX: 50,
      highlightY: 45,
    },
    material(settings) {
      return {
        border: `${settings.borderWidth}px solid transparent`,
        background: `radial-gradient(circle at ${settings.highlightX}% ${settings.highlightY}%, transparent 0 13%, rgb(255 255 255 / ${alpha(settings.specular, 0.16, 0.03)}) 13.5% 14.2%, transparent 15% 23%, rgb(219 232 244 / ${alpha(settings.refraction, 0.13, 0.02)}) 23.5% 24.4%, transparent 25% 35%, rgb(255 255 255 / ${alpha(settings.refraction, 0.09, 0.015)}) 35.5% 36.2%, transparent 37% 100%) padding-box, repeating-radial-gradient(ellipse at ${settings.highlightX}% ${settings.highlightY}%, transparent 0 18px, rgb(255 255 255 / ${alpha(settings.refraction, 0.05, 0.008)}) 19px 20px, transparent 21px 34px) padding-box, radial-gradient(72% 65% at ${settings.highlightX}% ${settings.highlightY}%, rgb(255 255 255 / ${alpha(settings.specular, 0.19, 0.04)}) 0%, transparent 57%) padding-box, linear-gradient(145deg, rgb(255 255 255 / ${alpha(settings.density, 0.08, 0.018)}), rgb(225 235 244 / ${alpha(settings.density, 0.028, 0.006)}) 52%, rgb(255 255 255 / ${alpha(settings.density, 0.07, 0.015)})) padding-box, radial-gradient(135% 92% at ${settings.highlightX}% ${settings.highlightY}%, rgb(255 255 255 / ${alpha(settings.edge, 0.86, 0.18)}) 0%, rgb(211 228 242 / ${alpha(settings.edge, 0.34, 0.06)}) 30%, transparent 66%) border-area, conic-gradient(from 204deg, rgb(255 255 255 / ${alpha(settings.edge, 0.08, 0.015)}), rgb(255 255 255 / ${alpha(settings.edge, 0.6, 0.12)}) 42deg, rgb(187 208 225 / ${alpha(settings.edge, 0.16, 0.025)}) 104deg, transparent 178deg, rgb(255 255 255 / ${alpha(settings.edge, 0.34, 0.065)}) 278deg, rgb(255 255 255 / ${alpha(settings.edge, 0.08, 0.015)}) 360deg) border-area`,
        backdropFilter: opticalFilter(settings),
        WebkitBackdropFilter: opticalFilter(settings),
        boxShadow: `inset 0 0 ${Math.round(14 + settings.refraction * 0.18)}px rgb(255 255 255 / ${alpha(settings.diffusion, 0.11, 0.02)}), inset 0 2px 0 rgb(255 255 255 / ${alpha(settings.edge, 0.58, 0.12)}), 0 0 ${Math.round(10 + settings.specular * 0.24)}px rgb(224 240 255 / ${alpha(settings.specular, 0.16, 0.02)}), 0 ${Math.round(settings.depth * 0.6)}px ${Math.round(settings.depth * 1.65)}px -7px rgb(0 3 12 / 0.64)`,
      };
    },
    fallback: "linear-gradient(145deg, rgb(42 50 60 / 94%), rgb(12 17 24 / 97%)) padding-box, linear-gradient(132deg, rgb(255 255 255 / 82%), rgb(155 178 198 / 24%), rgb(255 255 255 / 48%)) border-area",
  },
  {
    id: "polarized-silver-laminate",
    name: "Polarized Silver Laminate",
    category: "polarized neutral liquid glass",
    fieldId: "blackwater-caustic",
    description:
      "A neutral clear-smoke lens carries faint polarizing striations within its body. Its silver response appears only as directional internal light and a thin, partially dissolving optical boundary.",
    note: "Polarizing-film striations live inside the glass; silver light only gathers at its edge.",
    defaults: {
      ...defaults,
      blur: 12,
      density: 37,
      diffusion: 13,
      clarity: 132,
      saturation: 112,
      edge: 76,
      specular: 74,
      refraction: 58,
      borderWidth: 2,
      depth: 35,
      radius: 38,
      highlightX: 24,
      highlightY: 7,
    },
    material(settings) {
      return {
        border: `${settings.borderWidth}px solid transparent`,
        background: `radial-gradient(96% 58% at ${settings.highlightX}% ${settings.highlightY}%, rgb(255 255 255 / ${alpha(settings.specular, 0.24, 0.05)}) 0%, rgb(222 232 241 / ${alpha(settings.diffusion, 0.065, 0.012)}) 31%, transparent 69%) padding-box, repeating-linear-gradient(112deg, transparent 0 20px, rgb(231 239 246 / ${alpha(settings.refraction, 0.045, 0.006)}) 21px 22px, transparent 23px 38px) padding-box, radial-gradient(118% 76% at ${100 - settings.highlightX}% ${100 - settings.highlightY}%, rgb(194 207 220 / ${alpha(settings.refraction, 0.075, 0.012)}) 0%, transparent 64%) padding-box, linear-gradient(142deg, rgb(255 255 255 / ${alpha(settings.density, 0.075, 0.014)}), rgb(15 19 26 / ${alpha(settings.density, 0.28, 0.07)}) 54%, rgb(225 233 241 / ${alpha(settings.density, 0.055, 0.01)})) padding-box, radial-gradient(115% 88% at ${settings.highlightX}% ${settings.highlightY}%, rgb(255 255 255 / ${alpha(settings.edge, 0.88, 0.18)}) 0%, rgb(202 216 228 / ${alpha(settings.edge, 0.34, 0.065)}) 31%, transparent 67%) border-area, conic-gradient(from 214deg, rgb(255 255 255 / ${alpha(settings.edge, 0.1, 0.018)}), rgb(244 248 252 / ${alpha(settings.edge, 0.64, 0.13)}) 34deg, rgb(148 164 180 / ${alpha(settings.edge, 0.14, 0.024)}) 88deg, transparent 162deg, rgb(255 255 255 / ${alpha(settings.edge, 0.24, 0.045)}) 244deg, rgb(255 255 255 / ${alpha(settings.edge, 0.52, 0.1)}) 302deg, rgb(255 255 255 / ${alpha(settings.edge, 0.1, 0.018)}) 360deg) border-area`,
        backdropFilter: opticalFilter(settings),
        WebkitBackdropFilter: opticalFilter(settings),
        boxShadow: `inset 0 1px 0 rgb(255 255 255 / ${alpha(settings.edge, 0.42, 0.08)}), inset 0 -1px 0 rgb(92 108 124 / ${alpha(settings.edge, 0.18, 0.03)}), inset -12px -16px 36px rgb(190 205 220 / ${alpha(settings.refraction, 0.055, 0.008)}), 0 ${Math.round(settings.depth * 0.58)}px ${Math.round(settings.depth * 1.6)}px -7px rgb(0 3 10 / 0.62), -6px -4px 24px rgb(229 239 246 / ${alpha(settings.specular, 0.06, 0.008)})`,
      };
    },
    fallback: "linear-gradient(142deg, rgb(38 44 52 / 95%), rgb(10 14 20 / 97%)) padding-box, linear-gradient(132deg, rgb(255 255 255 / 74%), rgb(137 154 171 / 20%), rgb(255 255 255 / 44%)) border-area",
  },
  {
    id: "aqua-bezel-lens",
    name: "Aqua Meniscus Lens",
    category: "clear waterglass edge",
    fieldId: "biomorphic-orbitarium-field",
    description:
      "A nearly colorless body concentrates cool light into two opposing border pools, while a broad submerged caustic and lower meniscus make the surface read as shaped waterglass.",
    note: "Opposing light pools gather within a thin edge around a submerged lens body.",
    defaults: {
      ...defaults,
      blur: 10,
      density: 21,
      diffusion: 19,
      clarity: 121,
      saturation: 148,
      edge: 76,
      specular: 90,
      refraction: 75,
      borderWidth: 2,
      depth: 29,
      radius: 48,
      highlightX: 82,
      highlightY: 7,
    },
    material(settings) {
      return {
        border: `${settings.borderWidth}px solid transparent`,
        background: `radial-gradient(125% 72% at ${settings.highlightX}% ${settings.highlightY}%, rgb(255 255 255 / ${alpha(settings.specular, 0.3, 0.07)}) 0%, rgb(229 250 251 / ${alpha(settings.diffusion, 0.07, 0.015)}) 28%, transparent 64%) padding-box, radial-gradient(110% 58% at 50% 116%, rgb(213 245 246 / ${alpha(settings.refraction, 0.12, 0.025)}) 0%, transparent 63%) padding-box, radial-gradient(48% 88% at 7% 52%, rgb(222 251 248 / ${alpha(settings.refraction, 0.095, 0.018)}) 0%, transparent 76%) padding-box, linear-gradient(146deg, rgb(255 255 255 / ${alpha(settings.density, 0.067, 0.014)}), rgb(234 245 246 / ${alpha(settings.density, 0.022, 0.004)}) 54%, rgb(255 255 255 / ${alpha(settings.density, 0.058, 0.012)})) padding-box, radial-gradient(circle at ${settings.highlightX}% ${settings.highlightY}%, rgb(255 255 255 / ${alpha(settings.edge, 0.94, 0.22)}) 0%, rgb(174 247 239 / ${alpha(settings.edge, 0.72, 0.16)}) 18%, transparent 43%) border-area, radial-gradient(circle at ${100 - settings.highlightX}% ${100 - settings.highlightY}%, rgb(203 226 255 / ${alpha(settings.edge, 0.66, 0.14)}) 0%, transparent 49%) border-area, linear-gradient(112deg, rgb(255 255 255 / ${alpha(settings.edge, 0.64, 0.14)}), rgb(159 225 220 / ${alpha(settings.edge, 0.23, 0.05)}) 34%, rgb(171 198 235 / ${alpha(settings.edge, 0.24, 0.05)}) 67%, rgb(255 255 255 / ${alpha(settings.edge, 0.58, 0.12)})) border-area`,
        backdropFilter: opticalFilter(settings),
        WebkitBackdropFilter: opticalFilter(settings),
        boxShadow: `inset 0 2px 0 rgb(255 255 255 / ${alpha(settings.edge, 0.5, 0.11)}), inset 0 -18px 34px rgb(201 238 239 / ${alpha(settings.refraction, 0.07, 0.012)}), 0 ${Math.round(settings.depth * 0.55)}px ${Math.round(settings.depth * 1.6)}px -6px rgb(1 8 15 / 0.52), 0 0 28px rgb(177 247 237 / ${alpha(settings.specular, 0.09, 0.012)})`,
      };
    },
    fallback: "linear-gradient(145deg, rgb(42 55 59 / 93%), rgb(11 20 27 / 96%)) padding-box, linear-gradient(112deg, white, rgb(137 218 210), rgb(151 180 224), white) border-area",
  },
  {
    id: "prism-pressure-cell",
    name: "Prism Pressure Cell",
    category: "faceted vessel · pseudo layer 02",
    fieldId: "magnetic-flux-field",
    description:
      "Neutral intersecting lens facets compress the field into a central pressure chamber, while a controlled spectral border-area seam disperses light only around the vessel wall.",
    note: "Hard lens facets, an inset pressure chamber, and perimeter-only dispersion.",
    defaults: {
      ...defaults,
      blur: 4,
      density: 23,
      diffusion: 10,
      clarity: 136,
      saturation: 158,
      edge: 83,
      specular: 88,
      refraction: 92,
      borderWidth: 2,
      depth: 34,
      radius: 33,
      highlightX: 23,
      highlightY: 9,
    },
    material(settings) {
      return {
        border: `${settings.borderWidth}px solid transparent`,
        background: `linear-gradient(127deg, rgb(255 255 255 / ${alpha(settings.specular, 0.22, 0.05)}) 0%, transparent 28%, rgb(209 225 240 / ${alpha(settings.refraction, 0.08, 0.015)}) 28.5% 29.2%, transparent 30% 66%, rgb(255 255 255 / ${alpha(settings.refraction, 0.07, 0.012)}) 66.5% 67.2%, transparent 68%) padding-box, linear-gradient(42deg, transparent 0 46%, rgb(255 255 255 / ${alpha(settings.specular, 0.13, 0.025)}) 46.4% 47.1%, transparent 48% 100%) padding-box, radial-gradient(72% 94% at 50% 52%, rgb(255 255 255 / ${alpha(settings.density, 0.065, 0.012)}) 0%, rgb(224 235 246 / ${alpha(settings.density, 0.025, 0.004)}) 55%, transparent 100%) padding-box, linear-gradient(145deg, rgb(255 255 255 / ${alpha(settings.density, 0.055, 0.01)}), rgb(7 11 18 / ${alpha(settings.density, 0.15, 0.035)})) padding-box, conic-gradient(from 218deg, rgb(81 226 255 / ${alpha(settings.refraction, 0.64, 0.12)}) 0deg, rgb(255 255 255 / ${alpha(settings.edge, 0.86, 0.18)}) 34deg, rgb(255 95 217 / ${alpha(settings.refraction, 0.52, 0.1)}) 71deg, rgb(120 98 255 / ${alpha(settings.refraction, 0.42, 0.08)}) 111deg, rgb(255 255 255 / ${alpha(settings.edge, 0.18, 0.035)}) 168deg, rgb(255 197 105 / ${alpha(settings.refraction, 0.38, 0.07)}) 224deg, rgb(255 255 255 / ${alpha(settings.edge, 0.66, 0.13)}) 286deg, rgb(81 226 255 / ${alpha(settings.refraction, 0.64, 0.12)}) 360deg) border-area`,
        backdropFilter: opticalFilter(settings),
        WebkitBackdropFilter: opticalFilter(settings),
        boxShadow: `inset 0 1px 0 rgb(255 255 255 / ${alpha(settings.edge, 0.44, 0.09)}), inset 0 0 32px rgb(225 237 249 / ${alpha(settings.diffusion, 0.07, 0.012)}), 0 ${Math.round(settings.depth * 0.62)}px ${Math.round(settings.depth * 1.7)}px -6px rgb(1 3 12 / 0.62), -8px 4px 26px rgb(66 218 255 / ${alpha(settings.refraction, 0.08, 0.01)}), 9px 5px 28px rgb(255 81 211 / ${alpha(settings.refraction, 0.07, 0.01)})`,
      };
    },
    pseudo(settings) {
      return {
        after: {
          content: '""',
          position: "absolute",
          zIndex: 0,
          inset: `${Math.round(13 + settings.refraction * 0.08)}% ${Math.round(8 + settings.refraction * 0.04)}%`,
          border: `1px solid rgb(255 255 255 / ${alpha(settings.edge, 0.28, 0.055)})`,
          borderRadius: "48% 52% 44% 56% / 54% 43% 57% 46%",
          background: `radial-gradient(ellipse at ${settings.highlightX}% ${settings.highlightY}%, rgb(255 255 255 / ${alpha(settings.specular, 0.15, 0.03)}), transparent 58%)`,
          boxShadow: `inset 0 0 ${Math.round(14 + settings.refraction * 0.16)}px rgb(255 255 255 / ${alpha(settings.diffusion, 0.07, 0.012)}), 0 0 ${Math.round(8 + settings.specular * 0.12)}px rgb(255 255 255 / ${alpha(settings.specular, 0.06, 0.01)})`,
          transform: `rotate(${Math.round((settings.highlightX - 50) / 8)}deg)`,
          pointerEvents: "none",
        },
      };
    },
    fallback: "linear-gradient(145deg, rgb(36 43 53 / 94%), rgb(9 13 20 / 97%)) padding-box, conic-gradient(from 218deg, #51e2ff, white, #ff5fd9, #7862ff, #ffc569, white, #51e2ff) border-area",
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
      border: `${settings.borderWidth}px solid transparent`,
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
    border: `${settings.borderWidth}px solid transparent`,
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
