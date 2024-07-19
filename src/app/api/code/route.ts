import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import OpenAi from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const openai = new OpenAi({
  apiKey: process.env.OPENAI_API_KEY,
});

const instructions: ChatCompletionMessageParam = {
  role: "assistant",
  content:
    "You are a code generator. You must answer only in markdown code snippets. Use comments for explanation",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse("Open API Key not configured", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    // TODO CHECKING PLAN - PRO || TRIAL

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instructions, ...messages],
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
