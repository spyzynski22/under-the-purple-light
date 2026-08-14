/* ============================================================
   THE DECK. Edit me to build your own.
   ------------------------------------------------------------
   Every card looks like this:
     {
       name: "Hekate",
       title: "Keeper of the Keys",
       pantheon: "Greek",
       element: "Fire" | "Water" | "Earth" | "Air" | "Aether",
       message: "her short oracle message",
       invitation: "one small action for today"
     }
   Add, remove, or rewrite freely. Visitors can also add
   goddesses live in the browser using the panel below the deck.
   ============================================================ */
const DECK_META = {
  label: "Purple Light Lounge · Archetype Oracle",
  title: "Under the Purple Light",
  subtitle: "Twenty seven goddesses, one message each. Pull a card when you need to remember what you carry."
};

const CARDS = [
  /* ---------- FIRE ---------- */
  { name: "Sekhmet", title: "Lady of Flame", pantheon: "Egyptian", element: "Fire",
    message: "Your anger knows exactly where your boundary sits. Let it speak once, clearly, then hold what it told you.",
    invitation: "Name the one line you will stop letting people cross." },
  { name: "Brigid", title: "Keeper of the Forge", pantheon: "Celtic", element: "Fire",
    message: "What you are making is worth the heat it takes. Come back to it today, even for ten minutes.",
    invitation: "Put your hands on the work before you put them on your phone." },
  { name: "Kali", title: "The Liberator", pantheon: "Hindu", element: "Fire",
    message: "Let the ending finish. Your hands come back to you empty and ready.",
    invitation: "Write down one thing you are done carrying, then say it out loud." },
  { name: "Hestia", title: "Tender of the Hearth", pantheon: "Greek", element: "Fire",
    message: "Everything you build draws its warmth from the fire at the center of your own life. Feed that one first.",
    invitation: "Do one small thing today that serves only your own home and body." },
  { name: "Freyja", title: "Gold and Desire", pantheon: "Norse", element: "Fire",
    message: "Wanting is holy. Say the want out loud and watch how quickly the path shows itself.",
    invitation: "Name the desire you have been softening for other people's comfort." },
  { name: "Durga", title: "The Unshakable", pantheon: "Hindu", element: "Fire",
    message: "You are steadier than the thing in front of you. Meet it once, fully, instead of a hundred times in your head.",
    invitation: "Take the one action you have been circling all week." },

  /* ---------- WATER ---------- */
  { name: "Aphrodite", title: "Born of the Sea", pantheon: "Greek", element: "Water",
    message: "Pleasure is a compass. What you love is pointing at what you are here for.",
    invitation: "Give yourself one hour of something you love for no reason at all." },
  { name: "Danu", title: "Mother of Rivers", pantheon: "Celtic", element: "Water",
    message: "Something older than this moment is carrying you. Loosen your grip and keep moving.",
    invitation: "Ask for help with the thing you have been doing alone." },
  { name: "Ceridwen", title: "Keeper of the Cauldron", pantheon: "Welsh", element: "Water",
    message: "The long brew is working on the days nothing appears to change. Keep stirring.",
    invitation: "List three things quietly maturing in your life right now." },
  { name: "Tiamat", title: "The First Deep", pantheon: "Babylonian", element: "Water",
    message: "What you are becoming is already forming in the dark. Give it more time before you pull it into the light.",
    invitation: "Keep one thing private today and let it grow." },
  { name: "Nephthys", title: "Keeper of the Threshold", pantheon: "Egyptian", element: "Water",
    message: "You are standing between two rooms. Standing here is the whole work for now.",
    invitation: "Write down what you are leaving and what you are walking toward." },

  /* ---------- EARTH ---------- */
  { name: "Demeter", title: "The Harvest", pantheon: "Greek", element: "Earth",
    message: "You planted this. Take the yield without apologizing for how good it is.",
    invitation: "Say thank you to yourself for one result you created." },
  { name: "Gaia", title: "The Ground Itself", pantheon: "Greek", element: "Earth",
    message: "You are allowed to be a body. Feed it, move it, put it in the sun.",
    invitation: "Go outside and stand on the ground for five minutes." },
  { name: "Lakshmi", title: "The Overflowing", pantheon: "Hindu", element: "Earth",
    message: "Wealth moves toward what is tended and open. Clean one corner of your life today and watch.",
    invitation: "Handle the money task you have been avoiding." },
  { name: "Mokosh", title: "Spinner of the Damp Earth", pantheon: "Slavic", element: "Earth",
    message: "Your work has a season. Match your pace to the one you are actually in.",
    invitation: "Cut one thing from this week's list and let it wait." },
  { name: "Rhiannon", title: "Sovereign Rider", pantheon: "Welsh", element: "Earth",
    message: "You set the pace. The people who want to be with you will keep up.",
    invitation: "Stop explaining one decision you already made." },

  /* ---------- AIR ---------- */
  { name: "Athena", title: "The Clear Strategy", pantheon: "Greek", element: "Air",
    message: "You already know the smart move. Write it down and take the first step of it today.",
    invitation: "Turn the swirl in your head into three written steps." },
  { name: "Saraswati", title: "The Flowing Word", pantheon: "Hindu", element: "Air",
    message: "Your voice gets clearer through use. Say the thing imperfectly rather than not at all.",
    invitation: "Post, send, or speak one unpolished true thing." },
  { name: "Iris", title: "The Bridge", pantheon: "Greek", element: "Air",
    message: "The message you carry is simpler than you are making it. Say it plainly and let it land.",
    invitation: "Send the message you have been drafting in your head." },
  { name: "Frigg", title: "Spinner of the Thread", pantheon: "Norse", element: "Air",
    message: "You can see where this leads. Trust what you already know and prepare instead of worry.",
    invitation: "Make one plan for the outcome you actually expect." },
  { name: "Ma'at", title: "The Feather", pantheon: "Egyptian", element: "Air",
    message: "Truth makes you lighter. Say the honest sentence and feel the weight leave.",
    invitation: "Tell one truth you have been managing around." },

  /* ---------- AETHER ---------- */
  { name: "Hekate", title: "Keeper of the Keys", pantheon: "Greek", element: "Aether",
    message: "Three roads, and every one of them is yours to choose. Pick one and the fog clears as you walk.",
    invitation: "Choose the option you keep coming back to." },
  { name: "Isis", title: "The Great Magic", pantheon: "Egyptian", element: "Aether",
    message: "You can gather what was scattered. Start with one piece and stay with it.",
    invitation: "Return to a project you abandoned and give it one hour." },
  { name: "Inanna", title: "She Who Descends", pantheon: "Sumerian", element: "Aether",
    message: "You set something down at every gate on the way in. You come back up carrying only what is yours.",
    invitation: "Name one identity you are ready to leave behind." },
  { name: "Nyx", title: "First Night", pantheon: "Greek", element: "Aether",
    message: "Rest is part of the work. Nothing is being lost while you sleep.",
    invitation: "Go to bed early and let the unfinished thing stay unfinished." },
  { name: "Arianrhod", title: "Keeper of the Silver Wheel", pantheon: "Welsh", element: "Aether",
    message: "This has come around again because you can meet it at a new level. Meet it as who you are now.",
    invitation: "Notice the pattern repeating and choose differently once." },
  { name: "Persephone", title: "Queen of Both Worlds", pantheon: "Greek", element: "Aether",
    message: "You know how to live in the bright season and in the dark one. Both of them belong to you.",
    invitation: "Let yourself feel exactly which season you are in." }
];

/* ============================================================
   Storage — plain localStorage, no host runtime required.
   ============================================================ */
const STORAGE_KEY = "purpleLightOracleUserCards:v1";
const JOURNAL_KEY = "purpleLightOracleJournal:v1";

function loadUserCards() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}
function saveUserCards(cards) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cards)); } catch (e) { /* storage unavailable */ }
}
function loadJournal() {
  try {
    const raw = localStorage.getItem(JOURNAL_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}
function saveJournal(j) {
  try { localStorage.setItem(JOURNAL_KEY, JSON.stringify(j)); } catch (e) { /* storage unavailable */ }
}

/* ============================================================
   App logic
   ============================================================ */
const EL_COLOR = {
  Fire: "var(--el-fire)",
  Water: "var(--el-water)",
  Earth: "var(--el-earth)",
  Air: "var(--el-air)",
  Aether: "var(--el-aether)"
};

function elementGlyph(el, size) {
  const s = size || 34;
  const open = '<svg viewBox="0 0 32 32" width="' + s + '" height="' + s + '" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">';
  const shapes = {
    Fire: '<path d="M16 4 L28 26 L4 26 Z"/>',
    Water: '<path d="M16 28 L4 6 L28 6 Z"/>',
    Air: '<path d="M16 4 L28 26 L4 26 Z"/><path d="M9 18 H23"/>',
    Earth: '<path d="M16 28 L4 6 L28 6 Z"/><path d="M9 15 H23"/>',
    Aether: '<path d="M16 3 L18.6 13.4 L29 16 L18.6 18.6 L16 29 L13.4 18.6 L3 16 L13.4 13.4 Z"/><circle cx="16" cy="16" r="1.4" fill="currentColor" stroke="none"/>'
  };
  return open + (shapes[el] || shapes.Aether) + '</svg>';
}

let activeFilter = "all";
let lastIndex = -1;
let currentDrawn = null;

document.getElementById("brandLabel").innerHTML = DECK_META.label;
document.getElementById("deckTitle").textContent = DECK_META.title;
document.getElementById("deckSubtitle").textContent = DECK_META.subtitle;

function allCards() { return CARDS.concat(loadUserCards()); }

function filtered() {
  const all = allCards();
  if (activeFilter === "all") return all.map((c, i) => ({ c, i }));
  return all.map((c, i) => ({ c, i })).filter(o => o.c.element === activeFilter);
}

function cardKey(c) { return (c.name || "") + "||" + (c.message || ""); }
function journaledKeySet() { return new Set(loadJournal().map(e => e.key)); }
function entriesForKey(key) { return loadJournal().filter(e => e.key === key).sort((a, b) => b.ts - a.ts); }
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

function formatDate(ts) {
  const d = new Date(ts);
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }) +
    "  ·  " + d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
}

function deleteEntry(id) { saveJournal(loadJournal().filter(e => e.id !== id)); }

function safeConfirm(message) {
  return new Promise((resolve) => {
    const overlay = document.createElement("div");
    overlay.className = "confirm-overlay";
    const box = document.createElement("div");
    box.className = "confirm-box";
    const msg = document.createElement("p");
    msg.textContent = message;
    const btns = document.createElement("div");
    btns.className = "confirm-btns";
    const yesBtn = document.createElement("button");
    yesBtn.className = "btn btn-primary";
    yesBtn.textContent = "Yes, do it";
    const noBtn = document.createElement("button");
    noBtn.className = "btn btn-ghost";
    noBtn.textContent = "Cancel";
    btns.appendChild(yesBtn);
    btns.appendChild(noBtn);
    box.appendChild(msg);
    box.appendChild(btns);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
    function cleanup(result) { overlay.remove(); resolve(result); }
    yesBtn.addEventListener("click", () => cleanup(true));
    noBtn.addEventListener("click", () => cleanup(false));
    overlay.addEventListener("click", (e) => { if (e.target === overlay) cleanup(false); });
  });
}

function escapeHtml(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, m => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[m]));
}

// ---------- Draw ----------
const deckCard = document.getElementById("deckCard");
const cardFront = document.getElementById("cardFront");
const hint = document.getElementById("hint");
const drawBtn = document.getElementById("drawBtn");
const reflectBtn = document.getElementById("reflectBtn");

function renderFront(card, idx, total) {
  const color = EL_COLOR[card.element] || "var(--el-aether)";
  let html = "";
  html += '<div class="card-el" style="color:' + color + '">' + escapeHtml(card.element || "Aether") + '</div>';
  if (journaledKeySet().has(cardKey(card))) html += '<div class="journaled-mark">&#10022; Written</div>';
  html += '<div class="card-glyph" style="color:' + color + '">' + elementGlyph(card.element, 34) + '</div>';
  html += '<div class="card-name" style="color:' + color + '">' + escapeHtml(card.name) + '</div>';
  if (card.title) html += '<div class="card-title">' + escapeHtml(card.title) + '</div>';
  if (card.pantheon) html += '<div class="card-pantheon">' + escapeHtml(card.pantheon) + '</div>';
  html += '<div class="divider" style="color:' + color + '"></div>';
  html += '<div class="card-message">' + escapeHtml(card.message) + '</div>';
  if (card.invitation) {
    html += '<div class="card-invite"><b style="color:' + color + '">Her invitation</b>' + escapeHtml(card.invitation) + '</div>';
  }
  html += '<div class="card-num">No. ' + String(idx + 1).padStart(2, "0") + ' / ' + total + '</div>';
  cardFront.innerHTML = html;
}

function draw() {
  const pool = filtered();
  if (!pool.length) return;
  let pick;
  do { pick = pool[Math.floor(Math.random() * pool.length)]; }
  while (pool.length > 1 && pick.i === lastIndex);
  lastIndex = pick.i;
  currentDrawn = pick.c;
  const total = allCards().length;

  if (deckCard.classList.contains("revealed")) {
    deckCard.classList.remove("revealed");
    setTimeout(() => { renderFront(pick.c, pick.i, total); deckCard.classList.add("revealed"); }, 300);
  } else {
    renderFront(pick.c, pick.i, total);
    deckCard.classList.add("revealed");
  }
  hint.textContent = "Draw again for another";
  drawBtn.textContent = "Draw again";
  reflectBtn.style.display = "inline-block";
}

deckCard.addEventListener("click", draw);
deckCard.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); draw(); } });
drawBtn.addEventListener("click", draw);

// ---------- Filters ----------
document.getElementById("filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".pill");
  if (!btn) return;
  document.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
  btn.classList.add("active");
  activeFilter = btn.dataset.filter;
  lastIndex = -1;
});

// ---------- Gallery ----------
const gallerySection = document.getElementById("gallerySection");
const gallery = document.getElementById("gallery");
const galleryBtn = document.getElementById("galleryBtn");

function renderGallery() {
  const userCount = loadUserCards().length;
  const all = allCards();
  const written = journaledKeySet();
  document.getElementById("deckCount").textContent =
    all.length + " cards" + (userCount ? "  ·  " + userCount + " of them yours" : "");
  gallery.innerHTML = all.map((c, i) => {
    const isUser = i >= CARDS.length;
    const isWritten = written.has(cardKey(c));
    const color = EL_COLOR[c.element] || "var(--el-aether)";
    const cls = "mini" + (isUser ? " user-card" : "") + (isWritten ? " journaled" : "");
    let inner = '<div class="mel">' + escapeHtml(c.element || "Aether") + '</div>';
    inner += '<div class="mname">' + escapeHtml(c.name) + '</div>';
    if (c.title) inner += '<div class="mtitle">' + escapeHtml(c.title) + '</div>';
    inner += '<div class="mtext">' + escapeHtml(c.message) + '</div>';
    inner += '<div class="mnum">' + String(i + 1).padStart(2, "0") + '</div>';
    if (isWritten) inner += '<div class="journaled-badge" title="You have written with her">&#10022;</div>';
    return '<div class="' + cls + '" style="color:' + color + '" data-idx="' + i + '" tabindex="0">' + inner + '</div>';
  }).join("");
}

function openFromMini(el) {
  const idx = parseInt(el.dataset.idx, 10);
  const card = allCards()[idx];
  if (card) openReflect(card);
}
gallery.addEventListener("click", (e) => {
  const mini = e.target.closest(".mini");
  if (mini) openFromMini(mini);
});
gallery.addEventListener("keydown", (e) => {
  const mini = e.target.closest(".mini");
  if (mini && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openFromMini(mini); }
});

galleryBtn.addEventListener("click", () => {
  const showing = gallerySection.style.display !== "none";
  if (showing) {
    gallerySection.style.display = "none";
    galleryBtn.textContent = "Browse full deck";
  } else {
    renderGallery();
    gallerySection.style.display = "block";
    galleryBtn.textContent = "Hide deck";
    gallerySection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

// ---------- Add your own ----------
const nameInput = document.getElementById("nameInput");
const titleInput = document.getElementById("titleInput");
const pantheonInput = document.getElementById("pantheonInput");
const messageInput = document.getElementById("messageInput");
const inviteInput = document.getElementById("inviteInput");
const elementField = document.getElementById("elementField");
const addNote = document.getElementById("addNote");

let flashTimer;
function flash(msg) {
  addNote.textContent = msg;
  clearTimeout(flashTimer);
  flashTimer = setTimeout(() => { addNote.textContent = ""; }, 3400);
}

document.getElementById("addBtn").addEventListener("click", () => {
  const name = nameInput.value.trim();
  const message = messageInput.value.trim();
  if (!name) { flash("Give her a name first."); return; }
  if (!message) { flash("Write her message first."); return; }
  const card = { name, message, element: elementField.value };
  const t = titleInput.value.trim(); if (t) card.title = t;
  const p = pantheonInput.value.trim(); if (p) card.pantheon = p;
  const inv = inviteInput.value.trim(); if (inv) card.invitation = inv;
  const mine = loadUserCards();
  mine.push(card);
  saveUserCards(mine);
  nameInput.value = ""; titleInput.value = ""; pantheonInput.value = "";
  messageInput.value = ""; inviteInput.value = "";
  renderGallery();
  flash(name + " is in the deck now.");
});

document.getElementById("clearMineBtn").addEventListener("click", async () => {
  if (!loadUserCards().length) { flash("No cards of yours to remove."); return; }
  if (!await safeConfirm("Remove all the cards you added? The original deck stays.")) return;
  saveUserCards([]);
  lastIndex = -1;
  renderGallery();
  flash("Your cards were removed.");
});

// ---------- Journal ----------
const journalBtn = document.getElementById("journalBtn");
const journalSection = document.getElementById("journalSection");
const journalActions = document.getElementById("journalActions");
const journalList = document.getElementById("journalList");
const reflectModal = document.getElementById("reflectModal");
const modalCardEl = document.getElementById("modalCard");
const reflectInput = document.getElementById("reflectInput");
const modalNote = document.getElementById("modalNote");
const modalPast = document.getElementById("modalPast");
let modalCard = null;

function renderModalCardInner(card) {
  const color = EL_COLOR[card.element] || "var(--el-aether)";
  let html = '<div class="mc-name" style="color:' + color + '">' + escapeHtml(card.name) + '</div>';
  if (card.title) html += '<div class="mc-title">' + escapeHtml(card.title) + '</div>';
  html += '<div class="mc-text">' + escapeHtml(card.message) + '</div>';
  if (card.invitation) html += '<div class="mc-invite">' + escapeHtml(card.invitation) + '</div>';
  modalCardEl.style.color = color;
  return html;
}

function renderModalPast() {
  const list = entriesForKey(cardKey(modalCard));
  if (!list.length) { modalPast.innerHTML = ""; return; }
  modalPast.innerHTML = '<h4>What you have written with her before</h4>' + list.map(e =>
    '<div class="past-entry"><button class="entry-del" data-id="' + e.id + '">Delete</button>' +
    '<p>' + escapeHtml(e.body) + '</p><div class="pe-date">' + formatDate(e.ts) + '</div></div>'
  ).join("");
}

function openReflect(card) {
  modalCard = card;
  modalCardEl.innerHTML = renderModalCardInner(card);
  reflectInput.value = "";
  modalNote.textContent = "";
  renderModalPast();
  reflectModal.classList.add("open");
  setTimeout(() => reflectInput.focus(), 80);
}

function closeModal() { reflectModal.classList.remove("open"); modalCard = null; }

reflectBtn.addEventListener("click", () => { if (currentDrawn) openReflect(currentDrawn); });
document.getElementById("modalClose").addEventListener("click", closeModal);
reflectModal.addEventListener("click", (e) => { if (e.target === reflectModal) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && reflectModal.classList.contains("open")) closeModal(); });

function updateJournalBtn() {
  const n = loadJournal().length;
  journalBtn.textContent = n ? "My journal (" + n + ")" : "My journal";
}

document.getElementById("saveReflectBtn").addEventListener("click", () => {
  const body = reflectInput.value.trim();
  if (!body) { modalNote.textContent = "Write something first."; return; }
  const j = loadJournal();
  j.push({
    id: uid(), key: cardKey(modalCard),
    name: modalCard.name, cardTitle: modalCard.title || "",
    element: modalCard.element || "Aether", message: modalCard.message,
    invitation: modalCard.invitation || "",
    body, ts: Date.now()
  });
  saveJournal(j);
  reflectInput.value = "";
  modalNote.textContent = "Saved to your journal.";
  renderModalPast();
  updateJournalBtn();
  if (gallerySection.style.display !== "none") renderGallery();
  if (journalSection.style.display !== "none") renderJournal();
});

modalPast.addEventListener("click", async (e) => {
  const btn = e.target.closest(".entry-del");
  if (!btn) return;
  if (!await safeConfirm("Delete this journal entry?")) return;
  deleteEntry(btn.dataset.id);
  renderModalPast();
  updateJournalBtn();
  if (gallerySection.style.display !== "none") renderGallery();
  if (journalSection.style.display !== "none") renderJournal();
});

function renderJournal() {
  const j = loadJournal().sort((a, b) => b.ts - a.ts);
  document.getElementById("journalCount").textContent =
    j.length ? (j.length + (j.length === 1 ? " entry saved" : " entries saved")) : "";
  journalActions.style.display = j.length ? "flex" : "none";
  if (!j.length) {
    journalList.innerHTML = '<div class="journal-empty">Nothing here yet. Draw a card or tap one in the deck, then write what comes up. It saves here, just for you.</div>';
    return;
  }
  journalList.innerHTML = '<div class="journal-list">' + j.map(e => {
    const color = EL_COLOR[e.element] || "var(--el-aether)";
    const label = e.name + (e.cardTitle ? ", " + e.cardTitle : "");
    return '<div class="j-entry"><button class="entry-del" data-id="' + e.id + '">Delete</button>' +
      '<div class="j-card" style="color:' + color + '"><span class="j-el">' + escapeHtml(e.element) + '</span>' + escapeHtml(label) + '</div>' +
      '<div class="j-body">' + escapeHtml(e.body) + '</div>' +
      '<div class="j-date">' + formatDate(e.ts) + '</div></div>';
  }).join("") + '</div>';
}

journalList.addEventListener("click", async (e) => {
  const btn = e.target.closest(".entry-del");
  if (!btn) return;
  if (!await safeConfirm("Delete this journal entry?")) return;
  deleteEntry(btn.dataset.id);
  renderJournal();
  updateJournalBtn();
  if (gallerySection.style.display !== "none") renderGallery();
});

function exportJournal() {
  const j = loadJournal().sort((a, b) => b.ts - a.ts);
  if (!j.length) return;

  const line = "------------------------------------------------------------";
  let out = DECK_META.title + " · Oracle Journal\n";
  out += "Exported " + formatDate(Date.now()) + "\n";
  out += j.length + (j.length === 1 ? " entry" : " entries") + "\n" + line + "\n\n";
  out += j.map(e => {
    let block = formatDate(e.ts) + "\n";
    block += e.name + (e.cardTitle ? ", " + e.cardTitle : "") + "  (" + e.element + ")\n";
    block += "Her message: " + e.message + "\n";
    if (e.invitation) block += "Her invitation: " + e.invitation + "\n";
    block += "\n" + e.body + "\n";
    return block;
  }).join("\n" + line + "\n\n");
  out += "\n\n" + line + "\nMade for Purple Light Lounge\nhttps://www.skool.com/purple-light-lounge-6229/about\n";

  const blob = new Blob([out], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const stamp = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = "purple-light-oracle-journal-" + stamp + ".txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

document.getElementById("exportBtn").addEventListener("click", exportJournal);

journalBtn.addEventListener("click", () => {
  const showing = journalSection.style.display !== "none";
  if (showing) {
    journalSection.style.display = "none";
    updateJournalBtn();
  } else {
    renderJournal();
    journalSection.style.display = "block";
    journalSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

// ---------- Drifting motes ----------
(function motes() {
  const host = document.getElementById("motes");
  const colors = ["var(--aqua)", "var(--magenta)", "var(--violet-lt)", "var(--gold)", "var(--leaf)"];
  const N = 34;
  for (let i = 0; i < N; i++) {
    const m = document.createElement("div");
    m.className = "mote";
    m.style.left = Math.random() * 100 + "vw";
    const dur = 11 + Math.random() * 14;
    m.style.animationDuration = dur + "s";
    m.style.animationDelay = (-Math.random() * dur) + "s";
    m.style.setProperty("--drift", (Math.random() * 110 - 55) + "px");
    const s = 2 + Math.random() * 2.5;
    m.style.width = s + "px"; m.style.height = s + "px";
    m.style.color = colors[Math.floor(Math.random() * colors.length)];
    m.style.background = m.style.color;
    host.appendChild(m);
  }
})();

// ---------- Boot ----------
updateJournalBtn();
