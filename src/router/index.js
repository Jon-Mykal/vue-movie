import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MovieList from '../views/movies/MovieList.vue'
import MovieCreate from '../views/movies/Create.vue'
import Details from '../views/movies/Details.vue'
import Edit from '../views/movies/Edit.vue'
import Delete from '../views/movies/Delete.vue'

const routes = [
  {
    path: '/',
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
  },
  {
    path: '/movies',
    name: 'MovieList',
    component: MovieList
  },
  {
    path: '/movies/create',
    name: 'MovieCreate',
    component: MovieCreate
  },
  {
    path: '/movies/:id',
    name: 'MovieDetails',
    component: Details,
    children: [
      { path: 'edit', name: 'MovieEdit', component: Edit },
      { path: 'delete', name: 'MovieDelete', component: Delete}
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
