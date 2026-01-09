const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default;

const userSchema = new Schema({
    email: {
      type: String,
      required: true,
    },
    lastLogin: {
    type: Date,
    default: null,
  },
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.models.User || mongoose.model("User", userSchema);