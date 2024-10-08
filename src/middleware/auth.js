const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const auth = (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1] || "";
  if (!token) return res.sendStatus(401);

  jwt.verify(
    token,
    process.env.JWT_SECRET || "Oc8IaST+4lZa1DUkRu6TZe7pqbJuY+8cI8pGlw1tvFE=",
    (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    }
  );
};

module.exports = auth;
