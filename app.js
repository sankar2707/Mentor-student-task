const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { dbConnect } = require("./shared/db");
const studentRoute = require("./routes/student");
const mentorRoute = require("./routes/mentor");
const assignMentortoStudentRoute = require("./routes/assignMentortoStudent");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Working fine...");
});
app.use("/student", studentRoute);
app.use("/mentor", mentorRoute);
app.use("/assignMentortoStudent", assignMentortoStudentRoute);

app.listen(process.env.PORT || 3000, async (err) => {
  await dbConnect();
  console.log("Started server ${PORT}: http://localhost:3000");
  if (err) {
    console.log(err, "error in starting server");
  }
});