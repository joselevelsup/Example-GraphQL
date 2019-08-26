require("graphql-import-node");
const path = require("path");
const { makeExecutableSchema } = require("graphql-tools");
const { importSchema } = require("graphql-import");
const resolvers = require("./resolvers");

const schema = makeExecutableSchema({
	typeDefs: importSchema(path.join(__dirname, "./schema/schema.graphql")),
	resolvers
});

module.exports = schema;
