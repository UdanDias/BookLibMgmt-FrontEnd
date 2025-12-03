import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavB() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#book">Book</Nav.Link>
            <Nav.Link href="#staff">Staff</Nav.Link>
            <Nav.Link href="#member">Member</Nav.Link>
            <Nav.Link href="#lending">Lending</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavB;