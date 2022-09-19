const express = require("express");
const meetupRouter = require("./routes//meetupRoutes");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

module.exports = app;

app.use("/api/v1/meetup", meetupRouter);
