const multer = require("multer");

const storage = multer.diskStorage({
    destination: "src/uploads",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },

});


const upload = multer({ storage });

const singleStrage = upload.single("profile");


module.exports = singleStrage;