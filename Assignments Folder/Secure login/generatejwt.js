const jwt = require("jsonwebtoken");

const token = jwt.sign(
 {id:user._id},
 "secretkey",
 {expiresIn:"1d"}
);