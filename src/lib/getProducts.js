// export async function getProducts() {
//   return [
//     {
//       id: 1,
//       name: "Women Heels Sandal",
//       category: "Footwear",
//       price: 565,
//       originalPrice: 1299,
//       discount: 56,
//       image: "/images/product1.jpg"
//     },
//     {
//       id: 2,
//       name: "Kaniza Heels",
//       category: "Footwear",
//       price: 289,
//       originalPrice: 799,
//       discount: 66,
//       image: "/images/product2.jpg"
//     },
//     {
//       id: 3,
//       name: "Komfy Heels",
//       category: "Footwear",
//       price: 289,
//       originalPrice: 999,
//       discount: 71,
//       image: "/images/product3.jpg"
//     }
//   ];
// }

// export async function getProductById(id) {
//   const res = await fetch(`http://localhost:3000/products/1`); // Replace with actual API
//   if (!res.ok) return null;
//   return res.json();
// }

export async function getProducts() {
  const products = {
    "1": {
      id: "1",
      name: "Shoetopia Women Heels Sandal",
      Image : "/public/B2B/1.jpg",
      price: "₹529",
      originalPrice: "₹1,999",
      discount: "73% off",
      rating: "4.2★",
      reviews: "6,909 ratings",
      images: [
        "/images/shoetopia-main.jpg",
        "/images/shoetopia-side.jpg",
        "/images/shoetopia-bottom.jpg",
      ],
    },
    "2": {
      id: "2",
      name: "Women Heels Sandal",
      price: "₹529",
      originalPrice: "₹1,999",
      discount: "73% off",
      rating: "4.2★",
      reviews: "6,909 ratings",
      images: [
        "/images/shoetopia-main.jpg",
        "/images/shoetopia-side.jpg",
        "/images/shoetopia-bottom.jpg",
      ],
    },
    "3": {
      id: "3",
      name: "Heels Sandal",
      price: "₹529",
      originalPrice: "₹1,999",
      discount: "73% off",
      rating: "4.2★",
      reviews: "6,909 ratings",
      images: [
        "/images/shoetopia-main.jpg",
        "/images/shoetopia-side.jpg",
        "/images/shoetopia-bottom.jpg",
      ],
    },
    "4": {
      id: "4",
      name: "Sandal",
      price: "₹529",
      originalPrice: "₹1,999",
      discount: "73% off",
      rating: "4.2★",
      reviews: "6,909 ratings",
      images: [
        "/images/shoetopia-main.jpg",
        "/images/shoetopia-side.jpg",
        "/images/shoetopia-bottom.jpg",
      ],
    },
    "5": {
      id: "5",
      name: "Shoetopia Women Heels Sandal",
      price: "₹529",
      originalPrice: "₹1,999",
      discount: "73% off",
      rating: "4.2★",
      reviews: "6,909 ratings",
      images: [
        "/images/shoetopia-main.jpg",
        "/images/shoetopia-side.jpg",
        "/images/shoetopia-bottom.jpg",
      ],
    },
    "6": {
      id: "6",
      name: "Women Heels Sandal",
      price: "₹529",
      originalPrice: "₹1,999",
      discount: "73% off",
      rating: "4.2★",
      reviews: "6,909 ratings",
      images: [
        "/images/shoetopia-main.jpg",
        "/images/shoetopia-side.jpg",
        "/images/shoetopia-bottom.jpg",
      ],
    },
    "7": {
      id: "7",
      name: "Heels Sandal",
      price: "₹529",
      originalPrice: "₹1,999",
      discount: "73% off",
      rating: "4.2★",
      reviews: "6,909 ratings",
      images: [
        "/images/shoetopia-main.jpg",
        "/images/shoetopia-side.jpg",
        "/images/shoetopia-bottom.jpg",
      ],
    },
    "8": {
      id: "8",
      name: "Sandal",
      price: "₹529",
      originalPrice: "₹1,999",
      discount: "73% off",
      rating: "4.2★",
      reviews: "6,909 ratings",
      images: [
        "/images/shoetopia-main.jpg",
        "/images/shoetopia-side.jpg",
        "/images/shoetopia-bottom.jpg",
      ],
    },
  };

  return Object.values(products);
}

// Example of how getProducts should be exported
export async function getProductsById(id) {
  // Your logic to fetch products
  const products = {
    "1": {
      id: "1",
      name: "Shoetopia Women Heels Sandal",
      price: "₹529",
      originalPrice: "₹1,999",
      discount: "73% off",
      rating: "4.2★",
      reviews: "6,909 ratings",
      images: [
        "/images/shoetopia-main.jpg",
        "/images/shoetopia-side.jpg",
        "/images/shoetopia-bottom.jpg",
      ],
    },
    "2": {
      id: "2",
      name: "Women Heels Sandal",
      price: "₹529",
      originalPrice: "₹1,999",
      discount: "73% off",
      rating: "4.2★",
      reviews: "6,909 ratings",
      images: [
        "/images/shoetopia-main.jpg",
        "/images/shoetopia-side.jpg",
        "/images/shoetopia-bottom.jpg",
      ],
    },
    "3": {
      id: "3",
      name: "Heels Sandal",
      price: "₹529",
      originalPrice: "₹1,999",
      discount: "73% off",
      rating: "4.2★",
      reviews: "6,909 ratings",
      images: [
        "/images/shoetopia-main.jpg",
        "/images/shoetopia-side.jpg",
        "/images/shoetopia-bottom.jpg",
      ],
    },
    "4": {
      id: "4",
      name: "Sandal",
      price: "₹529",
      originalPrice: "₹1,999",
      discount: "73% off",
      rating: "4.2★",
      reviews: "6,909 ratings",
      images: [
        "/images/shoetopia-main.jpg",
        "/images/shoetopia-side.jpg",
        "/images/shoetopia-bottom.jpg",
      ],
    },
  };

  return products[id] || null;
}

/*

export async function getProductById(id) {
  try {
    const res = await fetch(`https://your-api-url.com/products/${id}`, {
      cache: "no-store", // Ensures fresh data on each request
    });

    if (!res.ok) {
      throw new Error("Failed to fetch product data");
    }

    return await res.json(); // Convert response to JSON
  } catch (error) {
    console.error("Error fetching product data:", error);
    return null; // Handle errors gracefully
  }
}


*/

