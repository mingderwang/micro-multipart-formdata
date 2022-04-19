const { send } = require("micro");
const { router, get } = require("microrouter");
const data = require("./data.json");

const hello = async (req, res) =>
  send(res, 200, await Promise.resolve(`Hello ${req.params.who}`));
const notfound = (req, res) => send(res, 404, "Not found route");
const test = (req, res) => {
  send(res, 200, data);
};
module.exports = router(
  get("/hello/:who", hello),
  get("/data", test),
  get("/*", notfound)
);
