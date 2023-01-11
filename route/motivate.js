
const express = require("express")
const Motivate = express.Router();
require("dotenv").config();
const configurationOPENAI = require("../library/openai");

const cors = require("cors");

app.use(cors({
    origin:"*"
}))

const prompt = `pretend you a person that will give motivate, answer with motivation content.
Ulhaq: what do you feel?`

Motivate.post("/motivate", async (req, res) => {
    const { message } = req.body;
    const translatetext = await configurationOPENAI(prompt, message)
    res.json(translatetext)
});

module.exports = Motivate;