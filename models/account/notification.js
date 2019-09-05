const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
  {
    accountId: String,
    name: String,
    color: String
  },
  { timestamps: true }
);

NotificationMoodel = mongoose.model("notifications", NotificationSchema);

const notifications = {};

notifications.createNotificaton = async function({ accountId, name, color }) {
  try {
    const notification = new NotificationMoodel({ accountId, name, color });
    await notification.save();
  } catch (e) {
    return e;
  }
};

notifications.getNotificationsByAccountId = function(accountId) {
  return NotificationMoodel.find({ accountId }).exec();
};

module.exports = notifications;
