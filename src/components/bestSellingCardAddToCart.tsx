"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { FaShoppingCart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { useState } from "react";
import { addToCart } from "@/app/store/features/cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BestSellingCardAddToCart = ({ slug }: { slug: string }) => {
  // calling products
  const product = useAppSelector((state) => state.product).find(
    (val) => val.slug == slug
  );
  // setting cart item
  const [cartItem, setCartItem] = useState({
    id: product?.id,
    title: product?.title,
    image: product?.image,
    slug: product?.slug,
    price: product?.price,
    description: product?.description,
    category: product?.category,
    size: product?.size[0],
    qty: product?.qty,
    discount: product?.discount,
    color: product?.color[0],
  });

  // add to cart
  const dispatch = useAppDispatch();

  // toast notification
  const notify = () =>
    toast.info("Product Added Successfully", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="group bg-myBlackHead text-myWhite hover:bg-transparent hover:text-myBlackHead rounded scroll-m-20 text-xs font-semibold tracking-tight">
            <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myMediumBlue" />
            Add to Cart
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          {/* size */}
          <div className="flex items-center">
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
                {product?.size.map((item, i) => {
                  return <option key={i}>{item}</option>;
                })}
              </select>
            </label>
          </div>
          {/* colors */}
          <div className="flex mt-5">
            <span className="mr-1 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight">
              {product?.color.map((item, i) => {
                return (
                  <button
                    key={i}
                    onClick={() => setCartItem({ ...cartItem, color: item })}
                    className="border-2 border-gray-300 bg-purple-600 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black"
                    style={{ backgroundColor: item }}
                  />
                );
              })}
            </span>
          </div>
          {/* add to cart */}
          <Button
            onClick={() => {
              dispatch(addToCart(cartItem));
              notify();
            }}
            className="group mt-5 w-full bg-myBlackHead text-myWhite hover:bg-transparent hover:text-myBlackHead rounded scroll-m-20 text-xs font-semibold tracking-tight"
          >
            <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myMediumBlue" />
            Add to Cart
          </Button>
        </PopoverContent>
      </Popover>
      <ToastContainer />
    </div>
  );
};

export default BestSellingCardAddToCart;
