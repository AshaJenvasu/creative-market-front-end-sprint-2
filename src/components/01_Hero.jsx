import bgImage from "../assets/images/hero-img.png";
import creativeText from "../assets/logos/hero.svg";

const Hero = () => {
  return (
    <section className="relative h-auto pb-12">
      {/* 1. Background Image (PNG) */}
      <div className="absolute flex w-full inset-0 ">
        <img
          src={bgImage}
          alt="Background"
          className="object-cover h-full w-full"
        />
      </div>
      {/* 2. Content (SVG & Text) */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="text-white mt-12 mb-0 text-2xl">We are providing</p>
        <img src={creativeText} alt="Creative Text" className="w-[80%] mt-0" />
        <p className="text-white font-medium text-xl mt-22">
          MANUALLY CRAFTED • HUMAN ART ONLY
        </p>
      </div>
    </section>
  );
};

export default Hero;
