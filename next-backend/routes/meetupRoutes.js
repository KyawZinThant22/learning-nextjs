const express = require("express");
const {
  getAllMeetup,
  createNewMeetup,
} = require("../controllers/meetupController");

const router = express.Router();

router.route("/").get(getAllMeetup).post(createNewMeetup);

module.exports = router;
