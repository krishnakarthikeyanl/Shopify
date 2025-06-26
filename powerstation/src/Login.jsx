import { Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const schema = Yup.object().shape({
  email: Yup.string().email("Enter a valid Email").required("Email is Required"),
  password: Yup.string().required("Password is Required"),
});

const Login = () => {
  const navigate = useNavigate();

  // 🌈 Page background style
  const pageStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #fceabb, #f8b500)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  // 🧾 Paper (card) style
  const paperStyle = {
    width: 400,
    padding: "30px 20px",
    borderRadius: "15px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
    display: "grid",
    gap: "20px",
    backgroundColor: "#fffef9",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = async (data) => {
    try {
      const response = await fetch("http://localhost:5173/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Login Successful!");
        console.log("User Data:", result);
        navigate("/newProduct");
      } else {
        alert(result.message || "❌ Login Failed! Please try again.");
      }
    } catch (error) {
      console.error("❌ Login Error:", error);
      alert("❌ An error occurred. Please try again later.");
    }
  };

  return (
    <div style={pageStyle}>
      <Paper
        elevation={10}
        style={paperStyle}
        component="form"
        onSubmit={handleSubmit(handleLogin)}
      >
        <Typography variant="h5" align="center" style={{ color: "#f57c00", fontWeight: "bold" }}>
          Welcome Back
        </Typography>

        <TextField
          label="Email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          fullWidth
        />

        <TextField
          label="Password"
          type="password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
          fullWidth
        />

        <Button
          variant="contained"
          type="submit"
          style={{
            backgroundColor: "#f57c00",
            color: "white",
            fontWeight: 600,
            padding: "10px",
          }}
        >
          Login
        </Button>
      </Paper>
    </div>
  );
};

export default Login;
