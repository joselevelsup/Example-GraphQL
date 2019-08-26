# GraphQL Example Server

*Note there is a Javascript and Typescript version*



This is also incorporated with MongoDB. So if you think you can incorporate SQL with this, by all means, clone and edit how ever you like. 

There are a couple of Directories and files that look familiar but let me explain. 

`schema.js/ts` - This is where the setup usually happens with Type Definitions and Resolvers. Not Type Definitions as in Typescript but more like how the schema for Querying and/or mutations as well as models will look like. The Schemas from `schema/` lives. I'll explain in a little.

`schema/` - This is where all the GraphQL files live. Queries, Mutations, Models, etc. These can be broken up into different files thanks to the `graphql-import-node` module. 

`resolvers/` - This is where our "controllers" exist. They are where we write the functions for our Queries and/or Mutations. For those used to REST, Queries are our GET endpoints and Mutations are our POST, PUT, and DELETE endpoints. These can be split into different files and then merge the resolvers using a merge function (e.g. lodash merge).

`models/` - Where our basic Mongoose Models exist. You still need them in order to perform queries to MongoDB. 

To access GraphQL Editor, run `npm run js-server` (for the javascript server) or run `npm run ts-server` (for the typescript server). Then go to your browser and enter the url: http://localhost:8080/graphql

If any more info is needed, just open an issue and I'll get to it when I can. 

Joselevelsup
