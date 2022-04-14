import { Route, Routes } from "react-router-dom";
import HomePage from "./View/Homepage";
import MyOrçaments from "./View/My Orçaments";
import NotFound from "./View/NotFound";
import Products from "./View/Products";
import ProductsClass from "./View/ProductsClass";


function App(products) {
  return (
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="*" element={<NotFound/>} />
    <Route path="/produtosclassificados" element={<ProductsClass/>} />
    <Route path="/produtos/:id" element={<Products/>} />
    <Route path="/meusorcamentos" element={<MyOrçaments/>}/>
   </Routes>
  );
}

export default App;
