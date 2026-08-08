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
    category: "charged pole map",
    source: "Card Designs · 07B",
    description:
      "Offset pole blooms and concentric charged arcs create a force-map field while omitting the source card’s rotating rim.",
    background:
      "repeating-radial-gradient(circle at 50% 52%, rgb(96 165 250 / 72%) 0 2px, rgb(96 65 250 / 34%) 3px 11px, transparent 12px 27px, rgb(114 64 252 / 25%) 28px 31px, transparent 32px 49px), radial-gradient(circle at 20% 25%, rgb(96 165 250 / 82%), transparent 40%), radial-gradient(circle at 82% 72%, rgb(244 114 182 / 76%), transparent 44%), radial-gradient(ellipse at 50% 52%, rgb(10 11 32 / 96%) 0 18%, rgb(4 5 17 / 72%) 38%, transparent 68%), linear-gradient(145deg, #101938, #09081e 49%, #240b27)",
    layers: [
      {
        width: "52%",
        aspectRatio: "1",
        left: "-16%",
        top: "6%",
        borderRadius: "50%",
        background:
          "repeating-radial-gradient(circle, transparent 0 14px, rgb(109 201 255 / 42%) 15px 18px, transparent 19px 31px)",
        filter: "blur(0.5px)",
      },
      {
        width: "56%",
        aspectRatio: "1",
        right: "-18%",
        bottom: "-12%",
        borderRadius: "50%",
        background:
          "repeating-radial-gradient(circle, transparent 0 17px, rgb(255 110 225 / 38%) 18px 21px, transparent 22px 37px)",
        filter: "blur(0.5px)",
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
      "Submerged teal caustics, graphite currents, and sparse silver bubbles keep the stage dark while preserving enough structure to reveal refraction.",
    background:
      "radial-gradient(circle at 6px 7px, rgb(205 255 250 / 20%) 0 1px, transparent 1.6px) 0 0 / 39px 43px, repeating-radial-gradient(ellipse at 18% 16%, transparent 0 24px, rgb(89 255 230 / 13%) 25px 28px, transparent 29px 51px), repeating-radial-gradient(ellipse at 84% 76%, transparent 0 31px, rgb(96 152 255 / 12%) 32px 35px, transparent 36px 64px), radial-gradient(ellipse at 16% 14%, rgb(34 220 190 / 27%), transparent 42%), radial-gradient(ellipse at 83% 78%, rgb(47 84 207 / 25%), transparent 46%), linear-gradient(145deg, #071a1d, #030812 52%, #090718)",
    layers: [
      {
        width: "118%",
        height: "31%",
        left: "-17%",
        top: "22%",
        borderRadius: "50%",
        border: "2px solid rgb(115 255 230 / 22%)",
        boxShadow: "0 0 38px rgb(54 238 208 / 12%)",
        transform: "rotate(-9deg)",
      },
      {
        width: "94%",
        height: "25%",
        right: "-13%",
        bottom: "13%",
        borderRadius: "50%",
        border: "1px solid rgb(119 156 255 / 20%)",
        boxShadow: "inset 0 0 28px rgb(50 94 211 / 10%)",
        transform: "rotate(12deg)",
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
      "Near-black silver interference rings cross a restrained ultraviolet eclipse, exposing edge light without washing out the glass body.",
    background:
      "repeating-conic-gradient(from 17deg at 72% 29%, rgb(240 245 255 / 9%) 0deg 1deg, transparent 1deg 9deg, rgb(148 115 255 / 8%) 9deg 11deg, transparent 11deg 21deg), repeating-radial-gradient(circle at 72% 29%, transparent 0 28px, rgb(223 231 255 / 13%) 29px 31px, transparent 32px 57px, rgb(141 105 255 / 10%) 58px 61px, transparent 62px 91px), radial-gradient(circle at 72% 29%, rgb(238 243 255 / 54%) 0 1%, rgb(120 111 180 / 25%) 8%, rgb(5 5 12 / 98%) 25%, transparent 26%), radial-gradient(ellipse at 18% 81%, rgb(55 72 110 / 34%), transparent 39%), linear-gradient(132deg, #17191e, #050609 48%, #0c0918)",
    layers: [
      {
        width: "54%",
        aspectRatio: "1",
        right: "-6%",
        top: "-10%",
        borderRadius: "50%",
        border: "1px solid rgb(239 242 255 / 20%)",
        boxShadow:
          "0 0 0 18px rgb(185 195 225 / 3%), 0 0 0 48px rgb(151 121 255 / 3%), 0 0 70px rgb(119 82 255 / 12%)",
      },
      {
        width: "68%",
        height: "30%",
        left: "-15%",
        bottom: "4%",
        borderRadius: "50%",
        background:
          "linear-gradient(175deg, transparent, rgb(215 229 244 / 12%) 49%, transparent 52%)",
        filter: "blur(2px)",
        transform: "rotate(-13deg)",
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
