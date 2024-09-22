const canvas = document.getElementById("dotCanvas");
const ctx = canvas.getContext("2d");

dotCanvas.setAttribute(
  "width",
  window.innerWidth >= 1600 ? window.innerWidth / 1.85 : window.innerWidth / 2
);

// Canvas width and height
const width = canvas.width;
const height = canvas.height;

const barWidth = 8; // Width of each bar
const maxBarHeight = height / 2.3; // Maximum height of the visualizer bars
const dotSpacing = 8; // Space between dots within a bar
const waveFrequency = 4; // Frequency of the waveform
const waveAmplitude = 180; // Amplitude of the waveform

// Create the dot visualizer effect
const createVisualizerDots = () => {
  ctx.clearRect(0, 0, width, height);

  for (let x = 0; x < width; x += barWidth + 2) {
    // Create a wave-like effect using a sine function
    const waveHeight =
      Math.sin(x * waveFrequency) * waveAmplitude + maxBarHeight;
    const numDots = Math.floor(waveHeight / dotSpacing);

    for (let i = 0; i < numDots; i++) {
      const yOffset = height / 2 - waveHeight / 2;
      const y = yOffset + i * dotSpacing;

      // Dynamic dot size based on y position (closer to center, larger dot)
      const dotRadius = Math.max(
        0.5,
        ((maxBarHeight - Math.abs(y - height / 2)) / maxBarHeight) * 3 - 0.5
      );

      // Gradient color for the dots (left to right color)
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, "#a529a4");
      gradient.addColorStop(0.25, "#7d4bb4");
      gradient.addColorStop(0.5, "#3597c1");
      gradient.addColorStop(0.75, "#11c3c0");
      gradient.addColorStop(1, "#09779a");
      ctx.fillStyle = gradient;

      // Draw the dot
      ctx.beginPath();
      ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
      ctx.fill();
    }
  }
};

export default createVisualizerDots;
