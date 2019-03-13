const Sequelize = require('sequelize')
const sequelize = require('../db')

const Project = require('../projects/models')

const Todo = sequelize.define('todos', {
    name:{
        field:'name',
        type:Sequelize.STRING,
        allowNull: false
    },
    content: {
        type:Sequelize.STRING,
        field:'content',
        allowNull:false
    },
    done:{
        type:Sequelize.BOOLEAN,
        filed:'done',
        allowNull:false
    },
    projectId:{
        type:Sequelize.INTEGER,
        field:'project_id'
    },
    userId: {
        type:Sequelize.INTEGER,
        field:'user_id'
    }
},{
    timestamp:false,
    tableName:'todos'
});

Todo.belongsTo(Project)

module.exports = Todo