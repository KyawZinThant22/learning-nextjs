const MEETUP = require("../models/meetupModel");

exports.getAllMeetup = async (req, res) => {
  try {
    const meetup = await MEETUP.find({});
    res.status(200).json({
      status: "success",
      results: meetup.length,
      data: {
        meetup,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createNewMeetup = async (req, res) => {
  try {
    const newMeetup = await MEETUP.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        meetup: newMeetup,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getMeetup = async (req, res) => {
  try {
    const meetup = await MEETUP.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        meetup: meetup,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteMeetup = async (req, res) => {
  try {
    await MEETUP.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
