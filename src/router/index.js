import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/CategoryView.vue'
import CenterView from '../views/CenterView.vue'
import NowPlaying from '../components/hotplaying/NowPlaying.vue'
import SoonPlaying from '../components/hotplaying/SoonPlaying.vue'
import CityView from '../views/CityView.vue'
import WeatherView from '../views/WeatherView.vue'
import WeathercityView from '../views/WeathercityView.vue'
import MovieView from '../views/MovieView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/category',
    name: 'category',
    component: CategoryView
  },

  {
    path: '/city',
    name: 'city',
    component: CityView
  },

  {
    path: '/weather',
    name: 'weather',
    component: WeatherView
  },

  {
    path: '/weathercity',
    name: 'weathercity',
    component: WeathercityView
  },

  {
    path: '/movie',
    name: 'movie',
    component: MovieView
  },

  {
    path: '/center',
    name: 'center',
    component: CenterView,
    children: [{
      path: '/center/',
      name: 'nowplaying',
      component: NowPlaying
    }, {
      path: '/center/soonplaying',
      name: 'soonplaying',
      component: SoonPlaying
    }]
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
