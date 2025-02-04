import Image from 'next/image';
import Link from "next/link";

const ProductCard = ({ product }) => {

  const imageUrl = product.image || "https://via.placeholder.com/300";

  return (
    <Link href={`/ConsumerProducts/${product.id}`} className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-64 overflow-hidden rounded-xl">
        <Image 
          src={imageUrl}
          alt={product.name} 
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
        <p className="text-gray-700">{product.category}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-bold text-green-600">{product.price}</span>
          {product.discount && (
            <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
          )}
        </div>
        {product.discount && (
          <p className="text-sm text-red-500 font-semibold">{product.discount}</p>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;

