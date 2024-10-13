"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BestSellingCard from "@/components/bestSellingCard";
import { useAppSelector } from "@/app/store/hooks";

const FeaturedProducts = () => {
  // Craousel settings

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  //   Featured product data

  const sellingData = useAppSelector((state) => state.product.slice(0, 8));

  return (
    <div className="mt-[100px] mb-[100px]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-myBlackHead text-xl font-extrabold tracking-tight lg:text-2xl capitalize text-center">
          Featured Products
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myMediumBlue inline-flex"></div>
        </div>
      </div>
      {/* Carousel */}
      <Slider {...settings}>
        {sellingData.map((item: any, i) => {
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
      </Slider>
    </div>
  );
};

export default FeaturedProducts;
