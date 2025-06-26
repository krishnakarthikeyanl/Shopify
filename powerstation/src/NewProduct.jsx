import React, { useState } from "react";
import { Button, Paper, TextField, Typography, Grid } from "@mui/material";

const NewProduct = () => {
  // 🌈 Page background style
  const pageStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #fceabb, #f8b500)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  // 🧾 Card style
  const paperStyle = {
    width: 420,
    padding: "30px 25px",
    borderRadius: "15px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
    display: "grid",
    gap: "20px",
    backgroundColor: "#fffef9",
  };

  // 📦 Product state
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: 500,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  // 🖊️ Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("rating.")) {
      const key = name.split("rating.")[1];
      setNewProduct((prev) => ({
        ...prev,
        rating: {
          ...prev.rating,
          [key]: value,
        },
      }));
    } else {
      setNewProduct((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // ➕ Submit handler
  const handleAdd = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then(() => {
        alert("✅ Product Added Successfully!");
        setNewProduct({
          title: "",
          price: 500,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          rating: { rate: 0, count: 0 },
        });
      })
      .catch((err) => alert("❌ Failed to Add Product"));
  };

  return (
    <div style={pageStyle}>
      <Paper elevation={10} style={paperStyle} component="form" onSubmit={handleAdd}>
        <Typography
          variant="h5"
          align="center"
          style={{ color: "#f57c00", fontWeight: "bold" }}
        >
          Create New Product
        </Typography>

        <TextField
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          value={newProduct.title}
          onChange={handleChange}
        />
        <TextField
          name="category"
          label="Category"
          variant="outlined"
          fullWidth
          value={newProduct.category}
          onChange={handleChange}
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              name="rating.rate"
              type="number"
              label="Rating"
              variant="outlined"
              fullWidth
              value={newProduct.rating.rate}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="rating.count"
              type="number"
              label="Count"
              variant="outlined"
              fullWidth
              value={newProduct.rating.count}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          style={{
            backgroundColor: "#f57c00",
            color: "white",
            fontWeight: "bold",
            padding: "10px",
          }}
        >
          Add Product
        </Button>
      </Paper>
    </div>
  );
};

export default NewProduct;
