const { Schema, model } = require("mongoose");


const schema = new Schema({
    filename: {
        type: String
    },
    originalname: {
        type: String
    },
    size: {
        type: String
    },
    mimetype: {
        type: String
    },
    destination: {
        type: String
    },
    userId: {
        type: String
    },
    userName: {
        type: String
    }
},
    { timestamps: true }
);


const fileModel = model("file", schema);


module.exports = fileModel;