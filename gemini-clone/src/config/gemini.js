import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyDRqs_xnfD2DaFvq1bqi5_JoLOm_F748ew";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function fileToGenerativePart(file) {
  const base64EncodedDataPromise = new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(",")[1]);
    reader.readAsDataURL(file);
  });
  return {
    inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
  };
}

export async function run(prompt, msgHistory, file) {
  const hist = msgHistory.flatMap(({ user, model }) => [
    {
      role: "user",
      parts: [{ text: user }],
    },
    {
      role: "model",
      parts: [{ text: model }],
    },
  ]);

  let img = [];
  let result;
  
  if (file !== undefined) {
    img[0] = await fileToGenerativePart(file);
    result = await model.generateContent([prompt, ...img]);
  } else {
    const chatSession = model.startChat({
      generationConfig,
      history: hist,
    });

    result = await chatSession.sendMessage(prompt);
  }

  console.log(result.response.text());
  return result.response.text();
}
