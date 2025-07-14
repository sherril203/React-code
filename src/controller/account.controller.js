const account = require("../models/account.model");


const createAccount = async (req, res) => {
    try {
        const accountDAta = req.body;
        const createAccount = await account.create(accountDAta);
        res.json({
            message: "account created",
            createAccount
        })
    } catch (error) {
        res.status(500).json({ error })
    }
};


const createManyAccount = async (req, res) => {
    try {
        const accountData = req.body;
        // let data = [];
        const createAccounts = await account.insertMany(accountData);
        // for (const account of accountDatas) {
        //     const createAccount = await account.create(account);
        //     data.push(createAccount)
        // }

        res.json({
            message: "accounts created",
            createAccounts
        })
    } catch (error) {
        res.status(500).json({ error })
    }
};


const getAccounts = async (req, res) => {
    try {
        const val = req.query.id;
        const getAccounts = await account.find({ branch: val }).sort({ _id: -1 });
        if (getAccounts.length === 0) return res.status(404).json({ message: "Data Not Found" });
        res.json(
            getAccounts
        )
    } catch (error) {
        res.status(500).json({ error })
    }
};


const getById = async (req, res) => {
    try {
        const { id } = req.query;
        const getData = await account.findById(id);
        if (!getData) return res.status(404).json({ message: "Data Not Fount" });
        res.json(getData);
    } catch (error) {
        res.status(500).json({
            error
        })
    }
};

const getByOne = async (req, res) => {
    try {
        const { val } = req.params;
        const getData = await account.findOne({ accountHolder: val });
        if (!getData) return res.status(404).json({ message: "Data Not Fount" });
        res.json(getData);
    } catch (error) {
        res.status(500).json({ error })
    }
};


const updateById = async (req, res) => {
    try {
        const { query, body } = req;
        const updateAccount = await account.findByIdAndUpdate(query.id, body, { new: true });
        if (!updateAccount) return res.status(404).json({ message: "Data Not Fount" });
        res.json(updateAccount);
    } catch (error) {
        res.status(500).json({ error })
    }
};


const updateByOne = async (req, res) => {
    try {
        const updateAccount = await account.updateOne({ accountNo: req.query.accountNo, branch: req.query.branch }, req.body);
        if (updateAccount.modifiedCount === 0) return res.status(404).json({ message: "Data Not Found" });
        res.json({ message: "Document updated" });
    } catch (error) {
        res.status(500).json({ error })
    }
};

const updateByMany = async (req, res) => {
    try {
        const updateData = await account.updateMany({ branch: req.query.branch }, req.body);
        if (updateData.modifiedCount === 0) return res.status(404).json({ message: "Data Not Found" });
        res.json({ message: "Documents updated" });
    } catch (error) {
        res.status(500).json({ error });
    }
};


const deleteById = async (req, res) => {
    try {
        const { id } = req.query;
        const deleteData = await account.findByIdAndDelete(id);
        if (!deleteData) return res.status(404).json({ message: "Data Not Found" });
        res.json(deleteData)
    } catch (error) {
        res.status(500).json({ error })
    }

}

const deleteByOne = async (req, res) => {
    try {
        const deletedData = await account.findOneAndDelete({ accountNo: req.query.accountNo });
        if (!deletedData) return res.status(404).json({ message: "Data Not Found" });
        res.json(deletedData);
    } catch (error) {
        res.status(500).json({ error });
    }
}

const oneDelete = async (req, res)=> {
    try {
        const deletedata = await account.deleteOne({accountHolder: req.query.accountHolder});
        if(deletedata.deletedCount===0) return res.status(404).json({ message: "Data Not Found"});
        res.json({message:"Data Deleted"})
    } catch (error) {
        res.status(500).json({error});  
    }  
}
const deleteByMany= async(req,res)=>{
    try {
        const deletedata=await account.deleteMany();
        if(deletedata.deletedCount===0)return res.status(404).json({message:"Data Not Found"});
        res.json({message:"Data Delete"});        
    } catch (error) {
        res.status(500).json({error});
        
    }
}


module.exports = {
    createAccount,
    createManyAccount,
    getAccounts,
    getById,
    getByOne,
    updateById,
    updateByOne,
    updateByMany,
    deleteById,
    deleteByOne,
    oneDelete,
    deleteByMany            
    

}