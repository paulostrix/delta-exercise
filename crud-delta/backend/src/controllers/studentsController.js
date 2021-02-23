// -- Objetivo    :  Controller criado para gerenciar as requisições feitas ao servidor.

// -- Autor        : Paulo Oliveira

// -- Criado em : 22/02/2021

const studentsDAO = require('../dao/studentsDAO')

const studentsController = {
    addStudent: addStudent,
    findStudent: findStudent,
    findStudentById: findStudentById,
    updateStudent: updateStudent,
    deleteById: deleteById
}

function addStudent (req,res ) {
   const { location, key } = req.file
    if(typeof req != 'undefined'){
        let student = JSON.parse(req.body.body);
        student.avatar = location
        student.avatarKey = key

        studentsDAO.create(student).then((data) => {
            res.send(data)
        }).catch((error) => {
            console.log(`Não foi possível adicionar novo Aluno, erro: ${error}`)
        })
    }
    
}
function findStudent (req,res) {
    studentsDAO.findAll().then((data) => {
        res.send(data)
    }).catch((error) =>{
        console.log(error)
    })
}
function findStudentById (req, res) {
    studentsDAO.findById(req.params.id).then((data) => {
        res.send(data)
    }).catch((error) => {
        console.log(error)
    })
}

function updateStudent (req, res) {
    const { location, key } = req.file
    let updatedStudent = JSON.parse(req.body.body);
        updatedStudent.avatar = location
        updatedStudent.avatarKey = key
        
    studentsDAO.updateStudent(updatedStudent, req.params.id, req.params.avatarKey).then((data) => {
        res.status(200).json({
            message:"Student updated!",
            student: data
        })
    })
}

function deleteById (req, res) {
    studentsDAO.deleteById(req.params.id).then((data) => {
        res.status(200).json({
            message: 'Student deleted!',
            student: data
        })
    })
}

module.exports = studentsController