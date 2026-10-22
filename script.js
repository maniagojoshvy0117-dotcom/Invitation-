
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const buttonsContainer = document.querySelector(".buttons");

const noPanel = document.getElementById("noPanel");

// YES button.
yesBtn.addEventListener("click", () => {
  window.open("day.html", "_blank");
});

// Move the NO button whenever it is clicked.
noBtn.addEventListener("click", () => {
  buttonsContainer.classList.add("no-button-moved");

  const area = buttonsContainer.getBoundingClientRect();
  const button = noBtn.getBoundingClientRect();
  const yes = yesBtn.getBoundingClientRect();
  const baseLeft = noBtn.offsetLeft;
  const baseTop = noBtn.offsetTop;
  const maxLeft = area.width - button.width;
  const maxTop = area.height - button.height;
  const minLeft = area.width / 2;
  const positions = [];

  for (let row = 0; row <= 2; row++) {
    for (let column = 0; column <= 2; column++) {
      const left = minLeft + (maxLeft - minLeft) * column / 2;
      const top = maxTop * row / 2;
      const overlapsYes =
        left < yes.right - area.left &&
        left + button.width > yes.left - area.left &&
        top < yes.bottom - area.top &&
        top + button.height > yes.top - area.top;

      if (!overlapsYes) {
        positions.push({ left, top });
      }
    }
  }

  const currentLeft = parseFloat(noBtn.style.left);
  const currentTop = parseFloat(noBtn.style.top);
  const newPositions = positions.filter(position =>
    position.left - baseLeft !== currentLeft ||
    position.top - baseTop !== currentTop
  );
  const availablePositions = newPositions.length ? newPositions : positions;

  if (availablePositions.length) {
    const position =
      availablePositions[Math.floor(Math.random() * availablePositions.length)];
    noBtn.style.left = position.left - baseLeft + "px";
    noBtn.style.top = position.top - baseTop + "px";
  }
});

// Return to the invitation.
document.getElementById("backBtn").addEventListener("click", () => {
  noPanel.classList.add("hidden");
});
