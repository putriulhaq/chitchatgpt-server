const OpenAI = require("openai");
const { Configuration, OpenAIApi } = OpenAI;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = 8000;

const configuration = new Configuration({
  organization: "org-ZJ6NazewT89EQ81IjoEf5ppD",
  apiKey: process.env.OPENAI_SECRET_KEY,
});

const openai = new OpenAIApi(configuration);

// const response =  openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: "what is your name?",
// }).then((res) => {console.log(res.data.choices[0].text)});;
app.use(bodyParser.json());
app.use(cors());


app.get("/", async (Req, res) => {
  res.send("haiiii");
});

app.post("/translate", async (req, res) => {
  const { message } = req.body;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `pretend you a translator and you can translate indonesian to english languange with good grammar content.
      Ulhaq: what do you want to say with indonesia language?
      person: ${message}
      Ulhaq: `,
    temperature: 0,
    max_tokens: 1000,
  });
  if (response.data.choices[0].text) {
    res.json({
      message: response.data.choices[0].text,
    });
  }
});

app.post("/motivate", async (req, res) => {
  const { message } = req.body;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `pretend you a person that will give motivate, answer with motivation content.
      Ulhaq: what do you feel?
      person: ${message}
      Ulhaq: `,
    temperature: 0,
    max_tokens: 1000,
  });
  if (response.data.choices[0].text) {
    res.json({
      message: response.data.choices[0].text,
    });
  }
});

app.listen(port, () => {
  console.log(`listening port ${port}`);
});

