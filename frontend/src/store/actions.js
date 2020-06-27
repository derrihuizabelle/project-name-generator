import { request } from '../services'

export default {
  async addItem(context, payload) {
    const item = payload
    const data = {
          query: `
            mutation($item: ItemInput) {
              newItem: saveItem(item: $item) {
                id
                type
                description
              }
            }
          `,
          variables: {
            item
          }
        }
    const response = await request.post('/', data)
    const query = response.data
    const newItem = query.data.newItem
      
    context.commit('addItem', {item, newItem})

    context.dispatch('generateDomains')
  },
  async deleteItem(context, payload) {
    const item = payload
    const data = {
      query: `
        mutation($id: Int) {
          deleted: deleteItem(id: $id)
        }
      `,
      variables: {
        id: item.id
      }
    }

    await request.post('/', data)
    context.commit('deleteItem', item)
    this.domains = []
    context.dispatch('generateDomains')

  },
  async getItems(context, payload) {
    const type = payload
    const data = {
      query: `
        query ($type: String) {
          items: items (type: $type) {
            type
            description,
            id
          }
        }
      `,
      variables: {
        type
      }
    }
    const response = await request.post('/', data)
    const query = response.data
    context.commit('setItems', {type, items: query.data.items })
  },
  async generateDomains(context) {
    const data =  {
            query: `
              mutation{
                domains: generateDomains {
                  name,
                  checkout,
                  available
                }
              }
            `
          }
    const response = await request.post('/', data)
    const query = response.data
    context.commit('setDomains', {domains: query.data.domains} )
  }
}