import { Schema,model } from "mongoose";

//schema 

const userSchema = new Schema (
    {
        name :{
            type:String,
            allowNull:false,
        },
        email:{
            type:String,
            unique:true,
        },
        password:String,
        //notes:[{
          // type:Types.objectId,
           // ref:"Note",
       // }],
    },
    {
        timestamps:true,
    }
) 


//model

export const User = model("User",userSchema);