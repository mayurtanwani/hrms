import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const olduser = await User.findOne({ email: req.body.email });

  if (olduser) {
    return res.status(400).json({ msg: "Email already registered" });
  } else {
    if (req.body.password == req.body.confirmpassword) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const user = new User(req.body);
      await user.save();
      return res.status(200).json({ user: user });
    } else {
      return res.status(400).json({ msg: "password didn't matched" });
    }
  }
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    const match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
      const token = jwt.sign({ user }, "hello", { expiresIn: "24h" });
      return res.status(200).json({ user: user, token: token });
    } else {
      return res.status(400).json({ msg: "password didn't matched" });
    }
  } else {
    return res.status(400).json({ msg: "User with this Email not found" });
  }
};
