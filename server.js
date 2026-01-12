const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/api/contacts", (req, res) => {
    res.status(200).json({ message: "All the Contacts" });
})

app.listen(PORT, () => {
    console.log(`Express is running in port: ${PORT}`);
})
