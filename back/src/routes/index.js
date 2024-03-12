const { Router } = require("express");
const { testController } = require("../controllers");
const movieRouter = require("./movieRoutes");

const router = Router();

router.use("/test",testController);

router.use("/movies", movieRouter);



module.exports = router;