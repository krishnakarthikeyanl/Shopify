import { Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// ✅ Yup Schema
const schema = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Enter a valid Email").required("Email is Required"),
  age: Yup.number()
    .integer()
    .positive()
    .required("Enter Your Age")
    .min(18, "Enter Age between 18 to 30")
    .max(30, "Enter Age between 18 to 30"),
  password: Yup.string().required("Password is Required"),
  cPassword: Yup.string()
    .required("Confirm Password is Required")
    .oneOf([Yup.ref("password"), null], "Passwords Must Match"),
});

const SignUp = () => {
  // 🎨 Page Background Style
  const pageStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #fceabb, #f8b500)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  // 🧾 Paper/Card Style
  const paperStyle = {
    width: 400,
    padding: "30px 25px",
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

  const handleData = (data) => {
    console.log("Form Data:", data);
    alert("✅ Signup Successful!");
  };

  return (
    <div style={pageStyle}>
      <Paper
        elevation={20}
        style={paperStyle}
        component="form"
        onSubmit={handleSubmit(handleData)}
      >
        <Typography
          variant="h5"
          align="center"
          style={{ color: "#f57c00", fontWeight: "bold" }}
        >
          Create Account
        </Typography>

        <TextField
          label="Name"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          label="Email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Age"
          type="number"
          {...register("age")}
          error={!!errors.age}
          helperText={errors.age?.message}
        />
        <TextField
          label="Password"
          type="password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <TextField
          label="Confirm Password"
          type="password"
          {...register("cPassword")}
          error={!!errors.cPassword}
          helperText={errors.cPassword?.message}
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
          Sign Up
        </Button>
      </Paper>
    </div>
  );
};

export default SignUp;
