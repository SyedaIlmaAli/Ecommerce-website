"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { addCart, delItem, subtractItem } from "@/app/store/features/cart";

const CartCard = () => {
  const cartArray = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <>
      {cartArray.length >= 1 &&
        cartArray.map((item, i) => {
          return (
            <div key={i} className="flex px-10 py-3">
              {/* Image */}
              <Image
                src={Array.isArray(item.image) ? item.image[0] : item.image}
                alt={item.title}
                width={80}
                height={80}
                className="h-[100px] w-[100px] object-cover"
              />
              {/* some info */}
              <div className="flex items-center justify-between px-5 w-full">
                <div>
                  {/* title */}
                  <h2 className="text-sm font-semibold line-clamp-1 text-myBlackHead leading-none">
                    {item.title}
                  </h2>
                  {/* size */}
                  <p className="mt-2 text-sm text-myBlackPara/80 leading-none line-clamp-1 font-semibold">
                    <span>size:&nbsp;{item.size}</span>
                  </p>
                  {/* color */}
                  <p className="mt-2 text-sm text-myBlackPara/80 leading-none line-clamp-1 font-semibold">
                    <span>color:&nbsp;
                      <button
                        className="border-2 border-gray-300  rounded-full w-[15px] h-[15px] focus:outline-none active:border-none focus:border-none"
                        style={{ backgroundColor: item.color }}
                      /></span>
                  </p>
                  {/* quantity */}
                  <div className="flex mt-2 items-center">
                    <Button onClick={() => dispatch(subtractItem(item))} className="group bg-myBlackHead hover:bg-myWhite text-myWhite hover:text-myBlackHead w-fit h-fit rounded-lg text-xs duration-300">
                      <FaMinus className="h-2 w-2 group-hover:text-myBlackHead" />
                    </Button>
                    <div className="mr-2 font-semibold ml-2 scroll-m-20 text-sm tracking-tight text-myBlackPara/80">
                      {item.qty}
                    </div>
                    <Button onClick={() => dispatch(addCart(item))} className="group bg-myBlackHead hover:bg-myWhite text-myWhite hover:text-myBlackHead w-fit h-fit rounded-lg text-xs duration-300">
                      <FaPlus className="h-2 w-2 group-hover:text-myBlackHead" />
                    </Button>
                  </div>
                  {/* price and delete */}
                  <div className="lg:hidden mt-2 flex flex-col mr-8 items-end gap-2">
                    <div className="mr-8 ">
                      <h3 className="text-sm font-semibold line-clamp-1 text-myBlackHead leading-none">
                        <span>Price:&nbsp;</span>&#36;{item.price}
                      </h3>
                    </div>
                    <div className="mr-24 mt-1">
                      <FaTrash
                        onClick={() => dispatch(delItem(item.uuid))}
                        className="text-base cursor-pointer font-semibold leading-none line-clamp-1 text-red-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* price and delete */}
              <div className="hidden lg:flex flex-col items-end gap-5 ">
                <h3 className="text-sm font-semibold line-clamp-1 text-myBlackHead leading-none">
                  <span>Price:&nbsp;</span>&#36;
                  {item.discount! > 0
                    ? (item.price - (item.price * item.discount!) / 100) *
                      item.qty
                    : item.price * item.qty}
                </h3>
                <FaTrash
                  onClick={() => dispatch(delItem(item.uuid))}
                  className="text-base cursor-pointer font-semibold leading-none line-clamp-1 text-red-600"
                />
              </div>
            </div>
          );
        })}
    </>
  );
};

export default CartCard;
