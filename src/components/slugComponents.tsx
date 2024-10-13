"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

const SlugComponent = ({image}: string| string[] | StaticImageData[] | any) => {
  const [path, setPath] = useState(image[0]);
  
  return (
    <div>
      <Image
        src={path ? path : image[0]}
        alt="ecommerce "
        width={400}
        height={400}
      />
      <div className="flex items-center justify-evenly mx-auto mt-2">
        {image.map((item: StaticImageData, i: number) => {
        <div key={i} className="cursor-pointer w-16 h-16">
          <Image
            width={60}
            height={60}
            src={item}
            onClick={() => setPath(item)}
            alt="shirt"
          />
        </div>
        })}
      </div>
    </div>
  );
};

export default SlugComponent;
