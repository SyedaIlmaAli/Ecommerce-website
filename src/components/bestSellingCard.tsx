import Image, { StaticImageData } from "next/image";
import {  FaHeart } from "react-icons/fa";
import { Button } from "./ui/button";
import Link from "next/link";
import BestSellingCardAddToCart from "./bestSellingCardAddToCart";

interface BestSellingCard {
  src: StaticImageData;
  alt: string;
  title: string;
  description: string;
  price: number;
  category: string;
  slug: string;
  discount: number;
}

const BestSellingCard = ({
  src,
  alt,
  title,
  description,
  price,
  category,
  slug,
  discount,
}: BestSellingCard) => {
  return (
    <div className="max-w-[350px] h-[35rem] mx-auto p-4 shadow-md rounded-xl relative group">
      {/* Image Div */}
      <Link href={`/${category}/${slug}`}>
        <div className="block  h-[23rem] rounded overflow-hidden object-fill">
          <Image src={src} alt={alt} />
        </div>
        {/* Typography Div */}
        <div className="mt-4">
          {title && (
            <h2 className="scroll-m-20 border-b pb-2 text-lg text-myBlackHead font-semibold line-clamp-1 tracking-tight first:mt-0">
              {title}
            </h2>
          )}
          {description && (
            <p className="scroll-m-20 text-sm line-clamp-1 font-semibold mt-2 tracking-tight text-myBlackPara">
              {description}
            </p>
          )}
          {price && (
            <div className="flex gap-4">
              <p
                className={`scroll-m-20 text-base line-clamp-1 font-semibold mt-2 tracking-tight text-myBlackHead ${
                  discount > 0 &&
                  "line-through decoration-2 decoration-myMediumBlue/70 "
                }`}
              >
                ${price}
              </p>
              {/* discounted price */}
              {discount > 0 && (
                <p className="scroll-m-20 text-base line-clamp-1 font-semibold mt-2 tracking-tight text-myBlackHead">
                  ${(price - (price * discount) / 100)}
                </p>
              )}
            </div>
          )}
        </div>
      </Link>
      {/* Button Div */}
      <div>
        
        <div className="absolute right-2 bottom-2">
        <BestSellingCardAddToCart slug={slug}/>
        </div>
        
        <Button className="group bg-myBlackHead text-myWhite hover:bg-transparent hover:text-myBlackHead rounded absolute bottom-2 left-2 scroll-m-20 text-xs font-semibold tracking-tight">
          <FaHeart className="mr-2 h-4 w-4 group-hover:text-myMediumBlue" />
          Buy Now
        </Button>
        {discount> 0 && (
          <div className="scroll-m-20 font-semibold text-xs tracking-tight text-myLightBlue bg-myMediumBlue absolute top-0 left-2 w-[87px] p-2 text-center uppercase 
          rounded-tl-xl rounded-bl-xl myDiscount">
            {`${discount}% off`}
          </div>
        )}
      </div>
    </div>
  );
};

export default BestSellingCard;
