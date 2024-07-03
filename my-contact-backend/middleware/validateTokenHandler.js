const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let auth_header = req.headers['authorization'];

    if (auth_header && auth_header.startsWith("Bearer ")) {
        token = auth_header.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: "User is not authorized" });
            }
            req.user = decoded; 
            console.log(decoded);
            next();
        });
    } else {
        return res.status(401).json({ message: "User is not authorized" });
    }
});

module.exports = validateToken;
