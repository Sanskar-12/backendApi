import mongoose from "mongoose";

//SCHEMA
const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

//MODELS
const Users = mongoose.model("user", UserSchema);

export default Users;
