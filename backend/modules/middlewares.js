const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const protect = async (req, res, next) => {
    const bearer = req.headers.authorization;
    if (!bearer) {
        res.status(401);
        res.send("Not authorized");
        return;
    }
    const [, token] = bearer.split(' ');
    console.log(token);
    console.log(process.env.JWT_SECRET);
    if (!token) {
        res.status(401);
        res.send("No token provided");
        return;
    }
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = payload;
        console.log(payload);
        next();
    } catch (error) {
        res.status(401)
        console.log(error)
        res.send("Invalid token");
        return
    }
}

module.exports = { protect }