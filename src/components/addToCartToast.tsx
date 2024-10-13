"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "./ui/button";
import { FaShoppingCart } from "react-icons/fa";
import { useAppDispatch } from "@/app/store/hooks";
import { addToCart } from "@/app/store/features/cart";
import { StaticImageData } from "next/image";

interface CartItem {
  id: number;
  title: string;
  image: string[] | StaticImageData[] | undefined;
  slug: string;
  price: number;
  description: string;
  category: string;
  size: string;
  qty: number;
  discount: number | undefined;
  color: string;
};

const AddToCartToast = ({ cartItem }: { cartItem: CartItem }) => {
  const notify = () =>
    toast.info("Product Added Sucessfully", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const dispatch = useAppDispatch();

  return (
    <>
      <div onClick={() => dispatch(addToCart(cartItem))}>
        <Button
          onClick={notify}
          className="group bg-myBlackHead text-myWhite hover:bg-transparent hover:text-myBlackHead rounded scroll-m-20 text-xs font-semibold tracking-tight"
        >
          <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myMediumBlue" />
          Add to Cart
        </Button>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default AddToCartToast;
