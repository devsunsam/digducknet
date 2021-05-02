module.exports = {
  enc: function (email, pwd, salt) {
    const sha256 = require("sha256");

    return sha256(email + pwd + salt);
  },
};
