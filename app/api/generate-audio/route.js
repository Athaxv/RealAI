import { NextResponse } from 'next/server';
import * as PlayHT from 'playht';
import fs from 'fs';
import path from 'path';

export async function POST(req) {
    try {
        const { text, id } = await req.json();

        if (!text) {
            return NextResponse.json({ Error: "Text is required" }, { status: 400 });
        }

        // ✅ PlayHT API Credentials
        const API_KEY = process.env.PLAYHT_API_KEY;
        const USER_ID = process.env.PLAYHT_USER_ID;

        const headers = {
            'Authorization': `Bearer ${API_KEY}`,
            'X-User-ID': USER_ID,
            'Content-Type': 'application/json'
        };

        const body = JSON.stringify({
            text,
            voice: "en-US-JennyNeural", // You can change the voice model
            output_format: "mp3" // Audio format
        });

        const response = await fetch('https://api.play.ht/text-to-speech/v1', {
            method: 'POST',
            headers,
            body
        });

        const result = await response.json();
        console.log("Audio Response:", result);

        if (response.ok) {
            const audioUrl = result.audioUrl;
            const audioResponse = await fetch(audioUrl);
            const buffer = await audioResponse.arrayBuffer();

            const audioPath = path.join(process.cwd(), 'public', `${id || 'audio'}.mp3`);
            fs.writeFileSync(audioPath, Buffer.from(buffer));

            console.log(`Audio file saved at: ${audioPath}`);
            return NextResponse.json({ audioURL: `/public/${id || 'audio'}.mp3` });
        } else {
            return NextResponse.json({ Error: result.message }, { status: 500 });
        }
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ Error: "Something went wrong!" }, { status: 500 });
    }
}
