const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_SECRET_KEY,
});
const openai = new OpenAIApi(configuration);

const response =  openai.createCompletion({
  model: "text-davinci-003",
  prompt: "what is your name?",
}).then((res) => {console.log(res.data.choices[0].text)});;

// console.log(response.data);
