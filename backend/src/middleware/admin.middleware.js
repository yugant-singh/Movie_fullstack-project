

async function adminMiddleware(req, res, next) {

    try {
        if (!req.user) {
            return res.status(401).json({
                message: "Unauthorized. Please login to access this resource."
            })
        }

        if (req.user.role !== "admin") {
            return res.status(403).json({
                message: "Forbidden. You do not have permission to access this resource."
            })
        }
        next()
    } 
    catch (err) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        })
    }
}


module.exports = adminMiddleware