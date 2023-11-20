const Users = require("../models/users.js");

async function check(req, res) {
  try {
    let { login, password } = req.body;
    const user = await Users.findOne({ login, password });
    if (!!user) {
      res.status(200).json("true").end();
    } else {
      res.status(400).json({ message: "Wrong login or password" });
    }
  } catch (e) {
    return res.status(400).json({ message: e.message }).end();
  }
}

async function registration(req, res) {
  try {
    let { login, password } = req.body;
    const user = new Users({ login, password });
    await user.save();
    res.status(200).json(user).end();
  } catch (e) {
    if (e.code === 11000) {
      return res.status(400).json({ message: "Login already exists." }).end();
    }
    return res.status(400).json({ message: e.message }).end();
  }
}

module.exports = { check, registration };
