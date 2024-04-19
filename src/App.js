import RouteApp from "./routes";
import { ToastContainer} from 'react-toastify';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={300}/>
      <RouteApp/> 
    </BrowserRouter>
  );
}

export default App;
