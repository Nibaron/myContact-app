const constants = require("../utils/constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.STATUS.BAD_REQUEST:
            res.json({ title: "Bad Request", message: err.message || constants.STATUS.BAD_REQUEST });
            break;
        case constants.STATUS.UNAUTHORIZED:
            res.json({ title: "Unauthorized", message: err.message || constants.STATUS.UNAUTHORIZED });
            break;
        case constants.STATUS.FORBIDDEN:
            res.json({ title: "Forbidden", message: err.message || constants.STATUS.FORBIDDEN });
            break;
        case constants.STATUS.NOT_FOUND:
            res.json({ title: "Not Found", message: err.message || constants.STATUS.NOT_FOUND });
            break;
        case constants.STATUS.SERVER_ERROR:
            res.json({ title: "Server Error", message: err.message || constants.STATUS.SERVER_ERROR });
            break;
    }
}
module.exports = { errorHandler };