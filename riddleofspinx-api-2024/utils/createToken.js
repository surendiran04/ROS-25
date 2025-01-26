const jwt = require("jsonwebtoken");

require('dotenv').config();
// Middleware function to create and send a JWT token
function createToken(req, res, next) {
  console.log(req);
  const user = req; // Replace this with your user retrieval logic

  if (!user) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  const token = jwt.sign(user, process.env.JWT_SECRET); // Customize the expiration as needed

  // Send the token as a response to the client
  return token;
}

module.exports = createToken;
