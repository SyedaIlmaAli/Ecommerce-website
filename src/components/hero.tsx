import { Button } from "./ui/button";
import { AiFillShopping } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="mb-[100px]">
      <div className="hero min-h-[80vh] custom-img bg-fixed bg-center bg-no-repeat">
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myWhite">
              Timeless <span className="text-myLightBlue">Beauty</span>
            </h1>
            <p className="mb-5 scroll-m-20 text-xl text-myWhite font-semibold tracking-tight">
              Discover effortlessly stylish and beautifully crafted pieces
              designed to celebrate your unique essence.
            </p>
            <Button className="outline outline-offset-2 outline-1 rounded text-myLightBlue group hover:scale-105 duration-300 hover:outline-myDarkBlue">
              <AiFillShopping className="mr-2 h-6 w-6 group-hover:text-myDarkBlue group-hover:animate-bounce" />{" "}
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
