const usersForm = require("../Model/formModel")

  // logic for adding the deatils
  exports.addUserDetails = async(req,res)=>{
    console.log(`inside controller add function`);

    const userId = req.payload
    console.log(userId);

    const img = req.file.filename
    console.log(img);

    const {slno,name,email,password,address,dob,gender,hobbie,country} = req.body;

    console.log(`${slno},${name},${email},${password},${address},${dob},${gender},${hobbie},${country}, ${img},${userId}`);

    try{const existsUserForm = await usersForm.findOne({email})
    if(existsUserForm)
    {
       res.status(406).json("User Details Alredy Exists...Please ")
    }
   else
   {
       const newUserForm = new usersForm({
        slno,name,email,password,address,dob,gender,hobbie,country,img
       })
       
       await newUserForm.save()
       res.status(200).json(newUserForm)

   }} 
   catch(err){
    res.status(401).json(`Register request Failed due to,${err}`)
   }
}
