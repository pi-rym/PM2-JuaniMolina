const testController = (req, res) => {
    res.status(200).send("Estamos recibiendo una solicitud");
}

module.exports = {
    testController
};