// server.ts
import express from "express";
import path from "path";
import fs from "fs";
var app = express();
var PORT = parseInt(process.env.PORT || "3000", 10);
app.use(express.json());
var distPath = path.resolve("dist");
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
} else {
  app.get("*", (_req, res) => {
    res.status(200).send("Application ready.");
  });
}
var server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.warn(`Port ${PORT} is already in use.`);
  } else {
    console.error("Server error:", err);
  }
});
