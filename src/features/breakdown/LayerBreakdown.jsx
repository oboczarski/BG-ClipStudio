import { useState } from "react";
import CodePanel from "../../components/CodePanel";
import SectionHeading from "../../components/SectionHeading";
import { styleObjectToRule } from "../../utils/css";

const layers = [
  {
    id: "light",
    label: "01",
    title: "Content light",
    box: "content-box",
    swatch: "rgb(73 255 213)",
    value:
      "radial-gradient(ellipse at 18% 12%, rgb(42 255 202 / 18%), transparent 48%) content-box",
    description:
      "A restrained highlight sits closest to the user and never spills into the frame.",
  },
  {
    id: "face",
    label: "02",
    title: "Base material",
    box: "content-box",
    swatch: "rgb(28 55 64)",
    value:
      "linear-gradient(150deg, rgb(14 25 29), rgb(7 12 17) 48%, rgb(3 5 8)) content-box",
    description:
      "The opaque face gives text a stable contrast surface and hides deeper layers inside the content area.",
  },
  {
    id: "bevel",
    label: "03",
    title: "Conic bevel",
    box: "padding-box",
    swatch: "rgb(67 132 149)",
    value:
      "conic-gradient(from 240deg at 50% 50%, rgb(2 5 7), rgb(10 35 39), rgb(37 196 169 / 44%), rgb(9 15 21), rgb(3 5 8), rgb(29 87 134 / 46%), rgb(2 5 7)) padding-box",
    description:
      "Directional values around a conic gradient simulate light traveling around the middle surface.",
  },
  {
    id: "rim",
    label: "04",
    title: "Outer rim",
    box: "border-box",
    swatch: "rgb(104 214 198)",
    value:
      "linear-gradient(145deg, rgb(78 255 220 / 58%), rgb(19 53 61) 18%, rgb(3 6 9) 43%, rgb(45 111 170 / 55%) 70%, rgb(4 7 11)) border-box",
    description:
      "The last layer sits farthest back. A transparent border exposes only its outer ring.",
  },
];

const finalStyle = {
  border: "7px solid transparent",
  borderRadius: "34px",
  padding: "25px",
  background: layers.map((layer) => layer.value).join(", "),
  backgroundRepeat: "no-repeat",
  boxShadow:
    "0 28px 62px rgb(0 0 0 / 68%), 0 10px 22px rgb(0 16 22 / 60%), 0 0 28px rgb(34 255 213 / 8%), inset 0 1px 0 rgb(196 255 246 / 10%)",
};

const {
  background: finalBackground,
  backgroundRepeat: finalBackgroundRepeat,
  ...finalPreviewBase
} = finalStyle;

const finalPreviewStyle = {
  ...finalPreviewBase,
  "--anatomy-card-background": finalBackground,
  "--anatomy-card-background-repeat": finalBackgroundRepeat,
};

export default function LayerBreakdown() {
  const [activeLayer, setActiveLayer] = useState(layers[0].id);
  const active = layers.find((layer) => layer.id === activeLayer);

  return (
    <div className="tab-page">
      <section className="page-intro page-intro--compact">
        <div>
          <span className="page-intro__eyebrow">Paint order, made visible</span>
          <h2>One card. Four jobs. No mystery layers.</h2>
        </div>
        <p>
          The first background is closest to the viewer; each later layer is
          painted behind it. Assigning one material responsibility to each layer
          makes advanced cards easier to tune and safer to reuse.
        </p>
      </section>

      <section className="section">
        <SectionHeading
          kicker="06 · multi-layer card anatomy"
          title="Inspect the role, clipping box, and exact syntax of every layer."
          description="Select a layer to isolate its responsibility. The finished specimen and final CSS remain visible for comparison."
          badge="top layer → back layer"
        />
        <div className="breakdown-layout">
          <div className="layer-list panel" role="list">
            {layers.map((layer) => (
              <button
                type="button"
                key={layer.id}
                className={`layer-card ${activeLayer === layer.id ? "layer-card--active" : ""}`}
                onClick={() => setActiveLayer(layer.id)}
                aria-pressed={activeLayer === layer.id}
              >
                <span>{layer.label}</span>
                <i style={{ background: layer.swatch }} aria-hidden="true" />
                <div>
                  <strong>{layer.title}</strong>
                  <small>{layer.box}</small>
                </div>
              </button>
            ))}
          </div>

          <div className="layer-inspector">
            <div className="layer-inspector__stage stage-grid">
              <article className="anatomy-card" style={finalPreviewStyle}>
                <div className="anatomy-card__content">
                  <span>BG / 04 LAYERS</span>
                  <strong>Material architecture</strong>
                  <p>{active.description}</p>
                </div>
              </article>
            </div>
            <div className="layer-inspector__explanation">
              <span style={{ background: active.swatch }} aria-hidden="true" />
              <div>
                <small>{active.box}</small>
                <strong>{active.title}</strong>
                <code>{active.value}</code>
              </div>
            </div>
          </div>
        </div>
        <CodePanel
          className="code-panel--wide"
          label="Complete final construction CSS"
          code={styleObjectToRule(".layered-card", finalStyle)}
        />
      </section>

      <section className="section spec-desk">
        <SectionHeading
          kicker="Reference desk"
          title="Three rules that keep layered backgrounds predictable."
          badge="spec-anchored"
        />
        <div className="decision-grid">
          <article>
            <span>01</span>
            <strong>Paint order</strong>
            <p>The first image is closest to the user; every later image is behind it.</p>
          </article>
          <article>
            <span>02</span>
            <strong>Position versus paint</strong>
            <p>
              <code>background-origin</code> defines the positioning area.
              <code> background-clip</code> defines the visible painting area.
            </p>
          </article>
          <article>
            <span>03</span>
            <strong>Transparent border</strong>
            <p>
              A backmost border-box layer becomes a clean rim when opaque upper
              layers stop at the padding edge.
            </p>
          </article>
        </div>
        <div className="source-links">
          <a
            href="https://drafts.csswg.org/css-backgrounds/#layering"
            target="_blank"
            rel="noopener noreferrer"
          >
            CSS Backgrounds · layer order
          </a>
          <a
            href="https://drafts.csswg.org/css-backgrounds/#background-clip"
            target="_blank"
            rel="noopener noreferrer"
          >
            background-clip
          </a>
          <a
            href="https://drafts.csswg.org/css-backgrounds/#background-origin"
            target="_blank"
            rel="noopener noreferrer"
          >
            background-origin
          </a>
        </div>
      </section>
    </div>
  );
}
