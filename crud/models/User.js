const  Sequelize = require("sequelize")
const  db = require("../config/database.js")

const { DataTypes } = Sequelize

const User = db.define('user',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name : {
        type: DataTypes.STRING
    },

})
module.exports = User