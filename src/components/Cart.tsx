import { useSelector } from "react-redux";
export const Cart = () => {
  const cartData = useSelector((state: any) => state.cart);
  console.log(cartData, "carData On Cart Page");
  return (
    <div className="flex justify-center p-6 bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-semibold">Your Cart</h2>
        {cartData.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[300px]">
            <p className="text-center text-gray-1000">🛒 Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {/* Single Item */}
              <div className="flex items-center justify-between rounded border p-4">
                <div>
                  <h3 className="font-medium">Product Name</h3>
                  <p className="text-sm text-gray-500">Price: ₹499</p>
                  <p className="text-sm text-gray-500">Qty: 2</p>
                </div>
                <button className="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600">
                  Remove
                </button>
              </div>

              <div className="flex items-center justify-between rounded border p-4">
                <div>
                  <h3 className="font-medium">Service Name</h3>
                  <p className="text-sm text-gray-500">Price: ₹999</p>
                  <p className="text-sm text-gray-500">Qty: 1</p>
                </div>
                <button className="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600">
                  Remove
                </button>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-6 border-t pt-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-bold">₹1997</span>
              </div>
              <button className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
