const { Schema, model } = require("mongoose");


const authSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    dob: {
        type: Date
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: Number
    },
    role: {
        type: String,
        enum: ['student', 'instructor', 'admin']
    },
    profile: {
        type: String
    },
    userId: {
        type: String
    },
},
    { timestamps: true }
);

const auth = model("auth", authSchema);

const studentSchema = new Schema({
    _id: {
        type: String
    },
    studentName: {
        type: String,
        required: true
    },
    dob: {
        type: Date
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: Number
    },
    institute: {
        type: String,
        enum: ['college', 'school']
    },
    role: {
        type: String,
        default: 'student'
    },
    studentId: {
        type: String
    },
    profile: {
        type: String
    },
},
    { timestamps: true }
);

const student = model("student", studentSchema);

const instractorSchema = new Schema({
    instructorName: {
        type: String,
        required: true
    },
    dob: {
        type: Date
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: Number
    },
    education: {
        type: String
    },
    experience: {
        type: Number
    },
    role: {
        type: String,
        default: 'instructor'
    },
    fieldOfStudy: {
        type: String
    },
    teacherId: {
        type: String
    },
    subject: {
        type: String
    },
    profile: {
        type: String
    },
},
    { timestamps: true }
);

const instractor = model("instractor", instractorSchema);


module.exports = {
    auth,
    instractor,
    student
};