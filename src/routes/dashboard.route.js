const { Router } = require("express");
const { getData } = require("../controller/dashboard.controller");
const { validateToken } = require("../middleware/authToken");
const router = Router();


router.get("/", validateToken, getData);


module.exports = router;