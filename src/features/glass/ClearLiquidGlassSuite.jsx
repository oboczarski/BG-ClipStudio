import { useState } from "react";
import CodePanel from "../../components/CodePanel";
import { RangeControl, SelectControl } from "../../components/Controls";
import SectionHeading from "../../components/SectionHeading";
import {
  clearGlassRecipes,
  getClearGlassCode,
  getClearGlassStyles,
} from "../../data/clearGlassRecipes";
import {
  clearOpticalFields,
  getClearOpticalFieldStyles,
} from "../../data/clearOpticalFields";

function defaultSettings(recipe) {
  return { ...recipe.defaults };
}

function OpticalField({ field, className = "", children }) {
  const fieldStyles = getClearOpticalFieldStyles(field);

  return (
    <div
      className={`clear-optical-field ${className}`.trim()}
      style={fieldStyles.stage}
    >
      <span
        className="clear-optical-field__layer clear-optical-field__layer--one"
        style={fieldStyles.layerOne}
        aria-hidden="true"
      />
      <span
        className="clear-optical-field__layer clear-optical-field__layer--two"
        style={fieldStyles.layerTwo}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}

function ClearGlassCard({ recipe, settings, compact = false }) {
  const styles = getClearGlassStyles(recipe, settings, compact);

  return (
    <article
      className={`clear-glass-card clear-glass-card--${recipe.id}`}
      style={styles.surface}
    >
      {styles.before ? (
        <span
          className="clear-glass-card__generated-optic clear-glass-card__generated-optic--before"
          style={styles.before}
          aria-hidden="true"
        />
      ) : null}
      {styles.after ? (
        <span
          className="clear-glass-card__generated-optic clear-glass-card__generated-optic--after"
          style={styles.after}
          aria-hidden="true"
        />
      ) : null}

      <div className="clear-glass-card__content">
        <div className="clear-glass-card__topline">
          <span>{recipe.category}</span>
          <small>CG / {recipe.id.slice(0, 2).toUpperCase()}</small>
        </div>

        <div className="clear-glass-card__copy">
          <strong>{recipe.name}</strong>
          {compact ? null : <p>{recipe.description}</p>}
        </div>

        <div className="clear-glass-card__readout">
          <span>
            <i aria-hidden="true" />
            {settings.blur}px blur
          </span>
          <span>{settings.density}% density</span>
          <span>{settings.edge}% edge</span>
        </div>
      </div>
    </article>
  );
}

function ControlGroup({ eyebrow, title, children }) {
  return (
    <div className="clear-glass-controls__group">
      <div className="clear-glass-controls__group-heading">
        <span>{eyebrow}</span>
        <strong>{title}</strong>
      </div>
      <div className="clear-glass-control-grid">{children}</div>
    </div>
  );
}

export default function ClearLiquidGlassSuite() {
  const [recipeId, setRecipeId] = useState(clearGlassRecipes[0].id);
  const recipe = clearGlassRecipes.find((item) => item.id === recipeId);
  const [settings, setSettings] = useState(defaultSettings(clearGlassRecipes[0]));
  const [fieldId, setFieldId] = useState(clearGlassRecipes[0].fieldId);
  const field = clearOpticalFields.find((item) => item.id === fieldId);
  const fieldStyles = getClearOpticalFieldStyles(field);
  const fieldNumber = clearOpticalFields.findIndex((item) => item.id === fieldId) + 1;

  function selectRecipe(nextId, matchField = true) {
    const next = clearGlassRecipes.find((item) => item.id === nextId);
    setRecipeId(nextId);
    setSettings(defaultSettings(next));
    if (matchField) setFieldId(next.fieldId);
  }

  function patchSettings(patch) {
    setSettings((current) => ({ ...current, ...patch }));
  }

  function resetMaterial() {
    setSettings(defaultSettings(recipe));
  }

  const code = getClearGlassCode(recipe, settings);

  return (
    <div className="clear-glass-suite">
      <section className="section clear-glass-library">
        <SectionHeading
          kicker="01 · liquid glass collection / clear edition"
          title="Color belongs behind the glass—not baked through every surface."
          description="Seven new clear, silver, satin, smoked, fluid, and edge-dispersive materials focus on lensing, light response, translucency, and depth. Select a specimen to load its complete material into the new optical bench."
          badge="7 new materials"
        />

        <div className="clear-glass-principles" aria-label="Clear edition principles">
          <div>
            <span>01 / field</span>
            <strong>Vibrant underneath</strong>
            <p>Complex gradients provide the contrast and color that make refraction legible.</p>
          </div>
          <div>
            <span>02 / surface</span>
            <strong>Neutral by default</strong>
            <p>Clear, white, silver, pearl, and smoke lead; tint appears only as faint spill or edge dispersion.</p>
          </div>
          <div>
            <span>03 / code</span>
            <strong>Card-only output</strong>
            <p>The bench copies the selected material alone—never the stage, page, or demonstration markup.</p>
          </div>
        </div>

        <div className="clear-glass-gallery">
          {clearGlassRecipes.map((item) => {
            const galleryField = clearOpticalFields.find(
              (candidate) => candidate.id === item.fieldId,
            );

            return (
              <button
                type="button"
                key={item.id}
                className={`clear-glass-gallery__item ${recipeId === item.id ? "clear-glass-gallery__item--active" : ""}`}
                aria-pressed={recipeId === item.id}
                onClick={() => selectRecipe(item.id)}
              >
                <OpticalField
                  field={galleryField}
                  className="clear-glass-gallery__stage"
                >
                  <ClearGlassCard
                    recipe={item}
                    settings={defaultSettings(item)}
                    compact
                  />
                  <span className="clear-glass-gallery__field-label">
                    {galleryField.name}
                  </span>
                </OpticalField>
                <div className="clear-glass-gallery__copy">
                  <div>
                    <span>{item.category}</span>
                    <small>{item.id === "og-original" ? "supplied reference" : "new system"}</small>
                  </div>
                  <strong>{item.name}</strong>
                  <p>{item.note}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="section clear-glass-bench">
        <SectionHeading
          kicker="02 · optical bench / clear edition"
          title="Tune the physics of the material, then copy only the card."
          description="The controls are specific to these seven surfaces: surface density, diffusion, clarity, edge luminance, specular energy, refraction spread, and separation from the field. The two selectors make every material and background independently testable."
          badge={recipe.name}
        />

        <div className="clear-glass-bench__layout">
          <aside className="panel clear-glass-controls">
            <div className="clear-glass-controls__header">
              <div>
                <span>Clear-material controls</span>
                <small>12 live optical parameters</small>
              </div>
              <button className="button button--quiet" type="button" onClick={resetMaterial}>
                Reset material
              </button>
            </div>

            <ControlGroup eyebrow="01" title="System and environment">
              <SelectControl
                id="clear-glass-recipe"
                label="Glass style"
                value={recipeId}
                options={clearGlassRecipes.map((item) => ({
                  value: item.id,
                  label: item.name,
                }))}
                onChange={(nextId) => selectRecipe(nextId)}
              />
              <SelectControl
                id="clear-glass-field"
                label="Gradient background"
                value={fieldId}
                options={clearOpticalFields.map((item) => ({
                  value: item.id,
                  label: item.name,
                }))}
                onChange={setFieldId}
              />
            </ControlGroup>

            <ControlGroup eyebrow="02" title="Transmission and diffusion">
              <RangeControl
                id="clear-glass-blur"
                label="Backdrop blur"
                min={0}
                max={36}
                value={settings.blur}
                unit="px"
                onChange={(blur) => patchSettings({ blur })}
              />
              <RangeControl
                id="clear-glass-density"
                label="Surface density"
                min={8}
                max={88}
                value={settings.density}
                unit="%"
                onChange={(density) => patchSettings({ density })}
              />
              <RangeControl
                id="clear-glass-diffusion"
                label="Frost diffusion"
                min={0}
                max={100}
                value={settings.diffusion}
                unit="%"
                onChange={(diffusion) => patchSettings({ diffusion })}
              />
              <RangeControl
                id="clear-glass-clarity"
                label="Lens clarity"
                min={82}
                max={142}
                value={settings.clarity}
                unit="%"
                onChange={(clarity) => patchSettings({ clarity })}
              />
              <RangeControl
                id="clear-glass-saturation"
                label="Field chroma"
                min={80}
                max={175}
                value={settings.saturation}
                unit="%"
                onChange={(saturation) => patchSettings({ saturation })}
              />
            </ControlGroup>

            <ControlGroup eyebrow="03" title="Light, edge, and depth">
              <RangeControl
                id="clear-glass-edge"
                label="Edge luminance"
                min={0}
                max={100}
                value={settings.edge}
                unit="%"
                onChange={(edge) => patchSettings({ edge })}
              />
              <RangeControl
                id="clear-glass-specular"
                label="Specular energy"
                min={0}
                max={100}
                value={settings.specular}
                unit="%"
                onChange={(specular) => patchSettings({ specular })}
              />
              <RangeControl
                id="clear-glass-refraction"
                label="Refraction spread"
                min={0}
                max={100}
                value={settings.refraction}
                unit="%"
                onChange={(refraction) => patchSettings({ refraction })}
              />
              <RangeControl
                id="clear-glass-depth"
                label="Shadow lift"
                min={4}
                max={52}
                value={settings.depth}
                unit="px"
                onChange={(depth) => patchSettings({ depth })}
              />
              <RangeControl
                id="clear-glass-radius"
                label="Corner radius"
                min={12}
                max={62}
                value={settings.radius}
                unit="px"
                onChange={(radius) => patchSettings({ radius })}
              />
            </ControlGroup>

            <ControlGroup eyebrow="04" title="Directional highlight">
              <RangeControl
                id="clear-glass-highlight-x"
                label="Highlight X"
                min={0}
                max={100}
                value={settings.highlightX}
                unit="%"
                onChange={(highlightX) => patchSettings({ highlightX })}
              />
              <RangeControl
                id="clear-glass-highlight-y"
                label="Highlight Y"
                min={0}
                max={100}
                value={settings.highlightY}
                unit="%"
                onChange={(highlightY) => patchSettings({ highlightY })}
              />
            </ControlGroup>

            <div className="clear-glass-field-note">
              <div>
                <span>{field.category}</span>
                <small>{field.source}</small>
              </div>
              <strong>{field.name}</strong>
              <p>{field.description}</p>
            </div>
          </aside>

          <div className="clear-glass-bench__preview">
            <div
              className={`clear-optical-field clear-glass-stage clear-glass-stage--${field.id}`}
              style={fieldStyles.stage}
            >
              <span
                className="clear-optical-field__layer clear-optical-field__layer--one"
                style={fieldStyles.layerOne}
                aria-hidden="true"
              />
              <span
                className="clear-optical-field__layer clear-optical-field__layer--two"
                style={fieldStyles.layerTwo}
                aria-hidden="true"
              />
              <div className="clear-glass-stage__rail" style={fieldStyles.rail}>
                <span>CLEAR OPTICAL FIELD / {String(fieldNumber).padStart(2, "0")}</span>
                <small>{field.name} · border treatment excluded</small>
              </div>
              <ClearGlassCard recipe={recipe} settings={settings} />
              <div className="clear-glass-stage__legend">
                <span>body</span>
                <strong>{settings.density}%</strong>
                <span>diffusion</span>
                <strong>{settings.diffusion}%</strong>
                <span>edge</span>
                <strong>{settings.edge}%</strong>
              </div>
            </div>

            <CodePanel
              className="clear-glass-code"
              label={`${recipe.name} · exact card-only CSS`}
              language="CSS"
              code={code}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
