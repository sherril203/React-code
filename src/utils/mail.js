const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendMailToUser = async (email, userName, password) => {
    try {
        const mailOptions = {
            from: "balaganesh9596@gmail.com",
            to: email,
            subject: "Welcome to Whytap",
            text: `Hello ${userName}, This is your account password: ${password}`
        };
        await transporter.sendMail(mailOptions);
        console.log(`Mail sended to ${userName}`);
    } catch (error) {
        console.log("Mail Error:", error);

    }
};


module.exports = sendMailToUser;