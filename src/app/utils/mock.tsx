import { Product } from "./types";
import whiteSweater from "@/assets/image/whiteSweater.jpg";
import BestSelling1 from "@/assets/image/BestSelling1.jpg";
import HeelsImg from "@/assets/image/Heels.jpg";
import jeans from "@/assets/image/jeans.jpeg";
import pants from "@/assets/image/pants.webp";
import pantandshirt from "@/assets/image/pant and shirt.jpg";
import pantandshirt1 from "@/assets/image/pant and shirt 1.jpg";
import whiteTop from "@/assets/image/white-top.jpg";
import whiteHeels from "@/assets/image/white heels.jpg";
import earings from '@/assets/image/earings.jpg'
import sunglasses from '@/assets/image/sunglasses.jpg'

export const products: Product[] = [
  {
    id: 1,
    title: "Plaid Shirt and Wide-Leg Jeans Set",
    image: [BestSelling1],
    slug: "plaid-shirt-jeans-set",
    price: 60,
    description:
      "Casual plaid shirt paired with wide-leg jeans for a relaxed, effortless look.",
    category: "tops",
    size: ["S", "M", "L", "XL"],
    color: ["Blue", "Plaid"],
    qty: 1,
    discount: 50,
  },
  {
    id: 2,
    title: "Red Satin Heels with Embellished Detail",
    image: [HeelsImg],
    slug: "red-satin-heels",
    price: 80,
    description: "Elegant red satin heels featuring a chic embellished accent.",
    category: "shoes",
    size: ["6", "7", "8", "9"],
    color: ["Red"],
    qty: 1,
    discount: 1,
  },
  {
    id: 3,
    title: "Embroidered White Sweater",
    image: [whiteSweater],
    slug: "embroidered-white-sweater",
    price: 120,
    description: "Elegant white sweater with intricate beading and embroidery, featuring a subtle chevron pattern and textured accents. Perfect for a sophisticated, modern look.",
    category: "tops",
    size: ["XS", "S", "M", "L", "XL"],
    color: ["White", "Gray", "Black"],
    qty: 1,
    discount: 15
  },
  {
    id: 4,
    title: "High-Waist Blue Jeans",
    image: [jeans], // You can replace this with the actual image path or import as StaticImageData.
    slug: "high-waist-blue-jeans",
    price: 50,
    description:
      "Comfortable and stylish high-waist blue jeans perfect for casual wear.",
    category: "bottoms",
    size: ["S", "M", "L", "XL"],
    color: ["Blue"],
    qty: 1,
    discount: 10, // 10% discount
  },
  {
    id: 5,
    title: "Pinstripe Formal Trousers",
    image: [pants], // Replace with the actual image path or StaticImageData.
    slug: "pinstripe-formal-trousers",
    price: 70,
    description:
      "Elegant pinstripe trousers that offer a sharp and sophisticated look, perfect for professional or formal occasions.",
    category: "bottoms",
    size: ["S", "M", "L", "XL"],
    color: ["Black", "White Stripes", "Blue"],
    qty: 1,
    discount: 20,
  },
  {
    id: 6,
    title: "Casual Loose-Fit Green Pants",
    image: [pantandshirt], // Replace with the actual image path or StaticImageData.
    slug: "casual-loose-fit-green-pants",
    price: 45,
    description:
      "Relaxed loose-fit green pants, perfect for a casual and laid-back look with a touch of style.",
    category: "bottoms",
    size: ["S", "M", "L"],
    color: ["Green", "Yellow"],
    qty: 1,
    discount: 20, // 20% discount
  },
  {
    id: 7,
    title: "Striped Sleeveless Top",
    image: [pantandshirt], // Replace with the actual image path or StaticImageData.
    slug: "striped-sleeveless-top",
    price: 30,
    description:
      "Vibrant sleeveless top with red, white, and blue stripes, ideal for a bold and casual summer look.",
    category: "tops",
    size: ["S", "M", "L"],
    color: ["Multicolor", "Red", "Black"],
    qty: 1,
    discount: 10, // 10% discount
  },
  {
    id: 8,
    title: "Brown Plaid Wide-Leg Pants",
    image: [pantandshirt1], // Assuming the image will be available at this path
    slug: "brown-plaid-wide-leg-pants",
    price: 60,
    description:
      "High-waisted brown plaid wide-leg pants with a tailored fit. Perfect for casual or professional looks, featuring subtle details and a stylish design.",
    category: "bottoms",
    size: ["S", "M", "L"],
    color: ["brown", "plaid"],
    qty: 1,
    discount: 10,
  },
  {
    id: 9,
    title: "Versace Graphic Tee",
    image: [pantandshirt1], // Assuming the image will be available at this path
    slug: "versace-graphic-tee",
    price: 80,
    description:
      "Classic white Versace graphic t-shirt with a relaxed fit. Soft cotton fabric with a bold logo print, perfect for casual wear and street style.",
    category: "tops",
    size: ["S", "M", "L"],
    color: ["white", "black print"],
    qty: 1,
    discount: 40,
  },
  {
    id: 10,
    title: "Chic White Long-Sleeve Top",
    image: [whiteTop], // Assuming the image will be available at this path
    slug: "chic-white-long-sleeve-top",
    price: 70,
    description:
      "Elegant white long-sleeve top with a modern choker neckline. Made from a soft fabric with a flowy fit, it's perfect for formal or casual occasions.",
    category: "tops",
    size: ["S", "M", "L"],
    color: ["white"],
    qty: 1,
    discount: 0,
  },
  {
    id: 11,
    title: "Classic White Heels",
    image: [whiteHeels], // Assuming the image will be available at this path
    slug: "classic-white-heels",
    price: 90,
    description:
      "Sophisticated white heels with a low kitten heel design. Made from high-quality leather, perfect for both professional and formal occasions, offering comfort and elegance.",
    category: "shoes",
    size: ["6", "7", "8", "9"],
    color: ["white"],
    qty: 1,
    discount: 10,
  },
  {
    id: 12,
    title: "Blue Tassel Earrings",
    image: [earings],
    slug: "blue-tassel-earrings",
    price: 25,
    description: "Beautiful handmade blue tassel earrings with golden accents, perfect for casual and festive outfits.",
    category: "accessories",
    size: ["One Size"],
    color: ["Blue", "Gold"],
    qty: 1,
    discount: 10
},
{
  id: 13,
  title: "Round Aviator Sunglasses",
  image: [sunglasses],
  slug: "round-aviator-sunglasses",
  price: 30,
  description: "Classic round aviator sunglasses with a sleek metal frame and reflective lenses, perfect for sunny outdoor adventures.",
  category: "accessories",
  size: ["One Size"],
  color: ["Silver", "Blue"],
  qty: 1,
  discount: 50
}
];
