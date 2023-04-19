import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://saelor-dev.startappz.com:8000/graphql/",
  cache: new InMemoryCache(),
});

export default client;
