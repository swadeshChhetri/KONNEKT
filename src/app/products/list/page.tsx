"use client"
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductListPage from "./ProductListPage";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || ""; // Retrieve search query directly from URL

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductListPage searchQuery={searchQuery} />
    </Suspense>

  );

}

   