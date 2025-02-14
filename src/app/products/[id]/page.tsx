'use client'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
}

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  // Dummy product data (replace with API call)
  useEffect(() => {
    if (id) {
      // Simulated API response (Replace this with actual API call)
      const mockProducts: Product[] = [
        {
          id: 1,
          name: "Sample Product",
          image: "https://via.placeholder.com/300",
          price: 500,
          description: "This is a sample product description.",
        },
        {
          id: 2,
          name: "Another Product",
          image: "https://via.placeholder.com/300",
          price: 750,
          description: "Another amazing product!",
        },
      ];

      const selectedProduct = mockProducts.find((p) => p.id === Number(id));
      setProduct(selectedProduct || null);
    }
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-600 text-lg mt-2">₹ {product.price} / Piece</p>
      <p className="text-gray-800 mt-4">{product.description}</p>
      <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
        Contact Supplier
      </button>
    </div>
  );
};

export default ProductDetails;
