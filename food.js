const foodOptions = document.querySelectorAll('input[name="foodChoice"]');
const otherFood = document.getElementById("otherFood");
const foodNextBtn = document.getElementById("foodNextBtn");
const dateChoice = document.getElementById("dateChoice");
const selectedDay = new URLSearchParams(window.location.search).get("day");

if (selectedDay) {
  dateChoice.textContent = "Your selected day: " + selectedDay;
}

function updateNextButton() {
  const selectedFood = document.querySelector('input[name="foodChoice"]:checked');
  foodNextBtn.disabled = !selectedFood ||
    (selectedFood.value === "Others" && !otherFood.value.trim());
}

function showFoodChoice() {
  const selectedFood = document.querySelector('input[name="foodChoice"]:checked');
  if (!selectedFood) return;

  const choice = selectedFood.value === "Others"
    ? otherFood.value.trim()
    : selectedFood.value;
  const drinkPage = new URL("drink.html", window.location.href);
  drinkPage.searchParams.set("food", choice);
  if (selectedDay) {
    drinkPage.searchParams.set("day", selectedDay);
  }
  window.location.href = drinkPage.href;
}

foodOptions.forEach(option => {
  option.addEventListener("change", updateNextButton);
});

otherFood.addEventListener("input", () => {
  document.querySelector('input[name="foodChoice"][value="Others"]').checked = true;
  updateNextButton();
});

foodNextBtn.addEventListener("click", showFoodChoice);
