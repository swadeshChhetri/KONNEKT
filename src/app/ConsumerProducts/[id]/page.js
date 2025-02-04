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
  
  const product = products.find((p) =>  p.id == productId);

  if(!product){
    return <div>Product not found</div>
  }
  return (
    // <div className="container mx-auto p-4">
    //   <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
    //   <p className="text-gray-700 mb-4">{product.description}</p>
    //   <p className="text-xl font-semibold">${product.price}</p>
    // </div>
    <div className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 p-16">
    {/* Left Side - Product Images */}
    <div>
      {/* <img
        src={selectedImage}
        alt={name}
        className="w-full h-auto rounded-lg shadow-lg"
      /> */}
      {/* <div className="flex gap-2 mt-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Thumbnail"
            className={`w-20 h-20 rounded-lg cursor-pointer border-2 ${
              selectedImage === img ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div> */}
    </div>

    {/* Right Side - Product Info */}
    <div>
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-green-600 text-lg font-semibold">Special Price</p>
      <p className="text-3xl font-bold">
        {product.price}{" "}
        <span className="text-gray-500 line-through text-lg">
          {product.originalPrice}
        </span>
        <span className="text-green-500 text-lg ml-2">{product.discount}</span>
      </p>
      <p className="mt-2 text-gray-600">
        ⭐ {product.rating} ({product.reviews} reviews)
      </p>

      {/* Offers Section */}
      <div className="mt-4">
        <p className="font-semibold">Coupons for you:</p>
        <ul className="list-disc ml-5 text-gray-600">
          <li>Extra 10% off up to ₹100</li>
          <li>Bank Offer: 5% Unlimited Cashback</li>
          <li>Combo Offer: Buy 2 items & save ₹50</li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4">
        <button className="bg-orange-500 text-white px-6 py-3 w-1/2 rounded-lg text-lg font-semibold shadow-md">
          <ShoppingCart size={20} />
          ADD TO CART
        </button>
        <button className="bg-orange-600 text-white px-6 py-3 w-1/2 rounded-lg text-lg font-semibold shadow-md">
          <Bolt size={20} /> BUY NOW
        </button>
      </div>
    </div>
  </div>
  )
}
