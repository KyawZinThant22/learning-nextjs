const express = require("express");

const {
  getAllMeetup,
  createNewMeetup,
  getMeetup,
  deleteMeetup,
  updateMeetup,
} = require("../controllers/meetupController");

const router = express.Router();

router.route("/").get(getAllMeetup).post(createNewMeetup);

router.route("/:id").get(getMeetup).delete(deleteMeetup).put(updateMeetup);

module.exports = router;
