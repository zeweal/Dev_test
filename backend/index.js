import express from "express";

const app = express();
const PORT = 3000;

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Backend API 👋" });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});