const express = require("express");
const ScoreController = require("../controllers/score");
const authenticateJWT = require("../utils/authenticateJWT");
const router = express.Router();

router.use(express.json());

router.post("/calculate_score", authenticateJWT, async (req, res) => {
  try {
    const result = await ScoreController.calculateScore(req.body, req.user);
    // console.log(result);
    if (result) {
      res
        .status(200)
        .json({ message: "Score calculated and updated successfully" });
    } else {
      res.status(500).json({ error: "Failed to calculate and update score" });
    }
  } catch (error) {
    console.error("Error calculating and updating score:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

router.get("/leaderboard", authenticateJWT, async (req, res) => {
  try {
    const result = await ScoreController.getLeaderboard(req.body);
    console.log(result);
    if (result) {
      res.status(200).json({ ...result });
    } else {
      res.status(500).json({ error: "Failed to get the leaderboard" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

router.get("/getRank", authenticateJWT, async (req,res) => {
  try{
    const result = await ScoreController.getRank(req.user);
    res.status(200).json({ rank: result });
  } catch (error) {
    // Handle errors by sending an error response
    console.error("Error getting rank:", error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/calculate_scorer2", authenticateJWT, async (req, res) => {
  try {
    const result = await ScoreController.calculateScorer2(req.body, req.user);
    // console.log(result);
    if (result) {
      res
        .status(200)
        .json({ message: "Score calculated and updated successfully" });
    } else {
      res.status(500).json({ error: "Failed to calculate and update score" });
    }
  } catch (error) {
    console.error("Error calculating and updating score:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

router.get("/leaderboardr2", authenticateJWT, async (req, res) => {
  try {
    const result = await ScoreController.getLeaderboardr2(req.body);
    console.log(result);
    if (result) {
      res.status(200).json({ ...result });
    } else {
      res.status(500).json({ error: "Failed to get the leaderboard" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

router.get("/getScoreboard", authenticateJWT, async (req, res) => {
  try {
    const result = await ScoreController.getScoreboard(req.user);
    console.log(result);
    if (result) {
      res.status(200).json({ ...result });
    } else {
      res.status(500).json({ error: "Failed to get the scoreboard" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

module.exports = router;
