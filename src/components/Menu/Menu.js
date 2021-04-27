import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Menu = () => (
  <Navbar collapseOnSelect className='main white nav-margins' expand='lg'>
    <Container>
      <Row className='justify-content-md-center'>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto parent'>
            <Nav.Link href='/'>Strona Główna</Nav.Link>
            <NavDropdown title='Act' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='/o-nas'>O Nas</NavDropdown.Item>
              <NavDropdown.Item href='/kadra'>Kadra</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/online'>Online</Nav.Link>
            <NavDropdown title='Rekrutacja' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='/rekrutacja/program-act'>
                Program ACT
              </NavDropdown.Item>
              <NavDropdown.Item href='/rekrutacja/2021-2022'>
                Rekrutacja 2021/2022
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href='/kontakt'>Kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Row>
    </Container>
  </Navbar>
);
