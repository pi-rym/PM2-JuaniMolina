const express = require("express");
const router = require("./routes/index")
const morgan = require('morgan')
const cors = require("cors");


const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use((req, res, next)=>{
    console.log("probando mi middleware");
    next()
})
app.use(router);

module.exports = app;