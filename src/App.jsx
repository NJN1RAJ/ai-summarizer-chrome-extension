import { useState } from "react";
import "./App.css";
import { GoogleGenAI } from "@google/genai";

function App() {
  const [summary, setSummary] = useState("");
  const ai = new GoogleGenAI({
    apiKey: "YOUR_API_KEY_HERE",
  });
  const handleSummarize = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "getContent" },
        async (response) => {
          if (response && response.data) {
            console.log("Scraped text:", response.data);
            const res = await ai.models.generateContent({
              model: "gemini-2.0-flash",
              contents: `Summarize this ${response.data}`,
            });
            console.log(res.candidates[0].content.parts[0].text);
            setSummary(res.candidates[0].content.parts[0].text);
          }
        }
      );
    });
  };
  return (
    <div className="">
      <h1 style={{ margin: "10px" }}>AI SUMMARIZER</h1>
      <button
        style={{ padding: "10px", fontSize: "medium" }}
        onClick={handleSummarize}
      >
        Summarize
      </button>
      <div
        style={{
          marginTop: "10px",
          border: "1px solid white",
          height: "300px",
          width: "500px",
          fontSize: "medium",
        }}
      >
        <p
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            textAlign: "left",
          }}
        >
          {summary}
        </p>
      </div>
    </div>
  );
}

export default App;
