// -- Objetivo    :  DAO criado para realizar as funções da CRUD garantindo a persistência dos dados 

// -- Autor        : Paulo Oliveira

// -- Criado em : 22/02/2021
require('dotenv').config()
const Students = require('../models/studentsModel')
const aws = require('aws-sdk')

aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    "region": "us-east-2" 
})

const s3 = new aws.S3()

const StudentsDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateStudent: updateStudent
}

function findAll (){
    return Students.findAll();
}

function findById (id){
    return Students.findByPk(id)
}

function deleteById(id){
    return Students.findByPk(id).then((result) => {
        return Students.destroy({where: { id : id}})
            .then((u) => { 
                console.log(result)
                let { avatarKey } = result.dataValues
                return s3.deleteObject({
                        Bucket:'upload-delta-tec',
                        Key: avatarKey
                    }).promise()
             });
    });
    
    
}

function create (student){
    let newStudent = new Students(student)
    return newStudent.save();
}

function updateStudent(student,id, older_avatar_key){
    let updateStudent = {
        name: student.name,
        address: student.address,
        avatar: student.avatar,
        avatarKey: student.avatarKey
    }
    return Students.update(updateStudent, {where: { id : id }}).then(() => {
            return s3.deleteObject({
                    Bucket:'upload-delta-tec',
                    Key: older_avatar_key
                }).promise()
    })
}

module.exports = StudentsDao;