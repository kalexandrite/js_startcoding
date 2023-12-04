function replaceWithEmoji(element) {
  const originalText = element.innerText;
  const emojiText = originalText
    .split("")
    .map((char) => getEmoji(char))
    .join("");
  element.innerText = emojiText;
}

function restoreText(element) {
  element.innerText = element.innerText.replace(/[\p{Emoji}]/gu, ""); 
}

function getEmoji(char) {
  const emojiMap = {
    a: "✌️",
    b: "🌴",
    c: "🐢",
    d: "🐐",
    e: '🐢',
    f: "⚽",
    g: "🍻",
    h: "👑",
    i: "📸",
    j: "😬",
    k: "👀",
    l: "🚨",
    m: "🏡",
    n: "🐦",
    o: "👑",
    p: "👑",
    q: "🙂‍↕️",
    r: "🕊️",
    s: "🏆",
    t: "😻",
    u: "🌟",
    v: "🌟",
    w: "🍀",
    x: "🎨",
    y: "🍜",
    A: "✌️",
    B: "🌴",
    C: "🐢",
    D: "🐐",
    E: "🍄",
    F: "⚽",
    G: "🍻",
    H: "👑",
    I: "📸",
    J: "😬",
    K: "👀",
    L: "🚨",
    M: "🏡",
    N: "🐦",
    O: "🍋",
    P: "🍄",
    Q: "🙂‍↕",
    R: "🕊️",
    S: "🏆",
    T: "😻",
    U: "🌟",
    V: "👑",
    W: "🍀",
    X: "🎨",
    Y: "🍜",
    Z: "🍜",
  };

  return emojiMap[char] || char;
}
