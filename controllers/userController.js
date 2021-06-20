import UserModel from "../models/userModel.js";

export const authUser = async (req, res) => {
  const { email, password } = req.body;

  const admin = await UserModel.findOne({ email });
  const adminPassword = await UserModel.findOne({ password });

  if (admin && adminPassword) {
    res.json({
      email,
    });
  } else {
    res.status(401).json({
      message: "Invalid Email or Password",
    });
  }
};
