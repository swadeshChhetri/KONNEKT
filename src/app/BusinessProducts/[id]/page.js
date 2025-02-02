import ProductDetails from "./ProductDetails";
import { getProductsById } from "@/lib/getProducts";

export default async function ProductPage({ params }) {
  const { id } = params; // Replace "1" with any valid product ID
  const product = await getProductsById(id); // Fetch product details

  if (!product) {
    return <p className="text-center text-red-500">Product not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetails product={product} />
    </div>
  );
}