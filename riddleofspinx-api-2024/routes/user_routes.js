const express = require("express");
const User = require("../controllers/user"); // Assuming the updated User class is in the specified path
const authenticateJWT = require("../utils/authenticateJWT");

const router = express.Router();

router.use(express.json());

router.post("/create_user", async (req, res) => {
  try {
    // Attempt to create a new user
    console.log("INSIDE ROUTE");
    const result = await User.register(req.body);

    // Check the result and send an appropriate response
    if (result) {
      res.status(200).json({ message: "Successfully inserted" });
    } else {
      res.status(500).json({ error: "Failed to create user" });
    }
  } catch (error) {
    // Handle errors by sending an error response
    console.error("Error creating user:", error);
    res.status(500).json({ error: error });
  }
});

router.post("/login", async (req, res) => {
  try {
    // Attempt to validate a user
    console.log(req.body);
    await User.login(req.body, res);
  } catch (error) {
    // Handle errors by sending an error response
    console.log("Error checking user:", error);
    res.status(500).json({ error: error });
  }
});

router.post("/setCharacter", authenticateJWT, async (req, res) => {
  try {
    // Attempt to set a new question
    const result = await User.setCharacter(req.body, req.user);
    console.log(result + "BYEJI")
    // Check the result and send an appropriate response
    if (result) {
      res.status(200).json({ message: "Successfully inserted character" });
    } else {
      res.status(500).json({ error: "Failed to set character" });
    }
  } catch (error) {
    // Handle errors by sending an error response
    console.error("Error setting character:", error);
    res.status(500).json({ error: error.message });
  }
});


router.get("/getCharacter", authenticateJWT, async (req, res) => {
  try {
    const result = await User.getCharacter(req.user);
    console.log(result);
    res.status(200).json({ message: result });
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

router.get("/getUser", authenticateJWT, async (req, res) => {
  try {
    const result = await User.getUser(req.user);
    console.log(result);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(500).json({ error: "Failed to get the user" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});


router.post("/authlogin", async (req, res) => {
  try {
    // Attempt to validate a user
    console.log(req.body);
    await User.authlogin(req.body,res);
  } catch (error) {
    // Handle errors by sending an error response
    console.log("Error checking user:", error);
    res.status(500).json({ error: error });
  }
});
module.exports = router;
