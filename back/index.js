const app = require("./src/server");
require("dotenv").config();
const { PORT } = process.env;
const conexiondb = require("./src/config/dbconnection")


conexiondb().then(() =>{
    app.listen(PORT, ()=>{
        console.log("El servidor esta corriendo");
    });
}).catch((err) => console.log("Fallo en la Conexion", err.menssage));
