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
            <strong>41</strong>
            <span>card recipes</span>
          </div>
          <div>
            <strong>24</strong>
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
        description="The original collection remains broad, but its previews and snippets now use the exact same recipe. Cinder Relief Atlas and Abyssal Biolume Observatory completely replace the two weakest plates."
        badge="16 repaired recipes"
      />
      <GradientGallery
        recipes={atelierGradientRecipes}
        sectionId="atelier-layered-surfaces"
        kicker="07C · atelier layered surface collection"
        title="Eight original showcase cards designed as complete material systems."
        description="This premium collection coordinates content, bevel, rim, typography, and shadow instead of treating gradients as decoration. Each recipe has a distinct visual thesis and remains directly reusable."
        badge="8 all-new premium systems"
        premium
      />
    </div>
  );
}
