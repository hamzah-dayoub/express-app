
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 5000
    res.status(statusCode).json({
        Message: err.Message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports = errorHandler