const Sequelize = require('sequelize')
const sequelize = require('../db')
const UsersProjects = require('./users_projects')

const Project = sequelize.define('projects', {
    name:{
        type:Sequelize.STRING,
        field:'name',
        allowNull:false
    },
    participantsNum:{
        type:Sequelize.INTEGER,
        field:'participants_number',
        allowNull:true
    },
    userId: {
        type:Sequelize.INTEGER,
        field:'user_id'
    }
}, {
    timestamp: false,
    tableName:'projects'
});

Project.belongsTo(UsersProjects)

module.exports = Project