import { NextResponse } from 'next/server';
import * as PlayHT from 'playht';

const client = new AssemblyAI({
    apiKey: "af0c9c802f1644a79c70649d508f87cb"
  })

export async function POST(req){
    const {text, id} = await req.json();
    
    return NextResponse.json({Result: 'Success'})
}