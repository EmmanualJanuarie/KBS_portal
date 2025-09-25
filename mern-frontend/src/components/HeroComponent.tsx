import ButtonComponent from "./ButtonComponent";
import VerticalCarouselComponent from "./VerticalCarouselComponent";

/**
 * Contains the set tailwind layout structure for the hero section.
 * 
 * @function HeroComponent
 * @returns Tailwind layout for hero component 
 */
export default function HeroComponent(){
    return(
        <div className="w-full">
  <div className="flex flex-col md:flex-row justify-center items-center">
    {/* LEFT COLUMN */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-start">
      <div className="text-center md:text-left max-w-lg mx-auto">
        <h1 id="heroHeading">Your Corporate & Entrepreneurial Growth Portal</h1>
        <h2 id="heroSubHeading">
          Empowering businesses, teams, and ambitious individuals with paid courses, 
          workshops, and actionable learning insights for measurable success.
        </h2>
        <div id="heroButton" className="mt-6">
          <ButtonComponent name="Get Started" setClassName="btn-type-3" />
        </div>
      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div className="md:flex w-1/2 justify-center">
      <div className="flex flex-wrap gap-10">
        <VerticalCarouselComponent setClassName="carousel-height carousel-w" />
        <VerticalCarouselComponent setClassName="carousel-height carousel-w" reverseDirection />
      </div>
    </div>
  </div>
</div>
        
    );
}