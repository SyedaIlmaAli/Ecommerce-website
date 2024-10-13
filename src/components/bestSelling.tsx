"use client"

import { useAppSelector } from "@/app/store/hooks";
import BestSellingCard from "./bestSellingCard";

const BestSelling = () => {
  const product = useAppSelector((state) => state.product);
  const sellingData = product.slice(0,3)

  return (
    <div className="my-[100px]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-myBlackHead text-xl font-extrabold tracking-tight lg:text-2xl">
          Best Selling Products
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myMediumBlue inline-flex"></div>
        </div>
      </div>
      {/* Best Selling Products */}
      <div className="flex flex-wrap justify-center gap-5">
        {sellingData.map((item:any, i) => {
          return (
            <BestSellingCard
            key={i}
              src={item.image[0]}
              alt={item.title}
              title={item.title}
              description={item.desc}
              price={item.price}
              category={item.category}
              slug={item.slug}
              discount={item.discount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BestSelling;
