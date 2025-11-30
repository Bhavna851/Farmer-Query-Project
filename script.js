const inputField = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const micBtn = document.getElementById("micBtn");
const speakBtn = document.getElementById("speakBtn");
const chatBox = document.getElementById("chatBox");

let lastAnswer = "";

/* -----------------------
    ADD MESSAGE TO CHAT
------------------------- */
function addMessage(sender, msg) {
    const div = document.createElement("div");
    div.className = sender === "user" ? "userMsg" : "botMsg";
    div.innerText = msg;

    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

/* -----------------------
    🎤 VOICE RECOGNITION
------------------------- */
let recognition;

if ("webkitSpeechRecognition" in window) {
    recognition = new webkitSpeechRecognition();
    recognition.lang = "hi-IN";          // User बोलेगा हिंदी में
    recognition.continuous = false;      // एक बार सुनकर stop
    recognition.interimResults = false;

    recognition.onstart = () => {
        micBtn.style.background = "#a8ffae";
        micBtn.innerText = "🎤 Listening...";
    };

    recognition.onend = () => {
        micBtn.style.background = "#ffeab8";
        micBtn.innerText = "🎤";
    };

    recognition.onresult = (event) => {
        const text = event.results[0][0].transcript;
        inputField.value = text;

        addMessage("user", text);
        processQuery(text);
    };
}

micBtn.onclick = () => {
    recognition.start();
};

/* -----------------------
     SEND BUTTON CLICK
------------------------- */
sendBtn.onclick = () => {
    const text = inputField.value.trim();
    if (text === "") return;

    addMessage("user", text);
    processQuery(text);
};

/* -----------------------
     PROCESS QUERY (BOT)
------------------------- */
function processQuery(query) {
    query = query.toLowerCase();

    let answer = "";

    if (query.includes("wheat") || query.includes("गेहूं")) {
        answer = "Wheat needs 20–25°C temperature and proper irrigation during tillering and grain filling stages.";
    }

    else if (query.includes("rice") || query.includes("धान")) {
        answer = "Rice requires standing water, warm climate, and nitrogen-rich fertilizers.";
    }

    else if (query.includes("fertilizer") || query.includes("उर्वरक")) {
        answer = "Use balanced NPK fertilizers as per soil test report for best results.";
    }

    else {
        answer = "Thank you for your question! I am processing your query.";
    }

    lastAnswer = answer;
    addMessage("bot", answer);
}

/* -----------------------
     🔊 HINDI AUDIO OUTPUT
------------------------- */
speakBtn.onclick = () => {
    if (!lastAnswer) return;

    const speakText = new SpeechSynthesisUtterance(lastAnswer);
    speakText.lang = "hi-IN";
    speakText.rate = 1;
    speechSynthesis.speak(speakText);
};
