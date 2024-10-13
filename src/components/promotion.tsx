const Promotion = () => {
  return (
    <section className="mb-[100px] mt-[100px]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-myBlackHead text-xl font-extrabold tracking-tight lg:text-2xl">
          Our Promotions
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myMediumBlue inline-flex"></div>
        </div>
      </div>
      {/* Promotion Starts Here */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Content */}
        <div className="hero h-[25rem] promo-1 rounded-xl hover:scale-105 duration-200 cursor-pointer">
          <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className=" scroll-m-20  text-4xl font-bold uppercase text-myWhite tracking-tight first:mt-0">
                Get upto <span className="text-myLightBlue">60%</span> off!
              </h1>
              <p className="mt-2 scroll-m-20 text-base font-medium text-myWhite tracking-tight">
                Get up to 60% off on your favorite styles at Aura Tales – Shop
                now and save big!
              </p>
            </div>
          </div>
        </div>
        {/* Right Content */}
        <div
          className="hero h-[25rem] promo-2 rounded-xl hover:scale-105 duration-200 cursor-pointer
                    "
        >
          <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className=" scroll-m-20  text-4xl font-bold uppercase text-myWhite tracking-tight first:mt-0">
                Get upto <span className="text-myLightBlue">30%</span> off!
              </h1>
              <p className="mt-2 scroll-m-20 text-base font-medium text-myWhite tracking-tight">
                Grab 30% off on stunning new arrivals at Aura Tales – Style up
                without breaking the bank!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
