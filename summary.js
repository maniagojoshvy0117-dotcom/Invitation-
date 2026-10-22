const query = new URLSearchParams(window.location.search);

const summaryItems = [
  ["summaryDay", "Day", query.get("day")],
  ["summaryFood", "Food", query.get("food")],
  ["summaryDrink", "Drink", query.get("drink")]
];

summaryItems.forEach(([elementId, label, choice]) => {
  document.getElementById(elementId).textContent =
    choice ? label + ": " + choice : label + ": Not selected";
});
