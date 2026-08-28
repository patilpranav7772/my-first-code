
// ============================================================
// BIS INTELLIGENT ASSISTANT
// Cleaned and safer JavaScript
// ============================================================

"use strict";

// ============================================================
// BIS KNOWLEDGE BASE
// ============================================================

const BIS_KNOWLEDGE = {
    "electric kettle": {
        standard: "IS 302-2-15",
        standard_full:
            "IS 302-2-15 (Part 2): Safety of household electrical appliances — Heating liquids",
        scheme: "Scheme-I (ISI Mark)",
        certification:
            "✅ MANDATORY - You MUST get BIS certification",
        certification_simple:
            "You must get BIS certification. It's compulsory by law.",
        testing: [
            "🔌 Insulation test - checks if electricity leaks",
            "⚡ Leakage current test - checks safety",
            "🛡️ Overload protection test - prevents damage",
            "🌡️ Temperature rise test - checks overheating"
        ],
        testing_simple:
            "Your kettle must pass 4 safety tests at a BIS-approved lab.",
        documents: [
            "📋 Test report from BIS-approved lab",
            "🏭 Factory layout and process details",
            "📖 Quality control manual"
        ],
        process:
            "1️⃣ Apply online → 2️⃣ Send samples for testing → 3️⃣ Factory inspection → 4️⃣ Get license",
        source: "BIS Official Website",
        source_url: "https://bis.gov.in/certification/",
        summary:
            "If you make electric kettles in India, you MUST get BIS ISI certification. Get your product tested, then apply online."
    },

    "pressure cooker": {
        standard: "IS 2347",
        standard_full:
            "IS 2347: Specification for pressure cookers for domestic use",
        scheme: "Scheme-I (ISI Mark)",
        certification:
            "✅ MANDATORY - You MUST get BIS certification",
        certification_simple:
            "You must get BIS certification. It's compulsory by law.",
        testing: [
            "💪 Hydraulic pressure test - checks strength",
            "🛡️ Safety valve test - checks safety release",
            "⚖️ Weight test - checks proper weight",
            "🔧 Fitment test - checks parts fit properly"
        ],
        testing_simple:
            "Your pressure cooker must pass 4 safety tests at a BIS-approved lab.",
        documents: [
            "📋 Test report from BIS-approved lab",
            "🏭 Factory inspection report",
            "📖 Quality control plan"
        ],
        process:
            "1️⃣ Apply online → 2️⃣ Send samples for testing → 3️⃣ Factory inspection → 4️⃣ Get license",
        source: "BIS Official Website",
        source_url: "https://bis.gov.in/certification/",
        summary:
            "If you make pressure cookers, you MUST get BIS ISI certification. Get your product tested, then apply online."
    },

    "led lamp": {
        standard: "IS 16102",
        standard_full:
            "IS 16102 (Part 1): Self-ballasted LED lamps — Performance requirements",
        scheme: "Scheme-II (CRS - Compulsory Registration)",
        certification:
            "✅ MANDATORY - You MUST register with BIS",
        certification_simple:
            "You must register your LED lamps with BIS under the CRS scheme.",
        testing: [
            "🔌 Safety test - checks electrical safety",
            "📡 EMI/EMC test - checks interference",
            "💡 Photometric test - checks brightness"
        ],
        testing_simple:
            "Your LED lamps must pass 3 safety and performance tests.",
        documents: [
            "📋 Test report from BIS-approved lab",
            "📝 Self-Declaration of Conformity (SDOC)",
            "📄 Product technical specification"
        ],
        process:
            "1️⃣ Get tested at BIS lab → 2️⃣ Apply online with SDOC → 3️⃣ Get registration",
        source: "BIS Official Website",
        source_url: "https://bis.gov.in/crs/",
        summary:
            "If you make LED lamps, you MUST register with BIS under CRS. Get tested first, then apply online."
    },

    "children toys": {
        standard: "IS 9873",
        standard_full:
            "IS 9873 (Parts 1-9): Safety of toys",
        scheme: "Scheme-I (ISI Mark)",
        certification:
            "✅ MANDATORY - You MUST get BIS certification",
        certification_simple:
            "You must get BIS certification for children's toys. It's compulsory.",
        testing: [
            "🔧 Mechanical test - checks for sharp edges",
            "🔥 Flammability test - checks fire safety",
            "🧪 Chemical test - checks harmful substances"
        ],
        testing_simple:
            "Your toys must pass 3 safety tests for children's safety.",
        documents: [
            "📋 Test report from BIS-approved lab",
            "🏭 Factory inspection report",
            "📄 Material safety data sheets"
        ],
        process:
            "1️⃣ Apply online → 2️⃣ Send samples for testing → 3️⃣ Factory inspection → 4️⃣ Get license",
        source: "BIS Official Website",
        source_url: "https://bis.gov.in/toy-certification/",
        summary:
            "If you make children's toys, you MUST get BIS ISI certification. Safety tests are mandatory for child safety."
    },

    "steel pipe": {
        standard: "IS 1161",
        standard_full:
            "IS 1161: Steel tubes for structural purposes",
        scheme: "Scheme-I (ISI Mark)",
        certification:
            "✅ MANDATORY - You MUST get BIS certification",
        certification_simple:
            "You must get BIS certification for steel pipes. It's compulsory.",
        testing: [
            "💪 Tensile test - checks strength",
            "💧 Hydrostatic test - checks pressure resistance",
            "📏 Flattening test - checks shape",
            "📐 Dimensional check - checks size accuracy"
        ],
        testing_simple:
            "Your steel pipes must pass 4 quality and strength tests.",
        documents: [
            "📋 Test report from BIS-approved lab",
            "🏭 Factory inspection report",
            "📖 Quality control manual"
        ],
        process:
            "1️⃣ Apply online → 2️⃣ Send samples for testing → 3️⃣ Factory inspection → 4️⃣ Get license",
        source: "BIS Official Website",
        source_url: "https://bis.gov.in/certification/",
        summary:
            "If you make steel pipes, you MUST get BIS ISI certification. Quality and strength tests are mandatory."
    }
};

// ============================================================
// LANGUAGE SUPPORT
// ============================================================

const TRANSLATIONS = {
    en: {
        product_identified: "🔍 What we found",
        applicable_standard: "📋 BIS Standard",
        certification: "✅ What you need",
        testing_requirements: "🧪 Tests required",
        documents_required: "📄 Documents you need",
        process: "📌 How to apply (4 steps)",
        source: "📎 Official source",
        disclaimer:
            "⚠️ Important: This is AI-generated guidance based on BIS sources. Always verify with official BIS website before taking action.",
        compliance_checklist: "✅ Your Action Plan",
        step: "Step",
        apply: "Apply Online",
        test: "Testing",
        inspect: "Factory Inspection",
        license: "Get License",
        no_info:
            "I couldn't find specific BIS information for this product. Please check the official BIS website.",
        summary: "📌 Quick Summary",
        cert_required: "✅ Certification Required",
        cert_not_required: "❌ Certification Not Required"
    },

    hi: {
        product_identified: "🔍 क्या मिला",
        applicable_standard: "📋 BIS मानक",
        certification: "✅ आपको क्या चाहिए",
        testing_requirements: "🧪 कौन से टेस्ट चाहिए",
        documents_required: "📄 कौन से दस्तावेज़ चाहिए",
        process: "📌 कैसे करें आवेदन (4 चरण)",
        source: "📎 आधिकारिक स्रोत",
        disclaimer:
            "⚠️ महत्वपूर्ण: यह BIS स्रोतों पर आधारित AI मार्गदर्शन है। कोई भी कदम उठाने से पहले आधिकारिक BIS वेबसाइट से सत्यापन करें।",
        compliance_checklist: "✅ आपकी कार्य योजना",
        step: "चरण",
        apply: "ऑनलाइन आवेदन",
        test: "टेस्टिंग",
        inspect: "फैक्ट्री निरीक्षण",
        license: "लाइसेंस प्राप्त करें",
        no_info:
            "मुझे इस उत्पाद के लिए विशिष्ट BIS जानकारी नहीं मिली। कृपया आधिकारिक BIS वेबसाइट देखें।",
        summary: "📌 त्वरित सारांश",
        cert_required: "✅ प्रमाणन अनिवार्य है",
        cert_not_required: "❌ प्रमाणन अनिवार्य नहीं है"
    },

    mr: {
        product_identified: "🔍 काय सापडले",
        applicable_standard: "📋 BIS मानक",
        certification: "✅ आपल्याला काय हवे",
        testing_requirements: "🧪 कोणत्या चाचण्या हव्यात",
        documents_required: "📄 कोणती दस्तऐवजे हवीत",
        process: "📌 अर्ज कसा करावा (4 पायऱ्या)",
        source: "📎 अधिकृत स्रोत",
        disclaimer:
            "⚠️ महत्त्वाचे: हे BIS स्रोतांवर आधारित AI मार्गदर्शन आहे. कोणतीही कृती करण्यापूर्वी अधिकृत BIS वेबसाइटवर सत्यापन करा.",
        compliance_checklist: "✅ तुमची कृती योजना",
        step: "पायरी",
        apply: "ऑनलाइन अर्ज",
        test: "चाचणी",
        inspect: "कारखाना तपासणी",
        license: "परवाना मिळवा",
        no_info:
            "मला या उत्पादनासाठी विशिष्ट BIS माहिती सापडली नाही. कृपया अधिकृत BIS वेबसाइट पहा.",
        summary: "📌 त्वरित सारांश",
        cert_required: "✅ प्रमाणन अनिवार्य आहे",
        cert_not_required: "❌ प्रमाणन अनिवार्य नाही"
    }
};

// ============================================================
// APPLICATION STATE
// ============================================================

let currentLang = "en";
let isProcessing = false;

// ============================================================
// DOM ELEMENTS
// ============================================================

let homePage;
let mainPage;
let getStartedBtn;
let backHomeBtn;

let dashboard;
let chatArea;
let chatMessages;
let chatInput;
let sendBtn;
let typingIndicator;
let newChatBtn;

// ============================================================
// INITIALIZE APPLICATION
// ============================================================

function initializeApp() {
    // Get DOM elements AFTER the page has loaded
    homePage = document.getElementById("homePage");
    mainPage = document.getElementById("mainPage");
    getStartedBtn = document.getElementById("getStartedBtn");
    backHomeBtn = document.getElementById("backHomeBtn");

    dashboard = document.getElementById("dashboard");
    chatArea = document.getElementById("chatArea");
    chatMessages = document.getElementById("chatMessages");
    chatInput = document.getElementById("chatInput");
    sendBtn = document.getElementById("sendBtn");
    typingIndicator = document.getElementById("typingIndicator");
    newChatBtn = document.getElementById("newChatBtn");

    setupNavigation();
    setupChat();
    setupQuickButtons();
    setupNewChat();
    setupLanguageButtons();

    // Start with Home page
    showHomePage();

    console.log("🚀 BIS Intelligent Assistant Ready!");
    console.log(
        "📚 Products in Knowledge Base:",
        Object.keys(BIS_KNOWLEDGE).length
    );
    console.log(
        "🌍 Languages:",
        Object.keys(TRANSLATIONS).join(", ")
    );
}

// ============================================================
// PAGE NAVIGATION
// ============================================================

function showHomePage() {
    if (!homePage || !mainPage) return;

    homePage.style.display = "block";
    mainPage.style.display = "none";
}

function showMainPage() {
    if (!homePage || !mainPage) return;

    homePage.style.display = "none";
    mainPage.style.display = "flex";
}

function setupNavigation() {
    if (getStartedBtn) {
        getStartedBtn.addEventListener("click", function () {
            showMainPage();

            if (chatInput) {
                setTimeout(function () {
                    chatInput.focus();
                }, 100);
            }
        });
    }

    if (backHomeBtn) {
        backHomeBtn.addEventListener("click", function () {
            showHomePage();
            resetChat();
        });
    }
}

// ============================================================
// HELPER FUNCTIONS
// ============================================================

function getTranslation(key) {
    return (
        TRANSLATIONS[currentLang]?.[key] ??
        TRANSLATIONS.en[key] ??
        key
    );
}

// Escape HTML to prevent unwanted HTML injection
function escapeHTML(text) {
    const div = document.createElement("div");
    div.textContent = String(text);
    return div.innerHTML;
}

// Convert simple Markdown-style **bold** into safe HTML
function formatMessage(text) {
    let safeText = escapeHTML(text);

    safeText = safeText.replace(
        /\*\*(.*?)\*\*/g,
        "<strong>$1</strong>"
    );

    safeText = safeText.replace(/\n/g, "<br>");

    return safeText;
}

// ============================================================
// FIND PRODUCT
// ============================================================

function findBestMatch(query) {
    if (!query) return null;

    const lower = query.toLowerCase().trim();

    // Exact product phrase
    for (const key in BIS_KNOWLEDGE) {
        if (lower.includes(key)) {
            return {
                key: key,
                data: BIS_KNOWLEDGE[key]
            };
        }
    }

    // Individual meaningful words
    for (const key in BIS_KNOWLEDGE) {
        const words = key.split(" ");

        for (const word of words) {
            if (word.length > 3 && lower.includes(word)) {
                return {
                    key: key,
                    data: BIS_KNOWLEDGE[key]
                };
            }
        }
    }

    return null;
}

// ============================================================
// GENERATE BOT RESPONSE
// ============================================================

function generateBotResponse(query) {
    const match = findBestMatch(query);

    if (!match) {
        return {
            text: getTranslation("no_info"),
            sources: null,
            checklist: null
        };
    }

    const data = match.data;
    const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

    const parts = [];

    // 1. Summary
    parts.push("📌 **" + t.summary + "**");
    parts.push(data.summary);
    parts.push("");

    // 2. Certification
    parts.push("✅ **" + t.cert_required + "**");
    parts.push(data.certification_simple);
    parts.push("");

    // 3. BIS Standard
    parts.push("📋 **" + t.applicable_standard + "**");
    parts.push("• Standard: **" + data.standard + "**");
    parts.push("• Full name: " + data.standard_full);
    parts.push("• Scheme: " + data.scheme);
    parts.push("");

    // 4. Testing
    parts.push("🧪 **" + t.testing_requirements + "**");
    parts.push(data.testing_simple);
    parts.push("");
    parts.push("**Details:**");

    data.testing.forEach(function (item) {
        parts.push("  " + item);
    });

    parts.push("");

    // 5. Documents
    parts.push("📄 **" + t.documents_required + "**");

    data.documents.forEach(function (item) {
        parts.push("  " + item);
    });

    parts.push("");

    // 6. Process
    parts.push("📌 **" + t.process + "**");
    parts.push("  " + data.process);

    const checklist = [
        "☐ " + t.step + " 1: " + t.apply,
        "☐ " + t.step + " 2: " + t.test,
        "☐ " + t.step + " 3: " + t.inspect,
        "☐ " + t.step + " 4: " + t.license
    ];

    return {
        text: parts.join("\n"),
        sources: {
            title: data.source,
            url: data.source_url
        },
        checklist: checklist
    };
}

// ============================================================
// UI FUNCTIONS
// ============================================================

function showDashboard() {
    if (dashboard) {
        dashboard.classList.remove("hidden");
    }

    if (chatArea) {
        chatArea.classList.remove("active");
    }

    if (chatMessages) {
        chatMessages.innerHTML = "";
    }
}

function showChat() {
    if (dashboard) {
        dashboard.classList.add("hidden");
    }

    if (chatArea) {
        chatArea.classList.add("active");
    }
}

function resetChat() {
    isProcessing = false;

    if (chatMessages) {
        chatMessages.innerHTML = "";
    }

    if (chatInput) {
        chatInput.value = "";
    }

    if (sendBtn) {
        sendBtn.disabled = false;
    }

    hideTyping();

    showDashboard();
}

// ============================================================
// ADD MESSAGE
// ============================================================

function addMessage(type, content, sources = null, checklist = null) {
    if (!chatMessages) return;

    const div = document.createElement("div");
    div.className = "message " + type;

    if (type === "bot") {
        // Bot label
        const label = document.createElement("div");
        label.className = "msg-label";
        label.textContent = "BIS Assistant";

        div.appendChild(label);

        // Message content
        const textDiv = document.createElement("div");
        textDiv.style.whiteSpace = "pre-wrap";
        textDiv.innerHTML = formatMessage(content);

        div.appendChild(textDiv);

        // Checklist
        if (Array.isArray(checklist) && checklist.length > 0) {
            const checklistDiv =
                document.createElement("div");

            checklistDiv.className =
                "compliance-checklist";

            const title =
                document.createElement("strong");

            title.textContent =
                getTranslation("compliance_checklist");

            checklistDiv.appendChild(title);

            const ul = document.createElement("ul");

            checklist.forEach(function (item) {
                const li = document.createElement("li");

                li.textContent = item;

                ul.appendChild(li);
            });

            checklistDiv.appendChild(ul);
            div.appendChild(checklistDiv);
        }

        // Source
        if (
            sources &&
            sources.url &&
            sources.title
        ) {
            const sourcesDiv =
                document.createElement("div");

            sourcesDiv.className = "sources";

            const sourceLabel =
                document.createElement("strong");

            sourceLabel.textContent =
                getTranslation("source") + ": ";

            const link =
                document.createElement("a");

            link.href = sources.url;
            link.target = "_blank";
            link.rel =
                "noopener noreferrer";

            link.innerHTML =
                '<i class="fas fa-external-link-alt"></i> ' +
                escapeHTML(sources.title);

            sourcesDiv.appendChild(sourceLabel);
            sourcesDiv.appendChild(link);

            div.appendChild(sourcesDiv);
        }

        // Disclaimer
        const disclaimer =
            document.createElement("div");

        disclaimer.className = "disclaimer";
        disclaimer.textContent =
            getTranslation("disclaimer");

        div.appendChild(disclaimer);

    } else {
        // User message
        div.textContent = content;
    }

    chatMessages.appendChild(div);

    chatMessages.scrollTop =
        chatMessages.scrollHeight;
}

// ============================================================
// TYPING INDICATOR
// ============================================================

function showTyping() {
    if (!typingIndicator) return;

    typingIndicator.classList.remove("hidden");
    typingIndicator.classList.add("active");

    if (chatMessages) {
        chatMessages.scrollTop =
            chatMessages.scrollHeight;
    }
}

function hideTyping() {
    if (!typingIndicator) return;

    typingIndicator.classList.remove("active");
    typingIndicator.classList.add("hidden");
}

// ============================================================
// SEND MESSAGE
// ============================================================

function handleSend() {
    if (!chatInput || !sendBtn) return;

    const query = chatInput.value.trim();

    if (!query || isProcessing) {
        return;
    }

    // Show chat
    showChat();

    // User message
    addMessage("user", query);

    // Clear input
    chatInput.value = "";

    // Processing state
    isProcessing = true;
    sendBtn.disabled = true;

    showTyping();

    // Simulated response delay
    const delay = 1000 + Math.random() * 600;

    setTimeout(function () {
        hideTyping();

        const result =
            generateBotResponse(query);

        addMessage(
            "bot",
            result.text,
            result.sources,
            result.checklist
        );

        isProcessing = false;
        sendBtn.disabled = false;

        chatInput.focus();
    }, delay);
}

// ============================================================
// CHAT EVENT LISTENERS
// ============================================================

function setupChat() {
    if (sendBtn) {
        sendBtn.addEventListener(
            "click",
            handleSend
        );
    }

    if (chatInput) {
        chatInput.addEventListener(
            "keydown",
            function (event) {
                if (event.key === "Enter") {
                    event.preventDefault();
                    handleSend();
                }
            }
        );
    }
}

// ============================================================
// QUICK BUTTONS
// ============================================================

function setupQuickButtons() {
    const quickBtns =
        document.querySelectorAll(".quick-btn");

    quickBtns.forEach(function (button) {
        button.addEventListener(
            "click",
            function () {
                const query =
                    this.dataset.query;

                if (!query || !chatInput) {
                    return;
                }

                showChat();

                chatInput.value = query;

                handleSend();
            }
        );
    });
}

// ============================================================
// NEW CHAT
// ============================================================

function setupNewChat() {
    if (!newChatBtn) return;

    newChatBtn.addEventListener(
        "click",
        function () {
            resetChat();

            // Keep user inside assistant page
            if (homePage && mainPage) {
                homePage.style.display = "none";
                mainPage.style.display = "flex";
            }

            if (chatInput) {
                chatInput.focus();
            }
        }
    );
}

// ============================================================
// LANGUAGE SWITCHING
// ============================================================

function setupLanguageButtons() {
    const langBtns =
        document.querySelectorAll(".lang-btn");

    const placeholders = {
        en: "Describe your product or requirement...",
        hi: "अपने उत्पाद या आवश्यकता का वर्णन करें...",
        mr: "आपले उत्पादन किंवा आवश्यकता वर्णन करा..."
    };

    langBtns.forEach(function (button) {
        button.addEventListener(
            "click",
            function () {
                const selectedLang =
                    this.dataset.lang;

                // Validate language
                if (!TRANSLATIONS[selectedLang]) {
                    return;
                }

                currentLang = selectedLang;

                // Active button
                langBtns.forEach(function (btn) {
                    btn.classList.remove("active");
                });

                this.classList.add("active");

                // Change input placeholder
                if (chatInput) {
                    chatInput.placeholder =
                        placeholders[currentLang] ||
                        placeholders.en;
                }
            }
        );
    });
}

// ============================================================
// INITIALIZE WHEN HTML IS READY
// ============================================================

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initializeApp
    );
} else {
    initializeApp();
}
