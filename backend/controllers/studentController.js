const asyncHandler = require('express-async-handler')

const Student = require('../models/studentModel')
const User = require('../models/userModel')

const getStudents = asyncHandler( async (req,res) => {
    const goals = await Student.find({user: req.user.id})

    res.status(200).json(goals)
})

const setStudent = asyncHandler( async (req,res) => {
    if (!(req.body.name||req.body.age||req.body.grade||req.body.score)) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const student = await Student.create({
        name: req.body.name,
        age: req.body.age,
        grade: req.body.grade,
        score: req.body.score,
        user: req.user.id

    })

    res.status(200).json(student)
})

const updateStudent = asyncHandler( async (req,res) => {
    const student = await Student.findById(req.params.id)

    if (!student) {
        res.status(400)
        throw new Error('Student not found')
    }

    const user = await User.findById(req.user.id)

    //check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    //make sure the logged in user matches teh goal user
    if (student.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.status(200).json(updatedStudent)
})

const deleteStudent = asyncHandler( async (req,res) => {
    const student = await Student.findById(req.params.id)

    if (!student) {
        res.status(400)
        throw new Error('Student not Found')
    }

    const user = await User.findById(req.user.id)

    //check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    //make sure the logged in user matches teh goal user
    if (student.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await student.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {getStudents, setStudent, updateStudent, deleteStudent}