const express = require("express");
const cors = require("cors");
const app = express();
const user = require("./routes/user_routes");
const question = require("./routes/question_routes");
const score = require("./routes/score_routes");
const check = require("./routes/check_routes");

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.use(cors());
app.use("/user", user);
app.use("/question", question);
app.use("/score", score);
app.use("/check", check);
