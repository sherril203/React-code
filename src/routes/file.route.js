const { Router } = require("express");
const router = Router();
const { createFile, getFile, updateFile, deleteFile, getAll } = require("../controller/file.controller");
const single = require("../middleware/multer");
const { validateToken } = require("../middleware/authToken");

router.use(validateToken);

router
    .route("/")
    .post(single, createFile)
    .get(getFile)
    .put(single, updateFile)
    .delete(deleteFile);

router
    .route("/getall")
    .get(getAll);


module.exports = router;