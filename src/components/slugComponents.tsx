"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface ImageType {
  image: string | string[] | StaticImageData[];
}

const SlugComponent = ({ image }: ImageType) => {
  const [path, setPath] = useState<string | StaticImageData>(image[0]);

  const renderImages = () => {
    if (Array.isArray(image)) {
      return image.map((item, i) => (
        <div key={i} className="cursor-pointer w-16 h-16">
          <Image
            width={60}
            height={60}
            src={item}
            onClick={() => setPath(item)}
            alt={`image-${i}`}
          />
        </div>
      ));
    }
    return null;
  };

  return (
    <div>
      <Image
        src={path ? path : ""}
        alt="ecommerce"
        width={400}
        height={400}
      />
      <div className="flex items-center justify-evenly mx-auto mt-2">
        {renderImages()}
      </div>
    </div>
  );
};

export default SlugComponent;
