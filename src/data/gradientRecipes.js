export const repeatedGradientRecipes = [
  {
    id: "border-hatch",
    title: "Border Hatch Matrix",
    short: "Hatch restricted to the rim.",
    description:
      "A diagonal cyan hatch is painted in the border layer while an opaque padding-box plate protects the interior.",
    border: 8,
    padding: 26,
    radius: 28,
    background:
      "linear-gradient(150deg, rgb(9 16 26), rgb(3 6 10)) padding-box, repeating-linear-gradient(135deg, rgb(33 255 210 / 72%) 0 2px, transparent 2px 9px) border-box, linear-gradient(135deg, rgb(33 255 210 / 46%), rgb(88 167 255 / 32%), rgb(255 79 184 / 36%)) border-box",
    boxShadow:
      "0 24px 58px rgb(0 0 0 / 52%), 0 0 28px rgb(33 255 210 / 8%), inset 0 1px 0 rgb(255 255 255 / 9%)",
  },
  {
    id: "triple-texture",
    title: "Tri-Zone Texture Stack",
    short: "A different repeat system in every box.",
    description:
      "Scanlines, radial node dots, and conic rim ticks are each assigned to a separate CSS box.",
    border: 8,
    padding: 24,
    radius: 30,
    background:
      "repeating-linear-gradient(90deg, rgb(255 255 255 / 8%) 0 1px, transparent 1px 10px) content-box, linear-gradient(145deg, rgb(12 22 32), rgb(3 6 11)) content-box, repeating-radial-gradient(circle at 22% 18%, rgb(33 255 210 / 28%) 0 1px, transparent 1.5px 9px) padding-box, linear-gradient(135deg, rgb(7 18 26), rgb(3 6 10)) padding-box, repeating-conic-gradient(from 10deg at 50% 50%, rgb(255 79 184 / 42%) 0deg 7deg, rgb(88 167 255 / 28%) 7deg 15deg, transparent 15deg 26deg) border-box, linear-gradient(135deg, #21ffd2, #111827, #ff4fb8) border-box",
    backgroundRepeat: "repeat, no-repeat, repeat, no-repeat, repeat, no-repeat",
    boxShadow:
      "0 26px 62px rgb(0 0 0 / 54%), inset 0 1px 0 rgb(255 255 255 / 10%)",
  },
  {
    id: "content-scan",
    title: "Phosphor Scan Core",
    short: "Fine scanlines isolated to the content plate.",
    description:
      "The active scan field is clipped to the content surface while the bevel and rim remain optically clean.",
    border: 6,
    padding: 26,
    radius: 28,
    background:
      "repeating-linear-gradient(0deg, rgb(33 255 210 / 16%) 0 2px, transparent 2px 7px) content-box, radial-gradient(ellipse at 22% 18%, rgb(33 255 210 / 20%), transparent 44%) content-box, linear-gradient(150deg, rgb(11 25 31), rgb(3 6 10)) content-box, linear-gradient(145deg, rgb(8 31 35), rgb(3 7 10)) padding-box, linear-gradient(135deg, rgb(33 255 210 / 42%), rgb(88 167 255 / 30%), rgb(4 7 11)) border-box",
    boxShadow:
      "0 25px 60px rgb(0 0 0 / 52%), 0 0 26px rgb(33 255 210 / 8%), inset 0 1px 0 rgb(255 255 255 / 10%)",
  },
  {
    id: "padding-circuit",
    title: "Circuit Bevel Registry",
    short: "Crossed traces live in the padding bevel.",
    description:
      "Two restrained repeat systems cross only around the content plate, creating a functional circuit-board frame.",
    border: 7,
    padding: 28,
    radius: 30,
    background:
      "radial-gradient(ellipse at 30% 20%, rgb(255 255 255 / 9%), transparent 40%) content-box, linear-gradient(145deg, rgb(15 22 34), rgb(4 7 12)) content-box, repeating-linear-gradient(45deg, rgb(33 255 210 / 20%) 0 1px, transparent 1px 14px) padding-box, repeating-linear-gradient(135deg, transparent 0 10px, rgb(88 167 255 / 14%) 10px 12px, transparent 12px 24px) padding-box, linear-gradient(145deg, rgb(6 20 26), rgb(3 6 10)) padding-box, linear-gradient(135deg, rgb(88 167 255 / 48%), rgb(6 10 16), rgb(33 255 210 / 34%)) border-box",
    boxShadow:
      "0 26px 62px rgb(0 0 0 / 54%), inset 0 1px 0 rgb(255 255 255 / 9%)",
  },
  {
    id: "conic-gear",
    title: "Repeating Conic Gear Rim",
    short: "Machined gear facets in prismatic violet.",
    description:
      "The original faceted conic face, saturated diagonal bevel, and indexed violet gear rim form one continuous machine plate.",
    border: 12,
    padding: 26,
    radius: 34,
    background:
      "repeating-conic-gradient(from 45deg, rgba(255, 255, 255, 0.3) 0deg, rgba(255, 255, 255, 0.05) 25%, transparent 0deg, transparent 50%) content-box content-box, linear-gradient(90deg, rgba(124, 58, 237, 0.25), transparent 33%, rgba(20, 184, 166, 0.25)) content-box content-box, linear-gradient(145deg, rgba(17, 14, 30, 0.8), rgba(3, 5, 12, 0.8)) content-box content-box, repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.533) 7px, rgba(0, 0, 0, 0.533) 13px, rgba(101, 40, 255, 0.99) 16px, rgba(251, 11, 136, 0.8) 20px, transparent 6px, transparent 30px, rgba(245, 12, 241, 0.92) 29px, rgba(105, 12, 251, 0.92) 46px, rgb(85, 0, 255) 52px, transparent 63px) padding-box padding-box, linear-gradient(135deg, rgb(27, 21, 43), rgb(4, 7, 13)) padding-box padding-box, repeating-linear-gradient(135deg, rgba(54, 58, 247, 0.22) 4px, rgba(84, 58, 237, 0.92) 10px, rgba(250, 14, 246, 0.95) 23px, rgb(0, 3, 17) 33px, rgb(2, 3, 17) 41px) border-box border-box",
    boxShadow:
      "0 30px 70px rgb(0 0 0 / 62%), 0 0 34px rgb(255 160 80 / 12%), inset 0 1px 0 rgb(255 239 198 / 13%), inset 0 -18px 34px rgb(0 0 0 / 48%)",
  },
  {
    id: "nested-mesh",
    title: "Nested Mesh Stack",
    short: "Radial mesh, diagonal traces, and conic indexing.",
    description:
      "The original radial face mesh, diagonal circuit bevel, and segmented conic rim retain their separate visual frequencies.",
    border: 8,
    padding: 26,
    radius: 30,
    background:
      "repeating-radial-gradient(circle at 25% 20%, rgb(255 255 255 / 10%) 0 1px, transparent 1px 10px) content-box, linear-gradient(150deg, rgb(10 20 26), rgb(3 6 10)) content-box, repeating-linear-gradient(120deg, rgb(33 255 210 / 13%) 0 1px, transparent 1px 11px) padding-box, linear-gradient(145deg, rgb(6 19 26), rgb(4 8 13)) padding-box, repeating-conic-gradient(from 18deg at 50% 50%, rgb(255 79 184 / 34%) 0deg 6deg, transparent 6deg 19deg, rgb(88 167 255 / 28%) 19deg 25deg, transparent 25deg 38deg) border-box, linear-gradient(135deg, #21ffd2, #111827, #ff4fb8) border-box",
    backgroundBlendMode: "screen, normal, screen, normal, screen, normal",
    boxShadow:
      "0 28px 66px rgb(0 0 0 / 56%), 0 0 28px rgb(33 255 210 / 8%), inset 0 1px 0 rgb(255 255 255 / 10%)",
  },
  {
    id: "barcode-rim",
    title: "Chromatic Barcode Rim",
    short: "Cyan, blue, and rose code bands.",
    description:
      "The original protected midnight face sits inside a dense barcode rim with cyan, blue, rose, and deep separator bands.",
    border: 8,
    padding: 26,
    radius: 30,
    background:
      "radial-gradient(ellipse at 24% 18%, rgb(255 255 255 / 10%), transparent 42%) content-box, linear-gradient(150deg, rgb(10 18 29), rgb(3 6 11)) content-box, linear-gradient(145deg, rgb(5 13 22), rgb(2 4 8)) padding-box, repeating-linear-gradient(90deg, rgb(33 255 210 / 62%) 0 3px, rgb(88 167 255 / 34%) 3px 7px, rgb(255 79 184 / 42%) 7px 10px, rgb(2 4 8 / 100%) 10px 18px) border-box",
    boxShadow:
      "0 26px 66px rgb(0 0 0 / 56%), 0 0 30px rgb(33 255 210 / 10%), inset 0 1px 0 rgb(255 255 255 / 10%)",
  },
  {
    id: "moire-glass",
    title: "Moiré Glass Field",
    short: "Crossed translucent line fields.",
    description:
      "The original crossed screen-blended line fields sit above a cool glass face, quieter ribbed bevel, and spectral edge.",
    border: 7,
    padding: 27,
    radius: 31,
    background:
      "repeating-linear-gradient(33deg, rgb(255 255 255 / 8%) 0 1px, transparent 1px 12px) content-box, repeating-linear-gradient(147deg, rgb(33 255 210 / 9%) 0 1px, transparent 1px 13px) content-box, linear-gradient(140deg, rgb(255 255 255 / 12%), rgb(255 255 255 / 3%)) content-box, repeating-linear-gradient(90deg, rgb(88 167 255 / 11%) 0 1px, transparent 1px 18px) padding-box, linear-gradient(145deg, rgb(6 15 26), rgb(3 6 10)) padding-box, linear-gradient(135deg, rgb(255 255 255 / 28%), rgb(33 255 210 / 30%), rgb(88 167 255 / 28%)) border-box",
    backgroundBlendMode: "screen, screen, normal, screen, normal, normal",
    boxShadow:
      "0 26px 62px rgb(0 0 0 / 54%), inset 0 1px 0 rgb(255 255 255 / 14%)",
  },
  {
    id: "halftone-portal",
    title: "Halftone Portal Core",
    short: "Printed dot field inside a segmented ring.",
    description:
      "Repeating radial dots make the center feel printed while the outer conic ring reads like a calibrated portal.",
    border: 9,
    padding: 25,
    radius: 32,
    background:
      "repeating-radial-gradient(circle at 50% 50%, rgb(33 255 210 / 20%) 0 1px, transparent 1.5px 10px) content-box, radial-gradient(circle at 50% 50%, rgb(33 255 210 / 18%) 0 18%, transparent 55%) content-box, linear-gradient(150deg, rgb(8 19 25), rgb(3 6 10)) content-box, radial-gradient(circle at 50% 50%, rgb(0 0 0 / 100%) 0 42%, rgb(23 58 70 / 62%) 55%, rgb(4 8 12 / 100%) 76%) padding-box, repeating-conic-gradient(from 5deg at 50% 50%, rgb(255 209 102 / 60%) 0deg 4deg, rgb(33 255 210 / 42%) 4deg 8deg, transparent 8deg 18deg) border-box",
    boxShadow:
      "0 28px 66px rgb(0 0 0 / 58%), 0 0 35px rgb(255 209 102 / 8%), inset 0 1px 0 rgb(255 255 255 / 10%)",
  },
  {
    id: "coordinate-frame",
    title: "Neon Coordinate Frame",
    short: "Violet registry rings in a spectral frame.",
    description:
      "The original violet radial registry sits over a dark coordinate hatch while the outer frame traverses the full spectrum.",
    border: 8,
    padding: 30,
    radius: 30,
    background:
      "linear-gradient(45deg, #0003, #3349) content-box, repeating-radial-gradient(at center, rgb(182 183 255) 6px, rgba(84, 58, 237, 0.99) 0px, rgba(250, 14, 246, 0.99) 32px, rgb(0, 3, 17) 33px, rgb(2, 3, 17) 35px) padding-box, repeating-linear-gradient(135deg, rgb(0,0,0) 0px, rgb(0,0,0) 10px, transparent 10px, transparent 11px), repeating-linear-gradient(22.5deg, rgb(0,0,0) 0px, rgb(0,0,0) 10px, transparent 10px, transparent 11px), linear-gradient(90deg, hsl(194,74%,56%), hsl(266,74%,56%), hsl(338,74%,56%), hsl(50,74%,56%), hsl(122,74%,56%)) border-box",
    boxShadow:
      "0 28px 68px rgb(0 0 0 / 58%), 0 0 32px rgb(173 255 47 / 9%), inset 0 1px 0 rgb(255 255 255 / 10%)",
  },
  {
    id: "cinder-relief",
    title: "Cinder Relief Atlas",
    short: "New replacement: volcanic contour cartography.",
    description:
      "Offset contour systems, thermal mineral blooms, and a survey-tick frame produce a cohesive volcanic field map.",
    border: 9,
    padding: 28,
    radius: 32,
    background:
      "repeating-radial-gradient(ellipse at 18% 22%, transparent 0 12px, rgb(255 226 164 / 16%) 12px 14px, transparent 14px 27px) content-box, repeating-radial-gradient(ellipse at 84% 72%, transparent 0 18px, rgb(255 108 67 / 13%) 18px 21px, transparent 21px 38px) content-box, radial-gradient(ellipse at 22% 20%, rgb(255 178 71 / 23%), transparent 42%) content-box, radial-gradient(ellipse at 82% 76%, rgb(191 55 34 / 26%), transparent 45%) content-box, linear-gradient(145deg, rgb(31 19 13), rgb(11 10 11) 56%, rgb(3 5 7)) content-box, repeating-linear-gradient(118deg, rgb(255 231 191 / 8%) 0 2px, transparent 2px 15px) padding-box, linear-gradient(145deg, rgb(56 32 19), rgb(8 9 10)) padding-box, repeating-conic-gradient(from 3deg at 50% 50%, rgb(255 190 92 / 74%) 0deg 2deg, rgb(44 21 14) 2deg 11deg, rgb(255 92 57 / 48%) 11deg 14deg, rgb(8 8 10) 14deg 24deg) border-box",
    boxShadow:
      "0 31px 74px rgb(0 0 0 / 64%), 0 10px 30px rgb(52 14 6 / 58%), 0 0 42px rgb(255 108 67 / 10%), inset 0 1px 0 rgb(255 239 202 / 14%)",
  },
  {
    id: "signal-array",
    title: "Signal Array Slab",
    short: "Pulse nodes, carrier bands, bus stripes.",
    description:
      "Two node fields and orthogonal carrier bands create an electronics-board face with a calibrated signal rim.",
    border: 8,
    padding: 26,
    radius: 30,
    background:
      "repeating-radial-gradient(circle at 18% 22%, rgb(64 255 173 / 24%) 0 3px, transparent 3px 18px) content-box, repeating-radial-gradient(circle at 78% 68%, rgb(255 64 129 / 22%) 0 2px, transparent 2px 15px) content-box, radial-gradient(ellipse at 52% 30%, rgb(255 184 77 / 15%), transparent 45%) content-box, linear-gradient(150deg, rgb(12 12 18), rgb(4 6 13)) content-box, repeating-linear-gradient(90deg, rgb(255 184 77 / 14%) 0 7px, transparent 7px 19px, rgb(64 255 173 / 10%) 19px 25px, transparent 25px 42px) padding-box, repeating-linear-gradient(0deg, transparent 0 9px, rgb(88 167 255 / 15%) 9px 11px, transparent 11px 20px) padding-box, linear-gradient(145deg, rgb(18 11 23), rgb(2 5 9)) padding-box, repeating-linear-gradient(90deg, rgb(64 255 173 / 52%) 0 5px, rgb(255 184 77 / 38%) 5px 12px, rgb(255 64 129 / 28%) 12px 18px, transparent 18px 34px) border-box",
    boxShadow:
      "0 28px 68px rgb(0 0 0 / 58%), 0 0 34px rgb(255 64 129 / 9%), inset 0 1px 0 rgb(255 255 255 / 10%)",
  },
  {
    id: "voxel-inlay",
    title: "Prismatic Voxel Inlay",
    short: "Faceted violet voxels and prism-cut inlay.",
    description:
      "The original checker facets, saturated magenta bevel fragments, and violet-blue prism rim form a dense machined mosaic.",
    border: 9,
    padding: 26,
    radius: 32,
    background:
      "repeating-conic-gradient(from 45deg, rgba(255, 255, 255, 0.1) 0deg, rgba(255, 255, 255, 0.1) 25%, transparent 0deg, transparent 50%) content-box content-box, linear-gradient(90deg, rgba(124, 58, 237, 0.18), transparent 32%, rgba(20, 184, 166, 0.18)) content-box content-box, linear-gradient(145deg, rgb(17, 14, 30), rgb(3, 5, 12)) content-box content-box, repeating-linear-gradient(45deg, rgba(251, 91, 236, 0.8) 1px, rgba(251, 11, 136, 0.8) 15px, transparent 6px, transparent 19px, rgba(245, 12, 241, 0.92) 18px, rgba(105, 12, 251, 0.92) 29px, #50f 16px, transparent 38px) padding-box padding-box, linear-gradient(135deg, rgb(27, 21, 43), rgb(4, 7, 13)) padding-box padding-box, repeating-linear-gradient(135deg, rgba(51, 91, 236, 0.74) -6px, rgba(251, 11, 236, 0.74) 5px, rgba(124, 58, 237, 0.22) 5px, rgba(124, 58, 237, 0.02) 13px, rgba(20, 184, 166, 0.05) 13px, rgba(120, 84, 256, 0.5) 21px, rgb(22, 3, 87) 33px, rgb(2, 3, 7) 36px) border-box border-box",
    boxShadow:
      "0 30px 70px rgb(0 0 0 / 60%), 0 0 38px rgb(124 58 237 / 10%), inset 0 1px 0 rgb(255 255 255 / 11%)",
  },
  {
    id: "solar-flare",
    title: "Solar Flare Rim",
    short: "Spectral flare bands over a crosshatched circuit.",
    description:
      "The original cyan-magenta flare face, intersecting black circuit hatch, and full-spectrum rim return as one vivid plate.",
    border: 11,
    padding: 25,
    radius: 34,
    background:
      "linear-gradient(45deg, rgba(52, 159, 222, 0.35), rgba(201, 2, 215, 0.35)) content-box, repeating-linear-gradient(135deg, rgb(0,0,0) 0px, rgb(0,0,0) 10px, transparent 10px, transparent 11px) padding-box, repeating-linear-gradient(22.5deg, rgb(0,0,0) 0px, rgb(0,0,0) 10px, transparent 10px, transparent 11px) border-box, linear-gradient(90deg, hsl(194,74%,56%), hsl(266,74%,56%), hsl(338,74%,56%), hsl(50,74%,56%), hsl(122,74%,56%)) padding-box, linear-gradient(90deg, rgba(188, 12, 80,0.2) 0%, rgba(188, 12, 80,0.2) 16.667%, rgba(117, 106, 136,0.2) 16.667%, rgba(117, 106, 136,0.2) 33.334%, rgba(153, 59, 108,0.2) 33.334%, rgba(153, 59, 108,0.2) 50.001%, rgba(11, 246, 220,0.2) 50.001%, rgba(11, 246, 220,0.2) 66.668%, rgba(46, 199, 192,0.2) 66.668%, rgba(46, 199, 192,0.2) 83.335%, rgba(82, 152, 164,0.2) 83.335%, rgba(82, 152, 164,0.2) 100.002%), linear-gradient(45deg, rgba(188, 12, 80,0.2) 0%, rgba(188, 12, 80,0.2) 16.667%, rgba(117, 106, 136,0.2) 16.667%, rgba(117, 106, 136,0.2) 33.334%, rgba(153, 59, 108,0.2) 33.334%, rgba(153, 59, 108,0.2) 50.001%, rgba(11, 246, 220,0.2) 50.001%, rgba(11, 246, 220,0.2) 66.668%, rgba(46, 199, 192,0.2) 66.668%, rgba(46, 199, 192,0.2) 83.335%, rgba(82, 152, 164,0.2) 83.335%, rgba(82, 152, 164,0.2) 100.002%), linear-gradient(0deg, rgba(188, 12, 80,0.2) 0%, rgba(188, 12, 80,0.2) 16.667%, rgba(117, 106, 136,0.2) 16.667%, rgba(117, 106, 136,0.2) 33.334%, rgba(153, 59, 108,0.2) 33.334%, rgba(153, 59, 108,0.2) 50.001%, rgba(11, 246, 220,0.2) 50.001%, rgba(11, 246, 220,0.2) 66.668%, rgba(46, 199, 192,0.2) 66.668%, rgba(46, 199, 192,0.2) 83.335%, rgba(82, 152, 164,0.2) 83.335%, rgba(82, 152, 164,0.2) 100.002%), linear-gradient(90deg, rgb(99, 122, 239), rgb(4, 152, 185)) border-box",
    boxShadow:
      "0 30px 74px rgb(0 0 0 / 62%), 0 0 42px rgb(255 111 0 / 14%), inset 0 1px 0 rgb(255 236 179 / 14%)",
  },
  {
    id: "abyssal-observatory",
    title: "Abyssal Biolume Observatory",
    short: "New replacement: depth arcs and bioluminescent cells.",
    description:
      "Offset pressure contours intersect bioluminescent cell fields, while the broad cobalt bevel and sonar-index rim stay distinct.",
    border: 10,
    padding: 29,
    radius: 34,
    background:
      "repeating-radial-gradient(ellipse at 26% 68%, transparent 0 17px, rgb(91 244 255 / 16%) 17px 19px, transparent 19px 37px) content-box, repeating-radial-gradient(circle at 82% 24%, rgb(96 255 183 / 22%) 0 2px, transparent 2px 16px) content-box, radial-gradient(ellipse at 25% 72%, rgb(0 207 255 / 24%), transparent 46%) content-box, radial-gradient(ellipse at 84% 22%, rgb(61 255 157 / 16%), transparent 38%) content-box, linear-gradient(155deg, rgb(3 22 39), rgb(1 7 18) 58%, rgb(0 2 8)) content-box, repeating-linear-gradient(102deg, rgb(89 219 255 / 12%) 0 3px, transparent 3px 17px, rgb(88 96 255 / 10%) 17px 22px, transparent 22px 39px) padding-box, linear-gradient(145deg, rgb(3 43 64), rgb(2 8 21)) padding-box, repeating-conic-gradient(from 2deg at 50% 50%, rgb(105 241 255 / 68%) 0deg 2deg, rgb(3 24 40) 2deg 9deg, rgb(94 255 181 / 42%) 9deg 12deg, rgb(2 8 20) 12deg 22deg) border-box",
    boxShadow:
      "0 34px 78px rgb(0 0 0 / 66%), 0 12px 30px rgb(0 5 20 / 68%), 0 0 44px rgb(0 190 255 / 12%), inset 0 1px 0 rgb(201 255 250 / 13%)",
  },
  {
    id: "magnetic-flux",
    title: "Magnetic Flux",
    short: "Concentric pole fields and charged arcs.",
    description:
      "The original concentric blue-violet pole field, bi-chromatic charge blooms, and rotating flux rim form a force-map surface.",
    border: 9,
    padding: 27,
    radius: 32,
    background:
      "repeating-radial-gradient(circle, rgba(96, 165, 250, 0.82) -21px, rgba(96, 65, 250, 0.52) 11px, transparent 8px, transparent 1px, rgba(114, 4, 252, 0.28) 22px, rgba(254, 114, 252, 0.28) 54px, transparent 30px, transparent 48px) content-box padding-box, radial-gradient(at 20% 25%, rgba(96, 165, 250, 0.72), transparent 40%) content-box content-box, radial-gradient(at 82% 72%, rgba(244, 114, 182, 0.68), transparent 44%) content-box content-box, linear-gradient(145deg, rgb(7, 10, 23), rgb(2, 3, 8)) content-box content-box, radial-gradient(circle, rgb(254, 114, 248) 30%, rgb(0, 0, 0), rgb(95, 164, 250)) padding-box padding-box, repeating-conic-gradient(from 3deg at 50% 50%, #ae42c8 14deg 16deg, #477dff 25deg 24deg, transparent 45deg 45deg, #9045fa88 59deg 56deg) border-box",
    boxShadow:
      "0 30px 72px rgb(0 0 0 / 60%), 0 0 36px rgb(96 165 250 / 10%), 0 0 46px rgb(244 114 182 / 7%), inset 0 1px 0 rgb(255 255 255 / 11%)",
  },
];

export const atelierGradientRecipes = [
  {
    id: "aurora-mineral",
    title: "Aurora Mineral Registry",
    short: "Opaline folds over a frost-cut frame.",
    description:
      "Broad aurora veils cross a crystalline content plate; the bevel holds hairline frost and the rim reads like chipped opal.",
    border: 10,
    padding: 30,
    radius: 36,
    background:
      "radial-gradient(ellipse at 18% 12%, rgb(207 255 247 / 32%), transparent 36%) content-box, linear-gradient(117deg, transparent 8%, rgb(93 255 208 / 18%) 22%, transparent 37%, rgb(108 128 255 / 22%) 51%, transparent 66%, rgb(255 124 221 / 18%) 82%, transparent 94%) content-box, linear-gradient(155deg, rgb(13 32 35), rgb(8 14 31) 52%, rgb(20 8 27)) content-box, repeating-linear-gradient(128deg, rgb(224 255 251 / 15%) 0 1px, transparent 1px 13px) padding-box, linear-gradient(145deg, rgb(21 61 61), rgb(13 20 46), rgb(43 17 49)) padding-box, repeating-linear-gradient(90deg, rgb(190 255 239 / 78%) 0 7px, rgb(42 144 142 / 72%) 7px 15px, rgb(12 15 29) 15px 26px, rgb(155 147 255 / 62%) 26px 34px, rgb(12 15 29) 34px 47px, rgb(255 159 225 / 62%) 47px 53px, rgb(12 15 29) 53px 68px) border-box",
    boxShadow:
      "0 34px 84px rgb(0 0 0 / 66%), -14px -10px 42px rgb(93 255 208 / 7%), 16px 16px 48px rgb(255 124 221 / 7%), inset 0 1px 0 rgb(236 255 252 / 18%), inset 0 -22px 38px rgb(3 5 15 / 52%)",
    tags: ["linear", "opal rim", "ambient shadow"],
  },
  {
    id: "kintsugi-ledger",
    title: "Obsidian Kintsugi Ledger",
    short: "Gold fracture lines in volcanic lacquer.",
    description:
      "Hard-stop gold seams travel across an obsidian face, widen into the bevel, and resolve as irregular metallic rim bars.",
    border: 9,
    padding: 28,
    radius: 31,
    background:
      "linear-gradient(132deg, transparent 0 21%, rgb(255 218 138 / 92%) 21% 21.8%, rgb(116 68 18 / 82%) 21.8% 23%, transparent 23% 57%, rgb(255 196 82 / 72%) 57% 57.7%, transparent 57.7% 100%) content-box, linear-gradient(46deg, transparent 0 68%, rgb(255 234 178 / 52%) 68% 68.5%, transparent 68.5%) content-box, radial-gradient(ellipse at 32% 18%, rgb(255 242 202 / 9%), transparent 34%) content-box, linear-gradient(148deg, rgb(26 24 23), rgb(7 7 9) 58%, rgb(1 2 4)) content-box, repeating-linear-gradient(132deg, rgb(214 145 48 / 22%) 0 3px, rgb(11 9 8) 3px 14px, rgb(255 223 143 / 12%) 14px 16px, rgb(11 9 8) 16px 31px) padding-box, linear-gradient(145deg, rgb(48 36 21), rgb(10 9 10)) padding-box, repeating-linear-gradient(105deg, rgb(255 224 151 / 88%) 0 4px, rgb(96 53 16) 4px 10px, rgb(5 5 7) 10px 24px, rgb(216 135 38 / 76%) 24px 30px, rgb(5 5 7) 30px 43px) border-box",
    boxShadow:
      "0 32px 72px rgb(0 0 0 / 72%), 9px 14px 28px rgb(0 0 0 / 48%), 0 0 34px rgb(229 155 44 / 9%), inset 1px 1px 0 rgb(255 239 192 / 13%), inset -14px -16px 28px rgb(0 0 0 / 54%)",
    tags: ["hard stops", "lacquer", "directional shadow"],
  },
  {
    id: "iris-console",
    title: "Chromatic Iris Console",
    short: "A calibrated optical iris with a deep lens.",
    description:
      "Conic aperture blades sit over a dense lens core while the bevel and rim use different rotational frequencies.",
    border: 12,
    padding: 27,
    radius: 999,
    background:
      "radial-gradient(circle at 42% 32%, rgb(255 255 255 / 22%) 0 5%, transparent 18%) content-box, conic-gradient(from 18deg at 50% 50%, rgb(49 255 216 / 18%) 0deg 44deg, rgb(83 107 255 / 16%) 44deg 88deg, rgb(255 82 181 / 17%) 88deg 132deg, rgb(255 193 86 / 15%) 132deg 176deg, rgb(49 255 216 / 18%) 176deg 220deg, rgb(83 107 255 / 16%) 220deg 264deg, rgb(255 82 181 / 17%) 264deg 308deg, rgb(255 193 86 / 15%) 308deg 360deg) content-box, radial-gradient(circle, rgb(10 24 34) 0 28%, rgb(3 7 15) 56%, rgb(0 1 4) 82%) content-box, repeating-conic-gradient(from 4deg at 50% 50%, rgb(255 255 255 / 12%) 0deg 3deg, transparent 3deg 16deg) padding-box, radial-gradient(circle, rgb(31 42 65), rgb(4 6 13) 72%) padding-box, repeating-conic-gradient(from 0deg at 50% 50%, rgb(92 255 222 / 84%) 0deg 5deg, rgb(7 11 20) 5deg 15deg, rgb(115 110 255 / 72%) 15deg 21deg, rgb(7 11 20) 21deg 33deg, rgb(255 97 190 / 68%) 33deg 38deg, rgb(7 11 20) 38deg 51deg) border-box",
    boxShadow:
      "0 38px 84px rgb(0 0 0 / 72%), 0 14px 32px rgb(0 0 0 / 62%), 0 0 44px rgb(92 255 222 / 9%), inset 0 2px 0 rgb(255 255 255 / 16%), inset 0 -24px 38px rgb(0 0 0 / 58%)",
    tags: ["conic", "optical", "inset depth"],
  },
  {
    id: "botanical-foil",
    title: "Midnight Botanical Foil",
    short: "Pressed foliage in spectral foil.",
    description:
      "Elliptical leaf impressions repeat at two scales, framed by a narrow foil bevel and a deep green-black ribbed rim.",
    border: 8,
    padding: 31,
    radius: 38,
    background:
      "repeating-radial-gradient(ellipse at 14% 18%, rgb(166 255 194 / 14%) 0 3px, transparent 3px 17px) content-box, repeating-radial-gradient(ellipse at 82% 72%, rgb(223 189 255 / 12%) 0 2px, transparent 2px 21px) content-box, linear-gradient(34deg, transparent 0 42%, rgb(116 255 167 / 8%) 42% 58%, transparent 58%) content-box, radial-gradient(ellipse at 20% 12%, rgb(68 222 136 / 19%), transparent 40%) content-box, linear-gradient(148deg, rgb(8 31 24), rgb(6 11 17) 58%, rgb(13 5 18)) content-box, repeating-linear-gradient(45deg, rgb(186 255 211 / 16%) 0 2px, transparent 2px 16px) padding-box, linear-gradient(135deg, rgb(22 67 45), rgb(20 12 31)) padding-box, repeating-linear-gradient(90deg, rgb(105 236 157 / 64%) 0 6px, rgb(5 19 14) 6px 23px, rgb(193 135 235 / 48%) 23px 28px, rgb(5 12 16) 28px 45px) border-box",
    boxShadow:
      "0 34px 78px rgb(0 0 0 / 68%), -10px -6px 32px rgb(73 226 139 / 6%), 14px 18px 38px rgb(92 40 119 / 12%), inset 0 1px 0 rgb(220 255 230 / 13%)",
    tags: ["radial repeat", "foil", "split shadow"],
  },
  {
    id: "ember-ceramic",
    title: "Emberwave Ceramic",
    short: "A warm glaze over a kiln-dark frame.",
    description:
      "Soft glaze pools float above a ridged ceramic face while the bevel catches ember streaks and the rim cools to charcoal.",
    border: 11,
    padding: 25,
    radius: 42,
    background:
      "radial-gradient(ellipse at 24% 16%, rgb(255 247 218 / 30%), transparent 31%) content-box, radial-gradient(ellipse at 76% 82%, rgb(255 90 54 / 27%), transparent 43%) content-box, repeating-linear-gradient(168deg, rgb(255 231 189 / 8%) 0 3px, transparent 3px 17px) content-box, linear-gradient(148deg, rgb(93 48 28), rgb(45 20 18) 48%, rgb(18 10 14)) content-box, repeating-linear-gradient(118deg, rgb(255 179 91 / 30%) 0 5px, transparent 5px 20px, rgb(255 102 72 / 18%) 20px 24px, transparent 24px 39px) padding-box, linear-gradient(145deg, rgb(93 40 24), rgb(17 11 14)) padding-box, linear-gradient(135deg, rgb(255 202 124 / 78%), rgb(74 29 22) 24%, rgb(7 8 10) 48%, rgb(194 67 44 / 72%) 72%, rgb(5 6 9)) border-box",
    boxShadow:
      "0 36px 76px rgb(0 0 0 / 66%), 0 18px 34px rgb(46 9 6 / 52%), 0 0 38px rgb(255 104 59 / 10%), inset 0 2px 0 rgb(255 248 221 / 17%), inset 0 -20px 34px rgb(34 7 8 / 48%)",
    tags: ["ceramic", "warm light", "deep cast"],
  },
  {
    id: "polar-relay",
    title: "Polar Prism Relay",
    short: "Ice facets crossing a cobalt relay frame.",
    description:
      "Hard translucent facets cut across a blue-black face; frosted bevel rails and asymmetric rim facets reinforce the same direction.",
    border: 9,
    padding: 29,
    radius: 29,
    background:
      "linear-gradient(122deg, rgb(241 255 255 / 20%) 0 12%, transparent 12% 31%, rgb(104 226 255 / 16%) 31% 42%, transparent 42% 68%, rgb(130 143 255 / 16%) 68% 79%, transparent 79%) content-box, radial-gradient(ellipse at 20% 10%, rgb(211 255 255 / 23%), transparent 37%) content-box, linear-gradient(148deg, rgb(11 39 57), rgb(5 10 27) 54%, rgb(8 5 23)) content-box, repeating-linear-gradient(122deg, rgb(210 252 255 / 20%) 0 4px, transparent 4px 21px) padding-box, linear-gradient(145deg, rgb(25 80 102), rgb(12 16 48)) padding-box, linear-gradient(122deg, rgb(224 255 255 / 88%) 0 9%, rgb(37 111 151) 9% 24%, rgb(3 8 22) 24% 48%, rgb(102 119 255 / 76%) 48% 63%, rgb(11 7 29) 63% 82%, rgb(183 92 255 / 64%) 82% 100%) border-box",
    boxShadow:
      "18px 34px 78px rgb(0 0 0 / 70%), -13px -11px 38px rgb(126 234 255 / 8%), 0 0 42px rgb(91 103 255 / 9%), inset 1px 1px 0 rgb(238 255 255 / 18%), inset -16px -20px 32px rgb(2 5 17 / 46%)",
    tags: ["hard facets", "frost", "asymmetric shadow"],
  },
  {
    id: "celestial-chart",
    title: "Celestial Cartography Deck",
    short: "Star maps and orbital registers.",
    description:
      "Star points, orbital rings, and coordinate lines occupy separate layers above a quiet indigo atlas and brass index rim.",
    border: 8,
    padding: 30,
    radius: 35,
    background:
      "repeating-radial-gradient(circle at 19% 23%, rgb(255 245 190 / 76%) 0 1px, transparent 1.4px 24px) content-box, repeating-radial-gradient(circle at 76% 66%, rgb(174 217 255 / 56%) 0 1px, transparent 1.3px 31px) content-box, repeating-radial-gradient(ellipse at 56% 48%, transparent 0 25px, rgb(129 167 255 / 12%) 25px 27px, transparent 27px 49px) content-box, repeating-linear-gradient(90deg, transparent 0 39px, rgb(255 255 255 / 6%) 39px 40px) content-box, repeating-linear-gradient(0deg, transparent 0 39px, rgb(255 255 255 / 5%) 39px 40px) content-box, radial-gradient(ellipse at 50% 40%, rgb(71 87 185 / 20%), transparent 52%) content-box, linear-gradient(150deg, rgb(11 16 39), rgb(3 5 14)) content-box, repeating-linear-gradient(90deg, rgb(222 187 99 / 18%) 0 3px, transparent 3px 19px) padding-box, linear-gradient(145deg, rgb(31 30 58), rgb(8 8 18)) padding-box, repeating-linear-gradient(90deg, rgb(242 210 128 / 74%) 0 5px, rgb(17 15 22) 5px 18px, rgb(100 146 226 / 50%) 18px 24px, rgb(8 8 16) 24px 39px) border-box",
    boxShadow:
      "0 36px 82px rgb(0 0 0 / 68%), 0 0 42px rgb(80 106 255 / 10%), 0 0 26px rgb(244 201 91 / 6%), inset 0 1px 0 rgb(255 248 218 / 14%)",
    tags: ["multi-repeat", "brass index", "ambient glow"],
  },
  {
    id: "rose-quartz",
    title: "Rose Quartz Data Reliquary",
    short: "Translucent mineral bands over a data grid.",
    description:
      "Quartz veining, a barely visible register grid, and a jewel-cut bevel form a softer but still technical instrument surface.",
    border: 10,
    padding: 27,
    radius: 44,
    background:
      "linear-gradient(32deg, transparent 0 18%, rgb(255 227 246 / 22%) 18% 20%, transparent 20% 47%, rgb(255 199 229 / 18%) 47% 49%, transparent 49% 77%, rgb(212 202 255 / 16%) 77% 79%, transparent 79%) content-box, repeating-linear-gradient(90deg, rgb(255 255 255 / 5%) 0 1px, transparent 1px 28px) content-box, repeating-linear-gradient(0deg, rgb(255 255 255 / 4%) 0 1px, transparent 1px 28px) content-box, radial-gradient(ellipse at 24% 18%, rgb(255 222 244 / 25%), transparent 43%) content-box, linear-gradient(145deg, rgb(60 25 48), rgb(24 13 33) 55%, rgb(10 8 20)) content-box, repeating-linear-gradient(135deg, rgb(255 218 241 / 16%) 0 4px, transparent 4px 18px) padding-box, linear-gradient(145deg, rgb(82 36 68), rgb(22 14 34)) padding-box, linear-gradient(135deg, rgb(255 227 246 / 84%), rgb(135 64 111) 22%, rgb(20 12 29) 46%, rgb(154 125 225 / 72%) 73%, rgb(14 10 25)) border-box",
    boxShadow:
      "0 36px 80px rgb(0 0 0 / 66%), -12px -8px 36px rgb(255 187 228 / 7%), 16px 20px 42px rgb(75 54 139 / 12%), inset 0 2px 0 rgb(255 242 250 / 18%), inset 0 -18px 32px rgb(17 7 22 / 45%)",
    tags: ["mineral", "grid", "jewel bevel"],
  },
];

export function gradientRecipeStyle(recipe, padding, border) {
  return {
    border: `${border}px solid transparent`,
    borderRadius: recipe.radius >= 999 ? "50%" : `${recipe.radius}px`,
    padding: `${padding}px`,
    "--gradient-background": recipe.background,
    "--gradient-background-repeat": recipe.backgroundRepeat ?? "repeat",
    "--gradient-background-blend-mode": recipe.backgroundBlendMode ?? "normal",
    boxShadow: recipe.boxShadow,
  };
}

export function gradientRecipeCss(recipe, padding, border) {
  const radius = recipe.radius >= 999 ? "50%" : `${recipe.radius}px`;
  const repeat =
    recipe.backgroundRepeat && recipe.backgroundRepeat !== "repeat"
      ? `\nbackground-repeat: ${recipe.backgroundRepeat};`
      : "";
  const blendMode = recipe.backgroundBlendMode
    ? `\nbackground-blend-mode: ${recipe.backgroundBlendMode};`
    : "";

  return `border: ${border}px solid transparent;
border-radius: ${radius};
padding: ${padding}px;
background:
  ${formatCssList(recipe.background)};${repeat}${blendMode}
box-shadow:
  ${formatCssList(recipe.boxShadow)};`;
}
import { formatCssList } from "../utils/css";
