const express = require("express");
const checkController = require("../controllers/check");
const authenticateJWT = require("../utils/authenticateJWT");

const router = express.Router();

router.use(express.json());

router.post("/create_check", async (req, res) => {
    try {
      // Attempt to set a new question
      const result = await checkController.create(req.body);
  
      // Check the result and send an appropriate response
      if (result) {
        res.status(200).json({ message: "Successfully inserted check" });
      } else {
        res.status(500).json({ error: "Failed to check" });
      }
    } catch (error) {
      // Handle errors by sending an error response
      console.error("Error setting question:", error);
      res.status(500).json({ error: error.message });
    }
  });

  router.post("/update_check", async (req, res) => {
    try {
      // Attempt to set a new question
      const result = await checkController.update(req.body);
  
      // Check the result and send an appropriate response
      if (result) {
        res.status(200).json({ message: "Successfully updated check" });
      } else {
        res.status(500).json({ error: "Failed to check" });
      }
    } catch (error) {
      // Handle errors by sending an error response
      console.error("Error setting question:", error);
      res.status(500).json({ error: error.message });
    }
  });

  router.post("/view_check",async (req,res) => {
    try {
      const result = await checkController.view(req.body);
      console.log(result);
      if (result[0].value==true) {
        res.status(200).json(result[0]);
      }
      else if(result[0].restriction=="newLogin"){
        res.status(500).json({ message: "New Registrations are closed..." });
      } 
      else {
        console.log("NIGGA");
        res.status(500).json({ message: "Coming Soon..." });
      }
    } catch (error) {
      res.status(500).json({ error: error.message || "Internal Server Error" });
    }
  });

  module.exports = router;
