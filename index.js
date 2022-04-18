const { send } = require("micro");
const axios = require("axios");

module.exports = async (req, res) => {
  const response = await axios.get("https://ghibliapi.herokuapp.com/films");
  response.data.forEach((movie) => {
    console.log(`${movie["title"]}, ${movie["release_date"]}`);
  });
  send(res, 200, response.data);
};
