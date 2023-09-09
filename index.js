const quotes = [
  "this is a random test quote for the random-quote-123 and also working fine"
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

module.exports = {
  getRandomQuote,
};
