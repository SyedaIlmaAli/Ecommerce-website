"use client"

import CartCard from "@/components/cartCard";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "../store/hooks";

const CartPage = () => {
    const cartArray = useAppSelector(state => state.cart)
    const total = cartArray.reduce((total, arr) => {
        return(
            (total + ((arr.price - (arr.price * arr.discount!)/100))*arr.qty)
        )
    },0)

  return (
    <div className="grid  lg:grid-cols-3 grid-cols-1 ">
        {/* items */}
        <div className="col-span-2">
          <CartCard />
        </div>
        {/* summary */}
        <div className="bg-myBlackHead/5 p-5 rounded-xl">
          123
          {/* heading */}
          <h2 className="uppercase scroll-m-20 text-lg font-semibold tracking-tight text-myBlackHead">
            order summary
          </h2>
          {/* divider */}
          <div className="divider mt-0 mb-1"></div>
          {/* pricing */}
          {/* product 1 price */}
          <div className="text-sm font-medium text-myBlackPara tracking-tight">
            <div className="flex items-center justify-between capitalize">
              <h2>sub total</h2>
              <h2>${total}</h2>
            </div>
            {/* delivery charges */}
            <div className="flex items-center justify-between capitalize">
              <h2>Delivery Charges</h2>
              <h2>TBD</h2>
            </div>
            {/* Sales Tax */}
            <div className="flex items-center justify-between capitalize">
              <h2>Sales Tax</h2>
              <h2>TBD</h2>
            </div>
          </div>
          {/* divider */}
          <div className="divider mt-0 mb-1"></div>
          {/* Estimate Total */}
          <div className="flex items-center justify-between uppercase font-semibold tracking-tight text-sm text-myBlackHead">
            <h2>Estimated Total</h2>
            <h2>${total}</h2>
          </div>
          {/* divider */}
          <div className="divider mt-0 mb-1"></div>
          {/* checkout btn */}
          <div className="flex items-center justify-center w-full">
            <Button
              className="bg-myBlackHead hover:bg-transparent duration-300 text-myWhite hover:text-myBlackHead
            scroll-m-20 text-xs font-semibold tracking-tight hover:shadow-md rounded-xl uppercase"
            >
              proceed to checkout
            </Button>
          </div>
          {/* divider */}
          <div className="divider mt-0 mb-1"></div>
          {/* note */}
          <p
            className="text-xs font-semibold tracking-tight  text-myBlackPara w-[97%] 
           text-center italic"
          >
            {`Delivery and Sales Tax will be calculated in Checkout Page.`}
          </p>
        </div>
      </div>
  )
}

export default CartPage
