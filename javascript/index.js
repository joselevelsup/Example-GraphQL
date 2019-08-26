const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const schema = require("./schema");
const app = express();

app.use(cors());
app.use(morgan("dev"));
const server = new ApolloServer({
	schema
});
server.applyMiddleware({ app });

mongoose.connect("mongodb://localhost/example", {
	useNewUrlParser: true
});

app.listen(8080, () => {
	console.log("GraphQL Editor listening on http://localhost:8080/graphql");
})

