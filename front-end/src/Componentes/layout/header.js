import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import Logo from '../../imagens/logo.png'
import Home from '../../imagens/home.png'
import Product from '../../imagens/produtos.png'
import Cart from '../../imagens/Cart3.png'
import Use from '../../imagens/Solid.png'
import ApenasLetra from "../../imagens/apenasLetra.png"
import { Link } from "react-router-dom";
import { Logout } from "../../services/Users.service";
import { useDispatch, useSelector } from "react-redux"
import { userLogout } from "../../store/Users/users.action";
import { selectUser } from "../../store/Users/user.selctor";
import { UserType } from "../../Constantes/typeUser";

function Header() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const LogoutClick = () => {
    Logout()
    dispatch(userLogout())
  }
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
                {!!user &&
                  <Nav.Link as={Link} to='/'>
                    <div className="NavDivContainer pt-5" onClick={LogoutClick}>
                      <i class="bi bi-box-arrow-in-left"></i>
                      <span>Sair</span>
                    </div>
                  </Nav.Link>
                }
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Brand as={Link} to='/'><img src={Logo} alt='a' width='56px' height='56px' /></Navbar.Brand>
          <div className="ContainerShaHome">
            {user && user.type === UserType.admin &&
              <>
                <Link to="/additens">
                  <i class="bi bi-cloud-plus"></i>
                </Link>
                <div onClick={LogoutClick}>
                  <i class="bi bi-box-arrow-in-left"></i>
                </div>
              </>
            }
            {user && user.type === UserType.usuario &&
              <>
                <Link to="/meusorcamentos">
                  <i class="bi bi-cart"></i>
                </Link>
                <div onClick={LogoutClick}>
                  <i class="bi bi-box-arrow-in-left"></i>
                </div>
              </>
            }
            {!user &&
              <Link to="/login">
                <i class="bi bi-person-circle"></i>
              </Link>
            }
          </div>
        </Container>
      </Navbar>
    </div>
  )
}
export default Header