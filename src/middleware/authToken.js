const jwt = require("jsonwebtoken");
const { auth } = require("../models/auth.model");

const generateToken = (data) => {
    return jwt.sign({ data }, process.env.JWT_KEY, { expiresIn: process.env.JWT_EXPIRE });
};


const validateToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token?.startsWith("Bearer ")) return res.status(401).json({ message: "Need token to validate" });
        const withoutBearer = token?.split(' ')[1];
        const payload = jwt.verify(withoutBearer, process.env.JWT_KEY);
        const checkUser = await auth.exists({ _id: payload.data._id });
        if (!checkUser) return res.status(401).json({ message: "User Not Found" })
        req.user = payload.data;
        next();
    } catch (error) {
        res.status(401).json({ message: error.message })
    }
};


module.exports = {
    generateToken,
    validateToken
};