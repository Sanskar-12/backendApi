import mongoose from "mongoose";

//SCHEMA
const UserSchema = mongoose.Schema({
  name: {
    type:String,
    required:true,
  },
  email: {
    type:String,
    unique:true,
    required:true,
  },
  password: {
    type:String,
    select:false,
    required:true,
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
});

//MODELS
const Users = mongoose.model("user", UserSchema);

export default Users;
