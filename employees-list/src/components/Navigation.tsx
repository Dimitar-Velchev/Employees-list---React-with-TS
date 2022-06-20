import { FC } from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import styled from "styled-components";
import { BsList } from "react-icons/bs";

import logo from "../assets/icon-employee-5.jpg";

const Navigation: FC = () => {
  return (
    <Header bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} height={45} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Hamburger className="d-block">
          <BsList size={25} />
        </Hamburger>
      </Container>
    </Header>
  );
};

const Header = styled(Navbar)`
  padding: 0.5rem 2rem;
  display: flex;
  align-items: stretch;
`;

const Hamburger = styled.button`
  background: none;
  border: none;
  padding: 0.75rem;
  margin-left: 1rem;
`;

export default Navigation;
