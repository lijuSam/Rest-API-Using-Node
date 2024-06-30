const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ?res.statusCode : 500 ; // Ensure statusCode is set correctly

    res.json({ title : "Not Found!!!!",message:err.message,stackTrace:err.stack});
};

module.exports = errorHandler;
