const { Router } = require("express");
const movieRouter = require("./movieRoutes");

const router = Router();


router.use("/movies", movieRouter);

module.exports = router;