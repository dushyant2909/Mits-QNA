const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

// generate JWT token
const generateJWT = (user) => {
    const token = jwt.sign({
        username: user.username,
        id: user._id
    },
        process.env.JWT_SECRET)
    return token
}

module.exports = { generateJWT }