import { Route, Routes } from "react-router-dom";
import HomePage from "./View/Homepage";
import NotFound from "./View/NotFound";
import Products from "./View/Products";
import ProductsClass from "./View/ProductsClass";

function App() {
  return (
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="*" element={<NotFound/>} />
    <Route path="/produtosclassificados" element={<ProductsClass/>} />
    <Route path="/produtos" element={<Products/>} />
   </Routes>
  );
}

export default App;
