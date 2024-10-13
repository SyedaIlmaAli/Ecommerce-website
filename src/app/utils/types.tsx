import { StaticImageData } from "next/image";

export type Product = {
    id:number;
    title:string;
    image?: string[] | StaticImageData[] | undefined;
    slug: string;
    price: number;
    description: string;
    category: string;
    size: string[];
    color: string[];
    qty: number;
    discount?: number
};

export type Cart = {
    id:number;
    title:string;
    image?: string | StaticImageData ;
    slug: string;
    price: number;
    description: string;
    category: string;
    size: string;
    qty: number;
    discount?: number;
    uuid: string | undefined ,
    color: string
}
