import { useState } from "react";
import CodePanel from "../../components/CodePanel";
import {
  ColorControl,
  RangeControl,
  SelectControl,
} from "../../components/Controls";
import SectionHeading from "../../components/SectionHeading";
import { rgb, styleObjectToRule } from "../../utils/css";

const origins = ["border-box", "padding-box", "content-box"];

const originRecipes = [
  {
    id: "corner-beacon",
    name: "Corner beacon",
    use: "Place an atmospheric highlight from a chosen box edge.",
    image: (accent) =>
      `radial-gradient(circle at center, ${rgb(accent, 0.9)} 0 7%, ${rgb(accent, 0.32)} 8% 28%, transparent 62%)`,
    texture:
      "repeating-linear-gradient(135deg, rgb(255 255 255 / 5%) 0 1px, transparent 1px 15px)",
    defaults: {
      origin: "content-box",
      clip: "content-box",
      x: 6,
      y: 8,
      size: 72,
    },
  },
  {
    id: "register-grid",
    name: "Register grid",
    use: "Anchor a technical grid to the content or padding coordinate system.",
    image: (accent) =>
      `repeating-linear-gradient(90deg, ${rgb(accent, 0.22)} 0 1px, transparent 1px 18px), repeating-linear-gradient(0deg, ${rgb(accent, 0.18)} 0 1px, transparent 1px 18px)`,
    texture:
      "radial-gradient(ellipse at 78% 18%, rgb(255 255 255 / 8%), transparent 42%)",
    defaults: {
      origin: "padding-box",
      clip: "padding-box",
      x: 50,
      y: 50,
      size: 78,
    },
  },
  {
    id: "edge-sheen",
    name: "Edge sheen",
    use: "Measure a directional reflective band from the outer frame or inner plate.",
    image: (accent) =>
      `linear-gradient(132deg, transparent 0 35%, ${rgb(accent, 0.45)} 46%, rgb(255 255 255 / 22%) 50%, ${rgb(accent, 0.2)} 54%, transparent 65%)`,
    texture:
      "repeating-linear-gradient(90deg, rgb(255 255 255 / 4%) 0 1px, transparent 1px 20px)",
    defaults: {
      origin: "border-box",
      clip: "border-box",
      x: 50,
      y: 50,
      size: 100,
    },
  },
  {
    id: "instrument-seal",
    name: "Instrument seal",
    use: "Position a self-contained radial instrument inside a protected content plate.",
    image: (accent) =>
      `repeating-conic-gradient(from 0deg at 50% 50%, ${rgb(accent, 0.64)} 0deg 3deg, transparent 3deg 15deg)`,
    texture:
      "radial-gradient(ellipse at 20% 10%, rgb(255 255 255 / 9%), transparent 40%)",
    defaults: {
      origin: "content-box",
      clip: "content-box",
      x: 50,
      y: 50,
      size: 62,
    },
  },
];

function getOriginStyle(settings, recipe) {
  const accentImage = recipe.image(settings.accent);
  return {
    border: `${settings.border}px solid transparent`,
    borderRadius: `${settings.radius}px`,
    padding: `${settings.padding}px`,
    backgroundImage: `${accentImage}, ${recipe.texture}, linear-gradient(150deg, rgb(16 25 38), rgb(5 8 14)), linear-gradient(135deg, ${rgb(settings.accent, 0.72)}, rgb(15 24 35) 38%, rgb(93 96 210 / 64%) 72%, rgb(4 7 12))`,
    backgroundRepeat: "no-repeat, repeat, no-repeat, no-repeat",
    backgroundOrigin: `${settings.origin}, content-box, padding-box, border-box`,
    backgroundClip: `${settings.clip}, content-box, padding-box, border-box`,
    backgroundPosition: `${settings.x}% ${settings.y}%, center, center, center`,
    backgroundSize: `${settings.size}% ${settings.size}%, auto, auto, auto`,
    boxShadow:
      `0 30px 70px rgb(0 0 0 / 58%), 0 0 34px ${rgb(settings.accent, 0.1)}, inset 0 1px 0 rgb(255 255 255 / 11%)`,
  };
}

function OriginPanel({ settings, recipe, showZones = false, comparison = false }) {
  return (
    <article
      className={`origin-panel ${comparison ? "origin-panel--comparison" : ""}`}
      style={getOriginStyle(settings, recipe)}
    >
      {showZones ? (
        <div className="origin-zones" aria-hidden="true">
          <span
            className="origin-zone origin-zone--border"
            style={{ inset: 0, borderRadius: `${settings.radius}px` }}
          />
          <span
            className="origin-zone origin-zone--padding"
            style={{
              inset: `${settings.border}px`,
              borderRadius: `${Math.max(2, settings.radius - settings.border)}px`,
            }}
          />
          <span
            className="origin-zone origin-zone--content"
            style={{
              inset: `${settings.border + settings.padding}px`,
              borderRadius: `${Math.max(
                2,
                settings.radius - settings.border - settings.padding * 0.35,
              )}px`,
            }}
          />
        </div>
      ) : null}
      <div className="origin-panel__content">
        <span>ORIGIN / {settings.origin}</span>
        <strong>{comparison ? settings.origin : recipe.name}</strong>
        <p>
          {comparison
            ? "Same size, position, and paint area. Only the positioning box changes."
            : recipe.use}
        </p>
        <div className="origin-panel__meter">
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
    </article>
  );
}

export default function OriginLab() {
  const [recipeId, setRecipeId] = useState(originRecipes[0].id);
  const recipe = originRecipes.find((item) => item.id === recipeId);
  const [settings, setSettings] = useState({
    accent: "#35ffd5",
    border: 9,
    padding: 28,
    radius: 34,
    ...originRecipes[0].defaults,
  });
  const [showZones, setShowZones] = useState(true);

  function chooseRecipe(nextId) {
    const next = originRecipes.find((item) => item.id === nextId);
    setRecipeId(nextId);
    setSettings((current) => ({ ...current, ...next.defaults }));
  }

  function patchSettings(patch) {
    setSettings((current) => ({ ...current, ...patch }));
  }

  const generatedCss = styleObjectToRule(
    ".origin-card",
    getOriginStyle(settings, recipe),
  );

  const comparisonRecipe = originRecipes[0];
  const comparisonBase = {
    accent: "#51e5ff",
    border: 10,
    padding: 28,
    radius: 30,
    clip: "border-box",
    x: 0,
    y: 0,
    size: 58,
  };

  return (
    <div className="tab-page origin-lab">
      <section className="page-intro page-intro--origin">
        <div>
          <span className="page-intro__eyebrow">Positioning, finally visible</span>
          <h2>Origin chooses the ruler. Clip chooses the window.</h2>
        </div>
        <p>
          The old lab has been replaced with practical panel materials, a controlled
          same-layer comparison, and a generator where each background longhand is
          visible in the final CSS.
        </p>
        <div className="page-intro__metrics">
          <div>
            <strong>3</strong>
            <span>positioning boxes</span>
          </div>
          <div>
            <strong>4</strong>
            <span>practical recipes</span>
          </div>
          <div>
            <strong>2</strong>
            <span>independent decisions</span>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeading
          kicker="01 · controlled origin comparison"
          title="The same beacon measured from three different box edges."
          description="Every property below is identical—including background-clip: border-box—except background-origin. The changing size and anchor of the beacon reveal the positioning area."
          badge="one variable changed"
        />
        <div className="origin-comparison">
          {origins.map((origin) => (
            <div className="origin-comparison__item" key={origin}>
              <OriginPanel
                comparison
                recipe={comparisonRecipe}
                settings={{ ...comparisonBase, origin }}
              />
              <div className="origin-comparison__caption">
                <code>background-origin: {origin};</code>
                <p>
                  {origin === "border-box"
                    ? "Coordinates and percentage sizing use the full outer border box."
                    : origin === "padding-box"
                      ? "The border is excluded; measurement starts at the padding edge."
                      : "Both border and padding are excluded; the content plate becomes the ruler."}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="origin-equation">
          <div>
            <span>origin</span>
            <strong>Where is the image measured and positioned?</strong>
          </div>
          <b>+</b>
          <div>
            <span>clip</span>
            <strong>Which painted portion is allowed to remain visible?</strong>
          </div>
          <b>=</b>
          <div>
            <span>result</span>
            <strong>One layer with a deliberate coordinate system and window.</strong>
          </div>
        </div>
      </section>

      <section className="section origin-composer">
        <SectionHeading
          kicker="02 · production origin composer"
          title="Move real panel artwork through the box model."
          description="The neutral inset content plate stays visually separate from the accent rim, so positioning changes remain easy to read."
          badge={`${settings.origin} origin · ${settings.clip} clip`}
        />

        <div className="origin-composer__layout">
          <aside className="panel origin-controls">
            <div className="panel-heading">
              <div>
                <span>Panel recipe</span>
                <small>purpose-led presets</small>
              </div>
              <button
                className={`button button--quiet ${showZones ? "button--active" : ""}`}
                type="button"
                onClick={() => setShowZones((current) => !current)}
                aria-pressed={showZones}
              >
                {showZones ? "Zones on" : "Zones off"}
              </button>
            </div>
            <div className="origin-recipe-list">
              {originRecipes.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`origin-recipe ${recipeId === item.id ? "origin-recipe--active" : ""}`}
                  onClick={() => chooseRecipe(item.id)}
                >
                  <strong>{item.name}</strong>
                  <span>{item.use}</span>
                </button>
              ))}
            </div>
            <div className="control-grid">
              <SelectControl
                id="origin-select"
                label="Accent origin"
                value={settings.origin}
                options={origins}
                onChange={(origin) => patchSettings({ origin })}
              />
              <SelectControl
                id="origin-clip"
                label="Accent clip"
                value={settings.clip}
                options={origins}
                onChange={(clip) => patchSettings({ clip })}
              />
              <ColorControl
                id="origin-accent"
                label="Accent"
                value={settings.accent}
                onChange={(accent) => patchSettings({ accent })}
              />
              <RangeControl
                id="origin-x"
                label="Position X"
                min={0}
                max={100}
                value={settings.x}
                unit="%"
                onChange={(x) => patchSettings({ x })}
              />
              <RangeControl
                id="origin-y"
                label="Position Y"
                min={0}
                max={100}
                value={settings.y}
                unit="%"
                onChange={(y) => patchSettings({ y })}
              />
              <RangeControl
                id="origin-size"
                label="Artwork size"
                min={25}
                max={150}
                value={settings.size}
                unit="%"
                onChange={(size) => patchSettings({ size })}
              />
              <RangeControl
                id="origin-border"
                label="Border"
                min={0}
                max={20}
                value={settings.border}
                unit="px"
                onChange={(border) => patchSettings({ border })}
              />
              <RangeControl
                id="origin-padding"
                label="Padding"
                min={0}
                max={48}
                value={settings.padding}
                unit="px"
                onChange={(padding) => patchSettings({ padding })}
              />
              <RangeControl
                id="origin-radius"
                label="Radius"
                min={6}
                max={52}
                value={settings.radius}
                unit="px"
                onChange={(radius) => patchSettings({ radius })}
              />
            </div>
          </aside>

          <div className="origin-composer__preview">
            <div className="origin-stage stage-grid">
              <div className="origin-stage__legend" aria-label="Box outline colors">
                <span className="legend-border">border</span>
                <span className="legend-padding">padding</span>
                <span className="legend-content">content</span>
              </div>
              <OriginPanel
                settings={settings}
                recipe={recipe}
                showZones={showZones}
              />
            </div>
            <CodePanel label={`${recipe.name} · live exact CSS`} code={generatedCss} />
          </div>
        </div>
      </section>

      <section className="section origin-pairings">
        <SectionHeading
          kicker="03 · practical pairings"
          title="Common origin and clip combinations, with a reason for each."
        />
        <div className="decision-grid">
          <article>
            <span>Surface-only art</span>
            <strong>content-box → content-box</strong>
            <p>Useful for highlights and textures that must never contaminate the frame.</p>
          </article>
          <article>
            <span>Bevel texture</span>
            <strong>padding-box → padding-box</strong>
            <p>Builds a framed band around an opaque content plate.</p>
          </article>
          <article>
            <span>Full-card reflection</span>
            <strong>border-box → border-box</strong>
            <p>Lets one sheen align continuously across face, bevel, and rim.</p>
          </article>
          <article>
            <span>Overscanned artwork</span>
            <strong>content-box → border-box</strong>
            <p>Measures from the content area while still allowing paint into the outer frame.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
