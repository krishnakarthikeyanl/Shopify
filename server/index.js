const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const LogModel = require("./models/logsch"); // Use the correct LogModel

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/powerstation")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("MongoDB connection error: ", err));

app.post("/login", (req, res) => {
    LogModel.create(req.body)  // Create a new user document
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err));
});

// Start servernpm install express mongoose dotenv cors

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
