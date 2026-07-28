import { useState } from "react";
import CodePanel from "../../components/CodePanel";
import SectionHeading from "../../components/SectionHeading";
import { styleObjectToRule } from "../../utils/css";

const recipes = [
  {
    id: "text-stroke",
    title: "Stroked gradient text",
    summary: "background-clip text + transparent fill + text-stroke.",
    label: "STROKE",
    element: "span",
    style: {
      display: "inline-block",
      fontSize: "clamp(3rem, 8vw, 5.5rem)",
      lineHeight: "0.9",
      fontWeight: "950",
      letterSpacing: "-0.07em",
      color: "transparent",
      WebkitTextFillColor: "transparent",
      WebkitTextStroke: "2px rgb(149 212 212 / 82%)",
      paintOrder: "stroke fill",
      background:
        "linear-gradient(96deg, #ffffff, #21ffd2 30%, #58a7ff 65%, #ff4fb8)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      textShadow:
        "0 0 16px rgb(33 255 210 / 30%), 0 24px 48px rgb(0 0 0 / 72%)",
    },
  },
  {
    id: "border",
    title: "Gradient border card",
    summary: "padding-box inner layer + border-box rim.",
    label: "Border Card",
    style: {
      border: "2px solid transparent",
      borderRadius: "28px",
      padding: "28px",
      background:
        "linear-gradient(150deg, rgb(9 16 26), rgb(3 6 10)) padding-box, linear-gradient(135deg, rgb(33 255 210 / 80%), rgb(88 167 255 / 45%), rgb(255 79 184 / 70%)) border-box",
      boxShadow: "0 24px 60px rgb(0 0 0 / 54%)",
    },
  },
  {
    id: "glass",
    title: "Glass panel",
    summary: "translucent fill, backdrop blur, and inset lighting.",
    label: "Glass Panel",
    style: {
      border: "1px solid rgb(255 255 255 / 18%)",
      borderRadius: "28px",
      padding: "28px",
      background:
        "linear-gradient(140deg, rgb(255 255 255 / 16%), rgb(255 255 255 / 5%)) padding-box",
      backdropFilter: "blur(18px) saturate(140%)",
      WebkitBackdropFilter: "blur(18px) saturate(140%)",
      boxShadow:
        "0 24px 62px rgb(0 0 0 / 46%), inset 0 1px 0 rgb(255 255 255 / 18%)",
    },
  },
  {
    id: "content-glow",
    title: "Content-box spotlight",
    summary: "decorative light restricted to the content surface.",
    label: "Content Spotlight",
    style: {
      border: "8px solid transparent",
      borderRadius: "28px",
      padding: "24px",
      background:
        "radial-gradient(circle at 20% 16%, rgb(33 255 210 / 42%), transparent 38%) content-box, linear-gradient(135deg, rgb(11 23 33), rgb(5 8 14)) content-box, linear-gradient(145deg, rgb(8 28 33), rgb(3 7 11)) padding-box, linear-gradient(135deg, rgb(70 255 220 / 55%), rgb(9 17 25), rgb(90 115 255 / 48%)) border-box",
      boxShadow:
        "0 24px 58px rgb(0 0 0 / 40%), inset 0 0 0 1px rgb(255 255 255 / 8%)",
    },
  },
  {
    id: "dot-rim",
    title: "Dot-rim border texture",
    summary: "small radial dot pattern placed in the border layer.",
    label: "Dot Rim",
    style: {
      border: "8px solid transparent",
      borderRadius: "28px",
      padding: "26px",
      background:
        "linear-gradient(145deg, #101a28, #05080e) padding-box, radial-gradient(circle at 6px 6px, rgb(33 255 210 / 68%) 0 1px, transparent 1.6px) 0 0 / 12px 12px border-box, linear-gradient(135deg, rgb(33 255 210 / 40%), rgb(88 167 255 / 30%), rgb(255 79 184 / 35%)) border-box",
      boxShadow: "0 28px 60px rgb(0 0 0 / 46%)",
    },
  },
  {
    id: "mask-fade",
    title: "Masked surface fade",
    summary: "mask-image fades the rendered element itself.",
    label: "Masked Fade",
    style: {
      width: "100%",
      minHeight: "190px",
      borderRadius: "28px",
      display: "grid",
      placeItems: "center",
      background:
        "repeating-linear-gradient(90deg, rgb(33 255 210 / 18%) 0 2px, transparent 2px 18px), linear-gradient(135deg, rgb(33 255 210 / 30%), rgb(88 167 255 / 20%), rgb(255 79 184 / 24%))",
      maskImage:
        "linear-gradient(90deg, transparent 0%, black 18%, black 82%, transparent 100%)",
      WebkitMaskImage:
        "linear-gradient(90deg, transparent 0%, black 18%, black 82%, transparent 100%)",
    },
  },
];

export default function RecipePicker() {
  const [activeId, setActiveId] = useState(recipes[0].id);
  const active = recipes.find((recipe) => recipe.id === activeId);
  const Element = active.element ?? "div";

  return (
    <section className="section" id="practical-recipes">
      <SectionHeading
        kicker="07 · practical recipe picker"
        title="Pick a component recipe and copy only the CSS that matters."
        badge="restored + working"
      />

      <div className="recipe-picker">
        <div className="recipe-list panel">
          <div className="panel-heading">
            <div>
              <span>Recipes</span>
              <small>interactive</small>
            </div>
          </div>
          {recipes.map((recipe) => (
            <button
              type="button"
              key={recipe.id}
              className={`recipe-option ${activeId === recipe.id ? "recipe-option--active" : ""}`}
              onClick={() => setActiveId(recipe.id)}
            >
              <strong>{recipe.title}</strong>
              <span>{recipe.summary}</span>
            </button>
          ))}
        </div>

        <div className="recipe-preview">
          <div
            className={`recipe-stage recipe-stage--${active.id} stage-grid`}
          >
            <Element className="recipe-specimen" style={active.style}>
              <strong>{active.label}</strong>
              {active.element ? null : (
                <p>Rendered from the exact declarations shown beside it.</p>
              )}
            </Element>
          </div>
          <CodePanel
            label="Recipe CSS"
            code={styleObjectToRule(".recipe", active.style)}
          />
        </div>
      </div>
    </section>
  );
}
