import Image from "next/image";
import Category1 from "@/assets/image/Category1.jpg";
import Category2 from "@/assets/image/Category2.jpg";
import Category3 from "@/assets/image/Category3.jpg";
import Category4 from "@/assets/image/Category4.jpg";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="my-[100px]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-myBlackHead text-xl font-extrabold tracking-tight lg:text-2xl">
          Our Categories
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myMediumBlue inline-flex"></div>
        </div>
      </div>
      {/* Categories Starts From Here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Category 1 */}
        <div className="mb-7 lg:mb-0 overflow-hidden mx-auto z-10 group relative">
          <Link href={"/tops"}>
            <Image
              src={Category1}
              alt="Tops"
              width={350}
              height={350}
              className="rounded-xl mx-auto my-auto lg:h-[420px]  duration-500 group-hover:scale-125"
            />
            <div className="hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 bg-myBlackHead/70 text-myWhite text-center w-full text-4xl font-extrabold tracking-tight">
              <h1 className="uppercase">tops</h1>
            </div>
            <div className="block lg:hidden absolute z-[100] bottom-28 scroll-m-20 bg-myBlackHead/70 text-myWhite text-center w-full text-4xl font-extrabold tracking-tight">
              <h1 className="uppercase">tops</h1>
            </div>
          </Link>
        </div>
        {/* Category 2 */}
        <div className="mb-7 lg:mb-0 overflow-hidden mx-auto z-10 group relative">
          <Link href={"/bottoms"}>
            <Image
              src={Category2}
              alt="Bottoms"
              width={350}
              height={350}
              className="rounded-xl mx-auto my-auto lg:h-[420px] duration-500 group-hover:scale-125"
            />
            <div className="hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 bg-myBlackHead/70 text-myWhite text-center w-full text-4xl font-extrabold tracking-tight">
              <h1 className="uppercase tracking-wide">bottoms</h1>
            </div>
            <div className="block lg:hidden absolute z-[100] bottom-28 scroll-m-20 bg-myBlackHead/70 text-myWhite text-center w-full text-4xl font-extrabold tracking-tight">
              <h1 className="uppercase tracking-wide">bottoms</h1>
            </div>
          </Link>
        </div>
        {/* Category 3 */}
        <div className="mb-7 lg:mb-0 overflow-hidden mx-auto z-10 group relative">
          <Link href={"/accessories"}>
            <Image
              src={Category3}
              alt="Accessories"
              width={350}
              height={350}
              className="rounded-xl mx-auto my-auto lg:h-[420px] duration-500 group-hover:scale-125"
            />
            <div className="hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 bg-myBlackHead/70 text-myWhite text-center w-full text-4xl font-extrabold tracking-tight">
              <h1 className="uppercase ">accessories</h1>
            </div>
            <div className="block lg:hidden z-[100] absolute bottom-28 scroll-m-20 bg-myBlackHead/70 text-myWhite text-center w-full text-4xl font-extrabold tracking-tight">
              <h1 className="uppercase ">accessories</h1>
            </div>
          </Link>
        </div>
        {/* Category 4 */}
        <div className="mb-7 lg:mb-0 overflow-hidden mx-auto z-10 group relative">
          <Link href={"/shoes"}>
            <Image
              src={Category4}
              alt="Shoes"
              width={350}
              height={350}
              className="rounded-xl mx-auto my-auto lg:h-[420px] duration-500 group-hover:scale-125"
            />
            <div className="hidden lg:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 bg-myBlackHead/70 text-myWhite text-center w-full text-4xl font-extrabold tracking-tight">
              <h1 className="uppercase ">shoes</h1>
            </div>
            <div className="block lg:hidden z-[100] absolute bottom-28 scroll-m-20 bg-myBlackHead/70 text-myWhite text-center w-full text-4xl font-extrabold tracking-tight">
              <h1 className="uppercase">shoes</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
