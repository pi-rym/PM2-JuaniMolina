const validarDatosMovie = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;

    if (!title || !year || !director || !duration || !genre || !rate || !poster) {
        return res.status(400).json({ error: 'Todos los campos son requeridos.' });
    }

    const añoActual = new Date().getFullYear();
    if (isNaN(year) || year.length !== 4 || parseInt(year) > añoActual) {
        return res.status(400).json({ error: 'El año debe ser en formato (YYYY) (No debe superar al año actual).' });
    }

    if (isNaN(rate) || rate < 0 || rate > 10) {
        return res.status(400).json({ error: 'La puntuación debe ser un número válido entre 0 y 10.' });
    }

    next();
};

module.exports = validarDatosMovie;