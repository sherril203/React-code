const { auth, instractor, student } = require("../models/auth.model");
const password = require("../utils/passwordGenerator");
const sendMailToUser = require("../utils/mail");
const bcrypt = require("bcrypt");
const { v4 } = require("uuid");
const { generateToken } = require("../middleware/authToken");

const createStudent = async (req, res) => {
  try {
    let { email, username, password } = req.body;
    const checkEmail = await auth.exists({ email });
    if (checkEmail)
      return res.status(409).json({ message: "Email alredy exists" });

    const [generateId] = await Promise.all([v4()]);

    const hass = await bcrypt.hash(password, 10);
    const [createData] = await Promise.all([
      student.create({
        _id: generateId,
        password,
        email,
        studentName: username,
      }),
      auth.create({
        ...req.body,
        password: hass,
        userName: username,
        userId: generateId,
        emailSend: false,
        role: "student",
      }),
    ]);
    // sendMailToUser(email, studentName, pass);
    res.status(201).json({ message: "Registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const createInstructor = async (req, res) => {
  try {
    let { email, instructorName } = req.body;
    const checkEmail = await auth.exists({ email });
    if (checkEmail)
      return res.status(409).json({ message: "Email alredy exists" });
    const [pass, generateId] = await Promise.all([password(8), v4()]);
    const hass = await bcrypt.hash(pass, 10);
    const [createData] = await Promise.all([
      instractor.create({
        _id: generateId,
        password: hass,
        ...req.body,
      }),
      auth.create({
        ...req.body,
        password: hass,
        userName: instructorName,
        userId: generateId,
        emailSend: false,
        role: "instructor",
      }),
    ]);
    // sendMailToUser(email, instructorName, pass);
    res.json(createData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkEmail = await auth.findOne({ email });
    if (!checkEmail)
      return res.status(404).json({ message: "Incorrect Email" });
    const checkPassword = await bcrypt.compare(password, checkEmail.password);
    if (!checkPassword)
      return res.status(404).json({ message: "Incorrect Password" });
    let token = generateToken(checkEmail);
    res.json({ token, message: "Login successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createStudent,
  createInstructor,
  login,
};
