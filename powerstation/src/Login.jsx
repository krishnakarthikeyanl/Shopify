import { Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom"; // 🚀 Add navigation

const schema = Yup.object().shape({
  email: Yup.string().email("Enter a valid Email").required("Email is Required"),
  password: Yup.string().required("Password is Required"),
});

const Login = () => {
  let navigate = useNavigate(); // 🚀 Initialize navigation

  let paperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
    display: "grid",
    gap: "20px",
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
        // ✅ FIX: Changed "Login" to "login"
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Login Successful!");
        console.log("User Data:", result);

        // 🚀 Redirect after login
        navigate("/newProduct"); // Change this to your desired page
      } else {
        alert(result.message || "❌ Login Failed! Please try again.");
      }
    } catch (error) {
      console.error("❌ Login Error:", error);
      alert("❌ An error occurred. Please try again later.");
    }
  };

  return (
    <Paper
      elevation={20}
      style={paperStyle}
      component="form"
      onSubmit={handleSubmit(handleLogin)}
    >
      <Typography textAlign="center" variant="h6">
        Login
      </Typography>
      <TextField
        label="Email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Password"
        type="password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <Button variant="contained" type="submit">
        Login
      </Button>
    </Paper>
  );
};

export default Login;
