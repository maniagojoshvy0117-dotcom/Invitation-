const daysContainer = document.getElementById("days");
const confirmBtn = document.getElementById("confirmBtn");
let selectedDay = "";

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

weekdays.forEach(day => {
  const button = document.createElement("button");

  button.className = "day";
  button.type = "button";
  button.textContent = day;

  button.addEventListener("click", () => {
    selectedDay = day;

    document.querySelectorAll(".day").forEach(dayButton => {
      dayButton.classList.remove("selected");
    });

    button.classList.add("selected");
    confirmBtn.disabled = false;
    confirmBtn.textContent = "Confirm this day 💗";
  });

  daysContainer.appendChild(button);
});

confirmBtn.addEventListener("click", () => {
  if (!selectedDay) return;

  const foodPage = new URL("food.html", window.location.href);
  foodPage.searchParams.set("day", selectedDay);
  window.location.href = foodPage.href;
});
