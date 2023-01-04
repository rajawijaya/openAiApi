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