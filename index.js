const OpenAI = require("openai");
const { Configuration, OpenAIApi } = OpenAI;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 8000;
const Translate = require('./route/translate');
const Motivate = require("./route/motivate");

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hai")
})

app.use('/api', Translate)
app.use('/api', Motivate)


app.listen(port, () => {
  console.log(`listening port ${port}`);
});

