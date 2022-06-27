import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import NewsView from '../views/NewsView.vue'
// import NewsPostView from '../views/NewsPostView.vue'
// import PartnersView from '../views/PartnersView.vue'
// import TableView from '../views/TableView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/news',
    name: 'news',
    // component: NewsView
    component: () => import(/* webpackChunkName: "news" */ '../views/NewsView.vue')
  },
  {
    path: '/news-post/:id',
    name:'news-post',
    // component: NewsPostView
    component: () => import(/* webpackChunkName: "post" */ '../views/NewsPostView.vue')
  },

  {
    path: '/partners',
    name: 'partners',
    // component: PartnersView
    component: () => import(/* webpackChunkName: "partners" */ '../views/PartnersView.vue')
  },

  {
    path: '/tabel',
    name: 'tabel',
    // component: TableView
    component: () => import(/* webpackChunkName: "table" */ '../views/TableView.vue')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
