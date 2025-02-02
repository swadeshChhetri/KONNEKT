// src/app/products/page.js (Server Component)
import ProductsClient from "./ConsumerProducts";
import { getProducts } from "@/lib/getProducts";

export default async function ProductsPageWrapper() {
  const products = await getProducts(); // Fetch on the server

  return(
  <>
    <ProductsClient products={products} />
  </>
  );
};
