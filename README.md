# 🧠 AI Summarizer Chrome Extension

A simple Chrome Extension built using **React + Vite** that summarizes web page content using an AI API.

---

## 📦 Tech Stack

- React (Vite)
- Chrome Extension (Manifest v3)
- JavaScript
- Vite Plugin Static Copy

---

## 🚀 Features

- 📝 Summarizes all `<p>` tags from the current tab.
- 🤖 Sends extracted text to an AI API for summarization.
- ⚡ Built with fast React + Vite tooling.

---

## 📁 Folder Structure

```
root/
├── public/
│   ├── manifest.json
│   ├── content.js
├── src/
│   └── main.jsx (React popup)
├── vite.config.js
├── index.html
```

---

## 🛠️ Setup Instructions

### 1. Clone and Install

```bash
git clone https://github.com/your-username/ai-summarizer-extension
cd ai-summarizer-extension
npm install
```

---

### 2. Add Your AI API Key

In the file where you are calling the AI agent (e.g. `summarize.js`), make sure to replace or set your API key:

```js
const apiKey = "YOUR_API_KEY_HERE"; // 🔐 Replace this with your actual API key
```

Do **not** hardcode this if you're pushing to a public repo — use environment variables or config if needed.

---

### 3. Run the Build

```bash
npm run build
```

This will generate the `build/` folder with:

- `manifest.json`
- `content.js`
- `index.html` (popup)
- Vite output

---

### 4. Load the Extension in Chrome

1. Go to `chrome://extensions`
2. Turn **Developer Mode** ON
3. Click **“Load unpacked”**
4. Select the `build/` folder
5. Pin the extension from the toolbar

---

### 5. Use the Extension

- Navigate to any webpage with paragraphs
- Click the extension icon
- Click the "Summarize" button in the popup
- Watch the summary appear!

---

## 🐞 Troubleshooting

- If you see `Could not establish connection`, make sure:
  - `content.js` is properly included in `manifest.json`
  - You are on a webpage that matches `"matches": ["<all_urls>"]`
  - The build step copied `content.js` correctly to `build/`

---

## 📜 License

MIT

---

## ✨ Contributions

Pull requests are welcome!
