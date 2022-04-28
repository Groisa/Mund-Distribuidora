import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import Logo from '../../imagens/logo.png'
import Home from '../../imagens/home.png'
import Product from '../../imagens/produtos.png'
import Cart from '../../imagens/Cart3.png'
import Use from '../../imagens/Solid.png'
import ApenasLetra from "../../imagens/apenasLetra.png"
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="HeaderTeste">
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
                <img src={ApenasLetra} alt='a' width='156px' heigth='53px' />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {/* Input */}
                <input placeholder='Pesquisa...' className="InputPesqHeader" />
                {/* links nav */}
                <Nav.Link as={Link} to='/'>
                  <div className="NavDivContainer">
                    <img src={Home} alt='a' heigth='30px' width='30px' />
                    <span>Menu Incial</span>
                  </div>
                </Nav.Link >
                <Nav.Link as={Link} to='/produtosclassificados'>
                  <div className="NavDivContainer">
                    <img src={Product} alt='a' heigth='30px' width='30px' />
                    <span>Produtos</span>
                  </div>
                </Nav.Link>
                <Nav.Link as={Link} to='/'>
                  <div className="NavDivContainer pt-5">
                    <i class="bi bi-box-arrow-in-left"></i>
                    <span>Sair</span>
                  </div>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Brand as={Link} to='/'><img src={Logo} alt='a' width='56px' height='56px' /></Navbar.Brand>
          <div className="ContainerShaHome">
            <Link to="/meusorcamentos">
              <i class="bi bi-cart"></i>
            </Link>
            <i class="bi bi-box-arrow-in-left"></i>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}
export default Header