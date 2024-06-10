import { Schema, Types, model } from "mongoose";


//schema

const noteSchema = new Schema({
    content:String,
    isCompleted:{
        type:Boolean,
        default:false,
    },
    userId:{
        type:Types.ObjectId,
        ref:"User",
    }
})


//model

export const Note = model("Note",noteSchema);  
