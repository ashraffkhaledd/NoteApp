import mongoose from "mongoose"

export const connectDB = async ()=>

    await mongoose.connect("mongodb://127.0.0.1:27017/noteAppTuesday")
    .then(()=>console.log("DB conneced!"))
    .catch((error)=>console.log("Error!",error))
