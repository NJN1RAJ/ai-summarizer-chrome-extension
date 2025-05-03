chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "getContent") {
    const content = Array.from(document.querySelectorAll("p"))
      .map((p) => p.innerText)
      .join("\n");
    sendResponse({ data: content });
  }
});
