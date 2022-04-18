const rateLimit = require("micro-ratelimit");

// Limit example: 2 requests per 10 sec
module.exports = rateLimit(
  { window: 10000, limit: 2, headers: true },
  (req, res) => {
    return "Hello world";
  }
);
