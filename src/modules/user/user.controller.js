import { User } from "../../../db/models/user.model.js";

//signup post
export const signup = async(req,res,next) => {

    try {
        //data
    const{name,email,password,confirmPassword} = req.body;

    //check passowrd
    if(password!==confirmPassword){
        return res.json({success:false , message:"Password must match!"});
    }
    //creat

    const user = await User.create({name,email,password});
    console.log(user);
    //response

    return res.json({success:true,message:"user created successfully",user})
    } 
    catch (error) {
        if(error.keyPattern.email){
            return res.json({success:false,message:"Email must be unqiue!"})
            }
            return res.json({success:false,error})
        
    }
    
}

//login
export const login = async(req,res,next) => {
//data    
    const {email,password}=req.body;

//query

//const user =await User.findOne({email,password})
//if(!user){
//    return res.json({success:false,message:"password or email not correct"})
//}
//return res.json({success:true,results:user});


//check email
const user =await User.findOne({email})
if(!user){
    return res.json({success:false,message:" email not correct"})
}



//check password

if(user.password!==password){
    return res.json({
        success:false,
        message:"invalid password!",
    });
}
//generate token

return res.json({success:true,results:user})

}

export const deleteAccount = async(req,res,next) =>{
    //data
    const {email} = req.params;
    //query
    const user = await User.findOneAndDelete({email});
    if(!user) return res.json({success:false,message:"user not found"})
    console.log(user);
    return res.json({success:true,message:"Account deleted successfully!"});
};


export const allUsers = async(req,res)=>{
    //query
    const results = await User.find({},{password:0});
    //const results = await User.find().select("-_id");
    return res.json({success:true,results})
}