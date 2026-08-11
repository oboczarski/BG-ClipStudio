export const FONT_GROUPS = [
  {
    id: "handwritten",
    label: "Cursive / Handwritten",
    shortLabel: "Handwritten",
    description:
      "Expressive scripts, brush lettering, signatures, and informal hand-drawn voices.",
  },
  {
    id: "display",
    label: "Display",
    shortLabel: "Display",
    description:
      "Architectural, experimental, decorative, and high-impact faces built to be noticed.",
  },
  {
    id: "basic",
    label: "Basic",
    shortLabel: "Basic",
    description:
      "Versatile sans, serif, and variable workhorses for interfaces, editorial systems, and body copy.",
  },
];

function fallbackFor(category) {
  if (category === "Handwriting") return "cursive";
  if (category === "Serif") return "serif";
  if (category === "Monospace") return "monospace";
  return "sans-serif";
}

function catalogFont(
  family,
  groups,
  {
    category,
    weights = [400],
    italic = false,
    axes = [],
    designers = [],
    brand = false,
    openSource = true,
    colorCapabilities = [],
    catalogStatus = "catalog",
    licenseNote = "",
    arrowFont = false,
    verticalArrowOnly = false,
  },
) {
  return {
    family,
    groups: Array.isArray(groups) ? groups : [groups],
    category,
    fallback: fallbackFor(category),
    weights,
    italic,
    axes,
    designers,
    brand,
    openSource,
    colorCapabilities,
    catalogStatus,
    licenseNote,
    arrowFont,
    verticalArrowOnly,
  };
}

const weightAxis = (min, max, defaultValue = 400) => ({
  tag: "wght",
  min,
  max,
  defaultValue,
});

export const fontCatalog = [
  // 01 · Cursive / Handwritten
  catalogFont("Permanent Marker", "handwritten", {
    category: "Handwriting",
    designers: ["Font Diner"],
  }),
  catalogFont("Playwrite NZ Basic", "handwritten", {
    category: "Handwriting",
    weights: [100, 200, 300, 400],
    axes: [weightAxis(100, 400)],
    designers: ["TypeTogether", "Veronika Burian", "José Scaglione"],
  }),
  catalogFont("Comforter", "handwritten", {
    category: "Handwriting",
    designers: ["Robert Leuschke"],
  }),
  catalogFont("Bonheur Royale", "handwritten", {
    category: "Handwriting",
    designers: ["Robert Leuschke"],
  }),
  catalogFont("Splash", "handwritten", {
    category: "Handwriting",
    designers: ["Robert Leuschke"],
  }),
  catalogFont("Arizonia", "handwritten", {
    category: "Handwriting",
    designers: ["Robert Leuschke"],
  }),
  catalogFont("Allura", "handwritten", {
    category: "Handwriting",
    designers: ["Robert Leuschke"],
  }),
  catalogFont("Babylonica", "handwritten", {
    category: "Handwriting",
    designers: ["Robert Leuschke"],
  }),
  catalogFont("Kolker Brush", "handwritten", {
    category: "Handwriting",
    designers: ["Robert Leuschke"],
  }),
  catalogFont("Whisper", "handwritten", {
    category: "Handwriting",
    designers: ["Robert Leuschke"],
  }),
  catalogFont("WindSong", "handwritten", {
    category: "Handwriting",
    weights: [400, 500],
    designers: ["Robert Leuschke"],
  }),
  catalogFont("Birthstone", "handwritten", {
    category: "Handwriting",
    designers: ["Robert Leuschke"],
  }),
  catalogFont("Vujahday Script", "handwritten", {
    category: "Handwriting",
    designers: ["Robert Leuschke"],
  }),
  catalogFont("Island Moments", "handwritten", {
    category: "Handwriting",
    designers: ["Robert Leuschke"],
  }),
  catalogFont("Smooch", "handwritten", {
    category: "Handwriting",
    designers: ["Robert Leuschke"],
  }),
  catalogFont("Mr Dafoe", "handwritten", {
    category: "Handwriting",
    designers: ["Sudtipos"],
  }),
  catalogFont("Qwitcher Grypen", "handwritten", {
    category: "Handwriting",
    weights: [400, 700],
    designers: ["Robert Leuschke"],
  }),
  catalogFont("The Nautigal", "handwritten", {
    category: "Handwriting",
    weights: [400, 700],
    designers: ["Robert Leuschke"],
  }),
  catalogFont("Caramel", "handwritten", {
    category: "Handwriting",
    designers: ["Robert Leuschke"],
  }),
  catalogFont("Mrs Sheppards", "handwritten", {
    category: "Handwriting",
    designers: ["Sudtipos"],
  }),
  catalogFont("Yellowtail", "handwritten", {
    category: "Handwriting",
    designers: ["Astigmatic"],
  }),
  catalogFont("Rock Salt", "handwritten", {
    category: "Handwriting",
    designers: ["Sideshow"],
  }),
  catalogFont("Water Brush", "handwritten", {
    category: "Handwriting",
    designers: ["Robert Leuschke"],
  }),
  catalogFont("Caveat", "handwritten", {
    category: "Handwriting",
    weights: [400, 500, 600, 700],
    axes: [weightAxis(400, 700)],
    designers: ["Impallari Type"],
  }),
  catalogFont("Kalam", "handwritten", {
    category: "Handwriting",
    weights: [300, 400, 700],
    designers: ["Indian Type Foundry"],
  }),
  catalogFont("RocknRoll One", "handwritten", {
    category: "Sans Serif",
    designers: ["Fontworks Inc."],
    arrowFont: true,
  }),
  catalogFont("Yusei Magic", "handwritten", {
    category: "Sans Serif",
    designers: ["Tanukizamurai"],
    arrowFont: true,
  }),
  catalogFont("Sedgwick Ave Display", "handwritten", {
    category: "Handwriting",
    designers: ["Pedro Vergani", "Kevin Burke"],
    arrowFont: true,
    verticalArrowOnly: true,
  }),
  catalogFont("Sedgwick Ave", "handwritten", {
    category: "Handwriting",
    designers: ["Pedro Vergani", "Kevin Burke"],
    arrowFont: true,
    verticalArrowOnly: true,
  }),
  catalogFont("Dekko", "handwritten", {
    category: "Handwriting",
    designers: ["Sorkin Type"],
    arrowFont: true,
    verticalArrowOnly: true,
  }),
  catalogFont("Story Script", "handwritten", {
    category: "Sans Serif",
    designers: ["Lana Roulhac", "Ben Buysse"],
    arrowFont: true,
    verticalArrowOnly: true,
  }),
  catalogFont("Farsan", "handwritten", {
    category: "Display",
    designers: ["Pooja Saxena"],
    arrowFont: true,
    verticalArrowOnly: true,
  }),
  catalogFont("Hachi Maru Pop", "handwritten", {
    category: "Handwriting",
    designers: ["Nonty"],
    arrowFont: true,
  }),

  // 02 · Display
  catalogFont("Bruno Ace SC", "display", {
    category: "Display",
    designers: ["Astigmatic"],
  }),
  catalogFont("Orbitron", "display", {
    category: "Sans Serif",
    weights: [400, 500, 600, 700, 800, 900],
    axes: [weightAxis(400, 900)],
    designers: ["Matt McInerney"],
  }),
  catalogFont("Audiowide", "display", {
    category: "Display",
    designers: ["Astigmatic"],
  }),
  catalogFont("MuseoModerno", "display", {
    category: "Display",
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    italic: true,
    axes: [weightAxis(100, 900)],
    designers: ["Omnibus-Type"],
  }),
  catalogFont("Michroma", "display", {
    category: "Sans Serif",
    designers: ["Vernon Adams"],
  }),
  catalogFont("Zen Dots", "display", {
    category: "Display",
    designers: ["Yoshimichi Ohira"],
  }),
  catalogFont("Syncopate", "display", {
    category: "Sans Serif",
    weights: [400, 700],
    designers: ["Astigmatic"],
  }),
  catalogFont("Atomic Age", "display", {
    category: "Display",
    designers: ["James Grieshaber"],
  }),
  catalogFont("Tourney", "display", {
    category: "Display",
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    italic: true,
    axes: [
      { tag: "wdth", min: 75, max: 125, defaultValue: 100 },
      weightAxis(100, 900),
    ],
    designers: ["Tyler Finck", "ETC"],
  }),
  catalogFont("Monoton", "display", {
    category: "Display",
    designers: ["Vernon Adams"],
  }),
  catalogFont("Akronim", "display", {
    category: "Display",
    designers: ["Grzegorz Klimczewski"],
  }),
  catalogFont("Bungee Outline", "display", {
    category: "Display",
    designers: ["David Jonathan Ross"],
  }),
  catalogFont("Bungee Shade", "display", {
    category: "Display",
    designers: ["David Jonathan Ross"],
  }),
  catalogFont("Momo Trust Display", "display", {
    category: "Sans Serif",
    designers: ["Type Associates"],
    arrowFont: true,
    verticalArrowOnly: true,
  }),
  catalogFont("Righteous", "display", {
    category: "Display",
    designers: ["Astigmatic"],
  }),
  catalogFont("Rubik Doodle Shadow", "display", {
    category: "Display",
    designers: ["Luke Prowse"],
  }),
  catalogFont("Syne", ["display", "basic"], {
    category: "Sans Serif",
    weights: [400, 500, 600, 700, 800],
    axes: [weightAxis(400, 800)],
    designers: [
      "Bonjour Monde",
      "Lucas Descroix",
      "George Triantafyllakos",
    ],
  }),
  catalogFont("Unbounded", ["display", "basic"], {
    category: "Sans Serif",
    weights: [200, 300, 400, 500, 600, 700, 800, 900],
    axes: [weightAxis(200, 900)],
  }),
  catalogFont("Chakra Petch", "display", {
    category: "Sans Serif",
    weights: [300, 400, 500, 600, 700],
    italic: true,
    designers: ["Cadson Demak"],
  }),
  catalogFont("Nabla", "display", {
    category: "Display",
    axes: [
      { tag: "EDPT", min: 0, max: 200, defaultValue: 100 },
      { tag: "EHLT", min: 0, max: 24, defaultValue: 12 },
    ],
    designers: ["Arthur Reinders Folmer", "Just van Rossum"],
    colorCapabilities: ["COLRv1", "OpenType SVG"],
  }),
  catalogFont("Rubik Glitch", "display", {
    category: "Display",
    designers: ["Luke Prowse"],
  }),
  catalogFont("Monofett", "display", {
    category: "Monospace",
    designers: ["Vernon Adams"],
  }),
  catalogFont("Mochiy Pop One", "display", {
    category: "Sans Serif",
    designers: ["FONTDASU"],
    arrowFont: true,
  }),
  catalogFont("Rampart One", "display", {
    category: "Display",
    designers: ["Fontworks Inc."],
    arrowFont: true,
  }),
  catalogFont("Honk", "display", {
    category: "Display",
    axes: [
      { tag: "MORF", min: 0, max: 45, defaultValue: 15 },
      { tag: "SHLN", min: 0, max: 100, defaultValue: 50 },
    ],
    designers: ["Ek Type"],
    colorCapabilities: ["COLRV1"],
    arrowFont: true,
  }),
  catalogFont("Bungee", "display", {
    category: "Display",
    designers: ["David Jonathan Ross"],
    arrowFont: true,
    verticalArrowOnly: true,
  }),
  catalogFont("Stack Sans Notch", "display", {
    category: "Sans Serif",
    weights: [200, 300, 400, 500, 600, 700],
    axes: [weightAxis(200, 700)],
    designers: ["Koto"],
    arrowFont: true,
    verticalArrowOnly: true,
  }),
  catalogFont("Alumni Sans Pinstripe", "display", {
    category: "Sans Serif",
    italic: true,
    designers: ["Robert Leuschke"],
    arrowFont: true,
    verticalArrowOnly: true,
  }),
  catalogFont("Bungee Hairline", "display", {
    category: "Display",
    designers: ["David Jonathan Ross"],
    arrowFont: true,
    verticalArrowOnly: true,
  }),
  catalogFont("Zalando Sans SemiExpanded", "display", {
    category: "Sans Serif",
    weights: [200, 300, 400, 500, 600, 700, 800, 900],
    italic: true,
    axes: [weightAxis(200, 900)],
    designers: ["Jakob Ekelund", "KH Type", "Zalando"],
    arrowFont: true,
    verticalArrowOnly: true,
  }),
  catalogFont("Tilt Prism", "display", {
    category: "Display",
    axes: [
      { tag: "XROT", min: -45, max: 45, defaultValue: 0 },
      { tag: "YROT", min: -45, max: 45, defaultValue: 0 },
    ],
    designers: ["Andy Clymer"],
    arrowFont: true,
  }),
  catalogFont("Danfo", "display", {
    category: "Serif",
    axes: [{ tag: "ELSH", min: 0, max: 100, defaultValue: 0 }],
    designers: [
      "Afrotype",
      "Seyi Olusanya",
      "Eyiyemi Adegbite",
      "David Udoh",
      "Mirko Velimirović",
    ],
    arrowFont: true,
    verticalArrowOnly: true,
  }),
  catalogFont("Kumar One Outline", "display", {
    category: "Display",
    designers: ["Indian Type Foundry"],
  }),
  catalogFont("Bagel Fat One", "display", {
    category: "Display",
    designers: ["Kyungwon Kim", "JAMO"],
    arrowFont: true,
  }),
  catalogFont("Train One", "display", {
    category: "Display",
    designers: ["Fontworks Inc."],
    arrowFont: true,
  }),
  catalogFont("Potta One", "display", {
    category: "Display",
    designers: ["Font Zone 108"],
    arrowFont: true,
  }),
  catalogFont("Dela Gothic One", "display", {
    category: "Display",
    designers: ["artakana"],
    arrowFont: true,
  }),
  catalogFont("Moirai One", "display", {
    category: "Display",
    designers: ["Jiyeon Park", "JAMO"],
    arrowFont: true,
  }),
  catalogFont("Special Gothic Expanded One", "display", {
    category: "Sans Serif",
    designers: ["Alistair McCready"],
    arrowFont: true,
    verticalArrowOnly: true,
  }),
  catalogFont("Barriecito", "display", {
    category: "Display",
    designers: ["Omnibus-Type"],
    arrowFont: true,
    verticalArrowOnly: true,
  }),
  catalogFont("WDXL Lubrifont JP N", "display", {
    category: "Sans Serif",
    designers: ["NightFurySL2001"],
    arrowFont: true,
  }),
  catalogFont("Stick", "display", {
    category: "Sans Serif",
    designers: ["Fontworks Inc."],
    arrowFont: true,
  }),

  // 03 · Basic
  catalogFont("Fraunces", "basic", {
    category: "Serif",
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    italic: true,
    axes: [
      { tag: "SOFT", min: 0, max: 100, defaultValue: 0 },
      { tag: "WONK", min: 0, max: 1, defaultValue: 0 },
      { tag: "opsz", min: 9, max: 144, defaultValue: 14 },
      weightAxis(100, 900),
    ],
    designers: ["Undercase Type", "Phaedra Charles", "Flavia Zimbardi"],
  }),
  catalogFont("Google Sans", "basic", {
    category: "Sans Serif",
    weights: [400, 500, 600, 700],
    italic: true,
    axes: [
      { tag: "GRAD", min: -50, max: 200, defaultValue: 0 },
      { tag: "opsz", min: 17, max: 18, defaultValue: 18 },
      weightAxis(400, 700),
    ],
    designers: ["Google"],
    brand: true,
  }),
  catalogFont("Google Sans Flex", "basic", {
    category: "Sans Serif",
    weights: [1, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    axes: [
      { tag: "GRAD", min: 0, max: 100, defaultValue: 0 },
      { tag: "ROND", min: 0, max: 100, defaultValue: 0 },
      { tag: "opsz", min: 6, max: 144, defaultValue: 18 },
      { tag: "slnt", min: -10, max: 0, defaultValue: 0 },
      { tag: "wdth", min: 25, max: 151, defaultValue: 100 },
      weightAxis(1, 1000),
    ],
    designers: ["Google"],
    brand: true,
  }),
  catalogFont("Product Sans", "basic", {
    category: "Sans Serif",
    weights: [100, 300, 400, 500, 700, 900],
    italic: true,
    designers: ["Google"],
    brand: true,
    openSource: false,
    catalogStatus: "api-only",
    licenseNote: "Google-restricted license",
  }),
  catalogFont("Quicksand", "basic", {
    category: "Sans Serif",
    weights: [300, 400, 500, 600, 700],
    axes: [weightAxis(300, 700)],
    designers: ["Andrew Paglinawan"],
  }),
  catalogFont("Avenir", "basic", {
    category: "Sans Serif",
    weights: [400, 700],
    designers: ["Adrian Frutiger"],
    openSource: false,
    catalogStatus: "api-only",
    licenseNote: "Public catalog metadata unavailable",
  }),
  catalogFont("Comfortaa", "basic", {
    category: "Display",
    weights: [300, 400, 500, 600, 700],
    axes: [weightAxis(300, 700)],
    designers: ["Johan Aakerlund"],
  }),
  catalogFont("Sora", "basic", {
    category: "Sans Serif",
    weights: [100, 200, 300, 400, 500, 600, 700, 800],
    axes: [weightAxis(100, 800)],
    designers: ["Jonathan Barnbrook", "Julián Moncada"],
  }),
  catalogFont("Outfit", "basic", {
    category: "Sans Serif",
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    axes: [weightAxis(100, 900)],
    designers: ["Smartsheet Inc", "Rodrigo Fuenzalida"],
  }),
  catalogFont("Instrument Sans", "basic", {
    category: "Sans Serif",
    weights: [400, 500, 600, 700],
    italic: true,
    axes: [
      { tag: "wdth", min: 75, max: 100, defaultValue: 100 },
      weightAxis(400, 700),
    ],
    designers: ["Rodrigo Fuenzalida", "Jordan Egstad"],
    arrowFont: true,
    verticalArrowOnly: true,
  }),
  catalogFont("Spline Sans", "basic", {
    category: "Sans Serif",
    weights: [300, 400, 500, 600, 700],
    axes: [weightAxis(300, 700)],
    designers: ["Eben Sorkin", "Mirko Velimirović"],
  }),
  catalogFont("Geologica", "basic", {
    category: "Sans Serif",
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    axes: [
      { tag: "CRSV", min: 0, max: 1, defaultValue: 0 },
      { tag: "SHRP", min: 0, max: 100, defaultValue: 0 },
      { tag: "slnt", min: -12, max: 0, defaultValue: 0 },
      weightAxis(100, 900),
    ],
    designers: ["Monokrom", "Sindre Bremnes", "Frode Helland"],
  }),
  catalogFont("Bricolage Grotesque", "basic", {
    category: "Sans Serif",
    weights: [200, 300, 400, 500, 600, 700, 800],
    axes: [
      { tag: "opsz", min: 12, max: 96, defaultValue: 14 },
      { tag: "wdth", min: 75, max: 100, defaultValue: 100 },
      weightAxis(200, 800),
    ],
    designers: ["Mathieu Triay"],
  }),
  catalogFont("Urbanist", "basic", {
    category: "Sans Serif",
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    italic: true,
    axes: [weightAxis(100, 900)],
    designers: ["Corey Hu"],
  }),
  catalogFont("Newsreader", "basic", {
    category: "Serif",
    weights: [200, 300, 400, 500, 600, 700, 800],
    italic: true,
    axes: [
      { tag: "opsz", min: 6, max: 72, defaultValue: 16 },
      weightAxis(200, 800),
    ],
    designers: ["Production Type"],
  }),
  catalogFont("Recursive", "basic", {
    category: "Sans Serif",
    weights: [300, 400, 500, 600, 700, 800, 900, 1000],
    axes: [
      { tag: "CASL", min: 0, max: 1, defaultValue: 0 },
      { tag: "CRSV", min: 0, max: 1, defaultValue: 0.5 },
      { tag: "MONO", min: 0, max: 1, defaultValue: 0 },
      { tag: "slnt", min: -15, max: 0, defaultValue: 0 },
      weightAxis(300, 1000),
    ],
    designers: ["Arrow Type", "Stephen Nixon"],
  }),
  catalogFont("LINE Seed JP", "basic", {
    category: "Sans Serif",
    weights: [100, 400, 700, 800],
    designers: ["LY Corporation", "Fontrix", "Fontworks"],
    arrowFont: true,
  }),
  catalogFont("Google Sans Code", "basic", {
    category: "Monospace",
    weights: [300, 400, 500, 600, 700, 800],
    italic: true,
    axes: [
      { tag: "MONO", min: 0, max: 1, defaultValue: 1 },
      weightAxis(300, 800),
    ],
    designers: ["Google", "Universal Thirst"],
    brand: true,
    arrowFont: true,
  }),
  catalogFont("IBM Plex Sans KR", "basic", {
    category: "Sans Serif",
    weights: [100, 200, 300, 400, 500, 600, 700],
    designers: ["Mike Abbink", "Bold Monday"],
    arrowFont: true,
  }),
  catalogFont("Pliant", "basic", {
    category: "Sans Serif",
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    italic: true,
    axes: [
      { tag: "wdth", min: 100, max: 125, defaultValue: 100 },
      weightAxis(100, 900),
    ],
    designers: ["Non Foundry", "Jona Saucedo"],
    arrowFont: true,
    verticalArrowOnly: true,
  }),
  catalogFont("Source Serif 4", "basic", {
    category: "Serif",
    weights: [200, 300, 400, 500, 600, 700, 800, 900],
    italic: true,
    axes: [
      { tag: "opsz", min: 8, max: 60, defaultValue: 14 },
      weightAxis(200, 900),
    ],
    designers: ["Frank Grießhammer"],
    arrowFont: true,
    verticalArrowOnly: true,
  }),
  catalogFont("Encode Sans SC", "basic", {
    category: "Sans Serif",
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    axes: [
      { tag: "wdth", min: 75, max: 125, defaultValue: 100 },
      weightAxis(100, 900),
    ],
    designers: ["Impallari Type", "Andres Torresi", "Jacques Le Bailly"],
    arrowFont: true,
    verticalArrowOnly: true,
  }),
  catalogFont("Brygada 1918", "basic", {
    category: "Serif",
    weights: [400, 500, 600, 700],
    italic: true,
    axes: [weightAxis(400, 700)],
    designers: [
      "Capitalics",
      "Mateusz Machalski",
      "Borys Kosmynka",
      "Ania Wieluńska",
      "Przemysław Hoffer",
    ],
    arrowFont: true,
    verticalArrowOnly: true,
  }),
  catalogFont("M PLUS Rounded 1c", "basic", {
    category: "Sans Serif",
    weights: [100, 300, 400, 500, 700, 800, 900],
    designers: ["Coji Morishita", "M+ Fonts Project"],
    arrowFont: true,
  }),
  catalogFont("Diphylleia", "basic", {
    category: "Serif",
    designers: ["Minha Hyung", "JAMO"],
    arrowFont: true,
  }),
  catalogFont("Murecho", "basic", {
    category: "Sans Serif",
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    axes: [weightAxis(100, 900)],
    designers: ["Neil Summerour"],
    arrowFont: true,
  }),
  catalogFont("Ysabeau Infant", "basic", {
    category: "Sans Serif",
    weights: [1, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    italic: true,
    axes: [weightAxis(1, 1000)],
    designers: ["Christian Thalmann"],
    arrowFont: true,
  }),
];

export function getFontGroup(groupId) {
  return FONT_GROUPS.find((group) => group.id === groupId);
}

export function fontBelongsToGroup(font, groupId) {
  return font.groups.includes(groupId);
}

export function getWeightAxis(font) {
  return font.axes.find((axis) => axis.tag === "wght");
}

export function getDefaultWeight(font) {
  const variableWeight = getWeightAxis(font);
  if (variableWeight) return variableWeight.defaultValue;
  if (font.weights.includes(400)) return 400;
  return font.weights[0];
}

export function fontSlug(family) {
  return family.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function formatAxisValue(value) {
  return Number.isInteger(value) ? String(value) : String(Number(value.toFixed(2)));
}

function familyQueryName(family) {
  return family.trim().replaceAll(" ", "+");
}

export function buildGoogleFontSpec(font) {
  const family = familyQueryName(font.family);
  const variableWeight = getWeightAxis(font);

  if (variableWeight) {
    const range = `${formatAxisValue(variableWeight.min)}..${formatAxisValue(variableWeight.max)}`;
    return font.italic
      ? `${family}:ital,wght@0,${range};1,${range}`
      : `${family}:wght@${range}`;
  }

  if (font.italic) {
    const tuples = [
      ...font.weights.map((weight) => `0,${weight}`),
      ...font.weights.map((weight) => `1,${weight}`),
    ];
    return `${family}:ital,wght@${tuples.join(";")}`;
  }

  if (font.weights.length > 1) {
    return `${family}:wght@${font.weights.join(";")}`;
  }

  return family;
}

export function buildGoogleFontUrl(font) {
  return `https://fonts.googleapis.com/css2?family=${buildGoogleFontSpec(font)}&display=swap`;
}

export function buildFontEmbedCode(font, weight, style) {
  const url = buildGoogleFontUrl(font).replaceAll("&", "&amp;");
  const licenseComment = font.licenseNote
    ? `<!-- ${font.family}: ${font.licenseNote}. Confirm usage terms for your project. -->\n`
    : "";
  const opticalSizing = font.axes.some((axis) => axis.tag === "opsz")
    ? "\n    font-optical-sizing: auto;"
    : "";

  return `${licenseComment}<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${url}" rel="stylesheet">

<style>
  .your-selector {
    font-family: "${font.family}", ${font.fallback};
    font-weight: ${weight};
    font-style: ${style};${opticalSizing}
  }
</style>`;
}

export function buildGoogleFontsPageUrl(font) {
  return `https://fonts.google.com/specimen/${familyQueryName(font.family)}`;
}
