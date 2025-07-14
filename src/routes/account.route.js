const { Router } = require("express");
const router = Router();
const { createAccount, createManyAccount, getAccounts, getById, getByOne, updateById, updateByOne, updateByMany,deleteById,deleteByOne,oneDelete,deleteByMany } = require("../controller/account.controller");

router.post("/account", createAccount);
router.post("/manyaccouts", createManyAccount);
router.get("/getaccounts", getAccounts);
router.get("/accountbyid", getById);
router.get("/accountbyone/:val", getByOne);
router.put("/updatebyid", updateById);
router.put("/updatebyone", updateByOne);
router.put("/updatebymany", updateByMany);
router.delete("/deletebyid", deleteById);
router.delete("/deleteone",deleteByOne);
router.delete("/onedelete",oneDelete);
router.delete("/deletebymany",deleteByMany)



module.exports = router;
