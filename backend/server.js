const express = require("express");

const app=express();

app.get("/", (req, res) => {
    res.send("LifeOS API is running!");
});
const PORT = 5000;

app.listen(PORT, () => {
    console.log("LifeOS server running on port ${PORT}");
});