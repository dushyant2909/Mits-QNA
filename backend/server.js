const express = require('express')
const { signUpHandler, logInHandler } = require('./handlers/users')
const { connectDB } = require('./db')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

//middlewares
app.use(express.json())

//routes
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/db', (req, res) => {
    connectDB()
    res.send('You can access the database here')
})
// user routes
connectDB()
app.post('/signup', signUpHandler)
app.post('/login', logInHandler)

const port = process.env.PORT
app.listen(port, () => console.log(`Server is running on port ${port}`))
