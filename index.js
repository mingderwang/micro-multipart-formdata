const { request } = require("graphql-request");
const etherspot_endpoint = "https://etherspot.pillarproject.io/";

const query = `
 query {
    blockStats {
      currentBlockNumber
    }
  }
`;
module.exports = async () => {
  const data = await request(etherspot_endpoint, query);
  return data;
};

/*
{
    "blockStats": {
        "currentBlockNumber": 14609667
    }
}
*/
