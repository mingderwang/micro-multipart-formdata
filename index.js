const { router, get, post, options } = require("microrouter");
const { ApolloServer, gql } = require("apollo-server-micro");

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
  Query: {
    sayHello(parent, args, context) {
      return "Hello World!";
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
module.exports = apolloServer.start().then(() => {
  const graphqlPath = "/data";
  const graphqlHandler = apolloServer.createHandler({ path: graphqlPath });
  return router(
    get("/", (req, res) => "Welcome!"),
    post(graphqlPath, graphqlHandler),
    get(graphqlPath, graphqlHandler)
  );
});

/*
query {
    sayHello 
}
*/
//output

/*
{
    "data": {
        "sayHello": "Hello World!"
    }
}
*/
