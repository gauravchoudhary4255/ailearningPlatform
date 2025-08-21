import { BrowserRouter } from "react-router-dom";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer"

function App(){
return <>
<BrowserRouter>
<Header/>
<Footer/>
</BrowserRouter>
</>
}

export default App;