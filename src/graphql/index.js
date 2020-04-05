import { ApolloServer } from "apollo-server";
import typeDefs from "./schema.graphql";
import resolvers from "./resolvers";

export default new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});
