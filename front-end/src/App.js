import { Button, Card, Nav , Navbar, Container} from "react-bootstrap";
import Logo from "./imagens/logo.png";
import Share from "./imagens/Search.png";
import Use from "./imagens/Solid.png";
import SideBar from "./imagens/Vector.png"
import ApenasLetra from "./imagens/apenasLetra.png"
import Voltar from "./imagens/Voltas.png"

function Header () {
  return (
    <>
    <div id="Header">
      <div className="HeaderDiv">
          <img src={SideBar} width='28px' height='24px' className="SideBAr"/>
          <img src={Logo} width='52px' height='52px' className="Logo"/>
          <div className="ContainerShaHome"> 
              <img src={Share} width="20px" heigth= "20px"/>
              <img src={Use} width="20px" heigth= "20px"/>
          </div>
      </div>
      {/* <div className="HeaderDivMin800px">
        <img src={Logo} width='52px' height='52px' className="Logo"/>
      </div> */}
    </div>
      {/* <nav className="NavBar">
        <header>
          <img src={Logo} width='52px' height='52px' className="Logo"/>
          <img src={Voltar} width='31px' height='19px' className="Logo"/>
        </header>
      </nav> */}
    </>
  )
}

function HomePage () {
  return (
    <>
      <Header/>
      <div className="ImagemMund"><img src={ApenasLetra} width='265px' height='73px' /></div>
    </>
  )
}

function App() {
  return (
   <>
    <HomePage/>
   </>
  );
}

export default App;
