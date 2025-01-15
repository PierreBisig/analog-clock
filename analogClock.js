function setClock() {
  const now = new Date();

  // Current time
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Calculate the angle for the pointers
  const secondDegree = ((seconds / 60) * 360) + 270;
  const minuteDegree = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 270;
  const hourDegree = ((hours % 12) / 12 * 360) + ((minutes / 60) * 30) + 270;
  

  // Select pointer
  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  // Rotate pointer
  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

// Update clock every second
setInterval(setClock, 1000);

// Set the current time when loading the page
setClock();
