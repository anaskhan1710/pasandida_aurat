const questions = [
  {
    text: "If I steal one bite from your food, will you still like me?",
    note: "Please answer honestly. This is important for our future.",
    options: [
      { label: "Yes, but only one bite", sub: "You need some discipline." },
      { label: "I will complain and still share", sub: "Very cute behavior." },
      { label: "I already saved some for you", sub: "This is dangerously sweet." }
    ]
  },
  {
    text: "Who looks more cute while pretending to be serious?",
    note: "This is a trap, but a loving one.",
    options: [
      { label: "You", sub: "Confident answer." },
      { label: "Me", sub: "Bold. I respect it." },
      { label: "Both of us", sub: "Peace has been chosen." }
    ]
  },
  {
    text: "What sounds like our kind of moment?",
    note: "Pick the one that feels like us.",
    options: [
      { label: "Long talk and soft smiles", sub: "Simple and perfect." },
      { label: "Random selfies and laughing", sub: "Very us, honestly." },
      { label: "Just sitting together", sub: "Because peace matters too." }
    ]
  },
  {
    text: "If I miss you too much, what should I do?",
    note: "There are only cute answers here.",
    options: [
      { label: "Text me immediately", sub: "Best answer." },
      { label: "Replay our memories", sub: "My heart already does this." },
      { label: "Plan the next meeting", sub: "Future happiness." }
    ]
  },
  {
    text: "What do these memories feel like to you?",
    note: "Now the heart is entering the conversation.",
    options: [
      { label: "Warm", sub: "Like home." },
      { label: "Beautiful", sub: "Like something precious." },
      { label: "Special", sub: "Like it means more." }
    ]
  },
  {
    text: "Ready for the one question I truly wanted to ask?",
    note: "This part comes from the deepest place in my heart.",
    options: [
      { label: "Yes, I am ready", sub: "Then come closer." },
      { label: "Okay... tell me", sub: "That little shy pause is adorable." },
      { label: "Only if it is real", sub: "It is more real than anything." }
    ]
  }
];

const memories = [
  {
    src: "IMG_2712.JPG",
    text: "The kind of smile that can make an ordinary day feel unforgettable."
  },
  {
    src: "IMG_2722.JPG",
    text: "One frame, two hearts, and a moment I know I will keep for a very long time."
  },
  {
    src: "IMG_2732.JPG",
    text: "Even the quiet little looks between us started meaning so much to me."
  },
  {
    src: "IMG_2743.JPG",
    text: "You and me in one picture, and somehow the whole world feels softer."
  },
  {
    src: "IMG_2745.JPG",
    text: "The way you looked at me made this memory feel gentle and real."
  },
  {
    src: "IMG_2748.JPG",
    text: "A happy little selfie, but to me it feels like proof that joy looks better with you."
  },
  {
    src: "IMG_2750.JPG",
    text: "Some moments are shy and simple, and somehow they still touch the heart the most."
  },
  {
    src: "IMG_2753.JPG",
    text: "I can still feel the nervous smile, the warmth, and the sweetness of that second."
  },
  {
    src: "IMG_2755.JPG",
    text: "A memory that feels unfinished in the best way, like there is still so much more for us to live."
  }
];

const softNotes = [
  "Every photo here reminds me that the best parts of my day started looking like you.",
  "I did not know simple moments could become this meaningful until they became ours.",
  "You turned smiles into memories and memories into feelings I can no longer hide.",
  "The more I look back at us, the more sure I become about what my heart wants."
];

const startBtn = document.getElementById("startBtn");
const questionCard = document.getElementById("questionCard");
const heroCard = document.getElementById("heroCard");
const revealCard = document.getElementById("revealCard");
const proposalCard = document.getElementById("proposalCard");
const questionText = document.getElementById("questionText");
const questionNote = document.getElementById("questionNote");
const optionsWrap = document.getElementById("optionsWrap");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const proposalBtn = document.getElementById("proposalBtn");
const yesBtn = document.getElementById("yesBtn");
const shyBtn = document.getElementById("shyBtn");
const responseText = document.getElementById("responseText");
const memoryGrid = document.getElementById("memoryGrid");
const softNoteText = document.getElementById("softNoteText");

let currentQuestion = 0;
let softNoteIndex = 0;

function showQuestion(index) {
  const question = questions[index];
  questionText.textContent = question.text;
  questionNote.textContent = question.note;
  progressText.textContent = `Question ${index + 1} of ${questions.length}`;
  progressFill.style.width = `${((index + 1) / questions.length) * 100}%`;
  optionsWrap.innerHTML = "";

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.innerHTML = `${option.label}<span>${option.sub}</span>`;
    button.addEventListener("click", () => {
      currentQuestion += 1;

      if (currentQuestion < questions.length) {
        showQuestion(currentQuestion);
        return;
      }

      questionCard.classList.add("hidden");
      revealCard.classList.remove("hidden");
      revealCard.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    optionsWrap.appendChild(button);
  });
}

function renderMemories() {
  memories.forEach((memory) => {
    const card = document.createElement("article");
    card.className = "memory-card";
    card.innerHTML = `
      <img src="${memory.src}" alt="A memory of us">
      <p>${memory.text}</p>
    `;
    memoryGrid.appendChild(card);
  });

  softNoteText.textContent = softNotes[softNoteIndex];
  window.setInterval(() => {
    softNoteIndex = (softNoteIndex + 1) % softNotes.length;
    softNoteText.textContent = softNotes[softNoteIndex];
  }, 3200);
}

startBtn.addEventListener("click", () => {
  heroCard.classList.add("hidden");
  questionCard.classList.remove("hidden");
  showQuestion(currentQuestion);
});

proposalBtn.addEventListener("click", () => {
  revealCard.classList.add("hidden");
  proposalCard.classList.remove("hidden");
  proposalCard.scrollIntoView({ behavior: "smooth", block: "start" });
});

yesBtn.addEventListener("click", () => {
  responseText.textContent = "This yes would become the most beautiful answer my heart has ever heard.";
  responseText.classList.remove("hidden");
});

shyBtn.addEventListener("click", () => {
  responseText.textContent = "Take your time, Ashra. My heart can wait for your smile.";
  responseText.classList.remove("hidden");
});

renderMemories();
