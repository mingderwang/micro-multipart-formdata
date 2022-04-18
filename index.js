const parse = require("urlencoded-body-parser");

module.exports = async (req) => {
  const data = await parse(req, ({ limit = "1mb" } = {}));
  console.log(data);

  return "Data logged to your console";
};
