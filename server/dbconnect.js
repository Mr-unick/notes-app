const mongoose=require('mongoose')
const nodemon = require('nodemon')
const conn=async ()=>{
    try{
await mongoose.connect('mongodb+srv://nikhillende9121:notesapp@notesapp.6j68aib.mongodb.net/test')
console.log("connetion succcefull")
    }
    catch(error){
        console.log("something went wrong while conneting " ,error)
    }

}
module.exports={conn};