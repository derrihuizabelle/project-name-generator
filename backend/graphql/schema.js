const typeDefs = `
  type Item {
    id: Int, 
    type: String,
    description: String
  }

  type Domain {
    name: String,
    checkout: String, 
    available: Boolean,
    extension: String
  }

  type Query {
    items (type: String): [Item]
  }

  input ItemInput {
    type: String
    description: String
  }
  
  type Mutation {
    saveItem (item: ItemInput ): Item
    deleteItem (id: Int): Boolean
    generateDomains: [Domain]
    generateDomain(name: String): [Domain]
  }
  
  `
module.exports = typeDefs