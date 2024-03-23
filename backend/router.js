const express = require('express')
const router = express.Router()
const { getQuestions, getQuestion, addQuestion, deleteQuestion, updateQuestion } = require('./handlers/questions')

/* Questions Routes */
/**
* @desc    Get all questions
* @route   GET /questions
* @access  Private
*/
router.get('/questions', getQuestions)
/**
 * @desc    Get a question by id
 * @route   GET /question/:id
 * @access  Private
 */
router.get('/question/:id', getQuestion)
/**
 * @desc    Add a question
 * @route   POST /question
 * @access  Private
 */
router.post('/question', addQuestion)
/**
 * @desc    Delete a question by id
 * @route   DELETE /question/:id
 * @access  Private
 */
router.delete('/question/:id', deleteQuestion)
/**
 * @desc    Update a question by id
 * @route   PUT /question/:id
 * @access  Private
 */
router.put('/question/:id', updateQuestion)

module.exports = router