const OpenAI = require("openai");
const { Configuration, OpenAIApi } = OpenAI;

const configurationOPENAI = async (prompt_fill, message) => {
    const configuration = new Configuration({
        organization: "org-ZJ6NazewT89EQ81IjoEf5ppD",
        apiKey: process.env.OPENAI_SECRET_KEY,
    });
    const openai = new OpenAIApi(configuration);
    
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${prompt_fill}
        person: ${message}
        Ulhaq: `,
        temperature: 0,
        max_tokens: 1000,
    });
    if (response.data.choices[0].text) {
        return{
            message: response.data.choices[0].text
        }
        
    }
}

module.exports = configurationOPENAI;
