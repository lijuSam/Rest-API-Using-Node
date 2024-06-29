const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode; // Ensure statusCode is set correctly

    res.status(statusCode).json({
        message: err.message,
        // Expose stack trace only in development mode
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
};

module.exports = errorHandler;
