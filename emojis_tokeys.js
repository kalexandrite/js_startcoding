let emojis = [];
let emojiScale;
let p, q; // Declare p and q as global variables
let bgColor1, bgColor2; // Declare variables for background colors
let iterationCount = 0;
let cutePhrases = [
  "You're as sweet as candy!",
  "Your smile brightens my day!",
  "Sending you a virtual hug!",
  "You're one in a million!",
  "You make the world a better place!",
  "You're a ray of sunshine!",
  "You're the cherry on top!",
  "You're magical and unique!",
  "You light up the room with your presence!",
  "You're a true work of art!",
];


function setup() {
  createCanvas((windowWidth),(windowHeight));
  textAlign(CENTER, CENTER);
  noStroke();
  frameRate(20);

  // Set initial background colors
  bgColor1 = color(255, random(255), random(255));
  bgColor2 = color(random(255), random(255), 255);
}

function keyTyped() {
  // Map the key to a random emoji using the noise function
  let n = int(noise(emojis.length, millis() * 0.001) * 284);
  n < 574 ? (n = n + 127744) : (n = n + 127938);
  emojis.push({
    emoji: String.fromCodePoint(n),
    x: random(width), // Initial x position
    y: random(height), // Initial y position
    emojiScale: random(20, 100), // Random size between 20 and 100
  });

  // Update p and q based on mouse movement
  p = mouseX - pmouseX;
  q = mouseY - pmouseY;

  iterationCount++;

  // Display information window every 10 iterations
  if (iterationCount % 10 === 0) {
    displayInfoWindow();
  }
}

function displayInfoWindow() {
  // Get a random cute phrase from the array
  let randomPhrase = random(cutePhrases);
    // Display information window with the cute phrase about the emoji
  alert("Hi, Did you know?" + emojis[emojis.length - 1].emoji + "\n" + randomPhrase);
}

function draw() {
  // Slowly cycle through background colors
  let lerpedColor = lerpColor(bgColor1, bgColor2, 0.9);
  background(lerpedColor);

  for (let i = 0; i < emojis.length; i++) {
    let x = emojis[i].x;
    let y = emojis[i].y;
    let emojiScale = emojis[i].emojiScale;
    textSize(emojiScale);
    text(emojis[i].emoji, x, y);
  }
}
