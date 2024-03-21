const { User } = require("../db")
const bcrypt = require('bcryptjs')
const { generateJWT } = require('../modules/auth')
// const jwt = require('jsonwebtoken')

const signUpHandler = async (req, res) => {
    const username = req.body.username
    const hash = await bcrypt.hash(req.body.password, 5)
    //console.log(hash);
    let newUser = {}
    try {
        //create a new user and save it to the db
        newUser = new User({
            username: username,
            password: hash
        })
        console.log(newUser)
        await newUser.save()
    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
    //generate token and send it
    const token = generateJWT(newUser)
    res.status(201).send({ data: newUser, token: token })
}

const logInHandler = async (req, res) => {
    const user = await User.findOne({
        username: req.body.username
    })
    console.log(user);
    //if username does not exist then throw error and return
    if(!user) {
        res.status(404).send({ error: 'Username not found' })
        return 
    }
    //else compare the password
    const pass = await bcrypt.compare(req.body.password, user.password)
    //if password is incorrect then throw error and return
    if(!pass) {
        res.status(401).send({ error: 'Password is incorrect' })
        return
    }
    //else generate token and send it
    const token = generateJWT(user)
    res.status(200).send({ data: user, token: token })
}

module.exports = { signUpHandler, logInHandler }