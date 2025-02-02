// src/app/products/page.js (Server Component)

import { getProducts } from "@/lib/getProducts";
import BusinessProducts from "./BusinessProducts";
export default async function ProductsPageWrapper() {
  const products = await getProducts(); // Fetch on the server

  return(
  <>
    <BusinessProducts products={products} />
  </>
  );
};