module.exports = {
    mode:"development",
    entry:{index :"./scripts/index.js",
    movies: "./scripts/formularioPeliculas.js"
},
    output:{
        path:__dirname + "/browser",
        filename:"[name].js"
    }
}