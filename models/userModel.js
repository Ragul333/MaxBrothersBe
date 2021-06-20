import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: { type: String, required: true },
});

const UserModel = mongoose.model("admins", UserSchema);

export default UserModel;
