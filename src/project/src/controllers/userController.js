const UserService = require('../services/userService');

exports.registerUser = async (req, res) => {
  try {
    const user = await UserService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const token = await UserService.authenticateUser(req.body);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

exports.logoutUser = (req, res) => {
  // Handle logout logic (e.g., invalidate token)
  res.status(200).send('Logged out successfully');
};
