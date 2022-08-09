const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegistrationScheme = new Schema({
  plateNumber: String,
});

const newRegistrationScheme = mongoose.model(
  "register-scheme",
  RegistrationScheme
);
module.exports = newRegistrationScheme;
