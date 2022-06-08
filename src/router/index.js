import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import CommentClass from '../views/CommentClass.vue'
import Comment from '../views/Comment.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path:'/commentClass',
    name:'CommentClass',
    component:CommentClass
  },{
    path:'/comment/:id',
    name:'Comment',
    component:Comment
  }
] 

const router = new VueRouter({
  mode: 'history',          
  base: process.env.BASE_URL,
  routes
})

export default router
