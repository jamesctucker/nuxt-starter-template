import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: useRuntimeConfig().openAIApiKey,
});

const openai = new OpenAIApi(configuration);

export default openai;
