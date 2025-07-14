const { student, instractor, auth } = require("../models/auth.model");


const getData = async (req, res) => {
    try {
        let { user } = req;
        if (user.role === "student") {
            const getUserData = await student.findById(user.userId, { studentName:0 });
            if (!getUserData) return res.status(404).json({ message: "Data Not Found" });
            return res.json(getUserData);
        }
        if (user.role === "instructor") {
            const getUserData = await instractor.findById(user.userId);
            if (!getUserData) return res.status(404).json({ message: "Data Not Found" });
            return res.json(getUserData);
        }
        const getUserData = await auth.findById(user._id);
        if (!getUserData) return res.status(404).json({ message: "Data Not Found" });
        res.json(getUserData);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};



module.exports = {
    getData
};