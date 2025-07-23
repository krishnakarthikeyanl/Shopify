import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Card } from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("buyer");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire("Missing Fields", "Please enter email and password", "warning");
      return;
    }

    // Save role in localStorage
    localStorage.setItem("userRole", role);

    // Redirect based on role
    if (role === "buyer") {
      navigate("/products");
    } else {
      navigate("/list");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(90deg, #ffe259, #ffa751)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Card style={{ width: "100%", maxWidth: "400px", padding: "20px", borderRadius: "16px", boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}>
        <Card.Body>
          <h3 className="text-center mb-4">
            <FaSignInAlt /> Login
          </h3>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formRole">
              <Form.Label>Select Role</Form.Label>
              <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </Form.Select>
            </Form.Group>

            <Button variant="dark" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
