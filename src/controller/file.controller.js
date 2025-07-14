const fileModel = require("../models/file.model");
const fs = require("fs");
const service = require("../service/file.service");
const catchAsync = require("../utils/catch");

const createFile = async (req, res) => {
  try {
    const { user, file, body } = req;
    const data = {
      ...file,
      userId: user.userId,
      ...body,
    };
    await fileModel.create(data);
    res.status(201).json({ message: "File Uploaded successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getFile = async (req, res) => {
  try {
    const data = await service.getFile(req);
    res.json(data);
  } catch (error) {
    catchAsync(error, res);
  }
};

const updateFile = async (req, res) => {
  try {
    let { query, file, body } = req;
    const findOldFile = await fileModel.findById(query.id);
    if (!findOldFile)
      return res.status(404).json({ message: "Data Not Found" });
    if (file && findOldFile.filename) {
      fs.unlinkSync(`${findOldFile.destination}/${findOldFile.filename}`);
    }
    let data = {
      ...file,
      ...body,
    };
    const updateData = await fileModel.findByIdAndUpdate(query.id, data, {
      new: true,
    });
    res.json(updateData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteFile = async (req, res) => {
  try {
    let { query } = req;
    const findOldFile = await fileModel.findById(query.id);
    if (!findOldFile)
      return res.status(404).json({ message: "Data Not Found" });
    if (findOldFile.filename) {
      fs.unlinkSync(`${findOldFile.destination}/${findOldFile.filename}`);
    }
    await findOldFile.deleteOne();
    res.json(findOldFile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const data = await service.getAll(req);
    res.json(data);
  } catch (error) {
    catchAsync(error, res);
  }
};

module.exports = {
  createFile,
  getFile,
  updateFile,
  deleteFile,
  getAll,
};
