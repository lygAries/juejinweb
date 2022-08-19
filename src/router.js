import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)


import home from "./homecomponent/homepage.vue"
import article from "./soncomponent/acticle.vue"
import articlelist from "./soncomponent/articlelist.vue"
const routes = [{
	name: '', //app的默认组件home
	path: '',
	component: home,
	redirect:"/articlelist",
	children: [
		{
			name: "articlelist",
			path: 'articlelist',
			component: articlelist,
		},
		
		{
		name: "article",
		path: 'article:ordernum',
		component: article,
		props:true,
	}]
}, ]

const router = new Router({ //这个路由实例化要放在routes下面
	routes,
})
export default router
