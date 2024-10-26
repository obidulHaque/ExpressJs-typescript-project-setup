import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("node js typescript project template setup successfully done.. ");
});

export default app;
