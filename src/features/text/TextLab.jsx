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
];

function createSettings(preset, phrase = "SURFACE") {
  return {
    phrase,
    size: 96,
    tracking: -5,
    ...preset.defaults,
  };
}

function getTreatmentStyles(preset, settings, compact = false) {
  const base = {
    gridArea: "1 / 1",
    display: "block",
    fontFamily:
      '"Arial Black", "Helvetica Neue", Arial, ui-sans-serif, system-ui, sans-serif',
    fontSize: compact
      ? "clamp(2rem, 5vw, 3rem)"
      : `clamp(3rem, 9vw, ${settings.size}px)`,
    fontWeight: "950",
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
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    textShadow: preset.shadow(settings),
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
  const phrase = escapeHtml(settings.phrase);
  return `<span class="type-treatment">
  <span class="type-treatment__outline" aria-hidden="true">${phrase}</span>
  <span class="type-treatment__fill">${phrase}</span>
</span>

${styleObjectToRule(".type-treatment", styles.wrapper)}

${styleObjectToRule(
  ".type-treatment__outline,\n.type-treatment__fill",
  {
    gridArea: styles.fill.gridArea,
    display: styles.fill.display,
    fontFamily: styles.fill.fontFamily,
    fontSize: styles.fill.fontSize,
    fontWeight: styles.fill.fontWeight,
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
  WebkitBackgroundClip: styles.fill.WebkitBackgroundClip,
  backgroundClip: styles.fill.backgroundClip,
  textShadow: styles.fill.textShadow,
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

  return (
    <div className="tab-page text-lab">
      <section className="page-intro page-intro--text">
        <div>
          <span className="page-intro__eyebrow">Type can be a material</span>
          <h2>Eight treatments. One honest foundry.</h2>
        </div>
        <p>
          This lab has been rebuilt from zero around practical text systems:
          clipped gradients and patterns, dimensional shadow stacks, metallic stop
          compression, print registration, and accessible two-layer outlines.
        </p>
        <div className="page-intro__metrics">
          <div>
            <strong>8</strong>
            <span>distinct treatments</span>
          </div>
          <div>
            <strong>3</strong>
            <span>editable color stops</span>
          </div>
          <div>
            <strong>1:1</strong>
            <span>preview to code</span>
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
            <div className="type-stage">
              <div className="type-stage__register">
                <span>TYPE / MATERIAL</span>
                <small>{preset.name}</small>
              </div>
              <Treatment preset={preset} settings={settings} />
              <p>Editable foreground text remains real, selectable content.</p>
            </div>
            <CodePanel
              label={`${preset.name} · generated HTML + CSS`}
              language="HTML + CSS"
              code={code}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          kicker="02 · treatment library"
          title="Eight visual languages with meaningfully different mechanics."
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
                <div className={`text-technique__stage text-technique__stage--${item.id}`}>
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
