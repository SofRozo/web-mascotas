import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="justify-content-center"> 
        <Navbar.Brand href="/mascotas" className="mx-auto">
          Adóptame
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
