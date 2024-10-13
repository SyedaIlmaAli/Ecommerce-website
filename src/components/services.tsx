import Image from "next/image";
import FreeDeliveryImg from "@/assets/image/FreeDelivery.png";
import CustomerServiceImg from "@/assets/image/CustomerService-removebg-preview.png";
import MoneyBackImg from "@/assets/image/MoneyBack-removebg-preview.png";

const Services = () => {
  return (
    <section className=" body-font mb-[100px] mt-[100px]">
      <div className="container px-5  mx-auto">
        <div className="text-center mb-10">
          <h1 className="scroll-m-20 text-myBlackHead text-xl font-extrabold tracking-tight lg:text-2xl">
            Our Services
          </h1>
          <div className="flex mt-2 justify-center">
            <div className="w-16 h-1 rounded-full bg-myMediumBlue inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {/* delivery */}
          <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
              <Image
                alt="Delivery"
                src={FreeDeliveryImg}
                className="w-60 h-30 object-fit "
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-myBlackHead group-hover:text-myMediumBlue duration-300 scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize mb-3">
                Free Delivery
              </h2>
              <p className="leading-relaxed scroll-m-20  text-base text-myBlackPara group-hover:text-myBlackPara/80 font-semibold tracking-tight">
                Free Delivery on Order Above $800
              </p>
            </div>
          </div>
          {/* 24/7 Services */}
          <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
              <Image
                alt="Delivery"
                src={CustomerServiceImg}
                className="w-30 h-20 object-fit "
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-myBlackHead group-hover:text-myMediumBlue duration-300 scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize mb-3">
                24/7 Customer Service
              </h2>
              <p className="leading-relaxed scroll-m-20  text-base text-myBlackPara group-hover:text-myBlackPara/80 font-semibold tracking-tight">
                For Queries and Questions Feel Free to Contact.
              </p>
            </div>
          </div>
          {/* Money Back Guarentee */}
          <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
              <Image
                alt="Delivery"
                src={MoneyBackImg}
                className="w-60 h-30 object-fit "
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-myBlackHead group-hover:text-myMediumBlue duration-300 scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize mb-3">
                Money Back Guarentee
              </h2>
              <p className="leading-relaxed scroll-m-20  text-base text-myBlackPara group-hover:text-myBlackPara/80 font-semibold tracking-tight">
                Get Money Back Guarentee on Damage Products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
