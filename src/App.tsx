import {  Route ,  Routes } from "react-router-dom";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer"
import Home from "./components/Home";
import LoginPage from "./components/Login";
import SelectProduct from "./components/SelectProduct";
import AiServices from "./components/AiServices";

function App(){
return <>

<Header/>
<Routes>
<Route path="/" element={<Home/>} />
<Route path = "/login" element={<LoginPage/>} />
<Route path="/selectproduct/:id" element={<SelectProduct/>}/>
<Route path="/aiServices" element={<AiServices/>}/>
</Routes>
<Footer/>
</>
}

export default App;