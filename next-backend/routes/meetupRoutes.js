const express = require("express");

const {
  getAllMeetup,
  createNewMeetup,
  getMeetup,
} = require("../controllers/meetupController");

const router = express.Router();

router.route("/").get(getAllMeetup).post(createNewMeetup);

router.route("/:id").get(getMeetup);

module.exports = router;
