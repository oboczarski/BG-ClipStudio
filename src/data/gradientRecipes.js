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
    id: "coral-orbit",
    title: "Coral Orbit Registry",
    short: "Drafting hatches cross oversized orbital bodies.",
    description:
      "Coral and indigo planetary fields overlap an offset drafting hatch, while signal nodes and a dual-frequency rim turn the reference composition into a reusable instrument surface.",
    border: 10,
    padding: 29,
    radius: 35,
    background:
      "radial-gradient(ellipse at 50% 52%, rgb(7 8 27 / 88%) 0 11%, rgb(7 8 27 / 58%) 22%, transparent 40%) content-box, repeating-linear-gradient(132deg, rgb(255 218 205 / 17%) 0 1px, transparent 1px 11px) content-box, repeating-linear-gradient(104deg, transparent 0 54px, rgb(255 190 181 / 16%) 54px 58px, transparent 58px 111px, rgb(140 168 255 / 15%) 111px 115px, transparent 115px 168px) content-box, radial-gradient(circle 252px at 102% 72%, transparent 0 93.5%, rgb(255 235 196 / 78%) 94% 95.5%, rgb(96 45 137 / 74%) 96% 99%, transparent 100%) content-box, radial-gradient(circle 193px at -2% 12%, transparent 0 93%, rgb(194 223 255 / 72%) 93.5% 95%, rgb(39 30 112 / 82%) 96% 99%, transparent 100%) content-box, radial-gradient(circle at 16% 15%, transparent 0 2px, rgb(255 185 170 / 88%) 2px 4px, transparent 5px 100%) 0 0 / 42px 42px content-box, radial-gradient(circle 247px at 102% 72%, rgb(255 240 188) 0 4%, rgb(255 162 139) 28%, rgb(224 80 148) 61%, rgb(122 55 164) 96%, transparent 100%) content-box, radial-gradient(circle 188px at -2% 12%, rgb(183 220 255 / 96%) 0 5%, rgb(91 133 255 / 94%) 34%, rgb(68 60 184 / 94%) 72%, rgb(47 34 124 / 92%) 96%, transparent 100%) content-box, radial-gradient(circle 112px at 36% 104%, rgb(174 145 255 / 78%) 0 9%, rgb(101 79 218 / 68%) 52%, rgb(57 49 153 / 58%) 96%, transparent 100%) content-box, linear-gradient(118deg, rgb(25 57 134), rgb(109 53 151) 48%, rgb(220 94 130)) content-box, repeating-linear-gradient(132deg, rgb(255 177 176 / 20%) 0 2px, transparent 2px 16px) padding-box, radial-gradient(circle at 84% 66%, rgb(255 156 111 / 38%), transparent 44%) padding-box, linear-gradient(124deg, rgb(35 76 161), rgb(109 50 153) 52%, rgb(224 90 132)) padding-box, repeating-conic-gradient(from 4deg at 50% 50%, rgb(255 156 142 / 72%) 0deg 3deg, rgb(31 32 74) 3deg 12deg, rgb(112 139 255 / 58%) 12deg 16deg, rgb(22 20 53) 16deg 27deg) border-box, linear-gradient(120deg, rgb(109 151 255), rgb(241 103 145), rgb(255 190 121)) border-box",
    boxShadow:
      "0 34px 82px rgb(0 0 0 / 66%), -16px 12px 38px rgb(71 104 255 / 10%), 18px 18px 42px rgb(255 111 132 / 11%), inset 0 1px 0 rgb(255 231 220 / 17%), inset 0 -21px 38px rgb(35 12 42 / 42%)",
  },
  {
    id: "cornerwave-resonance",
    title: "Cornerwave Resonance Deck",
    short: "Offset cyan-violet wavefronts cross a signal field.",
    description:
      "Thick wavefronts expand from one cropped corner, a counter-field rises through the bevel, and sparse registry marks stop the concentric system from becoming a generic target.",
    border: 9,
    padding: 30,
    radius: 34,
    background:
      "radial-gradient(ellipse at 53% 54%, rgb(3 5 23 / 88%) 0 17%, rgb(5 7 29 / 53%) 35%, transparent 61%) content-box, repeating-radial-gradient(circle at -6% -8%, transparent 0 24px, rgb(56 239 255 / 52%) 25px 39px, rgb(75 104 255 / 40%) 40px 61px, transparent 62px 83px, rgb(222 67 255 / 34%) 84px 100px, transparent 101px 126px) content-box, repeating-conic-gradient(from 8deg at -6% -8%, rgb(190 255 255 / 20%) 0deg 2deg, transparent 2deg 15deg, rgb(255 111 244 / 15%) 15deg 18deg, transparent 18deg 34deg) content-box, radial-gradient(circle at 84% 74%, transparent 0 2px, rgb(255 217 132 / 82%) 2px 4px, transparent 5px 100%) 0 0 / 34px 34px content-box, linear-gradient(120deg, rgb(5 212 225 / 72%), rgb(65 79 229 / 76%) 48%, rgb(202 29 244 / 76%)) content-box, repeating-radial-gradient(circle at 108% 112%, transparent 0 18px, rgb(255 86 219 / 22%) 19px 29px, transparent 30px 48px, rgb(55 230 255 / 18%) 49px 60px, transparent 61px 82px) padding-box, repeating-linear-gradient(112deg, transparent 0 13px, rgb(211 251 255 / 12%) 13px 15px, transparent 15px 34px) padding-box, linear-gradient(126deg, rgb(11 186 216), rgb(75 64 223) 52%, rgb(177 28 225)) padding-box, repeating-conic-gradient(from 2deg at 0% 0%, rgb(85 247 255 / 78%) 0deg 3deg, rgb(10 13 45) 3deg 12deg, rgb(225 89 255 / 62%) 12deg 16deg, rgb(8 10 34) 16deg 29deg) border-box, linear-gradient(120deg, rgb(79 244 255), rgb(69 95 255), rgb(235 78 255)) border-box",
    boxShadow:
      "0 34px 82px rgb(0 0 0 / 67%), -17px -11px 42px rgb(40 230 255 / 9%), 18px 19px 46px rgb(213 46 255 / 12%), inset 0 2px 0 rgb(221 255 255 / 16%), inset 0 -22px 36px rgb(26 4 61 / 38%)",
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
    id: "biomorphic-orbitarium",
    title: "Biomorphic Orbitarium",
    short: "Floating capsules and spheres across a split-light field.",
    description:
      "Large gradient bodies, liquid capsules, micro-dot registries, and a two-color horizon recreate the reference’s spatial depth without relying on an image asset.",
    border: 10,
    padding: 32,
    radius: 39,
    background:
      "radial-gradient(ellipse at 51% 53%, rgb(2 5 21 / 88%) 0 17%, rgb(3 8 28 / 52%) 34%, transparent 59%) content-box, radial-gradient(circle, rgb(239 255 255 / 28%) 0 1px, transparent 1.5px) 0 0 / 11px 11px content-box, radial-gradient(circle at 91% 21%, rgb(227 255 250 / 82%) 0 2%, rgb(63 250 220 / 78%) 9%, rgb(58 111 255 / 84%) 23%, rgb(194 46 255 / 90%) 38%, transparent 39%) content-box, radial-gradient(ellipse at 13% 78%, rgb(85 255 215 / 62%) 0 7%, rgb(70 112 255 / 78%) 19%, rgb(205 45 249 / 88%) 31%, transparent 32%) content-box, radial-gradient(circle at 74% 77%, rgb(204 255 246 / 80%) 0 2%, rgb(46 234 219 / 76%) 8%, rgb(91 92 255 / 82%) 17%, rgb(181 44 247 / 88%) 25%, transparent 26%) content-box, radial-gradient(circle at 53% 2%, rgb(236 255 255 / 78%) 0 1%, rgb(75 244 219 / 74%) 7%, rgb(91 102 255 / 80%) 14%, transparent 15%) content-box, linear-gradient(90deg, rgb(41 246 214 / 56%) 0%, rgb(37 127 231 / 38%) 37%, rgb(99 58 225 / 44%) 62%, rgb(201 45 255 / 58%) 100%) padding-box, radial-gradient(ellipse at 8% 58%, rgb(46 255 216 / 48%), transparent 44%) padding-box, linear-gradient(145deg, rgb(16 79 112), rgb(42 51 167) 48%, rgb(120 25 197)) padding-box, repeating-conic-gradient(from 4deg at 50% 50%, rgb(120 255 231 / 82%) 0deg 2deg, rgb(15 29 85) 2deg 10deg, rgb(129 99 255 / 74%) 10deg 14deg, rgb(44 15 91) 14deg 24deg, rgb(255 101 226 / 70%) 24deg 27deg, rgb(20 10 58) 27deg 39deg) border-box, linear-gradient(116deg, rgb(88 255 222), rgb(58 116 255), rgb(207 56 255)) border-box",
    boxShadow:
      "0 38px 86px rgb(0 0 0 / 70%), -19px 12px 48px rgb(45 244 216 / 12%), 22px 22px 52px rgb(178 42 255 / 15%), inset 0 2px 0 rgb(231 255 251 / 19%), inset 0 -24px 40px rgb(29 5 67 / 38%)",
    tags: ["biomorphic", "split field", "liquid depth"],
  },
  {
    id: "contour-vault",
    title: "Sculpted Contour Vault",
    short: "Paper-cut strata with directional depth and color.",
    description:
      "Nested organic landforms are built as individually shaded hard-stop strata; a secondary violet formation and recessed survey lines keep the field asymmetric and dimensional.",
    border: 11,
    padding: 31,
    radius: 46,
    background:
      "radial-gradient(ellipse at 51% 54%, rgb(2 7 20 / 76%) 0 16%, rgb(4 10 28 / 32%) 34%, transparent 56%) content-box, repeating-radial-gradient(ellipse at 28% 66%, transparent 0 25px, rgb(221 255 249 / 11%) 26px 28px, transparent 29px 48px) content-box, radial-gradient(ellipse at 29% 67%, rgb(9 20 49) 0 13%, rgb(33 57 103) 13.5%, transparent 14.5%) padding-box, radial-gradient(ellipse at 29% 67%, rgb(37 68 118) 0 23%, rgb(28 47 91) 23.5%, transparent 24.7%) padding-box, radial-gradient(ellipse at 29% 67%, rgb(45 86 136) 0 34%, rgb(32 53 104) 34.5%, transparent 35.8%) padding-box, radial-gradient(ellipse at 29% 67%, rgb(60 115 149) 0 46%, rgb(35 65 111) 46.5%, transparent 47.8%) padding-box, radial-gradient(ellipse at 29% 67%, rgb(66 148 151) 0 59%, rgb(43 88 126) 59.5%, transparent 60.8%) padding-box, radial-gradient(ellipse at 29% 67%, rgb(78 184 155) 0 73%, rgb(48 116 137) 73.5%, transparent 74.8%) padding-box, radial-gradient(ellipse at 109% -11%, rgb(88 16 175) 0 20%, rgb(61 22 135) 20.5%, transparent 21.8%) padding-box, radial-gradient(ellipse at 108% -10%, rgb(113 25 218) 0 34%, rgb(68 30 156) 34.5%, transparent 35.8%) padding-box, linear-gradient(132deg, rgb(65 177 158), rgb(44 92 145) 54%, rgb(76 25 165)) padding-box, repeating-radial-gradient(ellipse at 28% 68%, rgb(111 255 217 / 74%) 0 5px, rgb(25 56 93) 5px 18px, rgb(129 86 255 / 64%) 18px 23px, rgb(22 28 72) 23px 38px) border-box",
    boxShadow:
      "0 40px 88px rgb(0 0 0 / 72%), -20px -10px 48px rgb(73 230 190 / 12%), 22px 24px 54px rgb(87 25 190 / 15%), inset 0 2px 0 rgb(220 255 248 / 18%), inset 14px 16px 26px rgb(4 16 42 / 28%), inset -18px -20px 34px rgb(28 5 69 / 34%)",
    tags: ["hard-stop strata", "paper cut", "directional depth"],
  },
  {
    id: "halftone-furnace",
    title: "Chromatic Halftone Furnace",
    short: "A spectral dot field emerging from kiln-black depth.",
    description:
      "A true knockout-dot mask exposes a teal-to-coral-to-gold thermal wash, with a top fade, dense perimeter pixels, and hot cast shadows controlling the depth.",
    border: 9,
    padding: 30,
    radius: 37,
    background:
      "radial-gradient(ellipse at 50% 55%, rgb(2 4 10 / 92%) 0 17%, rgb(3 5 12 / 62%) 34%, transparent 58%) content-box, linear-gradient(180deg, rgb(1 2 6 / 98%) 0%, rgb(1 2 6 / 72%) 20%, transparent 48%, rgb(1 2 6 / 12%) 82%, rgb(1 2 6 / 58%) 100%) padding-box, radial-gradient(circle at 5.5px 5.5px, transparent 0 2.5px, rgb(1 3 7 / 98%) 2.9px 5.5px) 0 0 / 11px 11px padding-box, linear-gradient(90deg, rgb(58 249 225) 0%, rgb(119 196 194) 24%, rgb(238 106 126) 54%, rgb(255 161 104) 76%, rgb(255 224 101) 100%) padding-box, radial-gradient(ellipse at 86% 72%, rgb(255 219 103 / 44%), transparent 45%) padding-box, radial-gradient(circle at 4.5px 4.5px, transparent 0 1.8px, rgb(2 3 7 / 100%) 2.2px 4.5px) 0 0 / 9px 9px border-box, linear-gradient(90deg, rgb(67 255 227), rgb(243 99 137) 55%, rgb(255 222 104)) border-box",
    boxShadow:
      "0 38px 86px rgb(0 0 0 / 72%), -18px 18px 42px rgb(49 229 206 / 10%), 22px 21px 48px rgb(255 119 92 / 15%), 0 0 38px rgb(255 210 92 / 8%), inset 0 2px 0 rgb(255 244 211 / 14%), inset 0 -22px 38px rgb(33 5 13 / 46%)",
    tags: ["knockout dots", "thermal spectrum", "pixel rim"],
  },
  {
    id: "sphere-registry",
    title: "Parallax Sphere Registry",
    short: "Suspended gradient bodies with offset hatch shadows.",
    description:
      "Five independently lit spheres float over cyan line shadows and tiny registration points, while the padding field carries the reference’s saturated blue-violet atmosphere.",
    border: 10,
    padding: 30,
    radius: 38,
    background:
      "radial-gradient(ellipse at 50% 53%, rgb(3 5 24 / 90%) 0 16%, rgb(8 8 38 / 51%) 34%, transparent 59%) content-box, radial-gradient(circle, rgb(225 255 255 / 38%) 0 1px, transparent 1.4px) 0 0 / 21px 21px content-box, radial-gradient(circle at 52% 57%, rgb(226 255 255 / 82%) 0 2%, rgb(71 244 230 / 84%) 8%, rgb(61 112 255 / 91%) 23%, rgb(189 39 246 / 94%) 36%, rgb(19 17 91 / 72%) 42%, transparent 43%) padding-box, radial-gradient(circle at 15% 15%, rgb(221 255 252 / 78%) 0 1%, rgb(46 224 236 / 80%) 5%, rgb(58 107 255 / 90%) 13%, rgb(162 35 244 / 92%) 21%, transparent 22%) padding-box, radial-gradient(circle at 86% 8%, rgb(242 244 255 / 72%) 0 1%, rgb(79 207 255 / 76%) 5%, rgb(85 91 255 / 88%) 12%, rgb(216 42 246 / 90%) 19%, transparent 20%) padding-box, radial-gradient(circle at 91% 64%, rgb(222 255 253 / 72%) 0 1%, rgb(55 230 224 / 78%) 4%, rgb(66 101 255 / 88%) 10%, rgb(181 39 247 / 91%) 16%, transparent 17%) padding-box, radial-gradient(circle at 11% 98%, rgb(89 248 231 / 68%) 0 3%, rgb(72 107 255 / 82%) 10%, rgb(178 39 238 / 88%) 17%, transparent 18%) padding-box, repeating-linear-gradient(164deg, transparent 0 6px, rgb(81 240 255 / 35%) 6px 8px, transparent 8px 15px) padding-box, repeating-linear-gradient(36deg, transparent 0 23px, rgb(232 255 255 / 9%) 23px 24px, transparent 24px 46px) padding-box, linear-gradient(118deg, rgb(17 115 235), rgb(67 55 225) 48%, rgb(153 28 225)) padding-box, repeating-conic-gradient(from 7deg at 50% 50%, rgb(103 250 255 / 78%) 0deg 2deg, rgb(17 23 82) 2deg 11deg, rgb(119 96 255 / 70%) 11deg 15deg, rgb(36 13 90) 15deg 26deg, rgb(242 85 255 / 66%) 26deg 29deg, rgb(24 11 63) 29deg 42deg) border-box, linear-gradient(115deg, rgb(79 236 255), rgb(75 105 255), rgb(221 72 255)) border-box",
    boxShadow:
      "0 39px 88px rgb(0 0 0 / 70%), -22px -9px 48px rgb(52 225 255 / 13%), 24px 23px 54px rgb(181 36 247 / 17%), inset 0 2px 0 rgb(232 255 255 / 18%), inset 0 -23px 40px rgb(35 4 81 / 42%)",
    tags: ["gradient spheres", "hatch shadows", "parallax field"],
  },
  {
    id: "particle-vortex",
    title: "Particle Vortex Lattice",
    short: "A point-cloud tunnel with rotating color currents.",
    description:
      "A knockout lattice reveals a rotating magenta-violet field beneath it; radial current lines, a dark aperture, and counter-rotating perimeter ticks create a dense particle tunnel.",
    border: 11,
    padding: 28,
    radius: 40,
    background:
      "radial-gradient(circle at 50% 52%, rgb(7 3 32 / 98%) 0 8%, rgb(35 8 91 / 82%) 15%, transparent 28%) content-box, repeating-radial-gradient(circle at 50% 52%, transparent 0 12px, rgb(255 100 250 / 28%) 13px 15px, transparent 16px 29px, rgb(119 86 255 / 22%) 30px 33px, transparent 34px 48px) content-box, radial-gradient(circle at 4.5px 5.5px, transparent 0 1.9px, rgb(5 2 25 / 96%) 2.4px 5px) 0 0 / 9px 11px content-box, repeating-conic-gradient(from 3deg at 50% 52%, rgb(255 87 243) 0deg 3deg, rgb(112 61 255) 3deg 8deg, rgb(61 85 255) 8deg 13deg, rgb(215 48 248) 13deg 19deg) content-box, radial-gradient(circle at 50% 52%, rgb(255 53 232 / 76%) 0 8%, rgb(108 48 255 / 54%) 30%, rgb(29 22 112 / 18%) 58%, transparent 78%) content-box, linear-gradient(145deg, rgb(25 9 74), rgb(8 5 36)) content-box, radial-gradient(circle at 5px 5px, transparent 0 2px, rgb(7 3 30 / 96%) 2.5px 5px) 0 0 / 10px 10px padding-box, conic-gradient(from 120deg at 50% 50%, rgb(243 52 246), rgb(78 76 255), rgb(27 143 255), rgb(195 45 250), rgb(243 52 246)) padding-box, repeating-radial-gradient(circle at 50% 50%, rgb(239 184 255 / 10%) 0 2px, transparent 2px 16px) padding-box, repeating-conic-gradient(from 0deg at 50% 50%, rgb(255 102 244 / 78%) 0deg 2deg, rgb(31 13 88) 2deg 10deg, rgb(93 106 255 / 72%) 10deg 14deg, rgb(22 12 69) 14deg 25deg) border-box, linear-gradient(135deg, rgb(245 78 255), rgb(67 108 255), rgb(168 50 245)) border-box",
    boxShadow:
      "0 40px 90px rgb(0 0 0 / 74%), 0 0 52px rgb(213 44 255 / 16%), -15px -9px 42px rgb(75 100 255 / 10%), 18px 24px 46px rgb(255 46 218 / 12%), inset 0 2px 0 rgb(255 220 254 / 17%), inset 0 -24px 42px rgb(15 3 55 / 48%)",
    tags: ["point cloud", "vortex aperture", "counter rotation"],
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
  {
    id: "verdigris-fin-cathedral",
    title: "Verdigris Fin Cathedral",
    short: "Luminous vertical fins falling into black glass.",
    description:
      "Deep extruded ribs use separate highlight, face, and shadow stops; an overhead mint wash, diagonal refraction, and a cast lower shadow turn the reference’s bars into architectural depth.",
    border: 10,
    padding: 32,
    radius: 34,
    background:
      "radial-gradient(ellipse at 50% 52%, rgb(1 7 12 / 86%) 0 17%, rgb(2 11 15 / 48%) 34%, transparent 58%) content-box, linear-gradient(180deg, rgb(210 255 209 / 46%) 0%, rgb(76 255 208 / 18%) 20%, transparent 43%, rgb(0 3 5 / 55%) 81%, rgb(0 1 2 / 88%) 100%) padding-box, repeating-linear-gradient(90deg, rgb(203 255 224 / 72%) 0 1px, rgb(74 245 202 / 58%) 1px 5px, rgb(11 77 71 / 62%) 5px 9px, rgb(1 8 11 / 96%) 9px 20px, rgb(49 174 154 / 38%) 20px 23px, rgb(1 7 10 / 98%) 23px 29px) padding-box, linear-gradient(126deg, rgb(255 255 194 / 25%) 0%, transparent 31%, rgb(54 255 212 / 18%) 52%, transparent 72%, rgb(79 226 255 / 17%) 100%) padding-box, radial-gradient(ellipse at 18% -8%, rgb(242 255 189 / 46%), transparent 45%) padding-box, linear-gradient(145deg, rgb(55 139 111), rgb(8 58 59) 45%, rgb(1 10 16)) padding-box, repeating-linear-gradient(90deg, rgb(203 255 221 / 86%) 0 2px, rgb(22 113 98) 2px 8px, rgb(2 12 16) 8px 19px, rgb(61 225 190 / 64%) 19px 23px, rgb(1 8 12) 23px 31px) border-box, linear-gradient(110deg, rgb(238 255 181), rgb(54 242 195), rgb(20 138 141)) border-box",
    boxShadow:
      "20px 35px 64px rgb(0 0 0 / 74%), 28px 26px 36px rgb(0 21 19 / 44%), -18px -13px 46px rgb(220 255 173 / 12%), 0 0 44px rgb(54 245 202 / 11%), inset 0 2px 0 rgb(239 255 220 / 19%), inset 0 -28px 42px rgb(0 4 7 / 62%)",
    tags: ["extruded fins", "verdigris light", "cast shadow"],
  },
  {
    id: "crossbeam-parallax",
    title: "Crossbeam Parallax Engine",
    short: "Opposing cyan and magenta beams around a black core.",
    description:
      "Hard conic wedges create the reference’s bow-tie silhouette, while radial bloom, coordinate nodes, and a second padding-box beam system add scale and instrument detail.",
    border: 9,
    padding: 31,
    radius: 41,
    background:
      "radial-gradient(ellipse at 50% 52%, rgb(0 2 8 / 98%) 0 11%, rgb(2 5 13 / 84%) 23%, transparent 44%) content-box, conic-gradient(from 0deg at 50% 52%, transparent 0 18%, rgb(177 248 255 / 72%) 18% 19%, rgb(58 225 255 / 92%) 19% 31%, rgb(187 248 255 / 56%) 31% 32%, transparent 32% 68%, rgb(255 174 231 / 58%) 68% 69%, rgb(255 71 203 / 92%) 69% 81%, rgb(255 185 233 / 66%) 81% 82%, transparent 82% 100%) content-box, conic-gradient(from 0deg at 50% 52%, transparent 0 14%, rgb(45 197 255 / 26%) 14% 36%, transparent 36% 64%, rgb(255 49 194 / 28%) 64% 86%, transparent 86%) content-box, linear-gradient(180deg, transparent 0 49.2%, rgb(219 250 255 / 22%) 49.2% 50%, rgb(255 195 234 / 20%) 50% 50.8%, transparent 50.8%) content-box, radial-gradient(ellipse at 93% 51%, rgb(66 223 255 / 58%), transparent 37%) content-box, radial-gradient(ellipse at 7% 53%, rgb(255 66 190 / 58%), transparent 37%) content-box, radial-gradient(circle at 4px 4px, rgb(228 255 255 / 36%) 0 1px, transparent 1.4px) 0 0 / 18px 18px content-box, linear-gradient(145deg, rgb(5 16 29), rgb(1 3 9) 48%, rgb(22 4 25)) content-box, conic-gradient(from 0deg at 50% 50%, transparent 0 17%, rgb(67 225 255 / 48%) 17% 33%, transparent 33% 67%, rgb(255 75 200 / 45%) 67% 83%, transparent 83%) padding-box, repeating-linear-gradient(132deg, transparent 0 13px, rgb(125 231 255 / 13%) 13px 15px, transparent 15px 31px, rgb(255 116 215 / 11%) 31px 33px, transparent 33px 51px) padding-box, linear-gradient(122deg, rgb(10 78 112), rgb(21 31 102) 50%, rgb(105 18 92)) padding-box, repeating-conic-gradient(from 1deg at 50% 50%, rgb(86 231 255 / 78%) 0deg 3deg, rgb(7 18 42) 3deg 13deg, rgb(255 87 205 / 72%) 13deg 17deg, rgb(27 7 35) 17deg 29deg) border-box, linear-gradient(118deg, rgb(71 227 255), rgb(62 95 255), rgb(255 75 207)) border-box",
    boxShadow:
      "0 39px 88px rgb(0 0 0 / 72%), -24px 5px 48px rgb(255 58 188 / 13%), 24px 5px 48px rgb(54 218 255 / 14%), 0 0 42px rgb(107 96 255 / 8%), inset 0 2px 0 rgb(225 250 255 / 17%), inset 0 -23px 40px rgb(21 2 32 / 48%)",
    tags: ["hard wedges", "dual bloom", "coordinate nodes"],
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
