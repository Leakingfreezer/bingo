//List of terms
/*
const terms = ["Policy", "Safeguarding", "National Strategy", "Government", "Program", "Rights-Based", "NGO", "Academia", "Private Sector", "Self-Care", "Safety", "Ethical", "Meaningful Child Participation", "Sustainability", "Intergenerational Parternship/Collaboration", "Recommendations" ];

const termBox = document.querySelector(".term-box");

function generateTerm() {
    const randomIndex = Math.floor(Math.random() * terms.length);

    const randomTerm = terms[randomIndex];

    termBox.innerText = randomTerm;
}

termBox.addEventListener("click", generateTerm);
*/ 

// List of terms + definitions
const terms = [
  { term: "Policy", definition: "A set of rules or actions that guide decisions." },
  { term: "Safeguarding", definition: "Actions taken to protect people from harm." },
  { term: "National Strategy", definition: "A country-wide plan to address an issue." },
  { term: "Government", definition: "The system responsible for public decisions." },
  { term: "Program", definition: "A planned set of activities or services." },
  { term: "Rights-Based", definition: "An approach centered on rights, dignity, and fairness." },
  { term: "NGO", definition: "A non-governmental organization working on social or community issues." },
  { term: "Academia", definition: "Schools, universities, researchers, and educational institutions." },
  { term: "Private Sector", definition: "Businesses and companies outside of government." },
  { term: "Self-Care", definition: "Practices that support personal wellbeing and safety." },
  { term: "Safety", definition: "Being protected from harm, risk, or unsafe conditions." },
  { term: "Ethical", definition: "Acting fairly, responsibly, respectfully, and safely." },
  { term: "Meaningful Child Participation", definition: "Youth being heard, supported, and taken seriously." },
  { term: "Sustainability", definition: "Creating change that can continue over time." },
  { term: "Intergenerational Partnership/Collaboration", definition: "Youth and adults working together respectfully." },
  { term: "Recommendations", definition: "Suggested actions based on findings, experiences, or research." }
];

const termBox = document.querySelector(".term-box");
const revealBtn = document.querySelector(".reveal-all");
const cards = document.querySelectorAll(".card");

let showingDefinitions = false;

// Click term box to generate a random term
function generateTerm() {
  const randomIndex = Math.floor(Math.random() * terms.length);
  const randomTerm = terms[randomIndex].term;

  termBox.innerText = randomTerm;
}

// Click reveal button to switch cards between terms and definitions
function toggleRevealAll() {
  cards.forEach((card, index) => {
    card.classList.add("flip");

    setTimeout(() => {
      card.innerText = showingDefinitions
        ? terms[index].term
        : terms[index].definition;

      card.classList.remove("flip");
      card.classList.toggle("definition-card", !showingDefinitions);
    }, 200);
  });

  showingDefinitions = !showingDefinitions;
  revealBtn.innerText = showingDefinitions ? "Show Terms" : "Reveal All";
}

termBox.addEventListener("click", generateTerm);
revealBtn.addEventListener("click", toggleRevealAll);
