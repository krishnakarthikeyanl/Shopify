const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Email should be unique
    password: { type: String, required: true }  
    
});

const LogModel = mongoose.model("Log", LogSchema);
module.exports = LogModel;
