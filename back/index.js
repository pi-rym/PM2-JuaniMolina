const app = require("./src/server");
require("dotenv").config();
const { PORT } = process.env;


app.listen(PORT, ()=>{
    console.log("El servidor esta corriendo");
});