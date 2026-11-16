import {
  atelierGradientRecipes,
  repeatedGradientRecipes,
} from "../../data/gradientRecipes";
import GradientGallery from "./GradientGallery";
import RecipePicker from "./RecipePicker";
import ReferenceCardStudio from "./ReferenceCardStudio";
import SurfaceGallery from "./SurfaceGallery";

export default function CardDesigns() {
  return (
    <div className="tab-page tab-page--cards">
      <section className="page-intro">
        <div>
          <span className="page-intro__eyebrow">The surface library</span>
          <h2>
            Build the material,
            <br />
            then copy the truth.
          </h2>
        </div>
        <p>
          Every live control now feeds the same values used to generate its code.
          Explore foundational surfaces, rebuild the retained reference cards stop by
          stop, or step into the layered-gradient collections.
        </p>
        <div className="page-intro__metrics">
          <div>
            <strong>43</strong>
            <span>card recipes</span>
          </div>
          <div>
            <strong>26</strong>
            <span>layered plates</span>
          </div>
          <div>
            <strong>0</strong>
            <span>generated-content tricks</span>
          </div>
        </div>
      </section>

      <SurfaceGallery />
      <ReferenceCardStudio />
      <RecipePicker />
      <GradientGallery
        recipes={repeatedGradientRecipes}
        sectionId="repeated-gradient-picker"
        kicker="07B · repeated gradient layer picker"
        title="Repeated-gradient card variations across content-box, padding-box, and border-box layers."
        description="Twelve retained designs remain intact. The earlier Topographic Contour Plate and Deepsea Sonar Plate replacements stay in place; Cinder Relief Atlas and Signal Array Slab are now replaced by Coral Orbit Registry and Cornerwave Resonance Deck. Every displayed snippet is generated from the exact recipe rendering the selected card."
        badge="12 retained · 4 redesigned"
      />
      <GradientGallery
        recipes={atelierGradientRecipes}
        sectionId="atelier-layered-surfaces"
        kicker="07C · atelier layered surface collection"
        title="Ten showcase cards designed as complete material systems."
        description="Aurora Mineral Registry, Obsidian Kintsugi Ledger, and Rose Quartz Data Reliquary remain intact. Seven new CSS-only systems translate the supplied references into distinct biomorphic, topographic, halftone, spherical, particle, architectural, and crossbeam materials."
        badge="3 retained · 7 new systems"
        premium
      />
    </div>
  );
}
