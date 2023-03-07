const errorHandler = (err, reg, res, next) => {
    res.send(err.message)
}
module.exports = errorHandler;