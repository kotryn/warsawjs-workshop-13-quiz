import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Game from './components/Game'

const routes = [{
  path: '/game',
  component: Game
}]

export default new VueRouter({
  routes
})
