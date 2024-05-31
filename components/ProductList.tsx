import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductList = async () => {
  const products = await getProducts();

  const ProductTab = () => {
    return (
      <div className=" py-8">
        {!products || products.length === 0 ? (
          <p className="text-body-bold">No products found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((product: ProductType) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="innerWidth pt-14">
      <div className="text-center">
        <h2 className="heading">Products</h2>
        <p className="paragraph">Showing our latest arrival on this summer</p>
      </div>

      <Tabs defaultValue="latest" className="w-full mt-10 mb-5">
        <TabsList className="flex justify-center bg-transparent">
          <div className="flex gap-6 items-center ">
          <TabsTrigger value="latest" className="text-base">Latest</TabsTrigger>
          <TabsTrigger value="popular" className="text-base">Popular</TabsTrigger>
          <TabsTrigger value="trending" className="text-base">Trending</TabsTrigger>
          </div>
        </TabsList>
        <TabsContent value="latest">
          <ProductTab />
        </TabsContent>
        <TabsContent value="popular"><span className="block text-center my-10 text-xl h-[200px]">No Popular products to show!</span></TabsContent>
        <TabsContent value="trending"><span className="block text-center my-10 text-xl h-[200px]">No Trending products to show!</span></TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductList;
