const catchAsync = (error, res) => {
    error.cause? res.status(error.cause.status).json({ error: error.message }) : res.status(500).json({ error: error.message });    
};


module.exports = catchAsync;