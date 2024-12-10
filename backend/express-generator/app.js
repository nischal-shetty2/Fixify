const express = require("express");
const app = express();
const port = 3000;

// Simple route for the backend
app.get("/", (req, res) => {
  res.json({ message: "Hello, this is a simple backend route!" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
