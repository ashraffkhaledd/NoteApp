import { Note } from "../../../db/models/note.model.js";
import { User }from"../../../db/models/user.model.js";


//create note
export const createNote = async(req,res)=>{
    //data

    const {content,userId} = req.body;
    //check user
    const user = await User.findById(userId);
    if(!user) return res.json({success:false,message:"user not found"})
    //create
    const note = await Note.create({content,userId});
    
    return res.json({success:true,results:note});
}

//update note
export const updateNote = async(req,res)=>{
    //data>>id , iscompleted
    const {id} = req.params;
    const {isCompleted,userId} = req.body;

    //check if user exsited
    const user = await User.findById(userId);
    if(!user) return res.json({success:false,message:"user not found"});
    //query
    //const note = await Note.findByIdAndUpdate(id,{isCompleted},{new:true});
    
    const note = await Note.findOneAndUpdate({_id:id,userId},{isCompleted},{new:true}); //checking if the user who have this note ,//note variable It holds the updated state of the document after the update operation is executed. شايل ناتج الكويري
    if(!note) return res.json({success:false,message:"Note or user is invaild"}); //if note dosnt exist =null then do the rest of the code
    return res.json({success:true,results:note});





}

//all notes
export const allNotes = async(req,res)=>{
    //query
    const results = await Note.find({},{content:1,_id:0}).populate({
        path:"userId",
        select:"name email -_id ",
    });
    return res.json({success:true,results});
}


//user notes
export const userNote = async(req,res,next)=>{
    //data >> user id
    const {id} = req.params;
    //query
    const results = await Note.find({userId:id}).populate("userId");
    return res.json({success:true,results});
}
