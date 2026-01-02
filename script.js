const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 300;

const data = [9.45, 9.68, 8.91, 9.45];
const colors = ["#00f7ff", "#ff00ea", "#f5f500", "#ff4b00"];
let x = 60;

// Animation
let progress = 0;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  x = 60;
  progress += 0.02;
  if (progress > 1) progress = 1;

  data.forEach((v, i) => {
    let h = v * 25 * progress; // animate height
    // Gradient color for each bar
    let gradient = ctx.createLinearGradient(x, 300 - h, x + 60, 300);
    gradient.addColorStop(0, colors[i]);
    gradient.addColorStop(1, "#000");
    ctx.fillStyle = gradient;

    ctx.fillRect(x, 300 - h, 60, h);
    ctx.fillStyle = "#00f7ff";
    ctx.fillText("SEM " + (i + 1), x, 295);
    ctx.fillText(v, x + 10, 300 - h - 10);
    x += 120;
  });

  if (progress < 1) requestAnimationFrame(animate);
}

ctx.font = "16px Orbitron";
animate();
