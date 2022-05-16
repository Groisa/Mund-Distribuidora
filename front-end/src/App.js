import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./Componentes/PrivatesAuth";
import { UserType } from "./Constantes/typeUser";
import ClassEditView from "./View/EditItens/classesEdit";
import ProductsEditView from "./View/EditItens/productsEdit";
import HomePage from "./View/Homepage";
import LoginPage from "./View/Login-page";
import MyOrçaments from "./View/My Orçaments";
import NotFound from "./View/NotFound";
import Products from "./View/Products";
import ProductsClass from "./View/ProductsClass";
import FormItens from "./View/RegisterView";


function App(products) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/produtosclassificados" element={<ProductsClass />} />
      <Route path="/produtos/:id" element={<Products />} />
      <Route
        path="/meusorcamentos"
        element={
          <PrivateRouter userTypes={[UserType.usuario, UserType.admin]}>
            <MyOrçaments />
          </PrivateRouter>
        }
      />
      <Route
        path="/additens"
        element={
          <PrivateRouter userTypes={[UserType.admin]}>
            <FormItens/>
          </PrivateRouter>
        }
      />
      <Route 
        path="/editorprodutos/:id"
        element= {
            <PrivateRouter userTypes={[UserType.admin]}>
              <ProductsEditView />
            </PrivateRouter>
          }
        />
        <Route 
        path="/editorclasses/:id"
        element= {
            <PrivateRouter userTypes={[UserType.admin]}>
              <ClassEditView />
            </PrivateRouter>
          }
        />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
