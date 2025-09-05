import { useParams } from "react-router-dom";
import { products } from "../data";
import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import {add , remove} from '../Redux/CartSlice'
export default function SelectProduct() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState(1);
  const cartData = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const checkAddedtoCart = (product: any) => {
    const existInCart = cartData.some((cartExistData: any) => {
      return Number(cartExistData.id) === Number(product.id);
    });
    return existInCart ? "Item Aded into the cart" : "Add To Cart";
  };
  const hadnleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(e.target.value));
  };
  const handleCartData = (product: any) => {
    if (cartData.length) {
      const existInCart = cartData.some((cartExistData: any) => {
        return Number(cartExistData.id) === Number(product.id);
      });
      if (existInCart) {

        return;
        // dispatch(add(product))
      } else {
        // product.quantity = 1
        dispatch(add(product));
      }
    } else {
      // product.quantity = 1
      dispatch(add(product));
    }
  };
  // const
  const selectedItem: any = products.find((item: any) => {
    return Number(item.id) === Number(id);
  });
  return (
    <div className="p-1 border rounded-2xl shadow-lg bg-white max-w-md md:w-[600px] mt-8 ml-10">
      {/* Image */}
      <img
        src={selectedItem.image}
        alt={selectedItem.name}
        className="w-full h-56 object-cover rounded-xl mb-4"
      />

      {/* Product Info */}
      <h2 className="text-2xl font-bold text-gray-800">{selectedItem.name}</h2>
      <p className="text-gray-500">{selectedItem.description}</p>

      {/* Category + Type */}
      <div className="mt-2 text-sm text-gray-600">
        <span className="mr-2">📦 {selectedItem.category}</span>
        <span>• {selectedItem.type}</span>
      </div>

      {/* Price */}
      <p className="mt-3 text-xl font-semibold text-green-600">
        ₹ {selectedItem.price}
      </p>

      {/* Stock Status */}
      <p
        className={`mt-1 font-medium ${
          selectedItem.inStock ? "text-500" : "text-red-500"
        }`}
      >
        {selectedItem.inStock
          ? selectedItem.numberOfProducts ?? ""
          : "Out of Stock"}
      </p>
      <div className="mt-4">
        <label className="block font-medium text-gray-700 mb-1">Quantity</label>
        {
          
          (selectedItem?.inStock && selectedItem?.type?.toLowerCase() === "product") &&(
            <select
            value={quantity}
            onChange={(e)=>{hadnleQuantityChange(e)}}
            className=" px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
          >
            {
            [...new Array(selectedItem?.numberOfProducts)].map((i,d)=>{
              return (
                <option key={d} value={d + 1}>
                  {d + 1}
                </option>
              );
            })
          }{" "}
          </select>
          )
        }
      
      </div>
      {/* Rating */}
      <div className="flex items-center mt-2">
        <span className="text-yellow-500 text-lg">⭐</span>
        <span className="ml-1">{selectedItem.rating} / 5</span>
        <span className="ml-2 text-sm text-gray-500">
          ({selectedItem.numberOfProducts} reviews)
        </span>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex gap-3">
        <button className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        onClick={()=>{handleCartData(selectedItem)}}
        >
          {checkAddedtoCart(selectedItem)}
        </button>
      </div>
    </div>
  );
}
