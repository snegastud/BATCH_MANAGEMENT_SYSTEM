import mongoose from "mongoose";

const  schema =new mongoose.Schema({
    userName:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true, minlength: 6},
    phoneNumber:{type:String,required:true}},
    {timestamps:true})

export const userSchema =mongoose.model('userSchema',schema);








