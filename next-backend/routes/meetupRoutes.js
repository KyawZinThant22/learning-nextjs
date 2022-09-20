const express = require("express");

const {
  getAllMeetup,
  createNewMeetup,
  getMeetup,
  deleteMeetup,
} = require("../controllers/meetupController");

const router = express.Router();

router.route("/").get(getAllMeetup).post(createNewMeetup);

router.route("/:id").get(getMeetup).delete(deleteMeetup);

module.exports = router;
