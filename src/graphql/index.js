import { ApolloServer } from "apollo-server";
import typeDefs from "./schema.graphql";
import resolvers from "./resolvers";
//Creates a new instance of apollo server
export default new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});
