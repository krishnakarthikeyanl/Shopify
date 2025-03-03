import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button, Form } from 'react-bootstrap';
import { MdShoppingCart } from "react-icons/md";
import { Button as ButtonM } from "@mui/material";
import { BiSolidPurchaseTagAlt } from "react-icons/bi"; 
import "./Navbar.css";

const NavbarComponent = () => {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/" className="navbar-logo">
          <BiSolidPurchaseTagAlt />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <Nav.Link as={Link} to="/Booking">BOOKING</Nav.Link>
            <Nav.Link as={Link} to="/Signup">SIGN UP</Nav.Link>
            <Nav.Link as={Link} to="/Login">LOGIN</Nav.Link>
            <Nav.Link as={Link} to="/newProduct">New Product</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <ButtonM
              variant="contained"
              color="warning"
              onClick={() => navigate("/wishlist")}
            >
              <MdShoppingCart />
            </ButtonM>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
