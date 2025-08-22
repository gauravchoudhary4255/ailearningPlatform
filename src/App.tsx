import { BrowserRouter } from "react-router-dom";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer"
import Home from "./components/Home";

function App(){
return <>
<BrowserRouter>
<Header/>
<Home/>
<Footer/>
</BrowserRouter>
</>
}

export default App;