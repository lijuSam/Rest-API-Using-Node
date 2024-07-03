const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const registerUser = expressAsyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // Check for missing fields
  if (!username || !email || !password) {
    return res.status(400).json({ message: "Please add the valid details" });
  }

  // Check if user already exists
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    return res.status(400).json({ message: "User Already Registered" });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password.toString(), 10);

  // Create new user
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  console.log(user);

  // Send success response
  return res.status(201).json({ message: "User Registered Successfully" });
});

const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "All fields are mandatory" });
  }

  const user = await User.findOne({ email });
  // Compare password with hashed password

  if (user && (await bcrypt.compare(password.toString(), user.password))) {
    const accessToken = jwt.sign({
       user :{
          user:user.username,
          email:user.email,
          id:user.id
       }
    }, process.env.ACCESS_TOKEN_SECRET,
    {expiresIn:"1m"}
   
  )
  await  res.status(200).json({accessToken})
  }
  else{
    res.status(400).json({message:`User not found`})
  }

 
});

const currentUser = expressAsyncHandler(async (req, res) => {
  await res.json(req.user );
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
