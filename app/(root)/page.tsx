import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import Brands from '../../components/layouts/Brands.jsx'
import Category from '../../components/layouts/Category.jsx'

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image src="/banner.png" alt="banner" width={2000} height={1000} className="w-screen" />
      <Brands/>
      <ProductList />
      <Collections />
      <Category/>
    </>
  );
}

export const dynamic = "force-dynamic";

