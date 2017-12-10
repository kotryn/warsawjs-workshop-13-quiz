import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Intro from './components/Intro'
import Game from './components/Game'
import Lost from './components/Lost'
import Won from './components/Won'

const routes = [{
  path: '/',
  component: Intro
},{
  path: '/game',
  component: Game
},{
  path: '/lost',
  component: Lost
},{
  path: '/won',
  component: Won
}]

export default new VueRouter({
  mode: 'history',
  routes
})
