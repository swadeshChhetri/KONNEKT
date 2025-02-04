// import ProductDetails from "./ProductDetails";
// import { getProductsById } from "@/lib/getProducts";

// export default async function ProductPage({ params }) {
//   const { id } = params; // Replace "1" with any valid product ID
//   const product = await getProductsById(id); // Fetch product details

//   if (!product) {
//     return <p className="text-center text-red-500">Product not found.</p>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <ProductDetails product={product} />
//     </div>
//   );
// }



// const getProduct = async (id) => {
//   try {
//     const controller = new AbortController();
//     const timeoutId = setTimeout(() => controller.abort(), 5000);

//     const res = await fetch(`http://localhost:3000/ConsumerProducts/${id}`, {
//       next: { revalidate: 10 },
//     });

//     if (!res.ok) {
//       console.error(`Failed to fetch: ${res.status} ${res.statusText}`);
//       return null;
//     }

//     return await res.json();
//   } catch (error) {
//     console.error("Fetch error:", error.message);
//     return null;
//   }
// };


//     if (!res.ok) return null;
//     try {
//       return await res.json();
//     } catch (error) {
//       console.error("JSON parsing error:", error);
//       return null;
//     }
//   } catch (error) {
//     console.error("Fetch error:", error);
//     return null;
//   }
// };

// export default async function ProductDetail({ params }) {
//   console.log("Server Params:", params);

//   if (!params) {
//     console.error("Params is undefined!");
//     return notFound();
//   }

//   const { id } = params; // Await the params object
//   const product = await getProduct(id);
//   if (!product) return notFound();

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold">{product.title}</h1>
//       <img
//         src={product.image}
//         alt={product.title}
//         className="w-64 h-64 object-cover my-4"
//       />
//       <p className="text-lg">{product.description}</p>
//       <p className="text-xl font-semibold text-green-600">${product.price}</p>
//     </div>
//   );
// }

import { products } from "@/data/products";


export default async function ProductDetails({params}) {

  const productId = parseInt(params.id);

  const product = products.find((p) =>  p.id === productId);
  if(!product){
    return <div>Product not found</div>
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-xl font-semibold">${product.price}</p>
    </div>
  )
}
