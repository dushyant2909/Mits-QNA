const { Question, User } = require('../db')


const getQuestions = async (req, res) => {
    const questions = await Question.find()
    if(!questions) {
        res.status(404).send({error: 'No questions found'})
    }
    res.send({ data: questions })
}

const getQuestion = async (req, res) => {
    const question = await Question.findById(req.params.id)
    if (!question) {
        res.status(404).send({ error: 'Question not found' })
    }
    res.send({ data: question })
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
            userId: req.user.id
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

const deleteQuestion = async (req, res) => {
    const deletedQuestion = await Question.findByIdAndDelete(req.params.id)
    const user = await User.findOne({
        username: req.user.username
    })
    /** @Todo : Remove the question from the user's questions array
     */
    await user.save()
    if (!deletedQuestion) {
        res.status(404).send({ error: 'Question not found' })
    }
    res.send({ data: deletedQuestion })
}

const updateQuestion = async (req, res) => {
    const updatedQuestion = await Question.findByIdAndUpdate(req.params.id,{
            title: req.body.title,
            body: req.body.body
        })
    await updatedQuestion.save()
    if (!updatedQuestion) {
        res.status(404).send({ error: 'Question not found' })
    }
    res.send({ data: updatedQuestion })
}

module.exports = { getQuestions, getQuestion, addQuestion, deleteQuestion, updateQuestion }