const taxesForm = document.getElementById("taxesForm");

taxesForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const taxesResult = document.getElementById("taxesResult");
  if (
    (gender == "homme" && age >= 20) ||
    (gender == "femme" && age >= 18 && age <= 35)
  ) {
    taxesResult.innerHTML = "Imposable";
  } else {
    taxesResult.innerHTML = "Non imposable";
  }
});

const photocopiesForm = document.getElementById("photocopiesForm");

photocopiesForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const photocopies = document.getElementById("photocopies").value;
  const photocopiesResult = document.getElementById("photocopiesResult");
  let photocopiesPrix = 0;
  for (let i = 1; i <= photocopies; i++) {
    if (i < 11) {
      photocopiesPrix = photocopiesPrix + 0.1;
    } else if (i < 31) {
      photocopiesPrix = photocopiesPrix + 0.09;
    } else if (i > 31) {
      photocopiesPrix = photocopiesPrix + 0.08;
    }
  }
  photocopiesResult.innerHTML = photocopiesPrix.toFixed(2) + " €";
});

const timeForm = document.getElementById("timeForm");

timeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const time = document.getElementById("time").value;
  const timeResult = document.getElementById("timeResult");

  let [_, h, m, s] = time.match(/(\d+)H(\d+)M(\d+)S/).map(Number);

  s += 1;

  if (s === 60) {
    s = 0;
    m += 1;
  }
  if (m === 60) {
    m = 0;
    h += 1;
  }

  timeResult.textContent = `${h}H${m}M${s}S`;
});

const emailForm = document.getElementById("email-form");

emailForm.addEventListener("input", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const emailResult = document.getElementById("email-result");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(email)) {
    emailResult.textContent = "Adresse email valide.";
    emailResult.style.color = "green";
  } else {
    emailResult.textContent = "Adresse email invalide.";
    emailResult.style.color = "red";
  }
});

const assuranceForm = document.getElementById("assurance-form");

assuranceForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let score = 0;

  const age = parseInt(document.getElementById("assurance-age").value, 10);
  const permis = parseInt(
    document.getElementById("assurance-permis").value,
    10
  );
  const accident = document.getElementById("assurance-accident").value;
  const fidelite = document.getElementById("assurance-fidelite").value;
  const assuranceResult = document.getElementById("assurance-result");

  if (accident > 3) {
    assuranceResult.textContent = "Refusé";
    return;
  }

  if (age >= 25 && permis >= 2) {
    score += 2;
  } else if ((age < 25 && permis >= 2) || (age > 25 && permis <= 2)) {
    score += 4;
  } else {
    if (accident == 0) {
      score += 6;
    } else {
      assuranceResult.textContent = "Refusé";
      return;
    }
  }
  score += accident * 2;

  if (fidelite >= 1) {
    score -= 2;
  }

  if (score <= 1) {
    assuranceResult.textContent = "Bleu";
  } else if (score <= 3) {
    assuranceResult.textContent = "Vert";
  } else if (score <= 5) {
    assuranceResult.textContent = "Orange";
  } else if (score <= 7) {
    assuranceResult.textContent = "Rouge";
  } else {
    assuranceResult.textContent = "Refusé";
  }

  console.log(score);
});

const passwordForm = document.getElementById("password-form");

const passwordResult = document.getElementById("password-result");
const passwordProgress = document.getElementById("password-progress");

passwordForm.addEventListener("input", function (event) {
  event.preventDefault();
  const password = document.getElementById("password").value;
  const passwordDangerous = /^.{0,7}$/;
  const passwordLow = /^[a-zA-Z]+$|^\d+$/;
  const passwordMedium = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  const passwordStrong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;
  const passwordVeryStrong =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{12,}$/;

  const passwordProgressBar = document.getElementById("password-progress-bar");

  if (password.length === 0) {
    passwordResult.textContent = "";
    passwordProgressBar.style.width = "0%";
    passwordProgressBar.style.backgroundColor = "transparent";
  } else if (passwordVeryStrong.test(password)) {
    passwordResult.textContent = "Très fort";
    passwordResult.style.color = "darkgreen";
    passwordProgressBar.style.width = "100%";
    passwordProgressBar.style.backgroundColor = "darkgreen";
  } else if (passwordStrong.test(password)) {
    passwordResult.textContent = "Fort";
    passwordResult.style.color = "green";
    passwordProgressBar.style.width = "75%";
    passwordProgressBar.style.backgroundColor = "green";
  } else if (passwordMedium.test(password)) {
    passwordResult.textContent = "Moyen";
    passwordResult.style.color = "orange";
    passwordProgressBar.style.width = "50%";
    passwordProgressBar.style.backgroundColor = "orange";
  } else if (passwordLow.test(password) || passwordDangerous.test(password)) {
    passwordResult.textContent = "Faible";
    passwordResult.style.color = "red";
    passwordProgressBar.style.width = "25%";
    passwordProgressBar.style.backgroundColor = "red";
  }
});

const justePrixForm = document.getElementById("juste-prix-form");
const justePrixImage = document.getElementById("juste-prix-image");
const justePrixHint = document.getElementById("juste-prix-hint");
const justePrixAttempts = document.getElementById("juste-prix-attempts");
const justePrixResult = document.getElementById("juste-prix-result");

const objects = [
  { name: "Montre", price: 45, image: "assets/juste-prix/casio.png" },
  { name: "Casque Audio", price: 80, image: "assets/juste-prix/casque.png" },
  { name: "Lampe", price: 30, image: "assets/juste-prix/lampe.png" },
  { name: "Sac à dos", price: 60, image: "assets/juste-prix/sacados.png" },
  { name: "Tasse", price: 20, image: "assets/juste-prix/tasse.png" },
];

function getRandomObject() {
  const randomIndex = Math.floor(Math.random() * objects.length);
  return objects[randomIndex];
}

const selectedObject = getRandomObject();
let attempts = 0;
const maxAttempts = 10;

justePrixImage.src = selectedObject.image;

justePrixForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const justePrixGuess = parseInt(
    document.getElementById("juste-prix-guess").value
  );
  attempts += 1;
  if (justePrixGuess < selectedObject.price) {
    justePrixHint.textContent = "C'est plus !";
  } else if (justePrixGuess > selectedObject.price) {
    justePrixHint.textContent = "C'est moins !";
  } else if (justePrixGuess === selectedObject.price) {
    justePrixResult.textContent = "Bravo, tu as gagné !";
  }
  justePrixAttempts.textContent = `Tentatives restantes : ${
    maxAttempts - attempts
  }`;
  if (attempts === maxAttempts) {
    justePrixResult.textContent = "Perdu !";
  }
  if (maxAttempts - attempts <= 0) {
    justePrixHint.textContent = "";
    justePrixAttempts.textContent = "";
  }
  document.getElementById("juste-prix-guess").value = "";
});
