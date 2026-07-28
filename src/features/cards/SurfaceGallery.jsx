import { useState } from "react";
import CodePanel from "../../components/CodePanel";
import SectionHeading from "../../components/SectionHeading";
import { styleObjectToRule } from "../../utils/css";

const surfaceRecipes = [
  {
    id: "spectral-rim",
    title: "Spectral rim",
    type: "Layered border",
    description:
      "An opaque padding-box fill protects the interior while a second gradient remains visible through the transparent border.",
    style: {
      border: "2px solid transparent",
      borderRadius: "26px",
      padding: "24px",
      background:
        "linear-gradient(150deg, rgb(12 19 31), rgb(3 6 10)) padding-box, linear-gradient(130deg, rgb(106 255 224 / 88%), rgb(79 108 255 / 64%) 46%, rgb(255 99 190 / 76%)) border-box",
      boxShadow:
        "0 24px 54px rgb(0 0 0 / 54%), inset 0 1px 0 rgb(255 255 255 / 10%)",
    },
  },
  {
    id: "stepped-bevel",
    title: "Stepped bevel",
    type: "Three paint boxes",
    description:
      "Content, padding, and border layers each own one material role: face, bevel, and outer rim.",
    style: {
      border: "7px solid transparent",
      borderRadius: "28px",
      padding: "18px",
      background:
        "radial-gradient(ellipse at 26% 12%, rgb(255 255 255 / 14%), transparent 42%) content-box, linear-gradient(150deg, rgb(18 30 42), rgb(3 7 12)) content-box, linear-gradient(145deg, rgb(42 89 103), rgb(7 13 22) 48%, rgb(39 41 82)) padding-box, linear-gradient(135deg, rgb(135 255 230 / 72%), rgb(14 27 38) 34%, rgb(113 105 255 / 66%) 72%, rgb(4 7 11)) border-box",
      boxShadow:
        "0 28px 64px rgb(0 0 0 / 62%), inset 0 1px 0 rgb(255 255 255 / 12%), inset 0 -14px 24px rgb(0 0 0 / 36%)",
    },
  },
  {
    id: "content-spotlight",
    title: "Content spotlight",
    type: "Clipped highlight",
    description:
      "The decorative radial light is clipped to the content-box, so it cannot wash across the bevel or rim.",
    style: {
      border: "8px solid transparent",
      borderRadius: "30px",
      padding: "22px",
      background:
        "radial-gradient(circle at 18% 15%, rgb(84 255 210 / 40%), transparent 38%) content-box, linear-gradient(150deg, rgb(9 25 30), rgb(3 7 11)) content-box, linear-gradient(145deg, rgb(8 34 38), rgb(4 8 13)) padding-box, linear-gradient(135deg, rgb(64 238 202 / 56%), rgb(9 17 25), rgb(72 104 212 / 48%)) border-box",
      boxShadow:
        "0 26px 58px rgb(0 0 0 / 58%), 0 0 30px rgb(55 255 212 / 7%), inset 0 1px 0 rgb(255 255 255 / 9%)",
    },
  },
  {
    id: "dot-rim",
    title: "Dot-matrix rim",
    type: "Repeating radial",
    description:
      "A radial dot tile is painted behind the padding-box fill, leaving the repeat visible only at the rim.",
    style: {
      border: "8px solid transparent",
      borderRadius: "27px",
      padding: "22px",
      background:
        "linear-gradient(145deg, rgb(15 24 37), rgb(4 7 12)) padding-box, radial-gradient(circle at 5px 5px, rgb(112 255 224 / 82%) 0 1.2px, transparent 1.6px) 0 0 / 10px 10px border-box, linear-gradient(135deg, rgb(38 91 95), rgb(66 55 131)) border-box",
      boxShadow:
        "0 27px 60px rgb(0 0 0 / 58%), inset 0 1px 0 rgb(255 255 255 / 10%)",
    },
  },
  {
    id: "engraved-graphite",
    title: "Engraved graphite",
    type: "Inset lighting",
    description:
      "Opposing inset highlights and shadows create a pressed material without extra paint layers or generated content.",
    style: {
      border: "1px solid rgb(255 255 255 / 10%)",
      borderRadius: "27px",
      padding: "24px",
      background: "linear-gradient(145deg, #2a3038, #191d23)",
      color: "#12161b",
      textShadow:
        "0 1px 1px rgb(255 255 255 / 18%), 0 -1px 1px rgb(0 0 0 / 72%)",
      boxShadow:
        "inset 4px 4px 10px rgb(0 0 0 / 46%), inset -3px -3px 8px rgb(255 255 255 / 5%), 0 24px 52px rgb(0 0 0 / 44%)",
    },
  },
  {
    id: "polar-chrome",
    title: "Polar chrome",
    type: "Hard-stop metal",
    description:
      "Tight highlight and shade bands simulate a cool metal edge while the face stays dark and readable.",
    style: {
      border: "6px solid transparent",
      borderRadius: "25px",
      padding: "22px",
      background:
        "radial-gradient(ellipse at 25% 12%, rgb(223 255 255 / 15%), transparent 38%) content-box, linear-gradient(150deg, rgb(13 24 34), rgb(3 6 11)) content-box, linear-gradient(135deg, rgb(229 255 255 / 82%) 0 5%, rgb(55 96 119) 10%, rgb(5 9 15) 27%, rgb(126 146 255 / 70%) 53%, rgb(8 8 18) 72%, rgb(193 103 238 / 58%) 91%, rgb(4 6 10)) border-box",
      boxShadow:
        "15px 28px 64px rgb(0 0 0 / 64%), -8px -7px 24px rgb(177 247 255 / 7%), inset 1px 1px 0 rgb(255 255 255 / 12%)",
    },
  },
];

function SurfaceSpecimen({ recipe, compact = false }) {
  return (
    <div
      className={`surface-specimen ${compact ? "surface-specimen--compact" : ""}`}
      style={recipe.style}
    >
      <span className="surface-specimen__type">{recipe.type}</span>
      <strong>{recipe.title}</strong>
      <p>{recipe.description}</p>
    </div>
  );
}

export default function SurfaceGallery() {
  const [activeId, setActiveId] = useState(surfaceRecipes[0].id);
  const active = surfaceRecipes.find((recipe) => recipe.id === activeId);

  return (
    <section className="section" id="surface-gallery">
      <SectionHeading
        kicker="04 · component surface gallery"
        title="Six foundational surface systems, rebuilt as dependable recipes."
        description="Each specimen isolates a practical material technique. Select one to inspect the exact declaration block used by the rendered card."
        badge="preview and CSS share one source"
      />

      <div className="surface-gallery">
        {surfaceRecipes.map((recipe) => (
          <button
            type="button"
            className={`surface-tile ${activeId === recipe.id ? "surface-tile--active" : ""}`}
            key={recipe.id}
            onClick={() => setActiveId(recipe.id)}
            aria-pressed={activeId === recipe.id}
          >
            <SurfaceSpecimen recipe={recipe} compact />
          </button>
        ))}
      </div>

      <div className="surface-detail">
        <div className="surface-detail__stage stage-grid">
          <SurfaceSpecimen recipe={active} />
        </div>
        <CodePanel
          label={`${active.title} · exact CSS`}
          code={styleObjectToRule(".surface-card", active.style)}
        />
      </div>
    </section>
  );
}
