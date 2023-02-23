const express = require('express')
const router = express.Router()
const {getStudents, setStudent, updateStudent, deleteStudent} = require('../controllers/studentController')

router.get('/', getStudents)

router.post('/',setStudent)

router.put('/:id', updateStudent)

router.delete('/:id', deleteStudent)


module.exports = router