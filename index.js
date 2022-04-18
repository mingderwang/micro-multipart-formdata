const { send } = require("micro");

module.exports = async (req, res) => {
  const statusCode = 403;
  const data = { error: "Custom error message" };

  send(res, statusCode, data);
};

/*
Use require('micro').send.
statusCode is a Number with the HTTP status code, and must always be supplied.
If data is supplied it is sent in the response. Different input types are processed appropriately, and Content-Type and Content-Length are automatically set.
Stream: data is piped as an octet-stream. Note: it is your responsibility to handle the error event in this case (usually, simply logging the error and aborting the response is enough).
Buffer: data is written as an octet-stream.
object: data is serialized as JSON.
string: data is written as-is.
If JSON serialization fails (for example, if a cyclical reference is found), a 400 error is thrown. See Error Handling.
*/
