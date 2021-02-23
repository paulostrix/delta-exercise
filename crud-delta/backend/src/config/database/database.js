const { Sequelize } = require('sequelize')

const database = new Sequelize(process.env.DB_URL_CONNECTION, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})

module.exports = database;