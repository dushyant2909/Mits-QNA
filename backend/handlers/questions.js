const { Question, User } = require('../db')


const getQuestions = (req, res) => {
    res.send('Get all questions')
}

const getQuestion = (req, res) => {
    res.send('Get a question by id')
}

const addQuestion = async (req, res) => {
    const user = await User.findOne({
        username: req.user.username
    })
    //console.log('User',user);
    let newQuestion = {}
    try {
        newQuestion = new Question({
            title: req.body.title,
            body: req.body.body,
            userId: user.id
        })
        //console.log(newQuestion)
        await newQuestion.save()
        user.questions.push(newQuestion)
        await user.save()
        console.log(user.questions);
    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
    res.status(201).send({ data: newQuestion })
}

const deleteQuestion = (req, res) => {
    res.send('Delete a question by id')
}

const updateQuestion = (req, res) => {
    res.send('Update a question by id')
}

module.exports = { getQuestions, getQuestion, addQuestion, deleteQuestion, updateQuestion }