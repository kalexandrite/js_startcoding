function keyTyped() {
    // Map the key to a random emoji using the noise function
    let n = int(noise(emojis.length, millis() * 0.001) * 284);
    n < 574 ? (n = n + 127744) : (n = n + 127938);
    emojis.push({
        emoji: String.fromCodePoint(n),
        x: random(width),
        y: random(height),
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
