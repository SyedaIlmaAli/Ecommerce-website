"use client";
import BestSellingCard from "@/components/bestSellingCard";
import { useAppSelector } from "../store/hooks";

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
        {topsData.map((item: any, i) => {
          return (
            <BestSellingCard
              key={i}
              src={item.image[0]}
              alt={item.title}
              title={item.title}
              description={item.description}
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

export default CategoryPage;
