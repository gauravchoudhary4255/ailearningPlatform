
import {  useEffect, useState } from "react";
import Products from "./Products";
import {productService }from '../services/api/productService'
export default function Home() {
  const [type, setType] = useState("all");
  const [getList, setList] = useState([{}]);
  const [getProducts, setGetProducts] = useState([{}]);
  const getData = async()=>{
    try{
      const data = await productService.getProduct();
      if(Number(data.status) === 200){
       setGetProducts([...data.data.data]);
       setList([...data.data.data]);
      }
    }catch(err : any){
      console.log(err)
    }
  }


  useEffect(() => {
    getData();
  }, []);

  const setSelectedType = (category: string) => {
    switch (category) {
      case "All":
        setType("all");
        setList(getList);
        break;
      case "Product":
        setType("product");
        setList(
          getProducts.filter(
            (p: any) => p?.type?.toLocaleLowerCase() === "product"
          )
        );
        break;
      case "Service":
        setType("service");
        setList(
          getProducts.filter(
            (p: any) => p?.type?.toLocaleLowerCase() === "service"
          )
        );
        break;
      default:
        setType("all");
        setList(getList);
        break;
    }
  };
  // console.log("getProducts", getProducts);
  // console.log(type, "type");
  useEffect(() => {}, [type]);
  return (
    <div className="container mx-auto px-4 py-3">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Welcome to Our Product Store
      </h1>
      <div className="flex gap-4 mb-8">
        <button
          // className={`px-4 py-2 rounded-lg border`}
          onClick={() => setSelectedType("All")}
          className={`px-4 py-2 rounded-lg border ${
            type === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setSelectedType("Product")}
          className={`px-4 py-2 rounded-lg border ${
            type === "product"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setSelectedType("Service")}
          className={`px-4 py-2 rounded-lg border ${
            type === "service"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          AI Services
        </button>
      </div>
      {/* Product Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <Products getList= {getList}/>
      </div>
    </div>
  );
}
