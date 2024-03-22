const mongoose = require('mongoose')

const userSchema= new mongoose.Schema({
     
    username:{
        type:String,
        require:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error('invalid Username')
            }
        }
    },
    
    address:{
        type:String,
        require:true
    },

    gender:{
        type:String,
        require:true
    },

    password:{
        type:String,
        require:true
    },
    profile:{
        type:String,
    },
})

const users = mongoose.model('users',userSchema)

module.exports = users
