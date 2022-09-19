const mongoose = require("mongoose");
const slugify = require("slugify");

const meetupSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: [true, "A meetup must have a name"],
    trim: true,
  },
  slug: String,
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

meetupSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

const meetup = mongoose.model("meetup", meetupSchema);

module.exports = meetup;
