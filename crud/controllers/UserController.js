const db = require('../config/database.js')
const User = require("../models/User.js")
    
const UserController = {
    getAllUsers: async(req,resp) => {
        try{    
            const Users =  await User.findAll()
            resp.send(Users) 
        }catch(err){
            console.log(err)
        }
    },
    insertUser: async(req,resp) => {
        try{
            console.log(req.body);
            const user = {
                name: req.body.name,
            }
            await User.create(user)
            message = 'User created successfully';
        }catch(err){
            message = err
            console.log(err)
        }
        resp.json({ message: message})
    },
    getUserById: async(req,resp) => {
        try{
            response = await User.findByPk(req.body.id)
        }catch(err){
            response = err
        }
        resp.json({ data: response,id: req.body.id })
    },
    updateById: async(req,resp) => {
        console.log("api patch")
        try{
            await User.update({
                    name: req.body.name
                },{ where: {id:req.body.id}})
            message = req.body.name + " updated successfully"
        }catch(err){
            message = err
        }
        console.log(req.body)
        resp.json({ message: message})
    },
    deleteById: async(req,resp)=> {
        try{
            await db.query('Delete from Users where id = ' + req.body.id)
            message = "user deleted successfully"
        }catch(err){
            message = err
        }
        resp.json({ message: message})
    }
}
module.exports = UserController