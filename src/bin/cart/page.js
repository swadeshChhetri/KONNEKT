export default function CartPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-6 pt-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Product Details */}
        <div className="md:col-span-2 bg-white p-4 rounded-lg shadow">
          {/* Product Item */}
          <div className="flex gap-4 border-b pb-4 mb-4">
            {/* Image and Quantity Controls */}
            <div className="flex flex-col items-center">
              <img
                src="/product-image.jpg"
                alt="Product"
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex items-center mt-2 border rounded">
                <button className="px-2 py-1 bg-gray-200">-</button>
                <input
                  type="text"
                  value="2"
                  className="w-8 text-center border-x"
                />
                <button className="px-2 py-1 bg-gray-200">+</button>
              </div>
            </div>
            {/* Product Info */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold">DAILYHERBS Mixed Dry Fruits</h2>
              <p className="text-sm text-gray-500">Seller: DailyHerbs2</p>
              <p className="text-lg font-bold text-green-600">₹408</p>
              <div className="mt-2 flex gap-4 text-blue-600 cursor-pointer">
                <span>Save for later</span>
                <span>Remove</span>
              </div>
            </div>
            {/* Delivery */}
            <div className="text-sm text-gray-600">
              <p>Delivery by 11 PM, Tomorrow</p>
              <p className="text-green-600">Free</p>
            </div>
          </div>
          {/* Another product example can be added here */}
        </div>
        {/* Price Details */}
        <div className="bg-white p-4 rounded-lg shadow h-fit sticky top-6 z-10">
          <h2 className="text-lg font-semibold border-b pb-2">PRICE DETAILS</h2>
          <div className="mt-2 space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Price (2 items)</span>
              <span>₹1,879</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Discount</span>
              <span>- ₹1,136</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Buy more & save more</span>
              <span>- ₹30</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Coupons for you</span>
              <span>- ₹82</span>
            </div>
            <div className="flex justify-between">
              <span>Platform Fee</span>
              <span>₹3</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total Amount</span>
              <span>₹634</span>
            </div>
          </div>
          <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg font-semibold">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
}
