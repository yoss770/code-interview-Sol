const notifications = require("../../models/account/notification");
const express = require("express");
const router = express.Router();

router.post("/", async function(req, res, next) {
  try {
    const { accountId, name, color } = req.body;
    await notifications.createNotificaton({ accountId, name, color });
    console.log(
      "create new notification with the data: ",
      JSON.stringify(req.body, null, 4)
    );
    return res.send({ message: "success" });
  } catch (error) {
    return res.send({ error });
  }
});



module.exports = router;
