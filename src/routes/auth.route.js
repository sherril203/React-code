const { Router } = require("express");
const router = Router();
const {
  createStudent,
  createInstructor,
  login,
} = require("../controller/auth.controller");

router.post("/signup", createStudent);
router.post("/instructor-register", createInstructor);
router.post("/login", login);

module.exports = router;
