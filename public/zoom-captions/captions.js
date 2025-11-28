const main = () => {
  const apiTokenTextArea = document.getElementById("api-token");
  const loadApiTokenButton = document.getElementById("load-api-token");
  const textArea = document.getElementById("textarea");
  const loadTextButton = document.getElementById("load-text");
  const loadedTextDisplay = document.getElementById("loaded-text");
  const sendCaptionButton = document.getElementById("send-caption");
  const skipCaptionButton = document.getElementById("skip-caption");
  const undoButton = document.getElementById("undo");
  const previewText = document.getElementById("preview-text");
  const APITokenPreviewText = document.getElementById("api-token-preview");

  let splitText;
  let apiToken;
  let skippedOrSentCaptions = [];
  let counter = 1;
  const languageCode = "en-AU";

  const generatePreviewText = () => {
    if (!splitText[0]) {
      previewText.innerText = "No more captions left!";
    } else {
      previewText.innerText = splitText[0];
    }
  };

  loadApiTokenButton.addEventListener("click", () => {
    apiToken = apiTokenTextArea.value;
    APITokenPreviewText.innerText = `✅API Token Loaded! -\n${apiToken}`;
  });

  loadTextButton.addEventListener("click", () => {
    const text = textArea.value;
    loadedTextDisplay.innerText = text;
    splitText = text
      .trim()
      .split("\n")
      .filter((w) => w);
    generatePreviewText();
  });

  sendCaptionButton.addEventListener("click", async () => {
    const captionToSend = splitText[0];
    await fetch(`${apiToken}&seq=${counter}&lang=${languageCode}`, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain",
      },
      body: captionToSend,
    });
    skippedOrSentCaptions.push(captionToSend);
    counter++;
    splitText.shift();
    generatePreviewText();
  });

  skipCaptionButton.addEventListener("click", () => {
    const lastCaption = splitText.shift();
    skippedOrSentCaptions.push(lastCaption);
    generatePreviewText();
  });

  undoButton.addEventListener("click", () => {
    splitText.unshift(skippedOrSentCaptions.pop());
    generatePreviewText();
  });
};

main();
