const roomPanel = document.getElementById("roomPanel");
const allOnBtn = document.getElementById("allOn");
const allOffBtn = document.getElementById("allOff");
const totalBulbs = 6;
const bulbs = [];

for (let i = 0; i < totalBulbs; i++) {
  const bulbContainer = document.createElement("div");
  bulbContainer.classList.add("bulb");

  const slider = document.createElement("input");
  slider.type = "range";
  slider.min = 0;
  slider.max = 100;
  slider.value = 100;

  const sliderContainer = document.createElement("div");
  sliderContainer.classList.add("controls");
  sliderContainer.appendChild(slider);

  roomPanel.appendChild(bulbContainer);
  roomPanel.appendChild(sliderContainer);

  bulbs.push({ bulb: bulbContainer, slider: slider });

  bulbContainer.addEventListener("click", () => toggleBulb(bulbContainer));
  slider.addEventListener("input", () => {
    if (bulbContainer.classList.contains("glow")) {
      bulbContainer.style.filter = `brightness(${slider.value}%)`;
    }
  });
}

function toggleBulb(bulb) {
  bulb.classList.toggle("glow");
  const bulbObj = bulbs.find(b => b.bulb === bulb);
  if (bulb.classList.contains("glow")) {
    bulb.style.filter = `brightness(${bulbObj.slider.value}%)`;
  } else {
    bulb.style.filter = "brightness(100%)";
  }
}

allOnBtn.addEventListener("click", () => {
  bulbs.forEach(({ bulb }) => {
    if (!bulb.classList.contains("glow")) toggleBulb(bulb);
  });
});

allOffBtn.addEventListener("click", () => {
  bulbs.forEach(({ bulb }) => {
    if (bulb.classList.contains("glow")) toggleBulb(bulb);
  });
});

setTimeout(() => {
  bulbs.forEach(({ bulb }) => bulb.classList.remove("glow"));
  bulbs.forEach(({ bulb }) => bulb.style.filter = "brightness(100%)");
}, 10000);