const { User } = require("../db")

const signUpHandler = async (req, res) => {
    // res.status(200).send({ data: req.body })
    const { username, password } = req.body
    let newUser = {}
    try {
        newUser = new User({ username, password })
        console.log(newUser);
        await newUser.save()
    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
    res.status(201).send({ data: newUser })
}

const logInHandler = async (req, res) => {
    res.status(200).send({ data: req.body })
}

module.exports = { signUpHandler, logInHandler }