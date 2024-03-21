const users = require("../Model/usersModel")

const jwt = require('jsonwebtoken')


  // logic for register
  exports.register = async(req,res)=>{
    console.log(`inside controller register function`);

    const {username,address,gender,password} = req.body;
    try{const existsUser = await users.findOne({username})
    if(existsUser)
    {
       res.status(406).json("User Alredy Exists...Please Login")
    }
   else
   {
       const newUser = new users({
           username,
           address,
           gender,
           password
       })
       
       await newUser.save()
       res.status(200).json(newUser)

   }} 
   catch(err){
    res.status(401).json(`Register request Failed due to,${err}`)
   }
}


//logic for login
exports.login = async(req,res)=>{
    console.log(`inside controller login function`);

    const {username,password} = req.body

    try{
        const existsUser = await users.findOne({username,password})
        console.log(existsUser);

        if(existsUser)
        {   
            const token = jwt.sign({userId:existsUser._id},"supersecretekey12345")

            res.status(200).json({
                existsUser,
                token
            })
        }
        else
        {
            res.status(406).json('Invalid Username or Password')
        }
    }catch(err)
    {
        res.status(401).json(`login failed due to  ${err}`)
    }
}
