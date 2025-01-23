const express = require("express");
const path = require("path");
require("dotenv").config();
const authMiddleware = require("./auth");

const app = express();

app.use(authMiddleware);

app.use(express.static(path.join(__dirname, "public")));

// Endpoints
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(8080, () => console.log("Server is running on PORT 8080"));
