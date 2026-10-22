const query = new URLSearchParams(window.location.search);
const previousChoices = document.getElementById("previousChoices");
const drinkOptions = document.getElementById("drinkOptions");
const drinkNextBtn = document.getElementById("drinkNextBtn");

const selectedDay = query.get("day");
const selectedFood = query.get("food");

const choices = [];
if (selectedDay) choices.push("Day: " + selectedDay);
if (selectedFood) choices.push("Food: " + selectedFood);
previousChoices.textContent = choices.join(" | ");

drinkOptions.addEventListener("change", () => {
  drinkNextBtn.disabled = !document.querySelector(
    'input[name="drinkChoice"]:checked'
  );
});

drinkNextBtn.addEventListener("click", () => {
  const selectedDrink = document.querySelector(
    'input[name="drinkChoice"]:checked'
  );
  if (!selectedDrink) return;

  const summaryPage = new URL("summary.html", window.location.href);
  if (selectedDay) summaryPage.searchParams.set("day", selectedDay);
  if (selectedFood) summaryPage.searchParams.set("food", selectedFood);
  summaryPage.searchParams.set("drink", selectedDrink.value);
  window.location.href = summaryPage.href;
});
