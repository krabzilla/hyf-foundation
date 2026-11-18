const express = require("express");
const app = express();
const port = 4000;

const path = require("path"); // Import the path module to work with file and directory paths
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const { DatabaseSync } = require("node:sqlite");
const db = new DatabaseSync("tasks.sqlite3");

app.get("/hello", (req, res) => {
  res.send("Hello from my own server!");
});
app.get("/user-count", (req, res) => {
  const userCount = db
    .prepare("SELECT COUNT(*) as count FROM user")
    .get().count;
  res.json({ count: userCount });
});

app.get("/tasks", (req, res) => {
  const tasks = db.prepare("SELECT * FROM task").all();
  res.json(tasks);
});

app.get("/tasks/:id", (req, res) => {
  const taskId = req.params.id;
  const task = db.prepare("SELECT * FROM task WHERE id = ?").get(taskId);
  if (!task) {
    res.status(404).json({ error: "Task not found" });
  } else {
    res.json(task);
  }
});

app.get("/statuses", (req, res) => {
  const statuses = db.prepare("SELECT * FROM status").all();
  res.json(statuses);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
