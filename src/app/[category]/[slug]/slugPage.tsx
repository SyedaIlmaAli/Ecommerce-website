"use client";

import SlugComponent from "@/components/slugComponents";
import { Button } from "@/components/ui/button";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import { useAppSelector } from "@/app/store/hooks";
import { useState } from "react";
import AddToCartToast from "@/components/addToCartToast";

const SlugPage = ({ params }: { params: { slug: string } }) => {
  const product = useAppSelector((state) => state.product);
  const slug = product.filter((val) => val.slug === params.slug);

  // Handle possible undefined values for images
  const [cartItem, setCartItem] = useState({
    id: slug[0].id,
    title: slug[0].title,
    image: slug[0].image || [], // Ensure it's always an array or fallback to an empty array
    slug: slug[0].slug,
    price: slug[0].price,
    description: slug[0].description,
    category: slug[0].category,
    size: slug[0].size[0],
    qty: slug[0].qty,
    discount: slug[0].discount,
    color: slug[0].color[0],
  });

  return (
    <div>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <SlugComponent image={slug[0].image || []} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {/* title */}
            <h2 className="scroll-m-20 text-sm font-semibold  text-gray-500 tracking-widest uppercase">
              {slug[0].category}
            </h2>
            {/* heading */}
            <h1 className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead">
              {slug[0].title}
            </h1>
            {/* ratings */}
            <div className="rating rating-sm mt-2">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myMediumBlue"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myMediumBlue"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myMediumBlue"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myMediumBlue"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myMediumBlue"
              />
            </div>

            {/* description */}
            <p className="leading-relaxed mt-2 scroll-m-20 text-base text-myBlackPara font-normal tracking-tight">
              {slug[0].description}
            </p>
            <div className="flex mt-6 items-center mb-5">
              {/* colors */}
              <div className="flex">
                <span className="mr-1 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight">
                  {slug[0].color.map((item, i) => {
                    return (
                      <button
                        key={i}
                        onClick={() =>
                          setCartItem({ ...cartItem, color: item })
                        }
                        className="border-2 border-gray-300  rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black"
                        style={{ backgroundColor: item }}
                      />
                    );
                  })}
                </span>
              </div>
              {/* size */}
              <div className="flex ml-6 items-center">
                <span className="mr-3 scroll-m-20 text-myBlackHead text-base font-semibold tracking-tight">
                  Size
                </span>
                <label className="form-control w-full max-w-xs">
                  <select
                    onChange={(e) =>
                      setCartItem({ ...cartItem, size: e.target.value })
                    }
                    className="select select-bordered"
                  >
                    <option disabled selected>
                      Select Size
                    </option>
                    {slug[0].size.map((item, i) => {
                      return <option key={i}>{item}</option>;
                    })}
                  </select>
                </label>
              </div>
            </div>
            {/* quantity */}
            <div className="flex items-center">
              <span className="mr-3 scroll-m-20 text-myBlackHead text-base font-semibold tracking-tight">
                Quantity
              </span>
              <Button
                onClick={() =>
                  setCartItem({
                    ...cartItem,
                    qty: cartItem.qty <= 1 ? 1 : --cartItem.qty,
                  })
                }
                className="group bg-myBlackHead text-myWhite hover:bg-transparent w-fit h-fit hover:text-myBlackHead rounded scroll-m-20 text-xs font-semibold tracking-tight"
              >
                <FaMinus className="mr-2 h-4 w-4 group-hover:text-myMediumBlue" />
                Less
              </Button>
              <div className="mr-2 ml-2 scroll-m-20 text-base font-semibold tracking-tight">
                {cartItem.qty}
              </div>
              <Button
                onClick={() =>
                  setCartItem({ ...cartItem, qty: ++cartItem.qty })
                }
                className="group bg-myBlackHead text-myWhite hover:bg-transparent w-fit h-fit hover:text-myBlackHead rounded scroll-m-20 text-xs font-semibold tracking-tight"
              >
                <FaPlus className="mr-2 h-4 w-4 group-hover:text-myMediumBlue" />
                Add
              </Button>
            </div>
            {/* divider */}
            <div className="divider"></div>
            <div className="flex items-center justify-between">
              {/* price */}

              <div>
                <span
                  className={`scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead
    ${
      cartItem?.discount && cartItem.discount > 0
        ? "line-through decoration-2 decoration-myMediumBlue/70"
        : ""
    }
  `}
                >
                  ${cartItem.price * cartItem.qty}
                </span>

                {/* discounted price */}
                {cartItem?.discount && cartItem.discount > 0 && (
                  <span className="ml-3 scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead">
                    $
                    {(cartItem.price -
                      (cartItem.price * cartItem.discount) / 100) *
                      cartItem.qty}
                  </span>
                )}
              </div>
              {/* add to cart */}
              <AddToCartToast cartItem={cartItem} />
            </div>
            {/* buy now */}
            <Button className="group w-full mt-3 bg-myBlackHead text-myWhite hover:bg-transparent hover:text-myBlackHead rounded scroll-m-20 text-xs font-semibold tracking-tight">
              <FaHeart className="mr-2 h-4 w-4 group-hover:text-myMediumBlue" />
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlugPage;
