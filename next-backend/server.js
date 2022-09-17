const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");
const port = process.env.PORT;

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
console.log(DB);
mongoose.connect(DB).then(() => console.log("DB connection successful"));

app.listen(port, () => {
  console.log(`App running on port ${port}  `);
});
