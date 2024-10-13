"use client";
import BestSellingCard from "@/components/bestSellingCard";
import { useAppSelector } from "../store/hooks";
import { Product } from "@/app/utils/types";
import { StaticImageData } from "next/image";
import BestSelling1 from "@/assets/image/BestSelling1.jpg";


const CategoryPage = ({ params }: { params: { category: string } }) => {
  const product = useAppSelector((state) => state.product);
  const topsData = product.filter((val) => val.category === params.category);
  return (
    <div>
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-myBlackHead text-xl font-extrabold tracking-tight lg:text-2xl capitalize">
          {params.category}
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myMediumBlue inline-flex"></div>
        </div>
      </div>
      {/* Category Page */}
      <div className="flex flex-wrap justify-center gap-5">
        {topsData.map((item: Product, i) => {
          return (
            <BestSellingCard
              key={i}
              src={(item.image && item.image.length > 0 ? item.image[0] : BestSelling1) as StaticImageData}
              alt={item.title}
              title={item.title}
              description={item.description}
              price={item.price}
              category={item.category}
              slug={item.slug}
              discount={item.discount ?? 0}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
