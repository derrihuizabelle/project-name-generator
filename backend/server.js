const { ApolloServer } = require('apollo-server') 
const dns = require('dns')

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



  const items = [
    {id: 1, type: 'prefixes', description: 'Air' },
    {id: 2, type: 'prefixes', description: 'Jet' },
    {id: 3, type: 'prefixes', description: 'Flight'},
    {id: 4, type: 'sufixes', description: 'Hub' },
    {id: 5, type: 'sufixes', description: 'Station'},
    {id: 6, type: 'sufixes', description: 'Mart'}
  ]

  const isDomainAvailable = (url) => {
    return new Promise ( (resolve, reject) => {
      dns.resolve(url, (error) => {
        return resolve(!!error)
      })
    })
  }

  const resolvers = {
    Query: {
      items(_, args) {
        return items.filter(item => item.type === args.type)
      }
    },

    Mutation: {
      saveItem (_, args) {
        const item = args.item
        item.id = Math.floor(Math.random() * 1000)
        items.push(item)
        return item
      },
      deleteItem (_, args) {
        const id = args.id
        const item = items.find(item => item.id === id)
        if (item) {
          items.splice(items.indexOf(item), 1)
          return true
        }
        return false
        
      },
      async generateDomains () {
        const domains = []
        for (const prefix of items.filter(item => item.type === 'prefixes')) {
          for (const sufix of items.filter(item => item.type === 'sufixes')) {
            const name = prefix.description + sufix.description
            const url = name.toLocaleLowerCase()
            const checkout = `https://checkout.hostgator.com.br/?a=add&sld=${url}&tld=.com.br`
            const available = await isDomainAvailable(`${url}.com.br`)
            domains.push({name, checkout, available})
          }
        }
        return domains
      },
      async generateDomain (_, args) {
        const name = args.name
        let domains = []

        const extensions = ['.com.br', '.com', '.net', '.org']

        for (const extension of extensions) {
          const url = name.toLocaleLowerCase()
          const checkout = `https://checkout.hostgator.com.br/?a=add&sld=${url}&tld=${extension}`
          const available = await isDomainAvailable(`${url}${extension}`)
          domains.push({name, checkout, available, extension})
        }
        return domains
      }
    }
  }

  const server = new ApolloServer({ typeDefs, resolvers })
  server.listen()

  // estruturando a API com types e resolvers, types são entidades da nossa consulta e resolvers espelham sua estrutura 
  // em funcionamento
  // items mockados para consulta
  // type item é de consulta, inputItem é o tipo de input