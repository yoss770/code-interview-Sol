const Accounts = require("../../models/account/Account");
const express = require("express");
const router = express.Router();

router.post("/", async function(req, res, next) {
  try {
    const { email, name, age } = req.body;
    await Accounts.createAcc({ email, name, age });
    console.log(
      "create new account with the data: ",
      JSON.stringify(req.body, null, 4)
    );
    return res.send({ message: "success" });
  } catch (error) {
    const message = error.message;
  }
});

module.exports = router;
