export default {
  addItem (state, payload) {
    const { item, newItem } = payload
    state.items[item.type].push(newItem)
  },
  deleteItem (state, payload) {
    console.log('payload', payload)
    state.items[payload.type].splice(state.items[payload.type].indexOf(payload), 1)
  },
  setItems (state, payload) {
    const { type, items } = payload
    state.items[type] = items
    console.log(state)
  },
  setDomains (state, payload) {
    const { domains } = payload
    state.domains = domains
  }
}