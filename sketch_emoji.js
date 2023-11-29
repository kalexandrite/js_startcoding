let backgroundColor;
let emojiSize = 50;

function setup() {
  createCanvas(800, 800);
  backgroundColor = color(220);
  textSize(emojiSize);
  textAlign((CENTER + x), (CENTER + y));
  noStroke();
}

function draw() {
  background(backgroundColor);

  // Iterate through the array of emojis and display them
  for (let i = 0; i < emojis.length; i++) {
    let x = random(width);
    let y = random(height);
    text(emojis[i], x, y);
  }
}

function keyTyped() {
    // Map the key to a random emoji using the noise function
    let n = int(noise(emojis.length, millis() * 0.001) * 284);
    n < 574 ? n = n + 127744 : n = n + 127938;
    emojis.push(String.fromCodePoint(n));
  
    // Limit the number of emojis displayed to avoid clutter
    if (emojis.length > width / emojiSize) {
      emojis.shift();
    }
  }
  
