const { ApolloServer } = require('apollo-server')
const resolvers = require('./graphql/resolvers')
const typeDefs = require('./graphql/schema')
  
  const server = new ApolloServer({ typeDefs, resolvers })
  server.listen()

/**
 *estruturando a API com types e resolvers, 
  types são entidades da nossa consulta e resolvers espelham sua estrutura 
  em funcionamento
  items mockados para consulta
  type item é de consulta, inputItem é o tipo de input 
 */
  
  