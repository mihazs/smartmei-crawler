import server from "./graphql";

server.listen(4000).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});