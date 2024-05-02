import User from "../model/userModel.js";

export const create = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const { email } = newUser;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "Utilisateur déjà existant" });
    }
    const savedData = await newUser.save();
    //res.status(200).json(savedData);
    res.status(200).json({ message: "User created successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const userData = await User.find();
    if (!userData || userData.length === 0) {
      return res
        .status(404)
        .json({ message: "Données d'utilisateurs indisponible" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
