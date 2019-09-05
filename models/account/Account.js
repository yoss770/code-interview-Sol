const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    name: { type: String },
    age: { type: Number }
  },
  { timestamps: true }
);

const accountModel = mongoose.model("accounts", AccountSchema);
 const accounts = {};

accounts.createAcc = async function({ email, name, age }) {
  try {
    const account = new accountModel({ email, name, age });
    await account.save();
    return true;
  } catch (e) {
    return false;
  }
};

module.exports = accounts;
