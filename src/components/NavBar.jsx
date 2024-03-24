import Nav from 'react-bootstrap/Nav';
import { useNavigate, NavLink } from "react-router-dom";
import Pokeball from '../assets/img/Pokeball.png'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const PokeNavbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
  const navigate = useNavigate()

  const iconClick = () => {
    navigate('/')
  }
  return (
    <Navbar expand="lg" className="bg-primary">
        <Container fluid>
            <Nav>
                <Nav.Item href="#home">
                    <a href="">
                        <img
                            alt="iconNav"
                            src={Pokeball}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            onClick={iconClick}
                        />{' '}
                    </a>
                </Nav.Item>
            </Nav>
            <Nav>
                <Container>
                    <NavLink
                        style={{textDecoration: 'none'}}
                        className={setActiveClass}
                        to="/"
                        >
                        {" "}
                        Home{" "}
                    </NavLink>
                </Container>
                <Container>
                    <NavLink
                        style={{textDecoration: 'none'}}
                        className={setActiveClass}
                        to="/Pokemones"
                        >
                        {" "}
                        Pokemones{" "}
                    </NavLink>
                </Container>
            </Nav>
        </Container>
    </Navbar>
  );
};
export default PokeNavbar;