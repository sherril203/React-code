const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    accountNo: {
        type: Number,
        required: true,
        unique: true
    },
    accountHolder: {
        type: String,
        required: true
    },
    branch: {
        type: String
    },
    ifsc: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true
    },
    role: {
        type: String,
        enum: ["admin", "user", "staff"],
        default: "user",
        select: false
    }
}, {
    timestamps: true
});


const account = mongoose.model("account", accountSchema);

module.exports = account;