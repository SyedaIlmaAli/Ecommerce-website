"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface ImageType {
  image: string | string[] | StaticImageData[];
}

const SlugComponent = ({ image }: ImageType) => {
  // Ensure image is an array, otherwise, fallback to an empty array or a default value
  const imagesArray = Array.isArray(image) ? image : [image];

  const [path, setPath] = useState(imagesArray[0]); // Set the first image as the initial path

  return (
    <div>
      <Image
        src={path}
        alt="ecommerce"
        width={400}
        height={400}
      />

      <div className="flex items-center justify-evenly mx-auto mt-2">
        {/* Only map over the array if it's an array, else just render a fallback */}
        {imagesArray.map((item, i) => (
          <div key={i} className="cursor-pointer w-16 h-16">
            <Image
              width={60}
              height={60}
              src={item}
              onClick={() => setPath(item)} // Update the displayed image when clicked
              alt="shirt"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlugComponent;
