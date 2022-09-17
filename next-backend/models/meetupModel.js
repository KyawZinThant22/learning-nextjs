const mongoose = require("mongoose");

const meetupSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A meetup must have a name"],
    trim: true,
  },
  image: {
    type: String,
    required: [true, "a meetup should have a image"],
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
});

const meetup = mongoose.model("meetup", meetupSchema);

module.exports = meetup;
