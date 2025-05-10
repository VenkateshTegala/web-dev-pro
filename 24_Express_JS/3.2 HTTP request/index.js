import express from "express";
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    console.log(req.rawHeaders);
    res.send("<h1>Hello Wolrd</h1>");
})

app.get("/about", (req, res) => {
    res.send("<h2>About us</h2>");
});

app.get("/contact", (req, res) => {
    res.send("<h2>contact us</h2>");
});

app.listen(port, () => {
    console.log(`Server has started at ${port}`);
});

