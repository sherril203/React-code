const fileModel = require("../models/file.model");
const { auth } = require("../models/auth.model");
const { default: mongoose } = require("mongoose");

const getFile = async (req) => {
    let { user } = req;
    const getData = await fileModel.find({ userId: user.userId }, { createdAt: 0, updatedAt: 0, __v: 0 });
    if (getData.length === 0) throw new Error("Data Not Found", { cause: { status: 404 } });
    return getData;

};

const getAll = async (req) => {
    let { user } = req;
   
    const val = await auth.aggregate([
        {
            $match: {
                _id: new mongoose.Types.ObjectId(user._id) 
            }
        },
        {
            $lookup: {
                from: "students",
                localField: "userId",
                foreignField: "_id",
                pipeline: [
                    {
                        $lookup: {
                            from: "files",
                            localField: "_id",
                            foreignField: "userId",
                            pipeline: [
                                {
                                    $project: {
                                        filename: 1,
                                        originalname: 1,
                                        destination: 1
                                    }
                                }
                            ],
                            as: "file"
                        }
                    },
                    {
                        $project: {
                            _id: 0,
                            studentName: 1,
                            mobile: 1,
                            institute: 1,
                            role: 1,
                            files: "$file"
                        }
                    }
                ],
                as: "stu"
            }
        },
        {
            $unwind: {
                path: "$stu",
                preserveNullAndEmptyArrays: true
            }
        },
        {
            $project: {
                _id: 0,
                userName: 1,
                dob: 1,
                email: 1,
                age: 1,
                name: "$stu.studentName",
                mobile: "$stu.mobile",
                type: "$stu.role",
                files: "$stu.files"
            }
        }
    ]);
   
    if (val.length === 0) throw new Error("Data Not Found", { cause: { status: 404 } });
    return val;
};

module.exports = { getFile, getAll };