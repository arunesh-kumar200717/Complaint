// errorHandler.js

/**
 * Error handling middleware for Express applications.
 * @param {Object} err - Error object
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware function
 */
const errorHandler = (err, req, res, next) => {
    // Log the error to the console or a logging service
    console.error(err.stack);

    // Set the response status code and return the error message
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'An unexpected error occurred',
    });
};

module.exports = errorHandler;