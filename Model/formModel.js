const mongoose = require('mongoose')

const userSchema= new mongoose.Schema({

    slno:{
        type:Number,
        require:true
    },

    name:{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error('invalid Email')
            }
        }
    },

    password:{
        type:String,
        require:true
    },
    
    address:{
        type:String,
        require:true
    },

    dob:{
        type:Date,
        require:true
    },

    gender:{
        type:String,
        require:true
    },

    hobbie:{
        type:String,
        require:true
    },

    country:{
        type:String,
        require:true
    },

    img:{
        type:String,
        require:true
    },

    userId:{
        type: String,
        require:true
    },


    
})

const formUser = mongoose.model('formUser',userSchema)

module.exports = formUser
