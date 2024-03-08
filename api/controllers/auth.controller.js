import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'  //para encriptar datos

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const hashedPassword = bcryptjs.hashSync(password,10)

  try {
    const newUser = new User({
      username,
      email,
      password : hashedPassword,
    });

    await newUser.save();
    res.json("Signup successfull");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
