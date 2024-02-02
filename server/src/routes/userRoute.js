const express = require("express");
const router = express.Router();

//Tem imp
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
router.route("/").post(async (req, res) => {
  let { email, password } = req.body;
  try {
    let hasedPassword = await bcrypt.hash(password, 10);
    let createUserAccount = await User.create({
      email,
      password: hasedPassword,
    });
    res.status(201).send(createUserAccount);
  } catch (error) {
    res.json({ status: "fail", message: error.message });
  }
});
router.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let findUser = await User.findOne({ email });

    //Verify user password
    let verifyPassword = await bcrypt.compare(password, findUser.password);
    if (!verifyPassword)
      return res
        .status(401)
        .send({ status: "fail", message: "Invalid email of password" });

    //Genrating token
    let seckretKey = process.env.JWT_TOKEN_KEY + email;
    let token = await jwt.sign({ email }, seckretKey);

    res.status(200).send({ status: "Success", token });
  } catch (error) {
    res.json({ status: "fail", message: error.message });
  }
});

module.exports = router;
