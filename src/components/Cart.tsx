import { useSelector, useDispatch } from "react-redux";
import { remove, update, emptyCart } from "../Redux/CartSlice";
import { useState} from "react"
import MyModal from "../layout/popUp/CommonPop";
export const Cart = () => {
   const [openModel ,  setModel] = useState(false)
  const dispatch = useDispatch();
  const cartData = useSelector((state: any) => state.cart);
  console.log(cartData , "Check this data ")
  const getTotalAmount = cartData.reduce((current: any, data: any) => {
    // console.log(data , "check value")
    return Math.round((current += data.price * data.quantity));
  }, 0);
  const handleRemove = (e: any) => {
    const data = e;
    dispatch(remove(data));
  };

  const handleCartQuantity = (e, cartId) => {
    const productQuantity = {
      _id: cartId,
      quantity: e.target.value,
    };
    dispatch(update(productQuantity));
  };

  const handleClearCart = ()=>{
    dispatch(emptyCart(""))
  }

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
            {cartData.map((cart: any) => (
              <div className="space-y-4">
                {/* Single Item */}
                <div className="flex items-center justify-between rounded border p-4">
                  <div>
                    <h3 className="font-medium" key={cart._id}>
                      {cart.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Price: ₹{cart.price}
                    </p>

                    <p className="text-sm text-gray-500">
                      {cart?.inStock &&
                        cart?.type?.toLowerCase() === "product" && (
                          <select
                            value={cart.quantity}
                            onChange={(e) => {
                              handleCartQuantity(e, cart._id);
                            }}
                            className=" px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                          >
                            {[...new Array(cart?.numberOfProducts)].map(
                              (i, d) => {
                                return (
                                  <option key={d} value={d + 1}>
                                    {d + 1}
                                  </option>
                                );
                              }
                            )}{" "}
                          </select>
                        )}
                    </p>
                  </div>
                  <button
                    className="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
                    // value={cart}
                    onClick={() => {
                      handleRemove(cart._id);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            {/* Summary */}
            <div className="mt-6 border-t pt-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-bold">₹{getTotalAmount}</span>
              </div>
              <button
                className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                onClick={() => {
                   setModel(!openModel)
                  // <Popup
                  // open= {true}
                  // title = {"Your irder is Succefull"}
                  // children = {"check"}
                  // footer = {"fsdfsf"}/>
                }}
              >
                {openModel ? <MyModal/> : "Checkout"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
