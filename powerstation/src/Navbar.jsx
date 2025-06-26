import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button, Form, Badge } from 'react-bootstrap';
import { MdShoppingCart } from "react-icons/md";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import { Button as ButtonM } from "@mui/material";
import './Navbar.css';

const NavbarComponent = () => {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="custom-navbar shadow-sm py-3">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center navbar-logo">
          <BiSolidPurchaseTagAlt size={32} className="me-2" />
          <span className="brand-title">Shopifyy</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 nav-links">
            <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <Nav.Link as={Link} to="/Signup">SIGN UP</Nav.Link>
            <Nav.Link as={Link} to="/Login">LOGIN</Nav.Link>
            <Nav.Link as={Link} to="/newProduct">NEW PRODUCT</Nav.Link>
          </Nav>

          <Form className="d-flex align-items-center gap-2">
            <ButtonM
              variant="contained"
              color="warning"
              onClick={() => navigate("/wishlist")}
              style={{ borderRadius: '45%', minWidth: 45, padding: 10 }}
            >
              <MdShoppingCart size={22} />
            </ButtonM>
            <Form.Control
              type="search"
              placeholder="Search for products"
              className="rounded-pill shadow-sm"
              style={{ maxWidth: "250px" }}
            />
            <Button variant="outline-success" className="rounded-pill px-4">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
