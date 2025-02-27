const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  export const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Write a script to generate 20 second video on topic: Interesting historical myth or story with AI images prompt in realistic format for each scene and give me the result in jSON format with imageprompt and contenttext as field"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Okay, I can help you create a script for a 20-second video about an interesting historical myth or story, along with AI image prompts in a realistic format for each scene. I'll present the result in JSON format, with `imageprompt` and `contenttext` fields for each scene.\n\nSince the video is 20 seconds long, I'll break it down into approximately 5 scenes of 4 seconds each.  Let's use the myth of \"The Sword of Damocles\" for this example.\n\n```json\n[\n  {\n    \"scene\": 1,\n    \"duration\": 4,\n    \"contenttext\": \"In ancient Syracuse, Damocles, a courtier, envied the tyrant King Dionysius's power and wealth.\",\n    \"imageprompt\": \"A grand banquet hall in ancient Syracuse. King Dionysius sits on a golden throne, surrounded by lavish food, servants, and courtiers. Damocles stands nearby, observing with envy in his eyes.  Realistic, cinematic lighting, focus on detail.\"\n  },\n  {\n    \"scene\": 2,\n    \"duration\": 4,\n    \"contenttext\": \"Dionysius offered Damocles a chance to experience kingship, trading places for a day.\",\n    \"imageprompt\": \"King Dionysius, dressed simply, gestures towards Damocles, who is now seated on the throne, adorned in royal robes. Courtiers bow before Damocles.  Sunlight streaming through arched windows, creating a sense of grandeur. Realistic.\"\n  },\n  {\n    \"scene\": 3,\n    \"duration\": 4,\n    \"contenttext\": \"Damocles reveled in the luxury and power, enjoying the finest food and attention.\",\n    \"imageprompt\": \"Damocles, now King, feasts at a table overflowing with delicacies. He is surrounded by adoring servants and musicians playing harps.  The scene is vibrant and opulent, showcasing the excesses of power. Realistic, highly detailed.\"\n  },\n  {\n    \"scene\": 4,\n    \"duration\": 4,\n    \"contenttext\": \"But above him, suspended by a single horsehair, hung a gleaming sword, a constant reminder of the dangers of power.\",\n    \"imageprompt\": \"Close-up on Damocles's face, now filled with fear and anxiety. Above him, a sharp, gleaming sword hangs precariously suspended by a single horsehair, almost touching his head.  Dramatic lighting to emphasize the sword and Damocles's terror. Realistic, hyper detailed.\"\n  },\n  {\n    \"scene\": 5,\n    \"duration\": 4,\n    \"contenttext\": \"Damocles begged Dionysius to end the charade, understanding the burden of constant fear that came with being a king.\",\n    \"imageprompt\": \"Damocles, looking pale and shaken, kneels before Dionysius, pleading for him to take back the throne. Dionysius watches him with a knowing expression. Dim, realistic lighting, emphasizing the weight of the lesson learned.\"\n  }\n]\n```\n\n**Explanation:**\n\n*   **`scene`:** Indicates the scene number.\n*   **`duration`:** The duration of the scene in seconds.\n*   **`contenttext`:** The script for the narration or on-screen text during that scene.\n*   **`imageprompt`:**  A detailed and descriptive prompt designed to generate a realistic image using an AI image generator.  The prompt includes:\n    *   A description of the location and setting.\n    *   The characters involved and their actions.\n    *   The desired lighting and mood.\n    *   Keywords like \"realistic,\" \"cinematic,\" and \"highly detailed\" to guide the AI towards a photorealistic output.\n\n**How to Use this JSON:**\n\n1.  **Save the JSON:**  Save the above code as a `.json` file (e.g., `damocles_video_script.json`).\n2.  **Image Generation:**  For each scene, copy the `imageprompt` and paste it into an AI image generator (like Midjourney, DALL-E 2, Stable Diffusion, etc.). Generate an image based on that prompt.\n3.  **Video Editing:** Use a video editing software (e.g., Adobe Premiere Pro, DaVinci Resolve, iMovie) to create your video.\n    *   Import the generated images.\n    *   Add the `contenttext` as narration (record it yourself or use a text-to-speech tool) or as on-screen text.\n    *   Set the duration of each image according to the `duration` field in the JSON.\n    *   Add music and sound effects to enhance the video.\n\n**Important Considerations:**\n\n*   **AI Image Generator Variations:** The exact results you get from AI image generators will vary. You may need to tweak the `imageprompt` to achieve the desired look and feel.\n*   **Image Quality:** Some AI generators produce higher-resolution images than others. Choose one that provides sufficient quality for video use.\n*   **Licensing:** Be aware of the licensing terms of the AI image generator you use. Some may require attribution or have restrictions on commercial use.\n*   **Pacing:** The 4-second per scene duration is a guideline. Adjust it as needed to match the flow of the narration and visuals.  You can make some scenes slightly longer than others.\n*   **Visual Style:** Adjust the `imageprompt` descriptions to achieve a consistent visual style throughout the video.\n\nThis script provides a solid foundation for creating your 20-second video. You can adapt the story and prompts to explore other historical myths or stories.  Good luck!\n"},
          ],
        },
      ],
    });
  
