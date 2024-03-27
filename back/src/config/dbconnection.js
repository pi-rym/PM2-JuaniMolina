const mongoose = require("mongoose");
require("dotenv").config();
const {MONGO_URI} = process.env;
const conexiondb = async () =>{
    await mongoose.connect(MONGO_URI);
}

module.exports = conexiondb;