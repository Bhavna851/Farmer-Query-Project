const inputField = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const micBtn = document.getElementById("micBtn");
const speakBtn = document.getElementById("speakBtn");
const chatBox = document.getElementById("chatBox");

// Add message to chat
function addMessage(message, sender = "bot") {
    const msg = document.createElement("div");
    msg.className = sender === "user" ? "user-msg" : "bot-msg";
    msg.innerText = message;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Handle user message
sendBtn.addEventListener("click", sendMessage);
inputField.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    let input = inputField.value.trim().toLowerCase();
    if (input === "") return;

    addMessage(input, "user");
    inputField.value = "";

    processResponse(input);
}

// ===============================
//      BOT RESPONSE SYSTEM
// ===============================

function processResponse(input) {

    // === WHEAT ===
    if (input.includes("wheat")) {
        addMessage(
`🌾 WHEAT Crop Info

1️⃣ Crop Information:
Wheat grows best at 10–15°C with moderate moisture. Needs fertile soil.

2️⃣ Fertilizer Used:
• DAP (basal)
• Urea (split dose)
• MOP
• Nitrogen after 20–30 days

3️⃣ Diseases & Treatment:
• Blight – Mancozeb
• Rust – Propiconazole
• Wilt – Carbendazim

4️⃣ Weather Forecast:
• Temp: 28°C
• Humidity: 70%
• Rain Chance: 40%
• Advice: Avoid spraying pesticides if rain is expected.`
        );
    }

    // === RICE ===
    else if (input.includes("rice") || input.includes("paddy")) {
        addMessage(
`🌾 RICE Crop Info

1️⃣ Best Conditions:
Standing water, hot & humid climate.

2️⃣ Fertilizer Used:
• Urea
• DAP
• Potash

3️⃣ Diseases & Treatment:
• Blast – Tricyclazole
• Bacterial Blight – Streptocycline

4️⃣ Weather Forecast:
• Temp: 30°C
• Humidity: 75%
• Rain Chance: 50%`
        );
    }

    // === COTTON ===
    else if (input.includes("cotton")) {
        addMessage(
`🧵 COTTON Crop Info

1️⃣ Conditions:
Warm climate, black soil.

2️⃣ Fertilizers:
• Nitrogen
• Potassium
• DAP

3️⃣ Diseases:
• Bollworm – Chlorpyrifos
• Whitefly – Neem oil`
        );
    }

    // === MAIZE ===
    else if (input.includes("maize") || input.includes("corn")) {
        addMessage(
`🌽 MAIZE Crop Info

1️⃣ Crop Information:
Requires warm climate & loamy soil. Irrigate at knee-high stage.

2️⃣ Fertilizers:
• NPK 15:15:15
• Urea (2 splits)
• Zinc sulphate

3️⃣ Diseases:
• Turcicum Blight – Mancozeb
• Downy Mildew – Metalaxyl`
        );
    }

    // === SUGARCANE ===
    else if (input.includes("sugarcane") || input.includes("ganna")) {
        addMessage(
`🍭 SUGARCANE Crop Info

1️⃣ Conditions:
Hot & humid weather, high water requirement.

2️⃣ Fertilizer:
• NPK (150:60:60)
• Organic manure
• Pressmud

3️⃣ Diseases:
• Red Rot – Carbendazim
• Smut – Thiram seed treatment`
        );
    }

    // === TOMATO ===
    else if (input.includes("tomato")) {
        addMessage(
`🍅 TOMATO Crop Info

1️⃣ Conditions:
20–30°C temperature, sandy loam soil.

2️⃣ Fertilizer:
• NPK 12:32:16
• Vermicompost
• Potash at fruiting stage

3️⃣ Diseases:
• Early Blight – Mancozeb
• Leaf Curl – Remove infected plants`
        );
    }

    // === POTATO ===
    else if (input.includes("potato")) {
        addMessage(
`🥔 POTATO Crop Info

1️⃣ Conditions:
15–20°C cool climate, well-drained soil.

2️⃣ Fertilizer:
• NPK 10:26:26
• Urea (split)
• Potash

3️⃣ Diseases:
• Late Blight – Metalaxyl
• Scab – Improve soil pH`
        );
    }

    // === SOYBEAN ===
    else if (input.includes("soybean") || input.includes("soya")) {
        addMessage(
`🫘 SOYBEAN Crop Info

1️⃣ Conditions:
20–30°C, well-drained soil.

2️⃣ Fertilizer:
• SSP
• NPK 20:60:20
• Rhizobium culture

3️⃣ Diseases:
• Rust – Propiconazole
• Root Rot – Carbendazim`
        );
    }

    // === ONION ===
    else if (input.includes("onion")) {
        addMessage(
`🧅 ONION Crop Info

1️⃣ Conditions:
Cool season crop, sandy loam soil.

2️⃣ Fertilizer:
• NPK 14:35:14
• Urea (light doses)
• Sulphur

3️⃣ Diseases:
• Purple Blotch – Mancozeb
• Thrips – Neem oil`
        );
    }

    // === MUSTARD ===
    else if (input.includes("mustard") || input.includes("sarson")) {
        addMessage(
`🌼 MUSTARD Crop Info

1️⃣ Conditions:
Cool dry climate.

2️⃣ Fertilizer:
• NPK 20:20:0
• Sulphur 20–30 kg/ha

3️⃣ Diseases:
• Alternaria Blight – Mancozeb
• Aphids – Imidacloprid`
        );
    }

    // === GROUNDNUT ===
    else if (input.includes("groundnut") || input.includes("peanut")) {
        addMessage(
`🥜 GROUNDNUT Crop Info

1️⃣ Conditions:
Light soil, warm climate.

2️⃣ Fertilizer:
• Gypsum
• NPK 12:24:12

3️⃣ Diseases:
• Tikka Disease – Mancozeb
• Root Rot – Carbendazim`
        );
    }

    // === CHILLI ===
    else if (input.includes("chilli") || input.includes("mirchi")) {
        addMessage(
`🌶️ CHILLI Crop Info

1️⃣ Conditions:
Warm climate, welldrained soil.

2️⃣ Fertilizer:
• NPK 28:28:0
• Vermicompost

3️⃣ Diseases:
• Leaf Spot – Copper Oxychloride
• Wilt – Carbendazim`
        );
    }

    // ==== DEFAULT ====
    else {
        addMessage("❓ Sorry, I don't have info on this query. Try crop names like Wheat, Rice, Maize, Tomato.");
    }
}

// Speech-to-text
micBtn.addEventListener("click", () => {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = "en-IN";
    recognition.start();

    recognition.onresult = function (e) {
        inputField.value = e.results[0][0].transcript;
    };
});

// Text-to-speech
speakBtn.addEventListener("click", () => {
    let lastMsg = chatBox.lastElementChild?.innerText;
    if (!lastMsg) return;

    const speak = new SpeechSynthesisUtterance(lastMsg);
    speak.lang = "en-IN";
    window.speechSynthesis.speak(speak);
});

