const { buffer, text, json } = require("micro");

module.exports = async (req, res) => {
  //const buf = await buffer(req, { limit: "1mb", encoding: "utf8" });
  const buf = await buffer(req);
  console.log(buf);
  // <Buffer 7b 22 70 72 69 63 65 22 3a 20 39 2e 39 39 7d>
  const txt = await text(req);
  console.log(txt);
  // '{"price": 9.99}'
  const js = await json(req);
  console.log(js.price);
  // 9.99
  return "";
};

/* 
curl --location --request POST 'localhost:3000' \
--header 'Content-Type: text/plain' \
--data-raw '{"price": 9.99}'
*/

// output

/*
<Buffer 7b 22 70 72 69 63 65 22 3a 20 39 2e 39 39 7d>
{"price": 9.99}
9.99
< #3 200 [+4ms]
*/
