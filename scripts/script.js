const form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const result = document.getElementById("result");
  if (
    (gender == "homme" && age >= 20) ||
    (gender == "femme" && age >= 18 && age <= 35)
  ) {
    result.innerHTML = "Imposable";
  } else {
    result.innerHTML = "Non imposable";
  }
});
