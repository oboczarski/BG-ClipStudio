import { opticalFields } from "./glassFields";

const inheritedFieldIds = new Set(["biomorphic-reservoir", "liquid-nebula"]);

const referencedFields = [
  {
    id: "verdigris-fin-field",
    name: "Verdigris Fin Cathedral",
    category: "architectural light field",
    source: "Card Designs · 07C",
    description:
      "Mint-lit architectural fins fall into black-green depth. The original card rim is intentionally excluded so the glass—not the field—owns the edge treatment.",
    background:
      "linear-gradient(180deg, rgb(216 255 205 / 44%) 0%, rgb(70 255 204 / 14%) 21%, transparent 43%, rgb(0 3 5 / 62%) 84%, rgb(0 1 2 / 94%) 100%), repeating-linear-gradient(90deg, rgb(213 255 224 / 70%) 0 1px, rgb(63 229 188 / 48%) 1px 5px, rgb(7 67 63 / 64%) 5px 9px, rgb(1 8 11 / 98%) 9px 20px, rgb(42 151 138 / 34%) 20px 23px, rgb(1 7 10 / 99%) 23px 30px), linear-gradient(126deg, rgb(255 255 192 / 24%) 0%, transparent 30%, rgb(53 255 211 / 16%) 53%, transparent 72%, rgb(74 218 255 / 14%) 100%), radial-gradient(ellipse at 16% -7%, rgb(245 255 187 / 44%), transparent 45%), linear-gradient(145deg, #347e66, #073d40 45%, #010b10)",
    layers: [
      {
        inset: "0 0 46%",
        background:
          "linear-gradient(180deg, rgb(229 255 218 / 35%), transparent 82%)",
        filter: "blur(16px)",
        opacity: 0.88,
      },
      {
        width: "72%",
        height: "34%",
        left: "-16%",
        bottom: "-8%",
        borderRadius: "50%",
        background: "rgb(0 3 6 / 82%)",
        filter: "blur(28px)",
        transform: "rotate(8deg)",
      },
    ],
    rail: {
      color: "rgb(225 255 232 / 72%)",
      borderColor: "rgb(133 255 211 / 21%)",
    },
  },
  {
    id: "sphere-registry-field",
    name: "Parallax Sphere Registry",
    category: "suspended chromatic bodies",
    source: "Card Designs · 07C",
    description:
      "Five independently lit bodies, offset hatching, and registration points create large shifts in luminance for testing clear refraction.",
    background:
      "radial-gradient(circle, rgb(226 255 255 / 38%) 0 1px, transparent 1.5px) 0 0 / 21px 21px, radial-gradient(circle at 52% 57%, rgb(232 255 255 / 92%) 0 2%, rgb(64 242 229 / 88%) 8%, rgb(60 111 255 / 92%) 23%, rgb(191 39 246 / 95%) 36%, rgb(20 17 92 / 68%) 42%, transparent 43%), radial-gradient(circle at 15% 15%, rgb(225 255 252 / 86%) 0 1%, rgb(44 226 237 / 84%) 5%, rgb(56 105 255 / 92%) 13%, rgb(166 35 245 / 94%) 21%, transparent 22%), radial-gradient(circle at 87% 9%, rgb(247 247 255 / 82%) 0 1%, rgb(76 210 255 / 82%) 5%, rgb(84 90 255 / 92%) 12%, rgb(216 42 246 / 93%) 19%, transparent 20%), radial-gradient(circle at 91% 65%, rgb(226 255 253 / 82%) 0 1%, rgb(54 231 224 / 82%) 4%, rgb(66 101 255 / 91%) 10%, rgb(183 39 248 / 94%) 16%, transparent 17%), radial-gradient(circle at 11% 98%, rgb(90 248 232 / 74%) 0 3%, rgb(72 107 255 / 86%) 10%, rgb(180 39 239 / 92%) 17%, transparent 18%), repeating-linear-gradient(164deg, transparent 0 6px, rgb(80 240 255 / 30%) 6px 8px, transparent 8px 15px), linear-gradient(118deg, #1174eb, #4437e2 48%, #991ce1)",
    layers: [
      {
        width: "64%",
        height: "24%",
        left: "-8%",
        bottom: "4%",
        background:
          "repeating-linear-gradient(164deg, transparent 0 7px, rgb(121 250 255 / 42%) 7px 9px, transparent 9px 17px)",
        filter: "blur(0.4px)",
        transform: "rotate(-7deg)",
      },
      {
        width: "34%",
        aspectRatio: "1",
        right: "8%",
        top: "12%",
        borderRadius: "50%",
        background:
          "radial-gradient(circle at 31% 24%, rgb(255 255 255 / 80%), rgb(70 226 255 / 30%) 19%, rgb(132 45 255 / 32%) 57%, rgb(25 8 82 / 58%) 76%)",
        boxShadow: "0 24px 54px rgb(25 8 110 / 38%)",
        opacity: 0.74,
      },
    ],
    rail: {
      color: "rgb(227 248 255 / 76%)",
      borderColor: "rgb(194 222 255 / 22%)",
    },
  },
  {
    id: "halftone-furnace-field",
    name: "Chromatic Halftone Furnace",
    category: "thermal knockout matrix",
    source: "Card Designs · 07C",
    description:
      "A black knockout-dot matrix reveals a teal-to-coral-to-gold thermal wash, creating crisp micro-detail and broad color regions behind the glass.",
    background:
      "linear-gradient(180deg, rgb(1 2 6 / 96%) 0%, rgb(1 2 6 / 69%) 18%, transparent 46%, rgb(1 2 6 / 8%) 80%, rgb(1 2 6 / 54%) 100%), radial-gradient(circle at 5.5px 5.5px, transparent 0 2.5px, rgb(1 3 7 / 98%) 2.9px 5.5px) 0 0 / 11px 11px, linear-gradient(90deg, #3af9e1 0%, #77c4c2 24%, #ee6a7e 54%, #ffa168 76%, #ffe065 100%)",
    layers: [
      {
        width: "48%",
        height: "72%",
        left: "-10%",
        top: "8%",
        borderRadius: "50%",
        background: "rgb(43 255 221 / 30%)",
        filter: "blur(38px)",
      },
      {
        width: "52%",
        height: "70%",
        right: "-12%",
        bottom: "-6%",
        borderRadius: "50%",
        background: "rgb(255 137 92 / 34%)",
        filter: "blur(42px)",
      },
    ],
    rail: {
      color: "rgb(255 244 212 / 76%)",
      borderColor: "rgb(255 210 131 / 23%)",
    },
  },
  {
    id: "contour-vault-field",
    name: "Sculpted Contour Vault",
    category: "hard-stop topographic strata",
    source: "Card Designs · 07C",
    description:
      "Asymmetric teal landforms and a violet counterweight stack hard-stop strata into a practical depth test for surface diffusion.",
    background:
      "repeating-radial-gradient(ellipse at 29% 67%, transparent 0 25px, rgb(226 255 249 / 13%) 26px 28px, transparent 29px 48px), radial-gradient(ellipse at 29% 67%, #091431 0 13%, #213967 13.5% 14.5%, transparent 14.8%), radial-gradient(ellipse at 29% 67%, #254476 0 23%, #1c2f5b 23.5% 24.7%, transparent 25%), radial-gradient(ellipse at 29% 67%, #2d5688 0 34%, #203568 34.5% 35.8%, transparent 36.1%), radial-gradient(ellipse at 29% 67%, #3c7395 0 46%, #23416f 46.5% 47.8%, transparent 48.1%), radial-gradient(ellipse at 29% 67%, #429497 0 59%, #2b587e 59.5% 60.8%, transparent 61.1%), radial-gradient(ellipse at 29% 67%, #4eb89b 0 73%, #307489 73.5% 74.8%, transparent 75.1%), radial-gradient(ellipse at 109% -11%, #5810af 0 20%, #3d1687 20.5% 21.8%, transparent 22.1%), radial-gradient(ellipse at 108% -10%, #7119da 0 34%, #441e9c 34.5% 35.8%, transparent 36.1%), linear-gradient(132deg, #41b19e, #2c5c91 54%, #4c19a5)",
    layers: [
      {
        width: "47%",
        height: "38%",
        left: "6%",
        bottom: "9%",
        borderRadius: "50%",
        background: "rgb(9 18 44 / 54%)",
        filter: "blur(24px)",
      },
      {
        width: "38%",
        height: "34%",
        right: "-10%",
        top: "-8%",
        borderRadius: "50%",
        background: "rgb(127 34 236 / 34%)",
        filter: "blur(30px)",
      },
    ],
    rail: {
      color: "rgb(222 255 246 / 72%)",
      borderColor: "rgb(143 246 221 / 21%)",
    },
  },
  {
    id: "biomorphic-orbitarium-field",
    name: "Biomorphic Orbitarium",
    category: "liquid body observatory",
    source: "Card Designs · 07C",
    description:
      "Luminous capsules and orbital droplets float across a split cyan-violet atmosphere with a deliberately dark central aperture.",
    background:
      "radial-gradient(ellipse at 51% 53%, rgb(2 5 21 / 90%) 0 17%, rgb(3 8 28 / 55%) 34%, transparent 59%), radial-gradient(circle, rgb(239 255 255 / 28%) 0 1px, transparent 1.5px) 0 0 / 11px 11px, radial-gradient(circle at 91% 21%, rgb(227 255 250 / 88%) 0 2%, rgb(63 250 220 / 82%) 9%, rgb(58 111 255 / 88%) 23%, rgb(194 46 255 / 93%) 38%, transparent 39%), radial-gradient(ellipse at 13% 78%, rgb(85 255 215 / 68%) 0 7%, rgb(70 112 255 / 82%) 19%, rgb(205 45 249 / 91%) 31%, transparent 32%), radial-gradient(circle at 74% 77%, rgb(204 255 246 / 86%) 0 2%, rgb(46 234 219 / 82%) 8%, rgb(91 92 255 / 86%) 17%, rgb(181 44 247 / 91%) 25%, transparent 26%), radial-gradient(circle at 53% 2%, rgb(236 255 255 / 82%) 0 1%, rgb(75 244 219 / 78%) 7%, rgb(91 102 255 / 84%) 14%, transparent 15%), linear-gradient(90deg, rgb(41 246 214 / 82%) 0%, rgb(37 127 231 / 78%) 37%, rgb(99 58 225 / 82%) 62%, rgb(201 45 255 / 88%) 100%)",
    layers: [
      {
        width: "43%",
        height: "24%",
        left: "3%",
        bottom: "17%",
        borderRadius: "64% 36% 57% 43% / 42% 66% 34% 58%",
        background:
          "radial-gradient(ellipse at 31% 22%, rgb(255 255 255 / 64%), transparent 21%), linear-gradient(145deg, #23f5df, #436fff 51%, #d536f3)",
        boxShadow: "0 22px 48px rgb(16 15 109 / 34%)",
        transform: "rotate(-10deg)",
      },
      {
        width: "18%",
        aspectRatio: "1",
        right: "13%",
        top: "24%",
        borderRadius: "48% 52% 61% 39% / 56% 43% 57% 44%",
        background:
          "radial-gradient(circle at 32% 25%, #eeffff, #39e9dd 17%, #5f61ff 52%, #bf2ff0)",
        boxShadow: "0 20px 42px rgb(20 13 104 / 36%)",
      },
    ],
    rail: {
      color: "rgb(238 248 255 / 76%)",
      borderColor: "rgb(208 221 255 / 23%)",
    },
  },
  {
    id: "magnetic-flux-field",
    name: "Magnetic Flux",
    category: "source-accurate pole field",
    source: "Card Designs · 07B",
    description:
      "The supplied Magnetic Flux construction is used directly through its content and padding layers; only the final repeating-conic card rim is omitted from the optical field.",
    background:
      "repeating-radial-gradient(circle, rgba(96, 165, 250, 0.82) -21px, rgba(96, 65, 250, 0.52) 11px, transparent 8px, transparent 1px, rgba(114, 4, 252, 0.28) 22px, rgba(254, 114, 252, 0.28) 54px, transparent 30px, transparent 48px) content-box padding-box, radial-gradient(at 20% 25%, rgba(96, 165, 250, 0.72), transparent 40%) content-box content-box, radial-gradient(at 82% 72%, rgba(244, 114, 182, 0.68), transparent 44%) content-box content-box, linear-gradient(145deg, rgb(7, 10, 23), rgb(2, 3, 8)) content-box content-box, radial-gradient(circle, rgb(254, 114, 248) 30%, rgb(0, 0, 0), rgb(95, 164, 250)) padding-box padding-box",
    layers: [
      {
        inset: 0,
        background: "transparent",
      },
      {
        inset: 0,
        background: "transparent",
      },
    ],
    rail: {
      color: "rgb(233 235 255 / 73%)",
      borderColor: "rgb(174 176 255 / 22%)",
    },
  },
  {
    id: "blackwater-caustic",
    name: "Blackwater Caustic Vault",
    category: "new dark-mode field",
    source: "Clear Edition exclusive",
    description:
      "A rebuilt abyssal chamber combines cellular caustic meshes, pressure rings, suspended silver plankton, and a luminous rift beneath a near-black water column.",
    background:
      "radial-gradient(circle at 5px 7px, rgb(206 255 246 / 28%) 0 1px, transparent 1.5px) 0 0 / 37px 43px, radial-gradient(circle at 4px 5px, rgb(97 153 255 / 20%) 0 1.4px, transparent 2px) 0 0 / 61px 67px, repeating-radial-gradient(ellipse at 24% 17%, transparent 0 18px, rgb(75 255 219 / 15%) 19px 21px, transparent 22px 41px, rgb(66 126 192 / 11%) 42px 45px, transparent 46px 70px), repeating-radial-gradient(ellipse at 82% 81%, transparent 0 28px, rgb(119 151 255 / 13%) 29px 32px, transparent 33px 57px, rgb(44 236 210 / 9%) 58px 60px, transparent 61px 89px), repeating-conic-gradient(from 11deg at 49% 54%, transparent 0deg 8deg, rgb(136 255 235 / 5%) 8deg 9deg, transparent 9deg 19deg, rgb(87 114 196 / 5%) 19deg 20deg), radial-gradient(ellipse at 50% 48%, rgb(0 0 0 / 12%) 0 12%, rgb(0 3 8 / 68%) 47%, transparent 72%), linear-gradient(145deg, #04191b, #02060c 49%, #090719)",
    layers: [
      {
        width: "82%",
        height: "58%",
        left: "-22%",
        top: "-8%",
        borderRadius: "38% 62% 44% 56% / 55% 36% 64% 45%",
        background:
          "repeating-radial-gradient(ellipse at 48% 52%, transparent 0 17px, rgb(159 255 237 / 20%) 18px 20px, transparent 21px 36px), conic-gradient(from 207deg, rgb(29 246 210 / 30%), rgb(12 66 93 / 14%), rgb(90 115 255 / 18%), rgb(29 246 210 / 30%))",
        boxShadow:
          "inset -22px -28px 46px rgb(0 6 14 / 48%), 0 0 68px rgb(33 229 201 / 16%)",
        transform: "rotate(-16deg)",
        opacity: 0.86,
      },
      {
        width: "94%",
        height: "34%",
        right: "-24%",
        bottom: "-2%",
        borderRadius: "50% 42% 58% 44% / 61% 39% 55% 45%",
        background:
          "linear-gradient(174deg, transparent 0 39%, rgb(220 255 250 / 42%) 43%, rgb(65 244 222 / 24%) 46%, rgb(38 68 158 / 18%) 54%, transparent 61%), repeating-radial-gradient(ellipse at 42% 56%, transparent 0 24px, rgb(105 151 255 / 16%) 25px 27px, transparent 28px 49px)",
        filter: "blur(1px)",
        transform: "rotate(11deg)",
        boxShadow: "0 -18px 48px rgb(49 225 207 / 9%)",
      },
    ],
    rail: {
      color: "rgb(205 240 238 / 70%)",
      borderColor: "rgb(124 219 211 / 18%)",
    },
  },
  {
    id: "carbon-eclipse",
    name: "Carbon Eclipse Interference",
    category: "new dark-mode field",
    source: "Clear Edition exclusive",
    description:
      "A rebuilt carbon-black observatory layers woven microfilaments, a silver eclipse, polarized ray fans, and two offset interference systems for high-contrast dark-mode testing.",
    background:
      "repeating-linear-gradient(118deg, rgb(240 244 249 / 4%) 0 1px, transparent 1px 11px, rgb(78 88 104 / 5%) 11px 13px, transparent 13px 27px), repeating-linear-gradient(28deg, transparent 0 19px, rgb(205 214 227 / 4%) 19px 20px, transparent 20px 39px), repeating-conic-gradient(from 8deg at 68% 37%, rgb(239 244 250 / 15%) 0deg 0.8deg, transparent 0.8deg 7deg, rgb(124 105 226 / 10%) 7deg 8deg, transparent 8deg 17deg), repeating-radial-gradient(circle at 68% 37%, transparent 0 31px, rgb(227 234 244 / 18%) 32px 34px, transparent 35px 62px, rgb(123 103 224 / 12%) 63px 66px, transparent 67px 98px), radial-gradient(circle at 68% 37%, rgb(247 249 251 / 74%) 0 1.5%, rgb(123 127 142 / 38%) 7%, rgb(3 4 8 / 98%) 21%, rgb(0 0 0 / 78%) 31%, transparent 32%), radial-gradient(ellipse at 15% 84%, rgb(49 66 94 / 38%), transparent 42%), linear-gradient(134deg, #15171b, #040508 52%, #0c0917)",
    layers: [
      {
        width: "46%",
        aspectRatio: "1",
        right: "9%",
        top: "12%",
        borderRadius: "50%",
        background:
          "radial-gradient(circle at 32% 26%, rgb(255 255 255 / 88%) 0 2%, rgb(179 185 202 / 48%) 8%, rgb(17 19 27 / 96%) 27%, rgb(1 2 5) 61%, rgb(88 64 164 / 72%) 82%, rgb(5 4 12) 100%)",
        border: "1px solid rgb(240 244 249 / 34%)",
        boxShadow:
          "inset -24px -26px 44px rgb(0 0 0 / 72%), 0 0 0 16px rgb(212 219 231 / 3%), 0 0 0 43px rgb(137 112 230 / 3%), 0 0 86px rgb(121 88 226 / 18%)",
      },
      {
        width: "108%",
        height: "28%",
        left: "-19%",
        bottom: "8%",
        borderRadius: "50%",
        background:
          "repeating-linear-gradient(175deg, transparent 0 14px, rgb(223 230 240 / 14%) 15px 16px, transparent 17px 31px, rgb(131 104 224 / 11%) 32px 34px, transparent 35px 52px), linear-gradient(180deg, transparent, rgb(232 237 245 / 8%) 48%, transparent 53%)",
        border: "1px solid rgb(221 226 237 / 15%)",
        filter: "blur(0.35px)",
        transform: "rotate(-11deg)",
        boxShadow: "0 0 42px rgb(103 78 191 / 10%)",
      },
    ],
    rail: {
      color: "rgb(225 228 238 / 70%)",
      borderColor: "rgb(211 216 233 / 16%)",
    },
  },
];

const inheritedFields = opticalFields
  .filter((field) => inheritedFieldIds.has(field.id))
  .map((field) => ({
    ...field,
    category: `${field.category} · retained field`,
    source: "Current Optical Bench",
  }));

export const clearOpticalFields = [...referencedFields, ...inheritedFields];

const fieldLayerBase = {
  position: "absolute",
  zIndex: 0,
  pointerEvents: "none",
};

export function getClearOpticalFieldStyles(field) {
  return {
    stage: {
      background: field.background,
      backgroundBlendMode: field.backgroundBlendMode,
    },
    layerOne: { ...fieldLayerBase, ...field.layers[0] },
    layerTwo: { ...fieldLayerBase, ...field.layers[1] },
    rail: field.rail,
  };
}
