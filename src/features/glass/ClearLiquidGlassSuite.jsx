import { useState } from "react";
import CodePanel from "../../components/CodePanel";
import {
  ColorControl,
  RangeControl,
  SelectControl,
} from "../../components/Controls";
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
          <span>{settings.borderWidth}px rim</span>
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
  const [fieldMode, setFieldMode] = useState("gradient");
  const [solidColor, setSolidColor] = useState("#10131a");
  const field = clearOpticalFields.find((item) => item.id === fieldId);
  const gradientFieldStyles = getClearOpticalFieldStyles(field);
  const fieldStyles =
    fieldMode === "gradient"
      ? gradientFieldStyles
      : {
          stage: { background: solidColor },
          layerOne: { ...gradientFieldStyles.layerOne, display: "none" },
          layerTwo: { ...gradientFieldStyles.layerTwo, display: "none" },
          rail: {
            color: "rgb(245 249 252 / 72%)",
            borderColor: "rgb(255 255 255 / 18%)",
          },
        };
  const fieldNumber = clearOpticalFields.findIndex((item) => item.id === fieldId) + 1;
  const fieldMeta =
    fieldMode === "gradient"
      ? field
      : {
          category: "custom solid field",
          source: "Live color control",
          name: `Solid ${solidColor.toUpperCase()}`,
          description:
            "A completely flat color field for judging border readability, body density, tint neutrality, and fallback contrast without gradient detail.",
        };

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
          description="Ten clear, satin, smoked, fluid, Fresnel, polarized, waterglass, and prismatic materials use distinct surface and border constructions. Select a specimen to load its complete material into the optical bench."
          badge="10 material systems"
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
          description="The controls tune ten distinct surfaces: body density, diffusion, clarity, border width, edge luminance, specular energy, refraction spread, and separation from either a gradient design or a custom solid field."
          badge={recipe.name}
        />

        <div className="clear-glass-bench__layout">
          <aside className="panel clear-glass-controls">
            <div className="clear-glass-controls__header">
              <div>
                <span>Clear-material controls</span>
                <small>13 live material parameters</small>
              </div>
              <button className="button button--quiet" type="button" onClick={resetMaterial}>
                Reset material
              </button>
            </div>

            <ControlGroup eyebrow="01" title="System and environment">
              <div className="clear-field-style-control">
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
              </div>
              <div className="clear-field-mode">
                <span className="clear-field-mode__label">Optical field type</span>
                <div className="clear-field-mode__switch" role="group" aria-label="Optical field type">
                  <button
                    type="button"
                    aria-pressed={fieldMode === "gradient"}
                    onClick={() => setFieldMode("gradient")}
                  >
                    Gradient designs
                  </button>
                  <button
                    type="button"
                    aria-pressed={fieldMode === "solid"}
                    onClick={() => setFieldMode("solid")}
                  >
                    Solid colors
                  </button>
                </div>
              </div>
              <div className="clear-field-source-control">
                {fieldMode === "gradient" ? (
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
                ) : (
                  <ColorControl
                    id="clear-glass-solid-color"
                    label="Solid field color"
                    value={solidColor}
                    onChange={setSolidColor}
                  />
                )}
              </div>
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

            <ControlGroup eyebrow="03" title="Border, light, and depth">
              <RangeControl
                id="clear-glass-border-width"
                label="Optical border width"
                min={1}
                max={6}
                value={settings.borderWidth}
                unit="px"
                onChange={(borderWidth) => patchSettings({ borderWidth })}
              />
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
                <span>{fieldMeta.category}</span>
                <small>{fieldMeta.source}</small>
              </div>
              <strong>{fieldMeta.name}</strong>
              <p>{fieldMeta.description}</p>
            </div>
          </aside>

          <div className="clear-glass-bench__preview">
            <div
              className={`clear-optical-field clear-glass-stage ${fieldMode === "gradient" ? `clear-glass-stage--${field.id}` : "clear-glass-stage--solid"}`}
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
                <span>
                  {fieldMode === "gradient"
                    ? `CLEAR OPTICAL FIELD / ${String(fieldNumber).padStart(2, "0")}`
                    : "SOLID OPTICAL FIELD / CUSTOM"}
                </span>
                <small>
                  {fieldMode === "gradient"
                    ? `${field.name} · field layers only`
                    : `${solidColor.toUpperCase()} · flat contrast test`}
                </small>
              </div>
              <ClearGlassCard recipe={recipe} settings={settings} />
              <div className="clear-glass-stage__legend">
                <span>body</span>
                <strong>{settings.density}%</strong>
                <span>diffusion</span>
                <strong>{settings.diffusion}%</strong>
                <span>rim</span>
                <strong>{settings.borderWidth}px</strong>
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
