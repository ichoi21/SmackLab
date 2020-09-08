const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Scheme for User Database
const UserSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength: 6 },
  date: { type: Date, default: Date.now },
});

module.exports = User = mongoose.model("users", UserSchema);
