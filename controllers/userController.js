const User = require("../models/userModel").default;

const registerUser = async (req, res, next) => {
  try {
    const { name, userName, email, password, profilePicture } =
      req.body;

    const userData = {
      name,
      userName,
      email,
      password,
      profilePicture,
    };

    const user = await User.create(userData);


    if (user) res.status(201).send("User registered successfully");
    else res.status(409).send("User was not created");
  } catch (error) {
    return res.status(500).send(error);
  }
};



module.exports = registerUser;
