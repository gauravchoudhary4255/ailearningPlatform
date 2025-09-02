import { Star } from "lucide-react";
import { Link , useNavigate} from "react-router-dom";
import { useDispatch  ,useSelector} from "react-redux";
import { add } from "../Redux/CartSlice";
export default function Products({ getList }: { getList: any[] }) {
  const cartData = useSelector((state : any)=>state.cart);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const checkAddedtoCart =  (product : any)=>{
    const existInCart = cartData.some((cartExistData : any)=>{console.log(cartExistData)
      return  Number(cartExistData.id) === Number(product.id);});
     return existInCart ? "Added Into The Cart" : "Add To Cart"
  }
  const handleCartData = (product : any)=>{
    console.log(cartData , "check the cart data")
    if(cartData.length){
      const existInCart = cartData.some((cartExistData : any)=>{console.log(cartExistData)
   return  Number(cartExistData.id) === Number(product.id);});
        if(existInCart){
          return
          // dispatch(add(product))
        }else{
          dispatch(add(product))
        }
    }else{
      dispatch(add(product))
    }
            
          
  }
    return(
        <>
        
           {getList.map((getProducts: any) => (
                <div
                key={getProducts.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col"
              >
        <Link to={`/selectproduct/${getProducts.id}`}>
    
            {/* Product Image */}
            <img
              src={getProducts.image}
              alt={getProducts.name}
              className="w-full h-40 object-cover rounded-md"
            />

            {/* Product Info */}
            <div className="flex-1 mt-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {getProducts.name}
              </h2>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {getProducts.description}
              </p>
            </div>

            {/* Price + Rating */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xl font-bold text-blue-600">
              ₹ {getProducts.price}
              </span>
              <div className="flex items-center gap-1 text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm">{getProducts.rating}</span>
              </div>
            </div>

            {/* Stock Status */}
            <div className="mt-2">
              {getProducts?.type?.toLocaleLowerCase() === "product" ? (
                getProducts.inStock ? (
                  <span className="text-green-600 text-sm font-medium">
                    In Stock
                  </span>
                ) : (
                  <span className="text-red-600 text-sm font-medium">
                    Out of Stock
                  </span>
                )
              ) : getProducts.inStock ? (
                <span className="text-green-600 text-sm font-medium">
                  Lecture Available
                </span>
              ) : (
                <span className="text-red-600 text-sm font-medium">
                  Lecture Not Available
                </span>
              )}
            </div>
            </Link>
            {/* Add to Cart Button */}
            <button
              disabled={!getProducts.inStock}
              className={`mt-4 w-full rounded-lg px-4 py-2 text-sm font-medium transition ${
                getProducts.inStock
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              onClick={()=> 
                getProducts.type === "product" ? 
                handleCartData(getProducts) : navigate(`/selectproduct/${getProducts.id}`)
              }
            >
              {/* {(getProducts?.type.toLocaleLowerCase() === "product") ? "Product"  : "Service" } */}
              {getProducts.type === "product"
                ? getProducts.inStock
                  ? checkAddedtoCart(getProducts)
                  : "Unavailable"
                : "Service"}
            </button>
         
          </div>
        ))}
        </>
    )
} 