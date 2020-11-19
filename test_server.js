const express = require('express')
const cors = require('cors')
const res = require('express/lib/response')
const app = express()
app.use(cors())
app.use(express.json())

var database={
    users: [
    {
        username:"abc",
        password:"123"
    }
]}

app.get("/" ,(req,res)=>{
  res.json("successful login")  
})

// var userNameprompt = prompt("Username");
// var passwordPrompt = prompt("Password");

// function signin(user,password){
//     if (user === database[0].username && password === database[0].password)
//     {console.log("Welcome");}
//     else {alert("Sorry wrong username or passowrd");}
// }

app.listen(3000, ()=>{
    console.log("server running on port 3000");
})
