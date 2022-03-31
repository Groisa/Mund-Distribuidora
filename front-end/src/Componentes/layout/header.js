import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import Logo from '../../imagens/logo.png'
import Home from '../../imagens/home.png'
import Product from '../../imagens/produtos.png'
import Share from '../../imagens/Search.png'
import Use from '../../imagens/Solid.png'
import ApenasLetra from "../../imagens/apenasLetra.png"

function Header () {
    return (
      <>
        <Navbar expand={false}>
          <Container>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            {/* Off canvas */}
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  <img src={ApenasLetra} alt='a' width='156px' heigth='53px'/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {/* Input */}
                 <input placeholder= 'Pesquisa...'  className="InputPesqHeader"/>
                {/* links nav */}
                  <Nav.Link href="/">
                    <div className="NavDivContainer">
                      <img src={Home} alt='a' heigth= '30px'width='30px'/>
                      <span>Menu Incial</span>
                    </div>
                  </Nav.Link>
                  <Nav.Link href="/">
                    <div className="NavDivContainer">
                      <img src={Product} alt='a' heigth= '30px'width='30px'/>
                      <span>Produtos</span>
                    </div>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          <Navbar.Brand href="/"><img src={Logo}  alt='a' width='56px' height='56px'/></Navbar.Brand>
          <div className="ContainerShaHome">
            <img src={Share} alt='a' width="20px" heigth= "20px"/>
            <img src={Use} alt='a' width="20px" heigth= "20px"/>
          </div> 
        </Container>
        </Navbar>
      </>
    )
  }
  export default Header