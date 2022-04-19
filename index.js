const { send } = require("micro");
const { router, get } = require("microrouter");

const hello = async (req, res) =>
  send(res, 200, await Promise.resolve(`Hello ${req.params.who}`));
const notfound = (req, res) => send(res, 404, "Not found route");

module.exports = router(get("/hello/:who", hello), get("/*", notfound));
