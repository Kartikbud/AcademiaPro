const getStudents = (req,res) => {
    res.status(200).json({message: 'get students'})
}

const setStudent = (req,res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: 'set student'})
}

const updateStudent = (req,res) => {
    res.status(200).json({message: `update student ${req.params.id}`})
}

const deleteStudent = (req,res) => {
    res.status(200).json({message: `delete student ${req.params.id}`})
}

module.exports = {getStudents, setStudent, updateStudent, deleteStudent}