const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function res() {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "juara piala dunia pertama",
    max_tokens: 100,
    temperature: 0,
  });
  console.log(response.data.choices[0]);
}

res()