import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    name: String,
    email: String,
    contact: String,
    gender: String,
    password: String,
})

export const User=mongoose.model("User",UserSchema);