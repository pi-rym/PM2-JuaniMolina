const axios = require('axios')

module.exports ={
    getMovies: async ()=>{
        
            const datos = await axios("https://students-api.up.railway.app/movies")
            
            return datos.data
        
        }
    }

