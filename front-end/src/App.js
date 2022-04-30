import { Route, Routes } from "react-router-dom";
import HomePage from "./View/Homepage";
import LoginPage from "./View/Login-page";
import MyOrçaments from "./View/My Orçaments";
import NotFound from "./View/NotFound";
import Products from "./View/Products";
import FormItens from "./View/Products/FormAddItens";
import ProductsClass from "./View/ProductsClass";


function App(products) {
  return (
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="*" element={<NotFound/>} />
    <Route path="/produtosclassificados" element={<ProductsClass/>} />
    <Route path="/produtos/:id" element={<Products/>} />
    <Route path="/meusorcamentos" element={<MyOrçaments/>}/>
    <Route path="/additens" element={<FormItens/>}/>
    <Route path="/login" element={<LoginPage/>}/>
   </Routes>
  );
}

export default App;
