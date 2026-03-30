// ===================================
//  AUDIO SETUP (NEW)
// ===================================

// This is a new, softer "click" sound.
const tickSound = new Audio(
  "data:audio/wav;base64,UklGRjIAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABgAZGF0YSUAAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIA/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pw=="
); // <-- NEW SOFTER SOUND

// Set the volume. 1.0 is full, 0.0 is silent.
tickSound.volume = 0.3; // <-- NEW: Set volume to 30%

// ===================================
//  RUN THE CLOCK
// ===================================
const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  // --- Play the tick sound ---
  //   tickSound.currentTime = 0; // Rewind to the start
  //   tickSound.play(); // Play the sound

  // --- Original clock logic ---
  const currentDate = new Date();
  const seconds = currentDate.getSeconds();
  const minutes = currentDate.getMinutes();
  const hours = currentDate.getHours();

  const secondsRatio = seconds / 60;
  const minutesRatio = (secondsRatio + minutes) / 60;
  const hoursRatio = (minutesRatio + (hours % 12)) / 12;

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

// Start the clock
setInterval(setClock, 1000);
// setClock(); // Keep this commented out to avoid a double-tick on load

// ===================================
//  SET UP THE CLOCK FACE
// ===================================
function setupClockFace() {
  const clock = document.querySelector(".clock");

  // --- Create 60 Ticks ---
  for (let i = 1; i <= 60; i++) {
    const tick = document.createElement("div");
    tick.classList.add("tick");

    if (i % 5 === 0) {
      tick.classList.add("thick");
    }

    tick.style.setProperty("--rotation", `${i * 6}deg`);
    clock.appendChild(tick);
  }

  // --- Create 12 Numbers ---
  for (let i = 1; i <= 12; i++) {
    const number = document.createElement("div");
    number.classList.add("number");
    number.innerText = i;

    number.style.setProperty("--rotation", `${i * 30}deg`);
    clock.appendChild(number);
  }
}

// Run the setup function once on load
setupClockFace();
