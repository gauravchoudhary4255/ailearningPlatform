import {  Route ,  Routes } from "react-router-dom";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer"
import Home from "./components/Home";
import LoginPage from "./components/Login";
import SelectProduct from "./components/SelectProduct";
import AiServices from "./components/AiServices";
import AiAgent from './components/AiAgent';
import{ Cart} from './components/Cart';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(){
return <>

<Header/>
<Routes>
<Route path="/" element={<Home/>} />
<Route path = "/login" element={<LoginPage/>} />
<Route path="/selectproduct/:_id" element={<SelectProduct/>}/>
<Route path="/aiServices" element={<AiServices/>}/>
<Route path="/aiServices/:_id" element= {<AiAgent/>}/>
<Route path="/cart" element={<Cart/>}/>
</Routes>
<Footer/>
<ToastContainer position="top-right" autoClose={3000} />
</>
}

export default App;