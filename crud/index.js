const express =  require("express")
const cors = require('cors')
const db = require("./config/database.js")
const Router = require("./routes/routes.js")
const bodyParser = require("body-parser")


const app = express()
app.use(express.json())
app.use(cors())
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

try{
    db.sync({ force: true});   
    console.log('db connection has been establish')
}catch(err){
    console.error('unable to connect to db' + err)
}
app.use(Router);
app.listen(5000,() => console.log('server running at http://localhost:5000'))