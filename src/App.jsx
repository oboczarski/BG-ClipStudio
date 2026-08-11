import { useEffect, useState } from "react";
import Tabs from "./components/Tabs";
import LayerBreakdown from "./features/breakdown/LayerBreakdown";
import CardDesigns from "./features/cards/CardDesigns";
import FontGallery from "./features/fonts/FontGallery";
import LiquidGlassLab from "./features/glass/LiquidGlassLab";
import OriginLab from "./features/origin/OriginLab";
import TextLab from "./features/text/TextLab";

const tabs = [
  { id: "card-designs", label: "Card designs", count: "43" },
  { id: "layer-anatomy", label: "Layer anatomy", count: "04" },
  { id: "origin-lab", label: "Origin lab", count: "04" },
  { id: "text-lab", label: "Text lab", count: "16" },
  { id: "liquid-glass", label: "Liquid glass", count: "10" },
  { id: "font-gallery", label: "Font gallery", count: "63" },
];

function readInitialTab() {
  const hash = window.location.hash.replace("#", "");
  return tabs.some((tab) => tab.id === hash) ? hash : tabs[0].id;
}

function AppHeader() {
  return (
    <header className="app-header">
      <div className="brand-row">
        <a className="brand" href="#top" aria-label="CSS Surface Foundry home">
          <span className="brand__mark">
            <i />
            <i />
            <i />
          </span>
          <span>
            <strong>Surface Foundry</strong>
            <small>CSS material systems / v2.0</small>
          </span>
        </a>
        <div className="build-status">
          <span />
          <div>
            <strong>Exact-output mode</strong>
            <small>preview data = copied data</small>
          </div>
        </div>
      </div>

      <section className="hero" id="top">
        <div className="hero__copy">
          <div className="hero__eyebrow">
            <span>Advanced CSS field manual</span>
            <small>React · vanilla CSS · zero animation</small>
          </div>
          <h1>
            A playground for
            <span> surfaces worth stealing.</span>
          </h1>
          <p>
            Explore layered cards, edit real gradient stops, understand background
            geometry, forge production-ready text, build liquid glass with optical
            depth, and audition a complete font library. Every specimen ships with
            code generated from the exact values on screen.
          </p>
          <div className="hero__actions">
            <a href="#studio-tabs" className="button button--primary">
              Enter the foundry
            </a>
            <span>140 practical specimens · 5 full workbenches</span>
          </div>
        </div>

        <div className="hero__visual" aria-label="Layered CSS material specimen">
          <div className="hero-orb hero-orb--mint" />
          <div className="hero-orb hero-orb--violet" />
          <div className="hero-material">
            <div className="hero-material__register">
              <span>SPECIMEN / 001</span>
              <small>content · bevel · rim · shadow</small>
            </div>
            <img src="/dynasty-hub-mark.png" alt="Dynasty Hub mark" />
            <div className="hero-material__footer">
              <strong>Layer truth</strong>
              <span>5 paint layers</span>
            </div>
          </div>
          <div className="hero-index hero-index--left">
            <span>α</span>
            <strong>CONTENT</strong>
          </div>
          <div className="hero-index hero-index--right">
            <span>γ</span>
            <strong>BORDER</strong>
          </div>
        </div>
      </section>
    </header>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState(readInitialTab);

  useEffect(() => {
    const handleHashChange = () => setActiveTab(readInitialTab());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  function changeTab(nextTab) {
    setActiveTab(nextTab);
    window.history.replaceState(null, "", `#${nextTab}`);
  }

  return (
    <div className="app-shell" data-active-tab={activeTab}>
      <AppHeader />
      <div id="studio-tabs">
        <Tabs tabs={tabs} activeTab={activeTab} onChange={changeTab} />
      </div>

      <main className="app-main">
        <section
          id="panel-card-designs"
          role="tabpanel"
          aria-labelledby="tab-card-designs"
          hidden={activeTab !== "card-designs"}
        >
          <CardDesigns />
        </section>
        <section
          id="panel-layer-anatomy"
          role="tabpanel"
          aria-labelledby="tab-layer-anatomy"
          hidden={activeTab !== "layer-anatomy"}
        >
          <LayerBreakdown />
        </section>
        <section
          id="panel-origin-lab"
          role="tabpanel"
          aria-labelledby="tab-origin-lab"
          hidden={activeTab !== "origin-lab"}
        >
          <OriginLab />
        </section>
        <section
          id="panel-text-lab"
          role="tabpanel"
          aria-labelledby="tab-text-lab"
          hidden={activeTab !== "text-lab"}
        >
          <TextLab />
        </section>
        <section
          id="panel-liquid-glass"
          role="tabpanel"
          aria-labelledby="tab-liquid-glass"
          hidden={activeTab !== "liquid-glass"}
        >
          <LiquidGlassLab />
        </section>
        <section
          id="panel-font-gallery"
          role="tabpanel"
          aria-labelledby="tab-font-gallery"
          hidden={activeTab !== "font-gallery"}
        >
          <FontGallery />
        </section>
      </main>

      <footer className="app-footer">
        <div>
          <span className="brand__mark brand__mark--small">
            <i />
            <i />
            <i />
          </span>
          <div>
            <strong>CSS Surface Foundry v2.0</strong>
            <p>
              Rebuilt as a React application with authored vanilla CSS, structured
              recipe data, and no animation or generated-content dependencies.
            </p>
          </div>
        </div>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  );
}
