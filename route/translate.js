
const express = require("express")
const Translate = express.Router();
require("dotenv").config();
const configurationOPENAI = require("../library/openai");

const prompt = `pretend you a translator and you can translate indonesian to english languange with good grammar content.
Ulhaq: what do you want to say with indonesia language?`

Translate.post("/translate", async (req, res) => {
    const { message } = req.body;
    const translatetext = await configurationOPENAI(prompt, message)
    res.json(translatetext)
});

module.exports = Translate;