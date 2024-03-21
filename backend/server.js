const express = require('express')
const { signUpHandler, logInHandler } = require('./handlers/users')
const { connectDB } = require('./db')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const { protect } = require('./modules/middlewares')

dotenv.config()
const app = express()
connectDB()

//middlewares
app.use(express.json())

//routes
app.get('/', (req, res) => res.send('Hello MITS!'))
app.get('/api', protect, (req, res) => res.send('I am Authenticated!'))

// user routes
app.post('/signup', signUpHandler)
app.post('/login', logInHandler)

// question routes
// app.get('/questions', protect, getQuestions)
// app.get('/question/:id', protect, getQuestion)
// app.post('/question', protect, addQuestion)
// app.delete('/question/:id', protect, deleteQuestion)
// app.put('/question/:id', protect, updateQuestion)

const port = process.env.PORT
app.listen(port, () => console.log(`Server is running on port ${port}`))
