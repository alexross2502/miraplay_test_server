const Users = require("../models/users.js");
const bcrypt = require("bcrypt");

class Auth {
  async loginAndPasswordCheck(login, passwordFromRequest) {
    let user = await Users.findOne({ login });
    if (!!user) {
      return new Promise((resolve, reject) => {
        bcrypt.compare(passwordFromRequest, user.password, function (err, res) {
          if (err) return reject(err);
          return resolve(res);
        });
      });
    } else {
      return false;
    }
  }
}

let auth = new Auth();

module.exports = auth;
