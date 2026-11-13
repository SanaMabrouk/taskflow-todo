const express = require("express");
const os = require("os");
const path = require("path");

const APP_NAME = "taskflow-todo";
const VERSION = "v1";
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

const app = express();

// Serve the To-Do UI (index.html, style.css, app.js) from /public
app.use(express.static(path.join(__dirname, "public")));

// Health check: used later by Kubernetes readiness/liveness probes
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    app: APP_NAME,
    version: VERSION,
    hostname: os.hostname(),
    uptime: process.uptime(),
  });
});

// App identity: the UI footer shows which pod served the page
app.get("/info", (req, res) => {
  res.json({
    app: APP_NAME,
    version: VERSION,
    hostname: os.hostname(),
  });
});

const server = app.listen(PORT, HOST, () => {
  console.log(`TaskFlow To-Do listening on port ${PORT}`);
});

// Stop cleanly when Docker/Kubernetes sends SIGTERM
process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down");
  server.close(() => process.exit(0));
});
