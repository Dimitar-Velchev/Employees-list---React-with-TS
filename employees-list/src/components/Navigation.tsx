import { FC } from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import styled from "styled-components";
import { BsList } from "react-icons/bs";

import logo from "../assets/icon-employee-5.jpg";
import { Link } from "react-router-dom";

const Navigation: FC = () => {
  return (
    <Header bg="light" expand="lg">
      <Container>
        <Link to="/">
          <Image src={logo} height={45} />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/employees">
              Employee List
            </Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Hamburger className="d-block">
        <BsList size={25} />
      </Hamburger>
    </Header>
  );
};

const Header = styled(Navbar)`
  padding: 0.5rem 2rem;
  display: flex;
  align-items: stretch;
  margin-bottom: 5rem;
`;

const Hamburger = styled.button`
  background: none;
  border: none;
  padding: 0.75rem;
  margin-left: 1rem;
`;

export default Navigation;
