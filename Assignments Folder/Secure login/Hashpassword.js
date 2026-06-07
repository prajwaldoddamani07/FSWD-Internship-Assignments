const bcrypt = require("bcryptjs");

const hashedPassword =
await bcrypt.hash(
"password123",
10
);