const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// dotenv configuration
dotenv.config();

// app init
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

// serve React build
app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "client/build", "index.html")
  );
});

// ❌ DO NOT use app.listen()
// ✅ EXPORT app for Vercel
module.exports = app;
