// Bouton light/dark
const btn = document.getElementById("themeToggle");
const html = document.documentElement;

btn.addEventListener("click", () => {
  // Vérifie si la page est déjà en dark soit par classe, soit par système (merci l'IA pour celle-là)
  const isSystemDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const hasDarkClass = html.classList.contains("force-dark");
  const hasLightClass = html.classList.contains("force-light");

  // État actuel effectif
  const isCurrentlyDark = hasDarkClass || (!hasLightClass && isSystemDark);

  if (isCurrentlyDark) {
    // Si la page est en dark, ça force le light
    html.classList.remove("force-dark");
    html.classList.add("force-light");
  } else {
    // Sinon ça force le dark
    html.classList.remove("force-light");
    html.classList.add("force-dark");
  }
});

// Logique du jeu

const userNumber = document.getElementById("userNumber");
let secretNumber;
const verifyBtn = document.getElementById("verifyBtn");
const replayBtn = document.getElementById("replayBtn");
const gameButtons = document.getElementById("buttons");

function initGame() {
  secretNumber = Math.floor(Math.random() * 10) + 1;
  userNumber.value = "";
  replayBtn.style.visibility = "hidden";
  gameButtons.style.display = "";
  gameButtons.style.gap = "";
  verifyBtn.disabled = "";
  console.log("Le chiffre secret est", secretNumber);
  userNumber.type = "";
  userNumber.disabled = "";
}

function start() {
  verifyBtn.addEventListener("click", () => {
    const guess = Number(userNumber.value);

    if (Number.isNaN(guess)) {
      alert(
        "Pas de lettres ou de caractères spéciaux ! (Au passage il est bien casse-tête cet exercice !)"
      );
      return;
    }

    if (guess < secretNumber) {
      alert("C'est plus !");
    } else if (guess > secretNumber) {
      alert("C'est moins !");
    } else if (guess == secretNumber) {
      alert("Tu as trouvé le chiffre secret ! BRAVO 🎉");
      replayBtn.style.visibility = "visible";
      gameButtons.style.display = "flex";
      gameButtons.style.gap = "10px";
      verifyBtn.disabled = "true";
      userNumber.type = "text";
      userNumber.value = "C'est gagné !";
      userNumber.disabled = "true";
    }
  });

  replayBtn.addEventListener("click", () => {
    initGame();
  });
}

initGame();
start();
