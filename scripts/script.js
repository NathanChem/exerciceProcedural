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
