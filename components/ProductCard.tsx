"use client";

import Image from "next/image";
import Link from "next/link";
import HeartFavorite from "./HeartFavorite";
import { Star } from "lucide-react";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps ) => {
  return (
    <Link
      href={`/products/${product._id}`}
      className="flex flex-col gap-2 bg-blue-50 rounded-2xl"
    >
      <Image
        src={product.media[0]}
        alt="product"
        width={250}
        height={300}
        className="w-full h-[250px] rounded-lg object-cover"
      />
      <div className="p-4">
      <div className="">
        <div className="flex items-center gap-4">
          <div className="flex items-center text-primary">
          <Star size={16}/>
          <Star size={16}/>
          <Star size={16}/>
          <Star size={16}/>
          <Star size={16}/>
          </div>
          <span className="text-gray-500 text-sm">2 10 Reviews</span>
        </div>
        <h3 className="text-xl font-medium font-jost text-dark mt-2 mb-1 h-[45px] leading-6">{product.title}</h3>
        <p className="text-small-medium text-grey-2 mt-1 mb-3 text-gray-500 text-sm">{product.category}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold text-2xl">${product.price}</p>
        <HeartFavorite product={product} updateSignedInUser={updateSignedInUser} />
      </div>
      </div>
    </Link>

  );
};

export default ProductCard;
