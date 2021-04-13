# Things to understand

## Timeline

### April 11, 2021

- created the project folder and setup the graphql

### April, 12, 2021

- setup the graphql server with express
- test some queries in graphql endpoint playground `localhost{portnumber}/graphql`

### April 12, 2021

- setup Post resolver and write post queries in the post resolver
- setup context in apolloserver to export em that will be accesible to all resolvers to interact with the database.
- created a type.ts file to sepcify all the context types that will be used in queries that needs them.
- use query to fetch all data
- use query to fetch data by parameter(id)

## Essential Learnings

- Stacked decorators and Decorators
- typescirpt types and their importances
- Grahpql-with-typescript
  - Schema
  - Resolvers-- which is needed for each tables and where we perform CRUD for each table.
  - Queries -- Each CRUD operations are inform of query, creating one endpindt means creating one query.
  - Context-- to be used for all resolvers e.g to interact with the datbaase etc
- Mikro-orm
  - Entities analogy to table-- each entity means a table and inside each enttiy defined all the columns of the table also referred to as Fields

## Essential Notes

- Both Typescript and Graphql requires type and everywhere we need to specify both of thier types when using them together.
- Resolvers folder in GraphQl is analogy to route folder in REST. As we create many route files for each model/table object in REST, we create resolver file for each model/table object in Graphql as well. where each endpoint in rest correspond to query in graphql
- Each Query in GraphQl must be specified the type for the object they return: To know the type, hover over the return methods and check.
