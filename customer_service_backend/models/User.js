const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    googleId: { type: String, unique: true }, // Google OAuth ID
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    profilePicture: { type: String }, // Store Google profile picture
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
