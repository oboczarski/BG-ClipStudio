import { useState } from "react";
import CodePanel from "../../components/CodePanel";
import {
  ColorControl,
  RangeControl,
  SelectControl,
} from "../../components/Controls";
import SectionHeading from "../../components/SectionHeading";
import ClearLiquidGlassSuite from "./ClearLiquidGlassSuite";
import {
  getOpticalFieldStyles,
  opticalFields,
} from "../../data/glassFields";
import {
  getGlassCode,
  getGlassStyles,
  glassRecipes,
} from "../../data/glassRecipes";

function GlassCard({ recipe, settings, compact = false }) {
  const styles = getGlassStyles(recipe, settings, compact);
  return (
    <article className="glass-card liquid-card" style={styles.surface}>
      <span
        className="liquid-card__lens"
        aria-hidden="true"
        style={styles.lens}
      />
      <span
        className="liquid-card__glint"
        aria-hidden="true"
        style={styles.glint}
      />
      <div
        className="glass-card__content liquid-card__content"
        style={styles.content}
      >
        <div className="glass-card__topline">
          <span>{recipe.category}</span>
          <small>{recipe.id.slice(0, 3).toUpperCase()} / GL</small>
        </div>
        <div className="glass-card__copy">
          <strong>{recipe.name}</strong>
          {compact ? null : <p>{recipe.description}</p>}
        </div>
        <div className="glass-card__readout">
          <span>
            <i />
            blur {settings.blur}px
          </span>
          <span>{settings.opacity}% body</span>
        </div>
      </div>
    </article>
  );
}

function defaultSettings(recipe) {
  return { ...recipe.defaults };
}

export default function LiquidGlassLab() {
  const [recipeId, setRecipeId] = useState(glassRecipes[0].id);
  const recipe = glassRecipes.find((item) => item.id === recipeId);
  const [settings, setSettings] = useState(defaultSettings(glassRecipes[0]));
  const [fieldId, setFieldId] = useState(opticalFields[0].id);
  const field = opticalFields.find((item) => item.id === fieldId);
  const fieldStyles = getOpticalFieldStyles(field);
  const fieldNumber = opticalFields.findIndex((item) => item.id === fieldId) + 1;

  function selectRecipe(nextId) {
    const next = glassRecipes.find((item) => item.id === nextId);
    setRecipeId(nextId);
    setSettings(defaultSettings(next));
  }

  function patchSettings(patch) {
    setSettings((current) => ({ ...current, ...patch }));
  }

  const code = getGlassCode(recipe, settings, field);

  return (
    <div className="tab-page liquid-glass-lab">
      <section className="page-intro page-intro--glass">
        <div>
          <span className="page-intro__eyebrow">Liquid glass, with substance</span>
          <h2>Ten optical systems beyond generic glassmorphism.</h2>
        </div>
        <p>
          Each card combines a different transparency model, border treatment,
          internal reflection, tint strategy, and shadow character. The blur is only
          one ingredient—and twelve selectable optical fields make the refraction
          behavior visible against genuinely different gradient environments.
        </p>
        <div className="page-intro__metrics">
          <div>
            <strong>10</strong>
            <span>optical approaches</span>
          </div>
          <div>
            <strong>13</strong>
            <span>live controls</span>
          </div>
          <div>
            <strong>12</strong>
            <span>optical fields</span>
          </div>
        </div>
      </section>

      <ClearLiquidGlassSuite />

      <section className="section glass-library">
        <SectionHeading
          kicker="01 · liquid glass collection"
          title="A gallery of distinct optical behaviors, not ten tint swaps."
          description="Select a specimen to load its material model into the optical bench."
          badge="10 original designs"
        />
        <div className="glass-gallery">
          {glassRecipes.map((item) => (
            <button
              type="button"
              key={item.id}
              className={`glass-gallery__item ${recipeId === item.id ? "glass-gallery__item--active" : ""}`}
              onClick={() => selectRecipe(item.id)}
            >
              <div className={`glass-mini-stage glass-mini-stage--${item.id}`}>
                <GlassCard
                  recipe={item}
                  settings={defaultSettings(item)}
                  compact
                />
              </div>
              <div className="glass-gallery__copy">
                <span>{item.category}</span>
                <strong>{item.name}</strong>
                <p>{item.description}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="section glass-bench">
        <SectionHeading
          kicker="02 · optical bench"
          title="Tune the selected material and copy its complete construction."
          description="Controls adjust the true surface alpha, blur, chroma, edge, radius, shadow, and reflection coordinates without fading the foreground content."
          badge={recipe.name}
        />

        <div className="glass-bench__layout">
          <aside className="panel glass-controls">
            <div className="panel-heading">
              <div>
                <span>Material controls</span>
                <small>live optical parameters</small>
              </div>
            </div>
            <div className="control-grid">
              <SelectControl
                id="glass-recipe"
                label="Glass system"
                value={recipeId}
                options={glassRecipes.map((item) => ({
                  value: item.id,
                  label: item.name,
                }))}
                onChange={selectRecipe}
              />
              <SelectControl
                id="glass-field"
                label="Optical field"
                value={fieldId}
                options={opticalFields.map((item) => ({
                  value: item.id,
                  label: item.name,
                }))}
                onChange={setFieldId}
              />
              <ColorControl
                id="glass-tint"
                label="Primary tint"
                value={settings.tint}
                onChange={(tint) => patchSettings({ tint })}
              />
              <ColorControl
                id="glass-accent"
                label="Refracted accent"
                value={settings.accent}
                onChange={(accent) => patchSettings({ accent })}
              />
              <RangeControl
                id="glass-blur"
                label="Backdrop blur"
                min={0}
                max={48}
                value={settings.blur}
                unit="px"
                onChange={(blur) => patchSettings({ blur })}
              />
              <RangeControl
                id="glass-opacity"
                label="Surface body"
                min={24}
                max={100}
                value={settings.opacity}
                unit="%"
                onChange={(opacity) => patchSettings({ opacity })}
              />
              <RangeControl
                id="glass-saturation"
                label="Backdrop chroma"
                min={80}
                max={220}
                value={settings.saturation}
                unit="%"
                onChange={(saturation) => patchSettings({ saturation })}
              />
              <RangeControl
                id="glass-border"
                label="Optical edge"
                min={1}
                max={8}
                value={settings.border}
                unit="px"
                onChange={(border) => patchSettings({ border })}
              />
              <RangeControl
                id="glass-radius"
                label="Corner radius"
                min={8}
                max={72}
                value={settings.radius}
                unit="px"
                onChange={(radius) => patchSettings({ radius })}
              />
              <RangeControl
                id="glass-depth"
                label="Shadow depth"
                min={4}
                max={42}
                value={settings.depth}
                unit="px"
                onChange={(depth) => patchSettings({ depth })}
              />
              <RangeControl
                id="glass-reflection"
                label="Reflection energy"
                min={0}
                max={100}
                value={settings.reflection}
                unit="%"
                onChange={(reflection) => patchSettings({ reflection })}
              />
              <RangeControl
                id="glass-highlight-x"
                label="Highlight X"
                min={0}
                max={100}
                value={settings.highlightX}
                unit="%"
                onChange={(highlightX) => patchSettings({ highlightX })}
              />
              <RangeControl
                id="glass-highlight-y"
                label="Highlight Y"
                min={0}
                max={100}
                value={settings.highlightY}
                unit="%"
                onChange={(highlightY) => patchSettings({ highlightY })}
              />
            </div>
            <div className="glass-field-note">
              <span>{field.category}</span>
              <strong>{field.name}</strong>
              <p>{field.description}</p>
            </div>
            <div className="glass-anatomy">
              <div>
                <span>01</span>
                <strong>Backdrop</strong>
                <small>blur + saturation</small>
              </div>
              <div>
                <span>02</span>
                <strong>Body</strong>
                <small>layered alpha</small>
              </div>
              <div>
                <span>03</span>
                <strong>Edge</strong>
                <small>refractive border</small>
              </div>
              <div>
                <span>04</span>
                <strong>Depth</strong>
                <small>outer + inset light</small>
              </div>
            </div>
          </aside>

          <div className="glass-bench__preview">
            <div
              className={`glass-stage glass-stage--${recipe.id} glass-stage--field-${field.id}`}
              style={fieldStyles.stage}
            >
              <div
                className="glass-stage__field-layer glass-stage__field-layer--one"
                style={fieldStyles.layerOne}
              />
              <div
                className="glass-stage__field-layer glass-stage__field-layer--two"
                style={fieldStyles.layerTwo}
              />
              <div className="glass-stage__rail" style={fieldStyles.rail}>
                <span>
                  OPTICAL FIELD / {String(fieldNumber).padStart(2, "0")}
                </span>
                <small>{field.name} · gradient-only environment</small>
              </div>
              <GlassCard recipe={recipe} settings={settings} />
            </div>
            <CodePanel
              label={`${recipe.name} · live HTML + exact CSS`}
              language="HTML + CSS"
              code={code}
            />
          </div>
        </div>
      </section>

      <section className="section glass-guidance">
        <SectionHeading
          kicker="03 · glass design guidance"
          title="The difference between glass and a translucent rectangle."
        />
        <div className="decision-grid">
          <article>
            <span>Backdrop</span>
            <strong>Give blur something to refract</strong>
            <p>Glass needs contrast, color, or structure behind it. Flat backdrops make blur invisible.</p>
          </article>
          <article>
            <span>Body</span>
            <strong>Keep text alpha independent</strong>
            <p>Use alpha in background colors rather than opacity on the whole card.</p>
          </article>
          <article>
            <span>Edge</span>
            <strong>Light must have direction</strong>
            <p>Vary border brightness and inset highlights instead of using one uniform white outline.</p>
          </article>
          <article>
            <span>Fallback</span>
            <strong>Blur is enhancement</strong>
            <p>Provide a denser background when backdrop-filter is unavailable or disabled.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
