import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3050;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {});

app.post("/submit", (req, res) => {});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
