import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
	state,
	mutations,
	actions
})

Promise.all([
	store.dispatch('getItems', 'prefixes'),
	store.dispatch('getItems', 'sufixes'),
	store.dispatch('generateDomains')
])

export default store