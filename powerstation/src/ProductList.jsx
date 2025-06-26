import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { MdAddShoppingCart, MdOutlineFolderDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useFetch from "./Usefetch";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./store/cartslice";

const ProductList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart || []);
  const { products, error, isLoading, setProducts } = useFetch("http://localhost:4000/products");

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This product will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updated = products.filter((p) => p.id !== id);
        setProducts(updated);
        Swal.fire("Deleted!", "Product has been deleted.", "success");
      }
    });
  };

  const addItemToCart = (product) => {
    const alreadyAdded = cartState.some((p) => p.id === product.id);
    if (alreadyAdded) {
      Swal.fire("Already in Cart", "This product is already added.", "info");
    } else {
      dispatch(addItem(product));
      Swal.fire("Added!", "Product added to cart.", "success");
    }
  };

  // --- Internal Styles ---
  const pageStyle = {
    minHeight: "100vh",
    padding: "20px",
    background: "linear-gradient(90deg, #ffe259, #ffa751)",
  };

  const createBarStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginBottom: "30px",
    fontSize: "1.2rem",
    fontWeight: "500",
    color: "#333",
  };

  const cardStyle = {
    width: "100%",
    minHeight: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "12px",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
    transition: "transform 0.3s ease",
  };

  const imageStyle = {
    height: "220px",
    objectFit: "contain",
    padding: "15px",
    backgroundColor: "#f9f9f9",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
  };

  const footerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div style={pageStyle}>
      <div style={createBarStyle}>
        <span>Create a New Product</span>
        <Button variant="light" onClick={() => navigate("/newProduct")}>
          + Add Product
        </Button>
      </div>

      {error && <p className="text-danger text-center">{error}</p>}

      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <Container>
          <Row className="g-4">
            {products.map((product) => (
              <Col key={product.id} sm={12} md={4}>
                <Card style={cardStyle}>
                  <Card.Img variant="top" src={product.image} style={imageStyle} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text className="text-muted">${product.price}</Card.Text>
                  </Card.Body>
                  <Card.Footer style={footerStyle}>
                    <Button variant="warning" onClick={() => addItemToCart(product)}>
                      <MdAddShoppingCart />
                    </Button>
                    <Button variant="secondary" onClick={() => navigate(`/update/${product.id}`)}>
                      <FaEdit />
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(product.id)}>
                      <MdOutlineFolderDelete />
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ProductList;
