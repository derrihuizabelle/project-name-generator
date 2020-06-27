import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import AppDomainView from '../views/AppDomainView'


Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			name: 'home',
			path: '/domains',
			component: Home
		},
		{
      name: 'route',
			path: '/',
			redirect: '/domains'
		},
		{
			name: 'domain',
			path: '/domains/:domain',
			component: AppDomainView,
			props: true
		}
	]
})

export default router
