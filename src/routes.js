import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from'./pages/Home';
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Contatos from "./pages/Contatos";
function RouteApp(){
    return(
        <Routes>
            <Route path='sobre' element={<Sobre/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/projetos' element={<Projetos/>}/>
            <Route path='/contato' element={<Contatos/>}/>
        </Routes>
    )
}
export default RouteApp;