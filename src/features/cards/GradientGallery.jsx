import { useState } from "react";
import CodePanel from "../../components/CodePanel";
import { RangeControl } from "../../components/Controls";
import SectionHeading from "../../components/SectionHeading";
import {
  gradientRecipeCss,
  gradientRecipeStyle,
} from "../../data/gradientRecipes";

function RecipeCard({ recipe, padding, border, compact = false }) {
  return (
    <article
      className={`gradient-specimen ${compact ? "gradient-specimen--compact" : ""}`}
      style={gradientRecipeStyle(recipe, padding, border)}
    >
      <div className="gradient-specimen__content">
        <span>{recipe.id.replaceAll("-", " ")}</span>
        <strong>{recipe.title}</strong>
        <p>{recipe.description}</p>
        {recipe.tags ? (
          <div className="tag-row">
            {recipe.tags.map((tag) => (
              <small key={tag}>{tag}</small>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function GradientGallery({
  recipes,
  sectionId,
  kicker,
  title,
  description,
  badge,
  premium = false,
}) {
  const [activeId, setActiveId] = useState(recipes[0].id);
  const active = recipes.find((recipe) => recipe.id === activeId);
  const [padding, setPadding] = useState(active.padding);
  const [border, setBorder] = useState(active.border);

  function selectRecipe(recipe) {
    setActiveId(recipe.id);
    setPadding(recipe.padding);
    setBorder(recipe.border);
  }

  return (
    <section
      className={`section gradient-gallery-section ${premium ? "gradient-gallery-section--premium" : ""}`}
      id={sectionId}
    >
      <SectionHeading
        kicker={kicker}
        title={title}
        description={description}
        badge={badge}
      />

      <div className={`gradient-gallery ${premium ? "gradient-gallery--premium" : ""}`}>
        <aside className="gradient-gallery__picker panel">
          <div className="panel-heading">
            <div>
              <span>{premium ? "Atelier collection" : "Repeated-gradient variations"}</span>
              <small>{recipes.length} selectable recipes</small>
            </div>
          </div>

          <div className={premium ? "atelier-picker" : "gradient-picker"}>
            {recipes.map((recipe, index) => (
              <button
                type="button"
                key={recipe.id}
                className={`gradient-option ${activeId === recipe.id ? "gradient-option--active" : ""}`}
                onClick={() => selectRecipe(recipe)}
              >
                <span className="gradient-option__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <strong>{recipe.title}</strong>
                  <small>{recipe.short}</small>
                </div>
                {premium ? (
                  <div className="gradient-option__swatch">
                    <RecipeCard
                      recipe={recipe}
                      padding={Math.min(recipe.padding, 12)}
                      border={Math.min(recipe.border, 5)}
                      compact
                    />
                  </div>
                ) : null}
              </button>
            ))}
          </div>

          <div className="box-key" aria-label="CSS box layer key">
            <div>
              <span className="box-key__content" />
              <strong>content-box</strong>
              <small>face and surface detail</small>
            </div>
            <div>
              <span className="box-key__padding" />
              <strong>padding-box</strong>
              <small>bevel and inner frame</small>
            </div>
            <div>
              <span className="box-key__border" />
              <strong>border-box</strong>
              <small>outer rim and indexing</small>
            </div>
          </div>

          <div className="control-grid">
            <RangeControl
              id={`${sectionId}-padding`}
              label="Card padding"
              min={8}
              max={48}
              value={padding}
              unit="px"
              onChange={setPadding}
            />
            <RangeControl
              id={`${sectionId}-border`}
              label="Border size"
              min={0}
              max={22}
              value={border}
              unit="px"
              onChange={setBorder}
            />
          </div>
        </aside>

        <div className="gradient-gallery__detail">
          <div className="gradient-stage stage-grid">
            <RecipeCard recipe={active} padding={padding} border={border} />
          </div>
          <CodePanel
            label={`${active.title} · live exact CSS`}
            code={gradientRecipeCss(active, padding, border)}
          />
        </div>
      </div>
    </section>
  );
}
