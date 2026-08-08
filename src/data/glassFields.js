import { styleObjectToRule } from "../utils/css";

const opticalFieldBase = {
  minHeight: "700px",
  position: "relative",
  display: "grid",
  placeItems: "center",
  padding: "90px 48px 50px",
  border: "1px solid rgb(255 255 255 / 10%)",
  borderRadius: "27px",
  overflow: "hidden",
  isolation: "isolate",
};

const opticalLayerBase = {
  position: "absolute",
  zIndex: 0,
  pointerEvents: "none",
};

export const opticalFields = [
  {
    id: "foundry-spectrum",
    name: "Foundry Spectrum",
    category: "original optical field",
    description:
      "The original mint-and-violet instrument field, retained as the neutral benchmark for comparing every glass system.",
    background:
      "repeating-linear-gradient(135deg, rgb(255 255 255 / 7%) 0 1px, transparent 1px 23px), radial-gradient(circle at 17% 24%, rgb(58 255 206 / 32%) 0 5rem, transparent 17rem), radial-gradient(circle at 85% 76%, rgb(117 100 255 / 34%) 0 6rem, transparent 18rem), linear-gradient(145deg, #0a2424, #0e0b25 62%, #210d22)",
    layers: [
      {
        width: "220px",
        height: "220px",
        left: "-38px",
        top: "90px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle at 34% 30%, #7dffe8, #167c74 58%, #09242b)",
        boxShadow: "0 26px 62px rgb(0 0 0 / 38%)",
        filter: "blur(1px)",
      },
      {
        width: "250px",
        height: "250px",
        right: "-54px",
        bottom: "52px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle at 35% 28%, #d799ff, #674ba5 55%, #28183d)",
        boxShadow: "0 28px 68px rgb(0 0 0 / 42%)",
        filter: "blur(1px)",
      },
    ],
    rail: {
      color: "rgb(221 255 250 / 66%)",
      borderColor: "rgb(255 255 255 / 11%)",
    },
  },
  {
    id: "ribbon-aperture",
    name: "Monochrome Ribbon Aperture",
    category: "woven translucent geometry",
    description:
      "Silver-black ribbon fans converge above the specimen, crossing into a layered aperture with controlled white edge light.",
    background:
      "radial-gradient(ellipse at 50% 12%, rgb(255 255 255 / 24%) 0 1%, transparent 20%), repeating-conic-gradient(from 226deg at 50% 12%, rgb(234 242 247 / 19%) 0deg 1.1deg, transparent 1.1deg 6.8deg, rgb(129 143 154 / 12%) 6.8deg 8deg, transparent 8deg 14deg), repeating-radial-gradient(ellipse at 50% 12%, transparent 0 37px, rgb(231 239 245 / 8%) 38px 40px, transparent 41px 78px), linear-gradient(180deg, #151a20 0%, #080b10 46%, #020305 100%)",
    layers: [
      {
        width: "145%",
        height: "58%",
        left: "-28%",
        top: "19%",
        borderRadius: "50%",
        background:
          "repeating-radial-gradient(ellipse at 50% 0%, transparent 0 28px, rgb(231 239 245 / 20%) 29px 31px, rgb(62 72 81 / 14%) 32px 48px, transparent 49px 72px)",
        transform: "rotate(7deg)",
        filter: "blur(0.4px)",
        opacity: 0.9,
      },
      {
        width: "118%",
        height: "52%",
        right: "-31%",
        bottom: "4%",
        borderRadius: "50%",
        background:
          "repeating-radial-gradient(ellipse at 50% 100%, transparent 0 31px, rgb(213 225 233 / 17%) 32px 34px, rgb(29 35 42 / 28%) 35px 55px, transparent 56px 82px)",
        transform: "rotate(-11deg)",
        opacity: 0.82,
      },
    ],
    rail: {
      color: "rgb(232 240 245 / 64%)",
      borderColor: "rgb(226 237 245 / 13%)",
    },
  },
  {
    id: "neon-particle-rain",
    name: "Neon Particle Rain",
    category: "volumetric signal fall",
    description:
      "Layered cyan and emerald light columns descend through two particle scales before dissolving into a black optical void.",
    background:
      "radial-gradient(circle at 3px 3px, rgb(119 252 255 / 68%) 0 1px, transparent 1.4px) 0 0 / 17px 19px, radial-gradient(circle at 4px 4px, rgb(44 169 255 / 34%) 0 1.6px, transparent 2.2px) 0 0 / 37px 41px, repeating-linear-gradient(90deg, transparent 0 23px, rgb(17 120 255 / 12%) 23px 26px, transparent 26px 54px, rgb(45 255 216 / 10%) 54px 57px, transparent 57px 86px), linear-gradient(180deg, rgb(16 101 164 / 66%) 0%, rgb(0 170 173 / 34%) 39%, rgb(2 15 28 / 88%) 76%, #010205 100%)",
    layers: [
      {
        inset: "-8% 4% 34%",
        background:
          "repeating-linear-gradient(90deg, transparent 0 34px, rgb(51 190 255 / 42%) 34px 39px, transparent 39px 72px, rgb(59 255 217 / 34%) 72px 77px, transparent 77px 108px)",
        filter: "blur(9px)",
        opacity: 0.86,
        boxShadow: "0 70px 90px rgb(31 217 255 / 14%)",
      },
      {
        inset: "7% 0 18%",
        background:
          "radial-gradient(circle at 9px 7px, rgb(177 255 255 / 86%) 0 1.5px, transparent 2px) 0 0 / 46px 53px, radial-gradient(circle at 5px 5px, rgb(71 244 255 / 62%) 0 2.5px, transparent 4px) 0 0 / 83px 97px",
        filter: "drop-shadow(0 12px 7px rgb(44 223 255 / 42%))",
      },
    ],
    rail: {
      color: "rgb(183 255 252 / 72%)",
      borderColor: "rgb(61 230 255 / 21%)",
    },
  },
  {
    id: "liquid-nebula",
    name: "Liquid Nebula Bloom",
    category: "blurred chromatic atmosphere",
    description:
      "Cyan pools, cobalt depth, violet currents, and fine stellar dust create a soft but spatially complex liquid nebula.",
    background:
      "radial-gradient(circle at 7px 7px, rgb(205 255 255 / 40%) 0 1px, transparent 1.5px) 0 0 / 31px 37px, radial-gradient(ellipse at 14% 18%, rgb(15 255 235 / 84%) 0 4%, rgb(19 137 255 / 46%) 15%, transparent 35%), radial-gradient(ellipse at 82% 15%, rgb(63 246 255 / 72%) 0 7%, rgb(29 117 255 / 42%) 24%, transparent 42%), radial-gradient(ellipse at 45% 73%, rgb(147 36 255 / 68%) 0 10%, rgb(65 45 234 / 54%) 29%, transparent 50%), radial-gradient(ellipse at 94% 78%, rgb(26 238 255 / 62%) 0 8%, rgb(30 90 255 / 40%) 24%, transparent 44%), linear-gradient(135deg, #071dad, #2312a3 40%, #5a0caa 69%, #071b80)",
    layers: [
      {
        width: "62%",
        height: "42%",
        left: "-12%",
        bottom: "4%",
        borderRadius: "58% 42% 65% 35% / 44% 62% 38% 56%",
        background:
          "conic-gradient(from 218deg at 58% 42%, rgb(71 255 233 / 72%), rgb(30 113 255 / 66%), rgb(153 39 255 / 64%), rgb(71 255 233 / 72%))",
        filter: "blur(24px)",
        transform: "rotate(-14deg)",
        opacity: 0.78,
      },
      {
        width: "54%",
        height: "38%",
        right: "-11%",
        top: "20%",
        borderRadius: "36% 64% 45% 55% / 61% 38% 62% 39%",
        background:
          "conic-gradient(from 32deg, rgb(78 255 241 / 76%), rgb(37 94 255 / 64%), rgb(175 35 255 / 66%), rgb(78 255 241 / 76%))",
        filter: "blur(28px)",
        transform: "rotate(9deg)",
        opacity: 0.72,
      },
    ],
    rail: {
      color: "rgb(213 248 255 / 72%)",
      borderColor: "rgb(179 232 255 / 20%)",
    },
  },
  {
    id: "chromatic-silk",
    name: "Chromatic Silk Current",
    category: "razor-edged fluid folds",
    description:
      "Glossy indigo folds sweep through a dark void with teal, white, and magenta edge separation inspired by polished silk and saddle forms.",
    background:
      "radial-gradient(ellipse at 47% 49%, rgb(2 4 18 / 96%) 0 14%, transparent 42%), conic-gradient(from 228deg at 24% 20%, transparent 0 13%, rgb(48 240 255 / 24%) 14% 16%, rgb(87 59 245 / 40%) 17% 29%, rgb(255 81 215 / 22%) 30% 32%, transparent 33% 100%), conic-gradient(from 41deg at 78% 74%, transparent 0 12%, rgb(238 249 255 / 26%) 13% 14%, rgb(92 53 221 / 46%) 15% 29%, rgb(46 234 255 / 25%) 30% 32%, transparent 33% 100%), linear-gradient(145deg, #07091f, #17103d 51%, #050611)",
    layers: [
      {
        width: "116%",
        height: "33%",
        left: "-21%",
        top: "17%",
        borderRadius: "12% 88% 18% 82% / 55% 42% 58% 45%",
        background:
          "linear-gradient(176deg, rgb(2 4 16 / 86%) 0 14%, rgb(95 80 238 / 72%) 33%, rgb(233 245 255 / 82%) 48%, rgb(44 229 240 / 62%) 52%, rgb(33 19 97 / 80%) 69%, rgb(2 3 12 / 92%) 86%)",
        transform: "rotate(-16deg)",
        boxShadow:
          "0 -2px 0 rgb(255 255 255 / 48%), 0 4px 18px rgb(87 73 255 / 32%), 0 36px 58px rgb(0 0 0 / 42%)",
        filter: "blur(0.5px)",
      },
      {
        width: "124%",
        height: "31%",
        right: "-26%",
        bottom: "13%",
        borderRadius: "82% 18% 76% 24% / 42% 62% 38% 58%",
        background:
          "linear-gradient(4deg, rgb(2 3 14 / 92%) 0 11%, rgb(50 35 143 / 78%) 29%, rgb(255 112 221 / 72%) 44%, rgb(237 248 255 / 80%) 49%, rgb(38 215 242 / 66%) 53%, rgb(22 17 76 / 86%) 73%, rgb(1 2 9 / 95%) 89%)",
        transform: "rotate(-12deg)",
        boxShadow:
          "0 -3px 0 rgb(178 238 255 / 48%), 0 -12px 28px rgb(254 84 220 / 18%), 0 35px 64px rgb(0 0 0 / 46%)",
      },
    ],
    rail: {
      color: "rgb(229 231 255 / 67%)",
      borderColor: "rgb(181 167 255 / 18%)",
    },
  },
  {
    id: "celestial-orb",
    name: "Celestial Glass Orb",
    category: "luminous nebula focus",
    description:
      "A bright glass sphere floats inside coral plasma, smoky rings, and a layered star field while the lower stage remains deliberately dark.",
    background:
      "radial-gradient(circle at 4px 4px, rgb(255 226 238 / 58%) 0 1px, transparent 1.4px) 0 0 / 41px 47px, radial-gradient(circle at 7px 8px, rgb(119 161 255 / 34%) 0 1px, transparent 1.4px) 0 0 / 73px 83px, radial-gradient(ellipse at 50% 27%, rgb(255 195 210 / 72%) 0 4%, rgb(255 91 143 / 42%) 17%, rgb(122 52 171 / 23%) 38%, transparent 58%), radial-gradient(ellipse at 18% 47%, rgb(255 96 146 / 21%), transparent 34%), radial-gradient(ellipse at 84% 39%, rgb(110 93 255 / 22%), transparent 37%), linear-gradient(180deg, #141633 0%, #18102f 42%, #060819 69%, #02030a 100%)",
    layers: [
      {
        width: "286px",
        height: "286px",
        left: "calc(50% - 143px)",
        top: "82px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle at 34% 26%, rgb(255 255 255 / 96%) 0 2%, rgb(255 217 239 / 88%) 7%, rgb(175 167 255 / 72%) 26%, rgb(86 83 193 / 64%) 52%, rgb(24 27 84 / 86%) 74%, rgb(5 8 30 / 96%) 100%)",
        boxShadow:
          "0 0 0 2px rgb(255 228 245 / 42%), 0 0 42px rgb(255 111 171 / 56%), 0 0 104px rgb(255 82 139 / 34%), inset -20px -26px 42px rgb(3 5 34 / 62%)",
      },
      {
        width: "520px",
        height: "230px",
        left: "calc(50% - 260px)",
        top: "122px",
        borderRadius: "50%",
        border: "2px solid rgb(255 176 209 / 34%)",
        boxShadow:
          "0 0 34px rgb(255 92 154 / 22%), inset 0 0 34px rgb(119 94 255 / 16%)",
        transform: "rotate(-11deg)",
        filter: "blur(0.4px)",
      },
    ],
    rail: {
      color: "rgb(255 225 237 / 68%)",
      borderColor: "rgb(255 177 210 / 17%)",
    },
  },
  {
    id: "biomorphic-reservoir",
    name: "Biomorphic Color Reservoir",
    category: "floating liquid bodies",
    description:
      "Large cyan-underlit capsules, soft coral reservoirs, and small suspended droplets create a playful but dimensional optical field.",
    background:
      "radial-gradient(ellipse at 50% 52%, rgb(11 26 112 / 72%) 0 9%, transparent 36%), radial-gradient(ellipse at 7% 18%, rgb(255 145 232 / 88%) 0 12%, rgb(85 82 255 / 74%) 28%, rgb(22 213 255 / 66%) 42%, transparent 43%), radial-gradient(ellipse at 95% 10%, rgb(255 169 229 / 86%) 0 11%, rgb(79 84 255 / 76%) 26%, rgb(17 219 255 / 62%) 41%, transparent 42%), radial-gradient(ellipse at 88% 82%, rgb(25 238 255 / 78%) 0 8%, rgb(68 85 255 / 72%) 26%, rgb(255 121 220 / 68%) 41%, transparent 42%), radial-gradient(ellipse at 13% 84%, rgb(255 132 225 / 80%) 0 9%, rgb(66 90 255 / 74%) 28%, rgb(18 221 255 / 64%) 43%, transparent 44%), linear-gradient(135deg, #ef91e8, #4968ff 48%, #073ad9)",
    layers: [
      {
        width: "47%",
        height: "27%",
        left: "4%",
        bottom: "22%",
        borderRadius: "63% 37% 54% 46% / 40% 68% 32% 60%",
        background:
          "radial-gradient(ellipse at 34% 24%, rgb(255 199 240 / 72%), transparent 23%), linear-gradient(145deg, rgb(21 245 255), rgb(52 91 255) 48%, rgb(239 89 224))",
        boxShadow:
          "inset -18px -22px 38px rgb(30 13 130 / 42%), 0 24px 48px rgb(13 25 110 / 34%)",
        transform: "rotate(-9deg)",
      },
      {
        width: "21%",
        aspectRatio: "1",
        right: "12%",
        top: "24%",
        borderRadius: "45% 55% 62% 38% / 55% 42% 58% 45%",
        background:
          "radial-gradient(circle at 34% 28%, rgb(218 255 255 / 92%), rgb(29 225 255 / 72%) 20%, rgb(65 83 255 / 86%) 55%, rgb(249 100 218 / 88%))",
        boxShadow:
          "inset -12px -16px 24px rgb(47 20 134 / 44%), 0 22px 42px rgb(19 21 111 / 36%)",
        transform: "rotate(17deg)",
      },
    ],
    rail: {
      color: "rgb(247 241 255 / 72%)",
      borderColor: "rgb(255 231 250 / 24%)",
    },
  },
  {
    id: "registry-amoeba",
    name: "Registry Amoeba Circuit",
    category: "organic technical collage",
    description:
      "Peach and orchid islands interrupt a deep-violet channel populated by hatching, circular nodes, crosses, and survey marks.",
    background:
      "radial-gradient(circle at 5px 5px, transparent 0 2px, rgb(255 213 243 / 54%) 2px 3px, transparent 3.5px) 0 0 / 58px 58px, repeating-linear-gradient(128deg, transparent 0 21px, rgb(255 216 236 / 12%) 21px 23px, transparent 23px 43px), radial-gradient(ellipse at 8% 2%, rgb(255 216 190) 0 18%, rgb(255 154 196) 31%, transparent 32%), radial-gradient(ellipse at 92% 4%, rgb(255 193 191) 0 15%, rgb(233 83 222) 31%, transparent 32%), radial-gradient(ellipse at 4% 91%, rgb(255 210 190) 0 17%, rgb(242 106 193) 30%, transparent 31%), radial-gradient(ellipse at 94% 87%, rgb(255 202 186) 0 19%, rgb(214 65 221) 32%, transparent 33%), radial-gradient(ellipse at 52% 54%, rgb(69 31 121) 0 27%, rgb(48 26 92) 48%, rgb(23 23 63) 70%), linear-gradient(135deg, #f0a4ad, #6e1799 48%, #e56dba)",
    layers: [
      {
        width: "38%",
        height: "29%",
        left: "12%",
        top: "27%",
        borderRadius: "62% 38% 52% 48% / 42% 61% 39% 58%",
        background:
          "radial-gradient(circle at 32% 24%, rgb(255 241 207 / 82%), transparent 28%), linear-gradient(145deg, rgb(255 187 175), rgb(227 89 205) 61%, rgb(112 28 165))",
        boxShadow:
          "inset -14px -16px 28px rgb(96 17 137 / 36%), 0 18px 36px rgb(37 15 76 / 32%)",
        transform: "rotate(14deg)",
      },
      {
        width: "26%",
        height: "21%",
        right: "13%",
        bottom: "20%",
        borderRadius: "44% 56% 66% 34% / 61% 37% 63% 39%",
        background:
          "radial-gradient(circle at 31% 21%, rgb(255 235 203 / 84%), transparent 26%), linear-gradient(145deg, rgb(255 174 167), rgb(223 75 218) 59%, rgb(96 27 161))",
        boxShadow:
          "inset -11px -13px 22px rgb(90 15 135 / 38%), 0 16px 31px rgb(38 14 75 / 34%)",
        transform: "rotate(-18deg)",
      },
    ],
    rail: {
      color: "rgb(255 229 235 / 72%)",
      borderColor: "rgb(255 205 229 / 22%)",
    },
  },
  {
    id: "electric-fluid-veins",
    name: "Electric Fluid Veins",
    category: "charged reflective terrain",
    description:
      "Cyan and magenta current lines cross a black-blue fluid surface with nested waves, micro-cells, and concentrated edge flares.",
    background:
      "repeating-radial-gradient(ellipse at 18% 24%, transparent 0 19px, rgb(45 240 255 / 30%) 20px 22px, transparent 23px 43px, rgb(255 69 221 / 20%) 44px 46px, transparent 47px 71px), repeating-radial-gradient(ellipse at 88% 74%, transparent 0 24px, rgb(255 72 218 / 25%) 25px 27px, transparent 28px 50px, rgb(38 224 255 / 22%) 51px 54px, transparent 55px 82px), radial-gradient(ellipse at 32% 19%, rgb(22 232 255 / 42%), transparent 29%), radial-gradient(ellipse at 78% 68%, rgb(255 54 216 / 38%), transparent 32%), linear-gradient(145deg, #020817, #071331 42%, #160b38 72%, #030611)",
    backgroundBlendMode: "screen, screen, screen, screen, normal",
    layers: [
      {
        width: "132%",
        height: "24%",
        left: "-17%",
        top: "31%",
        borderRadius: "50%",
        background:
          "repeating-linear-gradient(176deg, transparent 0 6px, rgb(78 244 255 / 58%) 7px 9px, transparent 10px 17px, rgb(255 81 225 / 42%) 18px 20px, transparent 21px 30px)",
        transform: "rotate(-9deg)",
        filter: "blur(0.4px) drop-shadow(0 0 12px rgb(53 225 255 / 46%))",
      },
      {
        width: "126%",
        height: "21%",
        right: "-18%",
        bottom: "22%",
        borderRadius: "50%",
        background:
          "repeating-linear-gradient(4deg, transparent 0 7px, rgb(255 88 229 / 54%) 8px 10px, transparent 11px 19px, rgb(52 230 255 / 46%) 20px 22px, transparent 23px 32px)",
        transform: "rotate(11deg)",
        filter: "blur(0.5px) drop-shadow(0 0 13px rgb(255 64 218 / 38%))",
      },
    ],
    rail: {
      color: "rgb(193 249 255 / 72%)",
      borderColor: "rgb(66 229 255 / 22%)",
    },
  },
  {
    id: "topographic-pulse",
    name: "Topographic Pulse Well",
    category: "subtle concentric depth",
    description:
      "Low-contrast rings radiate from an off-corner well through blue-black and violet atmospheric gradients—a quieter field for highly transparent glass.",
    background:
      "repeating-radial-gradient(circle at 15% 14%, rgb(119 145 178 / 7%) 0 34px, rgb(3 10 22 / 4%) 35px 69px, rgb(100 123 158 / 6%) 70px 72px), radial-gradient(ellipse at 86% 42%, rgb(59 84 149 / 17%), transparent 42%), radial-gradient(ellipse at 77% 93%, rgb(99 46 150 / 18%), transparent 46%), linear-gradient(145deg, #182536, #0b1827 50%, #151326 100%)",
    layers: [
      {
        width: "520px",
        height: "520px",
        left: "-286px",
        top: "-278px",
        borderRadius: "50%",
        border: "1px solid rgb(153 179 208 / 11%)",
        boxShadow:
          "0 0 0 58px rgb(130 153 181 / 3%), 0 0 0 116px rgb(112 135 164 / 3%), 0 0 0 174px rgb(96 119 149 / 2%)",
      },
      {
        width: "420px",
        height: "420px",
        right: "-250px",
        bottom: "-235px",
        borderRadius: "50%",
        border: "1px solid rgb(145 97 192 / 10%)",
        boxShadow:
          "0 0 0 52px rgb(118 69 170 / 3%), 0 0 0 104px rgb(86 63 147 / 3%)",
      },
    ],
    rail: {
      color: "rgb(204 218 231 / 57%)",
      borderColor: "rgb(183 204 222 / 11%)",
    },
  },
  {
    id: "point-cloud-terrain",
    name: "Digital Point-Cloud Terrain",
    category: "luminous data landscape",
    description:
      "Thousands of implied cyan points form layered terrain bands with contour energy, sparse green nodes, and deep network space.",
    background:
      "radial-gradient(circle at 4px 4px, rgb(63 245 255 / 72%) 0 1.2px, transparent 1.7px) 0 0 / 9px 9px, radial-gradient(circle at 5px 5px, rgb(96 255 156 / 54%) 0 1.7px, transparent 2.2px) 0 0 / 73px 79px, repeating-radial-gradient(ellipse at 18% 88%, transparent 0 23px, rgb(25 234 255 / 19%) 24px 26px, transparent 27px 48px), radial-gradient(ellipse at 24% 72%, rgb(13 226 255 / 32%), transparent 38%), radial-gradient(ellipse at 82% 26%, rgb(32 116 255 / 24%), transparent 37%), linear-gradient(145deg, #02091a, #04152d 48%, #020614)",
    layers: [
      {
        width: "144%",
        height: "55%",
        left: "-22%",
        bottom: "9%",
        borderRadius: "50%",
        background:
          "radial-gradient(circle at 3px 3px, rgb(67 247 255 / 86%) 0 1.4px, transparent 1.9px) 0 0 / 7px 7px",
        WebkitMaskImage:
          "linear-gradient(180deg, transparent 0%, black 18%, black 68%, transparent 100%)",
        maskImage:
          "linear-gradient(180deg, transparent 0%, black 18%, black 68%, transparent 100%)",
        transform: "rotate(-8deg) skewY(-8deg)",
        filter: "drop-shadow(0 0 8px rgb(34 225 255 / 52%))",
        opacity: 0.72,
      },
      {
        width: "126%",
        height: "34%",
        right: "-18%",
        top: "16%",
        borderRadius: "50%",
        background:
          "repeating-radial-gradient(ellipse at 50% 100%, transparent 0 14px, rgb(75 227 255 / 28%) 15px 17px, transparent 18px 34px)",
        transform: "rotate(7deg)",
        filter: "drop-shadow(0 0 10px rgb(51 167 255 / 34%))",
      },
    ],
    rail: {
      color: "rgb(169 252 255 / 72%)",
      borderColor: "rgb(67 231 255 / 20%)",
    },
  },
  {
    id: "holographic-foil",
    name: "Holographic Foil Current",
    category: "pastel spectral refraction",
    description:
      "Cyan, lilac, rose, and warm white specular currents fold through a luminous foil field with layered interference color.",
    background:
      "radial-gradient(ellipse at 50% 52%, rgb(67 82 166 / 52%) 0 12%, transparent 42%), repeating-radial-gradient(ellipse at 18% 22%, transparent 0 26px, rgb(255 255 255 / 21%) 27px 29px, rgb(81 239 255 / 16%) 30px 35px, transparent 36px 61px, rgb(255 100 225 / 15%) 62px 66px, transparent 67px 94px), repeating-radial-gradient(ellipse at 84% 76%, transparent 0 22px, rgb(255 243 185 / 18%) 23px 27px, rgb(255 104 207 / 16%) 28px 34px, transparent 35px 60px, rgb(76 235 255 / 18%) 61px 65px, transparent 66px 91px), conic-gradient(from 218deg at 50% 48%, #61dff1, #de9eea, #fff0c7, #8bbaff, #ff9dcf, #5de5f1)",
    backgroundBlendMode: "soft-light, screen, screen, normal",
    layers: [
      {
        width: "128%",
        height: "29%",
        left: "-18%",
        top: "23%",
        borderRadius: "50%",
        background:
          "linear-gradient(174deg, rgb(93 232 255 / 20%), rgb(255 255 255 / 86%) 27%, rgb(255 131 224 / 68%) 39%, rgb(114 196 255 / 62%) 55%, rgb(255 240 186 / 76%) 69%, rgb(157 114 236 / 24%))",
        transform: "rotate(-13deg)",
        filter: "blur(1.2px)",
        boxShadow:
          "0 0 34px rgb(255 255 255 / 24%), 0 24px 46px rgb(91 93 209 / 22%)",
        opacity: 0.82,
      },
      {
        width: "126%",
        height: "25%",
        right: "-19%",
        bottom: "15%",
        borderRadius: "50%",
        background:
          "linear-gradient(6deg, rgb(80 221 255 / 28%), rgb(255 245 197 / 78%) 24%, rgb(255 119 216 / 72%) 39%, rgb(130 177 255 / 68%) 55%, rgb(255 255 255 / 86%) 72%, rgb(135 96 224 / 28%))",
        transform: "rotate(10deg)",
        filter: "blur(1px)",
        boxShadow:
          "0 0 32px rgb(255 255 255 / 22%), 0 28px 52px rgb(80 83 190 / 23%)",
        opacity: 0.8,
      },
    ],
    rail: {
      color: "rgb(255 255 255 / 76%)",
      borderColor: "rgb(255 255 255 / 27%)",
    },
  },
];

export function getOpticalFieldStyles(field) {
  return {
    stage: {
      background: field.background,
      backgroundBlendMode: field.backgroundBlendMode,
      boxShadow: field.boxShadow,
    },
    layerOne: field.layers[0],
    layerTwo: field.layers[1],
    rail: field.rail,
  };
}

export function getOpticalFieldCode(field) {
  const styles = getOpticalFieldStyles(field);

  return `${styleObjectToRule(".optical-field", {
    ...opticalFieldBase,
    ...styles.stage,
  })}

${styleObjectToRule(".optical-field__layer", opticalLayerBase)}

${styleObjectToRule(".optical-field__layer--one", styles.layerOne)}

${styleObjectToRule(".optical-field__layer--two", styles.layerTwo)}`;
}
