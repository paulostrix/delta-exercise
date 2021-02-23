
const Sequelize = require('sequelize')
const { uuid } = require('uuidv4')
const db = require('../config/database/database')

const StudentsModel = db.define('students',{
    id:{
        type:Sequelize.UUID,
        primaryKey:true,
    },
    name:{
        type:Sequelize.STRING,
        allowNull: false
    },
    address:{
        type:Sequelize.STRING,
        allowNull: false
    },
    avatar:{
        type:Sequelize.STRING,
    },
    avatarKey: {
        type:Sequelize.STRING,
    }
})

StudentsModel.beforeCreate(student => student.id = uuid() )



module.exports = StudentsModel