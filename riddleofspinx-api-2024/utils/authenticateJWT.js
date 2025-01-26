const jwt = require("jsonwebtoken");
// const t = require("./createToken");// Middleware function for JWT authentication and authorization
function authenticateJWT(req, res, next) {
  const token = req.header("Authorization");
  console.log(token);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  console.log(req.token);
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden" });
    }
    req.user = user;
    console.log(req.user + "HI");
    next();
  });
}

module.exports = authenticateJWT;
