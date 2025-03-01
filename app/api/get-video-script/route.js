import { chatSession } from "@/config/AIModel";
// import { ChatSession } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        const {prompt} = await req.json()
        console.log("Prompt received", prompt);

        const result = await chatSession.sendMessage(prompt);
        const text = result.response.text(); // Assuming text() returns plain text

        console.log("AI Response:", text);

        let finalResult;
        try {
            finalResult = JSON.parse(text); // Only parse if it's JSON
        } catch {
            finalResult = text; // Return plain text if not JSON
        }
        return NextResponse.json({ Result: finalResult });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ Error: "Something went wrong. Please try again." }, { status: 500 });
    }
}