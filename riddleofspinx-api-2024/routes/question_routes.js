const express = require("express");
const QuestionController = require("../controllers/question");
const authenticateJWT = require("../utils/authenticateJWT");

const router = express.Router();

router.use(express.json());

router.post("/set_question", async (req, res) => {
  try {
    // Attempt to set a new question
    const result = await QuestionController.setQuestion(req.body, req.user);

    // Check the result and send an appropriate response
    if (result) {
      res.status(200).json({ message: "Successfully inserted question" });
    } else {
      res.status(500).json({ error: "Failed to set question" });
    }
  } catch (error) {
    // Handle errors by sending an error response
    console.error("Error setting question:", error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/view_questions", authenticateJWT, async (req, res) => {
  try {
    // Attempt to view questions for a set
    const level = parseInt(req.body.level); // Assuming the set is sent in the request body
    const questions = await QuestionController.viewQuestions(level, req.user);

    // Send the questions as a response
    res.status(200).json({ questions: questions });
  } catch (error) {
    // Handle errors by sending an error response
    console.error("Error viewing questions:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
