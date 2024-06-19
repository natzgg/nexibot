import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(request: Request) {
  const { message } = await request.json();

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo-0125",
    stream: true,
    max_tokens: 500,
    messages: [
      {
        role: "system",
        content:
          "Response must be less than 100 words. Pleae reply in a clean and professional way.",
      },
      {
        role: "user",
        content: message,
      },
    ],
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
