import { Route, Routes } from "react-router-dom";
import HomePage from "./View/Homepage";
import NotFound from "./View/NotFound";
import ProductsClass from "./View/ProductsClass";

function App() {
  return (
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="*" element={<NotFound/>} />
    <Route path="/produtosclassificados" element={<ProductsClass/>} />
   </Routes>
  );
}

export default App;
