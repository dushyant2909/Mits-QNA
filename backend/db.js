const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()


//User schema
const userSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    password: String,
    // questions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Question'}],
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }]
})
const User = mongoose.model('users', userSchema)

//Question schema
const questionSchema = new mongoose.Schema({
    title: String,
    body: String,
    answers: { type: [String], required: false },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})
const Question = mongoose.model('questions', questionSchema)

//Connecting to the database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { dbName: 'mitsqna' })
        console.log('Connected to the database')
    }
    catch (err) {
        console.log('Error connecting to the database', err)
    }
}


module.exports = { connectDB, User, Question }

