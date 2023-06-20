import Users from "../models/userModel.js";
import bcrypt from "bcrypt";
import { setCookie } from "../utils/features.js";
import Errorhandler from "../utils/errorclass.js";

export const getalluser = async (req, res, next) => {
  try {
    let user = await Users.find({});
    res.status(201).json({
      success: true,
      user: user,
    });
  } catch (error) {
    next(error);
  }
};

export const newuser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    let user = await Users.findOne({ email });

    if (user) {
      return next(new Errorhandler("User already Exists", 404));
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user = await Users.create({
      name: name,
      email: email,
      password: hashedPassword,
    });

    setCookie(user, res, "Registered Successfully", 201);
  } catch (error) {
    next(error);
  }
};

export const userlogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let user = await Users.findOne({ email }).select("+password");

    if (!user) {
      return next(new Errorhandler("Invalid Email or Password", 404));
    }
    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({
        success: false,
        message: "Invalid Password",
      });
    }
    setCookie(user, res, `Welcome back, ${user.name}`, 201);
  } catch (error) {
    next(error);
  }
};

export const getUserProfile = async (req, res, next) => {
  try {
    res.status(201).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    next(error);
  }
};

export const userlogout = (req, res, next) => {
  try {
    res
      .status(201)
      .cookie("token", null, {
        expires: new Date(Date.now()),
        sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
        secure: process.env.NODE_ENV === "Development" ? false : true,
      })
      .json({
        success: true,
      });
  } catch (error) {
    next(error);
  }
};
