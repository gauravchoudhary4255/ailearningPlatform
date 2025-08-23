import {  Route ,  Routes } from "react-router-dom";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer"
import Home from "./components/Home";
import LoginPage from "./components/Login";
import SelectProduct from "./components/SelectProduct";

function App(){
return <>

<Header/>
<Routes>
<Route path="/" element={<Home/>} />
<Route path = "/login" element={<LoginPage/>} />
<Route path="/selectproduct/:id" element={<SelectProduct/>}/>
</Routes>
<Footer/>
</>
}

export default App;